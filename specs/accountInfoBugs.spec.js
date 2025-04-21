import { test, expect } from '@playwright/test';
import { ProductsListPage, ProductCardPage, ForgotPasswordPage, SignUpPage, AccountPage, BillingInfoPage, BugPopupsPage } from '../sources/pages/index.js';
import { URL, errorsText } from '../sources/consts/index.js';
import { BillingInfoBuilder, DataUserBuilder } from '../sources/builders/index.js';

const billingInfoBuilder = new BillingInfoBuilder()
      .addFirstName()
      .addLastName()
      .addAddress()
      .addCity()
      .addZipCode()
      .addPhone()
      .generateBillingInfo();

const dataUserBuilder = new DataUserBuilder()
      .addFirstName()
      .addLastName()
      .addEmail()
      .addPassword()
      .generateDataUser();

test.describe('Баги по аккаунту', () => {
  test.beforeEach(async ({ page }) => {
      const productsListPage = new ProductsListPage(page);
      const productCardPage = new ProductCardPage(page);
      
      await productsListPage.open(URL);
      await productsListPage.acceptCookies();
      await productsListPage.gotoProductCard();
      await productCardPage.gotoSignUp();
});

  test('Клик по адресу платежной информации', async ({ page }) => {
      const signUpPage = new SignUpPage(page);
      const accountPage = new AccountPage(page);
      const bugPopupsPage = new BugPopupsPage(page);
      
      await signUpPage.signInAndGoToAccountPage(
            dataUserBuilder.firstName,
            dataUserBuilder.lastName,
            dataUserBuilder.email,
            dataUserBuilder.password
            );
            
      await accountPage.gotoBillingAddress();

      await expect(bugPopupsPage.bugPopupQuestion)
            .toContainText(errorsText.bugQuestion);
});

  test('Добавление платежной информации', async ({ page }) => {
      const signUpPage = new SignUpPage(page);
      const accountPage = new AccountPage(page);
      const billingInfoPage = new BillingInfoPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await signUpPage.signUpandGoToAccountPage(
            dataUserBuilder.email,
            dataUserBuilder.password
            );

      await accountPage.gotoBillingInfo();
      
      await billingInfoPage.updateBillingInfo(
            billingInfoBuilder.firstName, 
            billingInfoBuilder.lastName, 
            billingInfoBuilder.address, 
            billingInfoBuilder.city, 
            billingInfoBuilder.zipCode, 
            billingInfoBuilder.phone
      );

      await billingInfoPage.clickBillingInfoLoader();

      await expect(bugPopupsPage.bugPopupQuestion)
            .toContainText(errorsText.bugQuestion);
});
      
  test('Восстановление пароля', async ({ page }) => {
      const signUpPage = new SignUpPage(page);
      const forgotPasswordPage = new ForgotPasswordPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await signUpPage.goToForgotPassword();
      await forgotPasswordPage.enterUserEmail(dataUserBuilder.email);

      await expect(bugPopupsPage.bugLayerInfo)
            .toContainText(errorsText.crashBugShortText);
});
});
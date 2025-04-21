import { test, expect } from '@playwright/test';
import { ProductsListPage, ProductCardPage, BugPopupsPage } from '../sources/pages/index.js';
import { URL, errorsText } from '../sources/consts/index.js';
import { CommentBuilder } from '../sources/builders/index.js';

const commentBuilder = new CommentBuilder()
      .addCommentName()
      .addCommentEmail()
      .addCommentText()
      .generateComment();

test('Переключение количества продуктов на странице', async ({ page }) => {
    const productsListPage = new ProductsListPage(page);
    const bugPopupsPage = new BugPopupsPage(page);

    await productsListPage.open(URL);
    await productsListPage.acceptCookies();
    await productsListPage.gotoMinCountProducts();
    
    await expect(bugPopupsPage.bugLayer)
          .toContainText(errorsText.crushBugLongText);
    });

test.describe('Баги по товарам', () => {
  test.beforeEach(async ({ page }) => {
      const productsListPage = new ProductsListPage(page);
      
      await productsListPage.open(URL);
      await productsListPage.gotoProductCard();
});
    
  test('Перейти в карточку товара и поменять валюту', async ({ page }) => {      
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);
    
      await productCardPage.changeCurrencyEUR();

      await expect(bugPopupsPage.bugLayerInfo)
            .toContainText(errorsText.crushBugShortText);
});

  test('Перейти на страницу производителя', async ({ page }) => {
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await productCardPage.gotoManufacturer();

      await expect(bugPopupsPage.bugPopupQuestion)
            .toContainText(errorsText.bugQuestion);//??
});

  test('Перейти на страницу Твиттера', async ({ page }) => {
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await productCardPage.gotoTwitter();
      
      await expect(bugPopupsPage.bugPopupQuestion)
            .toContainText(errorsText.bugQuestion);
});

  test('Перейти на страницу My Space', async ({ page }) => {
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await productCardPage.gotoMySpace();

      await expect(bugPopupsPage.bugPopupQuestion)
            .toContainText(errorsText.bugQuestion);
});

  test('Переход на страницу браслета (Hot Item)', async ({ page }) => {
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await productCardPage.gotoHotItem();
      
      await expect(bugPopupsPage.bugPopupQuestion)
            .toContainText(errorsText.bugQuestion);
});

  test('Добавление комментария к товару', async ({ page }) => {
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await productCardPage.postComment(commentBuilder.name, commentBuilder.email, commentBuilder.text);

      await expect(bugPopupsPage.bugLayerInfo)
            .toContainText(errorsText.crushBugLongText);
});

  test('Фильтрация товаров по цене в карточке товара', async ({ page }) => {
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await productCardPage.filterByPrice();
      
      await expect(bugPopupsPage.bugPopupQuestion)
            .toContainText(errorsText.bugQuestion);
});

  test('Клик по кнопке Sing In', async ({ page }) => {
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await productCardPage.gotoSignIn();

      await expect(bugPopupsPage.bugPopupQuestion)
            .toContainText(errorsText.bugQuestion);
});

  test('Перейти на страницу описания товара', async ({ page }) => {
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await productCardPage.gotoDescription();

      await expect(bugPopupsPage.bugPopupQuestion)
            .toContainText(errorsText.bugQuestion);
});

  test('Клик по итоговой стоимости товаров', async ({ page }) => {
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await productCardPage.addToCart();
      await productCardPage.getTotalPrice();

      await expect(bugPopupsPage.bugPopupQuestion)
            .toContainText(errorsText.bugQuestion);
});

  test('Изменение количества товара в корзине', async ({ page }) => {
      const productCardPage = new ProductCardPage(page);
      const bugPopupsPage = new BugPopupsPage(page);

      await productCardPage.addToCart();
      await productCardPage.updateQuantity();

      await expect(bugPopupsPage.bugPopupCongrats)
            .toContainText(errorsText.bugCongrats);
});
});
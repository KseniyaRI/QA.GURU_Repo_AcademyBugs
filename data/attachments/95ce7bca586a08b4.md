# Test info

- Name: Баги по товарам >> Перейти в карточку товара и поменять валюту
- Location: /home/runner/work/QA.GURU_Repo_AcademyBugs/QA.GURU_Repo_AcademyBugs/specs/productsBugs.spec.js:33:3

# Error details

```
Error: expect.toContainText: Error: strict mode violation: locator('.academy-crash-overlay-bug') resolved to 2 elements:
    1) <div class="academy-crash-overlay-bug"></div> aka locator('.academy-crash-overlay-bug').first()
    2) <div class="academy-crash-overlay-bug"></div> aka locator('#sq-page > div:nth-child(7)')

Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for locator('.academy-crash-overlay-bug')

    at /home/runner/work/QA.GURU_Repo_AcademyBugs/QA.GURU_Repo_AcademyBugs/specs/productsBugs.spec.js:40:14
```

# Page snapshot

```yaml
- text: Manage consent
- link "Skip to content":
  - /url: "#sq-content"
- banner:
  - heading "AcademyBugs.com" [level=3]:
    - link "AcademyBugs.com":
      - /url: https://academybugs.com/
  - navigation:
    - list:
      - listitem:
        - link "Examples of Bugs":
          - /url: https://academybugs.com/
      - listitem:
        - link "Types of Bugs":
          - /url: https://academybugs.com/types/
      - listitem:
        - link "Find Bugs":
          - /url: https://academybugs.com/find-bugs/
      - listitem:
        - link "Report Bugs":
          - /url: https://academybugs.com/report-bugs/
      - listitem:
        - link "":
          - /url: "#"
- main:
  - article:
    - heading "Home / Shop / All Items" [level=4]:
      - link "Home":
        - /url: https://academybugs.com
      - text: /
      - link "Shop":
        - /url: https://academybugs.com/store/
      - text: /
      - link "All Items":
        - /url: https://academybugs.com/store/all-items/
    - img "Flamingo Tshirt"
    - heading "Home / Shop / All Items" [level=4]:
      - link "Home":
        - /url: https://academybugs.com
      - text: /
      - link "Shop":
        - /url: https://academybugs.com/store/
      - text: /
      - link "All Items":
        - /url: https://academybugs.com/store/all-items/
    - heading "Flamingo Tshirt" [level=1]
    - text: "$15.14 Model Number: 4881370 Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed."
    - button "-"
    - spinbutton: "1"
    - button "+"
    - button "ADD TO CART"
    - text: "Manufacturer:"
    - link "HDX":
      - /url: https://academybugs.com/extra/stored/hdx/
    - link "Facebook":
      - /url: https://www.facebook.com/sharer/sharer.php?p[url]=https://academybugs.com/store/flamingo-tshirt/&p[images][o]=https://academybugs.com/wp-content/uploads/2020/10/flamingo-tshirt-compressed.jpg&p[title]=Flamingo+Tshirt
      - img "Facebook"
    - link "X":
      - /url: https://twitter.cointent/tweet?original_referer=#
      - img "X"
    - link "Email":
      - /url: "mailto:?subject=Flamingo Tshirt&body=Link for Product: https://academybugs.com/store/flamingo-tshirt/"
      - img "Email"
    - link "Pinterest":
      - /url: https://pinterest.com/pin/create/button/?media=https%3A%2F%2Facademybugs.com%2Fwp-content%2Fuploads%2F2020%2F10%2Fflamingo-tshirt-compressed.jpg&description=Flamingo+Tshirt&url=https%3A%2F%2Facademybugs.com%2Fstore%2Fflamingo-tshirt%2F
      - img "Pinterest"
    - link "LinkedIn":
      - /url: https://www.linkedin.com/shareArticle?mini=true&url=https://academybugs.com/store/flamingo-tshirt/
      - img "LinkedIn"
    - link "MySpace":
      - /url: https://academybugs.com/myspace/
      - img "MySpace"
    - list:
      - listitem: Description
    - paragraph: Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.
  - heading "Leave a Reply" [level=3]
  - paragraph: Your email address will not be published. Required fields are marked *
  - paragraph:
    - textbox "Comment"
  - paragraph:
    - textbox "Name*"
  - paragraph:
    - textbox "Email*"
  - paragraph:
    - textbox "Website"
  - paragraph:
    - button "Post Comment"
- heading "Select a Currency" [level=4]
- combobox:
  - option "USD"
  - option "EUR" [selected]
  - option "GBP"
  - option "JPY"
- heading "Product Search" [level=4]
- combobox
- button "Search"
- heading "Hot Item" [level=4]
- link:
  - /url: https://academybugs.com/anchor-bracelet
  - img
- link "Silver Heart Bracelet":
  - /url: https://academybugs.com/anchor-bracelet
- text: $275.00
- heading "Store Menu" [level=4]
- list:
  - listitem:
    - link "All Items":
      - /url: https://academybugs.com/store/all-items/
  - listitem:
    - link "Accessories [+]":
      - /url: "#"
  - listitem:
    - link "Fashion Type [+]":
      - /url: "#"
  - listitem:
    - link "Women's Pants":
      - /url: https://academybugs.com/store/womens-pants/
- heading "Filter by Price" [level=4]
- link "$15.00 - $19.99 (1)":
  - /url: https://academybugs.com/store/flamingo-tshirt/?&perpage=25&pricepoint=7
- link "$25.00 - $49.99 (2)":
  - /url: https://academybugs.com/store/flamingo-tshirt/?&perpage=25&pricepoint=2
- link "$50.00 - $99.99 (3)":
  - /url: https://academybugs.com/store/flamingo-tshirt/?&perpage=25&pricepoint=3
- link "$100.00 - $299.99 (11)":
  - /url: https://academybugs.com/store/flamingo-tshirt/?&perpage=25&pricepoint=4
- link "Greater Than $299.99 (1)":
  - /url: https://academybugs.com/store/flamingo-tshirt/?&perpage=25&pricepoint=5
- heading "Shopping Cart" [level=4]
- link "Shopping Cart (0)":
  - /url: "#"
- heading "Your Account" [level=4]
- text: Email Address*
- textbox
- text: Password*
- textbox
- paragraph:
  - link "Sign Up":
    - /url: https://academybugs.com/account/?ec_page=register
- button "SIGN IN"
- contentinfo:
  - list:
    - listitem:
      - link "uTest":
        - /url: https://www.utest.com/academy
        - img "uTest"
    - listitem:
      - link "Terms & Conditions":
        - /url: https://www.utest.com/terms-and-conditions
    - listitem:
      - link "Privacy Policy":
        - /url: https://www.utest.com/privacy-policy
- heading "You found a crash bug, examine the page for 5 seconds." [level=5]
- heading "You found a crash bug, examine the page for 5 seconds." [level=5]
- link "":
  - /url: "#"
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 | import { ProductsListPage, ProductCardPage, BugPopupsPage } from '../sources/pages/index.js';
   3 | import { URL, errorsText } from '../sources/consts/index.js';
   4 | import { CommentBuilder } from '../sources/builders/index.js';
   5 |
   6 | const commentBuilder = new CommentBuilder()
   7 |       .addCommentName()
   8 |       .addCommentEmail()
   9 |       .addCommentText()
   10 |       .generateComment();
   11 |
   12 | test('Переключение количества продуктов на странице', async ({ page }) => {
   13 |     const productsListPage = new ProductsListPage(page);
   14 |     const bugPopupsPage = new BugPopupsPage(page);
   15 |
   16 |     await productsListPage.open(URL);
   17 |     await productsListPage.acceptCookies();
   18 |     await productsListPage.gotoMinCountProducts();
   19 |     
   20 |     await expect(bugPopupsPage.bugLayer)
   21 |           .toContainText(errorsText.crushBugLongText);
   22 |     });
   23 |
   24 | test.describe('Баги по товарам', () => {
   25 |   test.beforeEach(async ({ page }) => {
   26 |       const productsListPage = new ProductsListPage(page);
   27 |       
   28 |       await productsListPage.open(URL);
   29 |       await productsListPage.acceptCookies();
   30 |       await productsListPage.gotoProductCard();
   31 | });
   32 |     
   33 |   test('Перейти в карточку товара и поменять валюту', async ({ page }) => {      
   34 |       const productCardPage = new ProductCardPage(page);
   35 |       const bugPopupsPage = new BugPopupsPage(page);
   36 |     
   37 |       await productCardPage.changeCurrencyEUR();
   38 |
   39 |       await expect(bugPopupsPage.crashLayer)
>  40 |             .toContainText(errorsText.crushBugShortText);
      |              ^ Error: expect.toContainText: Error: strict mode violation: locator('.academy-crash-overlay-bug') resolved to 2 elements:
   41 | });
   42 |
   43 |   test('Перейти на страницу производителя', async ({ page }) => {
   44 |       const productCardPage = new ProductCardPage(page);
   45 |       const bugPopupsPage = new BugPopupsPage(page);
   46 |
   47 |       await productCardPage.gotoManufacturer();
   48 |
   49 |       await expect(bugPopupsPage.bugPopupQuestion)
   50 |             .toContainText(errorsText.bugQuestion);//??
   51 | });
   52 |
   53 |   test('Перейти на страницу Твиттера', async ({ page }) => {
   54 |       const productCardPage = new ProductCardPage(page);
   55 |       const bugPopupsPage = new BugPopupsPage(page);
   56 |
   57 |       await productCardPage.gotoTwitter();
   58 |       
   59 |       await expect(bugPopupsPage.bugPopupQuestion)
   60 |             .toContainText(errorsText.bugQuestion);
   61 | });
   62 |
   63 |   test('Перейти на страницу My Space', async ({ page }) => {
   64 |       const productCardPage = new ProductCardPage(page);
   65 |       const bugPopupsPage = new BugPopupsPage(page);
   66 |
   67 |       await productCardPage.gotoMySpace();
   68 |
   69 |       await expect(bugPopupsPage.bugPopupQuestion)
   70 |             .toContainText(errorsText.bugQuestion);
   71 | });
   72 |
   73 |   test('Переход на страницу браслета (Hot Item)', async ({ page }) => {
   74 |       const productCardPage = new ProductCardPage(page);
   75 |       const bugPopupsPage = new BugPopupsPage(page);
   76 |
   77 |       await productCardPage.gotoHotItem();
   78 |       
   79 |       await expect(bugPopupsPage.bugPopupQuestion)
   80 |             .toContainText(errorsText.bugQuestion);
   81 | });
   82 |
   83 |   test('Добавление комментария к товару', async ({ page }) => {
   84 |       const productCardPage = new ProductCardPage(page);
   85 |       const bugPopupsPage = new BugPopupsPage(page);
   86 |
   87 |       await productCardPage.postComment(commentBuilder.name, commentBuilder.email, commentBuilder.text);
   88 |
   89 |       await expect(bugPopupsPage.bugLayerInfo)
   90 |             .toContainText(errorsText.crushBugLongText);
   91 | });
   92 |
   93 |   test('Фильтрация товаров по цене в карточке товара', async ({ page }) => {
   94 |       const productCardPage = new ProductCardPage(page);
   95 |       const bugPopupsPage = new BugPopupsPage(page);
   96 |
   97 |       await productCardPage.filterByPrice();
   98 |       
   99 |       await expect(bugPopupsPage.bugPopupQuestion)
  100 |             .toContainText(errorsText.bugQuestion);
  101 | });
  102 |
  103 |   test('Клик по кнопке Sing In', async ({ page }) => {
  104 |       const productCardPage = new ProductCardPage(page);
  105 |       const bugPopupsPage = new BugPopupsPage(page);
  106 |
  107 |       await productCardPage.gotoSignIn();
  108 |
  109 |       await expect(bugPopupsPage.bugPopupQuestion)
  110 |             .toContainText(errorsText.bugQuestion);
  111 | });
  112 |
  113 |   test('Перейти на страницу описания товара', async ({ page }) => {
  114 |       const productCardPage = new ProductCardPage(page);
  115 |       const bugPopupsPage = new BugPopupsPage(page);
  116 |
  117 |       await productCardPage.gotoDescription();
  118 |
  119 |       await expect(bugPopupsPage.bugPopupQuestion)
  120 |             .toContainText(errorsText.bugQuestion);
  121 | });
  122 |
  123 |   test('Клик по итоговой стоимости товаров', async ({ page }) => {
  124 |       const productCardPage = new ProductCardPage(page);
  125 |       const bugPopupsPage = new BugPopupsPage(page);
  126 |
  127 |       await productCardPage.addToCart();
  128 |       await productCardPage.getTotalPrice();
  129 |
  130 |       await expect(bugPopupsPage.bugPopupQuestion)
  131 |             .toContainText(errorsText.bugQuestion);
  132 | });
  133 |
  134 |   test('Изменение количества товара в корзине', async ({ page }) => {
  135 |       const productCardPage = new ProductCardPage(page);
  136 |       const bugPopupsPage = new BugPopupsPage(page);
  137 |
  138 |       await productCardPage.addToCart();
  139 |       await productCardPage.updateQuantity();
  140 |
```
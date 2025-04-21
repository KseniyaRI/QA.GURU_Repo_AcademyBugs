# Test info

- Name: Переключение количества продуктов на странице
- Location: /home/runner/work/QA.GURU_Repo_AcademyBugs/QA.GURU_Repo_AcademyBugs/specs/productsBugs.spec.js:12:1

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)

Locator: locator('#academy-bug-overlay')
Expected string: "You found a crash bug, examine the page by clicking on any button for 5 seconds."
Received: <element(s) not found>
Call log:
  - expect.toContainText with timeout 5000ms
  - waiting for locator('#academy-bug-overlay')

    at /home/runner/work/QA.GURU_Repo_AcademyBugs/QA.GURU_Repo_AcademyBugs/specs/productsBugs.spec.js:21:12
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
    - heading "Find Bugs" [level=3]
    - heading "Explore a practice test site that has 25 real bugs planted inside." [level=6]
    - text: View
    - link "10":
      - /url: "#"
    - link "25":
      - /url: "#"
    - link "50":
      - /url: "#"
    - text: Showing all 18 results
    - combobox:
      - option "Default Sorting" [selected]
      - option "Price Low-High"
      - option "Price High-Low"
      - option "Title A-Z"
      - option "Title Z-A"
      - option "Newest"
      - option "Oldest"
      - option "Best Rating"
      - option "Most Viewed"
    - list:
      - listitem:
        - link:
          - /url: https://academybugs.com/store/dnk-yellow-shoes/
        - img "DNK Yellow Shoes"
        - heading "DNK Yellow Shoes" [level=3]:
          - link "DNK Yellow Shoes":
            - /url: https://academybugs.com/store/dnk-yellow-shoes/
        - text: $45.00
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=4481370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/dark-grey-jeans/
        - img "Dark Grey Jeans"
        - heading "Dark Grey Jeans" [level=3]:
          - link "Dark Grey Jeans":
            - /url: https://academybugs.com/store/dark-grey-jeans/
        - text: $46.00
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=4281370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/flamingo-tshirt/
        - img "Flamingo Tshirt"
        - heading "Flamingo Tshirt" [level=3]:
          - link "Flamingo Tshirt":
            - /url: https://academybugs.com/store/flamingo-tshirt/
        - text: $15.14
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=4881370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/blue-hoodie/
        - img "Blue Hoodie"
        - heading "Blue Hoodie" [level=3]:
          - link "Blue Hoodie":
            - /url: https://academybugs.com/store/blue-hoodie/
        - text: $140.00 $111.00
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3381370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/blue-tshirt/
        - img "Blue Tshirt"
        - heading "Blue Tshirt" [level=3]:
          - link "Blue Tshirt":
            - /url: https://academybugs.com/store/blue-tshirt/
        - text: $79.92
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3481370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/faint-washed-denim-blue-jeans/
        - img "Faint Washed Denim Blue Jeans"
        - heading "Faint Washed Denim Blue Jeans" [level=3]:
          - link "Faint Washed Denim Blue Jeans":
            - /url: https://academybugs.com/store/faint-washed-denim-blue-jeans/
        - text: $117.00
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=4681370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/dark-blue-denim-jeans/
        - img "Dark Blue Denim Jeans"
        - heading "Dark Blue Denim Jeans" [level=3]:
          - link "Dark Blue Denim Jeans":
            - /url: https://academybugs.com/store/dark-blue-denim-jeans/
        - link "Login for Pricing":
          - /url: https://academybugs.com/account/
      - listitem:
        - link:
          - /url: https://academybugs.com/store/boho-bangle-bracelet/
        - img "Boho Bangle Bracelet"
        - heading "Boho Bangle Bracelet" [level=3]:
          - link "Boho Bangle Bracelet":
            - /url: https://academybugs.com/store/boho-bangle-bracelet/
        - text: $185.00
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3681370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/heart-bracelet/
        - img "Silver Heart Bracelet"
        - heading "Silver Heart Bracelet" [level=3]:
          - link "Silver Heart Bracelet":
            - /url: https://academybugs.com/store/heart-bracelet/
        - text: $275.00
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3181370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/buddha-bracelet/
        - img "Buddha Bracelet"
        - heading "Buddha Bracelet" [level=3]:
          - link "Buddha Bracelet":
            - /url: https://academybugs.com/store/buddha-bracelet/
        - text: $107.00
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=4081370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/light-brown-purse/
        - img "Light Brown Purse"
        - heading "Light Brown Purse" [level=3]:
          - link "Light Brown Purse":
            - /url: https://academybugs.com/store/light-brown-purse/
        - text: $77.04
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=4981370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/black-over-the-shoulder-handbag/
        - img "Black Over-the-shoulder Handbag"
        - heading "Black Over-the-shoulder Handbag" [level=3]:
          - link "Black Over-the-shoulder Handbag":
            - /url: https://academybugs.com/store/black-over-the-shoulder-handbag/
        - text: $478.00
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3281370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/bright-red-bag/
        - img "Bright Red Bag"
        - heading "Bright Red Bag" [level=3]:
          - link "Bright Red Bag":
            - /url: https://academybugs.com/store/bright-red-bag/
        - text: $92.94
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3881370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/white-underground-tshirt/
        - img "White Underground Tshirt"
        - heading "White Underground Tshirt" [level=3]:
          - link "White Underground Tshirt":
            - /url: https://academybugs.com/store/white-underground-tshirt/
        - text: $136.12
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=5081370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/bright-gold-purse-with-chain/
        - img "Bright Gold Purse With Chain"
        - heading "Bright Gold Purse With Chain" [level=3]:
          - link "Bright Gold Purse With Chain":
            - /url: https://academybugs.com/store/bright-gold-purse-with-chain/
        - text: $124.53
        - link "ADD TO CART":
          - /url: https://academybugs.com/my-cart/?ec_action=addtocart&model_number=3781370
      - listitem:
        - link:
          - /url: https://academybugs.com/store/fall-coat/
        - img "Fall Coat"
        - heading "Fall Coat" [level=3]:
          - link "Fall Coat":
            - /url: https://academybugs.com/store/fall-coat/
        - text: $189.95 $169.95
        - link "Select Options":
          - /url: https://academybugs.com/store/fall-coat/
      - listitem:
        - link:
          - /url: https://academybugs.com/store/denim-coat/
        - img "Denim Coat"
        - heading "Denim Coat" [level=3]:
          - link "Denim Coat":
            - /url: https://academybugs.com/store/denim-coat/
        - text: $149.95 $109.95
        - link "Select Options":
          - /url: https://academybugs.com/store/denim-coat/
      - listitem:
        - link:
          - /url: https://academybugs.com/store/professional-suit/
        - img "Professional Suit"
        - heading "Professional Suit" [level=3]:
          - link "Professional Suit":
            - /url: https://academybugs.com/store/professional-suit/
        - text: $279.95 $239.95
        - link "Select Options":
          - /url: https://academybugs.com/store/professional-suit/
    - paragraph
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
>  21 |           .toContainText(errorsText.crushBugLongText);
      |            ^ Error: Timed out 5000ms waiting for expect(locator).toContainText(expected)
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
   39 |       await expect(bugPopupsPage.crashLayer).toBeVisible();
   40 |             //.toContainText(errorsText.crushBugShortText);
   41 | });
   42 |
   43 |   /*test('Перейти на страницу производителя', async ({ page }) => {
   44 |       const productCardPage = new ProductCardPage(page);
   45 |       const bugPopupsPage = new BugPopupsPage(page);
   46 |
   47 |       await productCardPage.gotoManufacturer();
   48 |
   49 |       await expect(bugPopupsPage.bugPopupQuestion)
   50 |             .toContainText(errorsText.bugQuestion);
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
  101 | });*/
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
  113 |   /*test('Перейти на страницу описания товара', async ({ page }) => {
  114 |       const productCardPage = new ProductCardPage(page);
  115 |       const bugPopupsPage = new BugPopupsPage(page);
  116 |
  117 |       await productCardPage.gotoDescription();
  118 |
  119 |       await expect(bugPopupsPage.bugPopupQuestion)
  120 |             .toContainText(errorsText.bugQuestion);
  121 | });
```
# Test info

- Name: Баги по аккаунту >> Добавление платежной информации
- Location: /home/runner/work/QA.GURU_Repo_AcademyBugs/QA.GURU_Repo_AcademyBugs/specs/accountInfoBugs.spec.js:51:3

# Error details

```
Error: locator.waitFor: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#ec_account_dashboard_link')

    at AccountPage.gotoBillingInfo (/home/runner/work/QA.GURU_Repo_AcademyBugs/QA.GURU_Repo_AcademyBugs/sources/pages/accountPage.js:15:43)
    at /home/runner/work/QA.GURU_Repo_AcademyBugs/QA.GURU_Repo_AcademyBugs/specs/accountInfoBugs.spec.js:62:25
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
    - text: The username or password you entered is incorrect.
    - link "Forgot Your Password?":
      - /url: https://academybugs.com/account/?ec_page=forgot_password
    - text: Returning Customer Sign in below to access your existing account. Email Address*
    - textbox "Email Address*"
    - text: Password*
    - textbox
    - link "Forgot Your Password?":
      - /url: https://academybugs.com/account/?ec_page=forgot_password
    - button "SIGN IN"
    - text: New User Не зарегистрированы? Нажмите кнопку ниже No account? Create an account to take full advantage of this website.
    - link "CREATE ACCOUNT":
      - /url: https://academybugs.com/account/?ec_page=register
- heading "Select a Currency" [level=4]
- combobox:
  - option "USD" [selected]
  - option "EUR"
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
- heading "Shopping Cart" [level=4]
- link "Shopping Cart (0)":
  - /url: "#"
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
   1 | export class AccountPage{
   2 |     constructor(page){
   3 |         // this.billingInformationLink = page.locator('.ec_account_dashboard_link.ec_cart_input_row')
   4 |         this.billingInformationLink = page.locator('#ec_account_dashboard_link') 
   5 |         this.billingAddressLoader = page.locator('#ec_cart_billing_info_update_loader.academy-bug-18')
   6 |     }
   7 |
   8 |     async gotoBillingAddress(){
   9 |         await this.billingAddressLoader.waitFor({ state: 'attached' });
  10 |         await this.billingAddressLoader.waitFor({ state: 'visible' });
  11 |         await this.billingAddressLoader.click({ force: true });
  12 |     }
  13 |
  14 |     async gotoBillingInfo(){
> 15 |         await this.billingInformationLink.waitFor({ state: 'attached' });
     |                                           ^ Error: locator.waitFor: Test timeout of 60000ms exceeded.
  16 |         await this.billingInformationLink.waitFor({ state: 'visible' });
  17 |         await this.billingInformationLink.click({ force: true });
  18 |     }
  19 | }
```
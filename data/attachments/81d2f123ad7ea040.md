# Test info

- Name: Баги по аккаунту >> Восстановление пароля
- Location: /home/runner/work/QA.GURU_Repo_AcademyBugs/QA.GURU_Repo_AcademyBugs/specs/accountInfoBugs.spec.js:79:3

# Error details

```
Error: locator.waitFor: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('#ec_account_forgot_password_input_field')

    at ForgotPasswordPage.enterUserEmail (/home/runner/work/QA.GURU_Repo_AcademyBugs/QA.GURU_Repo_AcademyBugs/sources/pages/forgotPasswordPage.js:9:35)
    at /home/runner/work/QA.GURU_Repo_AcademyBugs/QA.GURU_Repo_AcademyBugs/specs/accountInfoBugs.spec.js:85:32
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
    - text: Retrieve Your Password Email
    - textbox "Email"
    - button "RETRIEVE PASSWORD"
    - text: Returning Customer Email Address*
    - textbox "Email Address*"
    - text: Password*
    - textbox "Password*"
    - button "SIGN IN"
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
   1 | export class ForgotPasswordPage {
   2 |     constructor(page) {
   3 |         this.page = page
   4 |         this.retrievePasswordButton = page.getByRole('button', { name: 'RETRIEVE PASSWORD' })
   5 |         this.emailUserBuild = page.locator('#ec_account_forgot_password_input_field');
   6 |     }
   7 |
   8 |     async enterUserEmail(email) {
>  9 |         await this.emailUserBuild.waitFor({ state: 'attached' });
     |                                   ^ Error: locator.waitFor: Test timeout of 60000ms exceeded.
  10 |         await this.emailUserBuild.waitFor({ state: 'visible' });
  11 |         await this.emailUserBuild.click();
  12 |         await this.emailUserBuild.fill(email);
  13 |         await this.retrievePasswordButton.waitFor({ state: 'attached' });
  14 |         await this.retrievePasswordButton.waitFor({ state: 'visible' });
  15 |         await this.retrievePasswordButton.click();
  16 |       }
  17 | }
```
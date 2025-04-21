# Test info

- Name: Баги по аккаунту >> Клик по адресу платежной информации
- Location: /home/runner/work/QA.GURU_Repo_AcademyBugs/QA.GURU_Repo_AcademyBugs/specs/accountInfoBugs.spec.js:32:3

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'First Name*' })

    at SignUpPage.signInAndGoToAccountPage (/home/runner/work/QA.GURU_Repo_AcademyBugs/QA.GURU_Repo_AcademyBugs/sources/pages/signUpPage.js:23:35)
    at /home/runner/work/QA.GURU_Repo_AcademyBugs/QA.GURU_Repo_AcademyBugs/specs/accountInfoBugs.spec.js:37:24
```

# Page snapshot

```yaml
- dialog "cookieconsent":
  - text: "We use cookies to optimize our website and our service:"
  - link "Cookie Policy":
    - /url: https://academybugs.com/cookie-policy-eu/
  - button "Functional only"
  - button "Accept cookies"
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
- link "":
  - /url: "#"
```

# Test source

```ts
   1 | export class SignUpPage {
   2 |     constructor(page) {
   3 |       this.page = page;
   4 |       this.forgotPasswordLink = page.getByRole('link', { name: 'Forgot Your Password?' })
   5 |       this.firstNameField = page.getByRole('textbox', { name: 'First Name*' })
   6 |       this.lastNameField = page.getByRole('textbox', { name: 'Last Name*' })
   7 |       this.emailField = page.getByRole('textbox', { name: 'Email*' })
   8 |       this.retypeEmailField = page.locator('#ec_account_register_retype_email')
   9 |       this.passwordField = page.locator('#ec_account_register_password')
  10 |       this.retypePasswordField = page.getByRole('textbox', { name: 'Retype Password*' })
  11 |       this.registerButton = page.getByRole('button', { name: 'REGISTER' })
  12 |       this.signUpEmailField = page.getByRole('textbox', { name: 'Email Address*' })
  13 |       this.signUpPasswordField = page.locator('#ec_account_login_password')
  14 |       this.signUpButton = page.getByRole('button', { name: 'SIGN IN' })
  15 |     }
  16 |       async goToForgotPassword() {
  17 |         await this.forgotPasswordLink.waitFor({ state: 'attached' });
  18 |         await this.forgotPasswordLink.waitFor({ state: 'visible' });
  19 |         await this.forgotPasswordLink.click();
  20 |     }
  21 |   
  22 |       async signInAndGoToAccountPage(firstName, lastName, email, password) {
> 23 |         await this.firstNameField.click();
     |                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  24 |         await this.firstNameField.fill(firstName);
  25 |         await this.lastNameField.click();
  26 |         await this.lastNameField.fill(lastName);
  27 |         await this.emailField.click();
  28 |         await this.emailField.fill(email);
  29 |         await this.retypeEmailField.click();
  30 |         await this.retypeEmailField.fill(email);
  31 |         await this.passwordField.click();
  32 |         await this.passwordField.fill(password);
  33 |         await this.retypePasswordField.click();
  34 |         await this.retypePasswordField.fill(password);
  35 |         await this.registerButton.click();
  36 |     }
  37 |   
  38 |       async signUpandGoToAccountPage(email, password) {
  39 |         await this.signUpEmailField.click();
  40 |         await this.signUpEmailField.fill(email);
  41 |         await this.signUpPasswordField.click();
  42 |         await this.signUpPasswordField.fill(password);
  43 |         await this.signUpButton.click();
  44 |       }
  45 | }
```
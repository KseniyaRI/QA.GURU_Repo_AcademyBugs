export class ForgotPasswordPage {
    constructor(page) {
        this.page = page
        this.emailUserBuild = page.getByRole('textbox', { name: 'Email', exact: true })
        this.retrievePasswordButton = page.getByRole('button', { name: 'RETRIEVE PASSWORD' })
    }

    async enterUserEmail(email) {
        await this.emailUserBuild.waitFor({ state: 'attached' });
        await this.emailUserBuild.waitFor({ state: 'visible' });
        await this.emailUserBuild.click();
        await this.emailUserBuild.fill(email);
        await this.retrievePasswordButton.waitFor({ state: 'attached' });
        await this.retrievePasswordButton.waitFor({ state: 'visible' });
        await this.retrievePasswordButton.click();
      }
}
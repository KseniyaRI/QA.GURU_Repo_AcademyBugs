export class AccountPage{
    constructor(page){
        this.billingInformationLink = page.locator('.ec_account_dashboard_link.ec_cart_input_row')
        this.billingInformationLink = page.getByRole('link', { name: 'billing information' })
        this.billingAddressLoader = page.locator('.ec_cart_billing_info_update_loader.academy-bug-18')
    }

    async gotoBillingAddress(){
        await this.billingAddressLoader.waitFor({ state: 'attached' });
        await this.billingAddressLoader.waitFor({ state: 'visible' });
        await this.billingAddressLoader.click({ force: true });
    }

    async gotoBillingInfo(){
        await this.billingInformationLink.waitFor({ state: 'attached' });
        await this.billingInformationLink.waitFor({ state: 'visible' });
        await this.billingInformationLink.click({ force: true });
    }
}
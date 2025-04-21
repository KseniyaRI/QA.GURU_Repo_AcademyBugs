export class AccountPage{
    constructor(page){
        this.billingInformationLink = page.getByRole('link', { name: 'billing information' })
        this.billingAddressLoader = page.locator('.ec_cart_billing_info_update_loader')
    }

    async gotoBillingAddress(){
        await this.billingAddressLoader.click({ force: true });
    }

    async gotoBillingInfo(){
        await this.billingInformationLink.click({ force: true });
    }
}
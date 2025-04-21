export class BugPopupsPage {
    constructor(page) {
        this.bugPopupCongrats = page.locator('.academy-popup-bug-title')
        this.bugPopupQuestion = page.locator('#bug-popup')
        this.bugLayerInfo = page.locator('.academy-bug-info-overlay')
        this.bugLayer = page.locator('.academy-bug-overlay').first()
        // this.bugLayer = page.locator('#academy-bug-overlay')
        // this.bugLayerHeading = page.locator('h5');
        this.crashLayer = page.locator('.academy-crash-overlay-bug')
    }
}
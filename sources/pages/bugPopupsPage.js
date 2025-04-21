export class BugPopupsPage {
    constructor(page) {
        this.bugPopupCongrats = page.locator('.academy-popup-bug-title')
        this.bugPopupQuestion = page.locator('#bug-popup')
        this.bugLayerShortText = page.locator('.academy-bug-info-overlay')
        this.bugLayerLongText = page.locator('.academy-bug-overlay')
    }
}
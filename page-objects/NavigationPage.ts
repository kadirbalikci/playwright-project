import {Page, expect, test} from '@playwright/test'

export class NavigationPage {
    readonly page: Page

    constructor(page: Page){
        this.page = page
    }

    async formLayoutsPage(){
        await this.page.getByText('Forms').click()
        await this.page.getByText('Form Layouts').click()
    }

    async datePickerPage(){
        await this.page.getByText('Forms').click()
        await this.page.getByText('Datepicker').click()
    }

    async smartTablePage(){
        await this.page.getByText('Tables & Data').click()
        await this.page.getByText('Smart Table').click()
    }

    async toasterPage(){
        await this.page.getByText('Modal & Overlays').click()
        await this.page.getByText('Toastr').click()
    }

    async tooltipPage(){
        await this.page.getByText('Modal & Overlays').click()
        await this.page.getByText('Tooltip').click()
    }
    
    private async selectGroupMenuItem(groupItemTitle: string){
        const groupMenuItem = this.page.getByTitle(groupItemTitle)
        const expandStatus = await groupMenuItem.getAttribute('aria-expanded')
        if (expandStatus == "false") {
            await groupMenuItem.click()
        }
    }
}
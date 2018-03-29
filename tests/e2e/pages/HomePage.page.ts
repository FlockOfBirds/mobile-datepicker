class HomePage {
    public get dateInput() { return browser.element(".widget-date-picker-form"); }

    public open(): void {
        browser.url("/");
    }
}

const home = new HomePage();

export default home;

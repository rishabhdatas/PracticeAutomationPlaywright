const { test: base, expect } = require("@playwright/test");


const test = base.extend({

    page: async ({ page }, use) => {


        page.on("dialog", async (dialog) => {

            await dialog.accept();

        });


        await use(page);

    }

});


module.exports = { test, expect };
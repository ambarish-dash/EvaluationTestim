"use strict";

const { Locator, test, go, resize, exists, l, click, type, waitForElement, scrollToElement } = require('testim');

Locator.set(require('./locators/locators.js'));

test("TC01_ValidateHomePage", async () => {
  await go("https://acme-test.uipath.com/login");
  await resize({width: 1920, height: 1080});
  if (await exists(l("[onclick='event.preventDefault();_d"), {forceVisibility: true})) {
    await click(l("Log_Out"));
  }
  await click(l("Email:"));
  await type(l("Email:"), acmeEmail);
  await click(l("Password:"));
  await type(l("Password:"), acmePassword);
  await click(l("Login"));
  await waitForElement(l("Dashboard"));
  //TODO Please add an assertion here
await exists(l("User_options"));
  //TODO Please add an assertion here
await exists(l("Work_Items"));
  //TODO Please add an assertion here
await exists(l("Accounts"));
  await scrollToElement(l("[onclick='event.preventDefault();_d"));
  //TODO Please add an assertion here
await exists(l("Checks"));
  //TODO Please add an assertion here
await exists(l("Vendors"));
  //TODO Please add an assertion here
await exists(l("Invoices"));
  await scrollToElement(l("[onclick='event.preventDefault();_d"));
  //TODO Please add an assertion here
await exists(l("Internal_Invoices"));
  //TODO Please add an assertion here
await exists(l("Reports"));
  //TODO Please add an assertion here
await exists(l("Students"));
  await scrollToElement(l("[onclick='event.preventDefault();_d"));
  //TODO Please add an assertion here
await exists(l("Health_Care"));
  //TODO Please add an assertion here
await exists(l("Employees"));
  //TODO Please add an assertion here
await exists(l("Bank"));
  await scrollToElement(l("[onclick='event.preventDefault();_d"));
  //TODO Please add an assertion here
await exists(l("Customer_Service"));
});

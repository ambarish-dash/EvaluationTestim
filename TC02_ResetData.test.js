"use strict";

const { Locator, test, go, resize, exists, l, click, type, waitForElement, scrollToElement, waitForText } = require('testim');

Locator.set(require('./locators/locators.js'));

test("TC02_ResetData", async () => {
  await go("https://acme-test.uipath.com/login");
  await resize({width: 1920, height: 1080});
  if (await exists(l("uTxK8v328MAPtKKU"), {forceVisibility: true})) {
    await click(l("NzA5mV9QHef33wcQ"));
  }
  await click(l("m3ntfE7B7b5FrO9x"));
  await type(l("m3ntfE7B7b5FrO9x"), eMail);
  await click(l("7xHZvWsIBWrh7ASE"));
  await type(l("7xHZvWsIBWrh7ASE"), password);
  await click(l("CncK9mTzIgSqhDZJ"));
  await waitForElement(l("tPGQKmg3eIs87chL"));
  await click(l("j7ooTpJJKxdziGa8"));
  await click(l("Reset_test_data"));
  //TODO Please add an assertion here
await exists(l("Account_-_Reset_Test_Data"));
  await click(l("Reset_Test_Data"));
  // Converting a 'wait-for-negative-element-validation' step has to be done manually at this time
  await click(l("8TgotpQCQQx766bW"));
  await scrollToElement(l("uTxK8v328MAPtKKU"));
  await click(l("vCtFY2FxXeX8zxo2"));
  await click(l("cA2MX19MIajRTGze"));
  await click(l("KremQGT1Y7ezfaZo"));
  await type(l("KremQGT1Y7ezfaZo"), 'testim');
  await click(l("f8YAvPrloSpfWOBS"));
  await waitForText(l("No_vendor_based_on_the_name_you_hav"), 'No vendor based on the name you have entered could be found in the database. Please contact the VDD team if you need to add a Vendor to the System.');
});

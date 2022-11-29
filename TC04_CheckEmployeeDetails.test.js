"use strict";

const { Locator, test, go, resize, text, l, click, type, scrollToElement, exists, waitForText } = require('testim');

Locator.set(require('./locators/locators.js'));

test("TC04_CheckEmployeeDetails", async () => {
  await go("https://acme-test.uipath.com/login");
  await resize({width: 1920, height: 1080});
  if (await text(l("uTxK8v328MAPtKKU")) === "'Log Out'") {
    await click(l("NzA5mV9QHef33wcQ"));
  }
  await click(l("m3ntfE7B7b5FrO9x"));
  await type(l("m3ntfE7B7b5FrO9x"), acmeEmail);
  await click(l("7xHZvWsIBWrh7ASE"));
  await type(l("7xHZvWsIBWrh7ASE"), acmePassword);
  await click(l("CncK9mTzIgSqhDZJ"));
  await scrollToElement(l("[id='dashmenu']_>_:nth-child(11)_[t"));
  await click(l("D2wRFJIGnWqvE3wN"));
  await click(l("Close"));
  //TODO Please add an assertion here
await exists(l("Brad_M_Roberts"));
  await click(l("[onclick='updatecard(\'Brad_M_Rober"));
  //TODO Please add an assertion here
await exists(l("Jeffrey_J_Garcia"));
  await waitForText(l("626-919-9666"), empPhone);
  //TODO Please add an assertion here
await exists(l("5/17/1999"));
  //TODO Please add an assertion here
await exists(l("nina_ferr3@yahoo.com"));
  await click(l(".btn-user"));
});

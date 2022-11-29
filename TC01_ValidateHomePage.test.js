"use strict";

const { Locator, test, go, resize, exists, l, click, type, waitForElement, scrollToElement } = require('testim');

Locator.set(require('./locators/locators.js'));

test("TC01_ValidateHomePage", async () => {
  await go("https://acme-test.uipath.com/login");
  await resize({width: 1920, height: 1080});
  if (await exists(l("uTxK8v328MAPtKKU"), {forceVisibility: true})) {
    await click(l("NzA5mV9QHef33wcQ"));
  }
  await click(l("m3ntfE7B7b5FrO9x"));
  await type(l("m3ntfE7B7b5FrO9x"), acmeEmail);
  await click(l("7xHZvWsIBWrh7ASE"));
  await type(l("7xHZvWsIBWrh7ASE"), acmePassword);
  await click(l("CncK9mTzIgSqhDZJ"));
  await waitForElement(l("tPGQKmg3eIs87chL"));
  //TODO Please add an assertion here
await exists(l("j7ooTpJJKxdziGa8"));
  //TODO Please add an assertion here
await exists(l("T7XVIUpLp9hokBy2"));
  //TODO Please add an assertion here
await exists(l("p5YuIhAWqoCowT8h"));
  await scrollToElement(l("uTxK8v328MAPtKKU"));
  //TODO Please add an assertion here
await exists(l("05QDAzKukrFhaBoG"));
  //TODO Please add an assertion here
await exists(l("Vendors"));
  //TODO Please add an assertion here
await exists(l("OjPU1kBxgWkkpkeh"));
  await scrollToElement(l("uTxK8v328MAPtKKU"));
  //TODO Please add an assertion here
await exists(l("4yu6kWksKIx57lNz"));
  //TODO Please add an assertion here
await exists(l("BsKC4ILzwdwJf9zc"));
  //TODO Please add an assertion here
await exists(l("Xnb54sn2H6iu7pZH"));
  await scrollToElement(l("uTxK8v328MAPtKKU"));
  //TODO Please add an assertion here
await exists(l("xnJrS7qi7bpevQ2P"));
  //TODO Please add an assertion here
await exists(l("D2wRFJIGnWqvE3wN"));
  //TODO Please add an assertion here
await exists(l("1LFHhOpEQThBHX7W"));
  await scrollToElement(l("uTxK8v328MAPtKKU"));
  //TODO Please add an assertion here
await exists(l("luUcLsNu2oV1D3SB"));
});

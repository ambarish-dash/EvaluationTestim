"use strict";

const { Locator, test, go, resize, exists, l, click, type, waitForElement, scrollToElement, sleep, evaluate } = require('testim');

Locator.set(require('./locators/locators.js'));

test("TC03_AddVendor", async () => {
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
  await scrollToElement(l("Vendors"));
  //TODO Please add an assertion here
await exists(l("vCtFY2FxXeX8zxo2"));
  await click(l("vCtFY2FxXeX8zxo2"));
  //TODO Please add an assertion here
await exists(l("0bj8mUDwLrSEpNoG"));
  await click(l("0bj8mUDwLrSEpNoG"));
  //TODO Please add an assertion here
await exists(l("h2SYVopzxBV1tk5a"));
  await type(l("jFdJVSSxPmT2hYf8"), vendorTaxID);
  await click(l("oCIaWBZfQGe0fb6m"));
  await type(l("oCIaWBZfQGe0fb6m"), vendorName);
  await click(l("FzI8SbZWkrfUSbmQ"));
  await type(l("FzI8SbZWkrfUSbmQ"), vendorAddress);
  await click(l("PP6F4qTngh8rbnG9"));
  await type(l("PP6F4qTngh8rbnG9"), vendorCity);
  await scrollToElement(l("NpBA2VSrL9X87DLC"));
  await click(l("aHjARKCK3e2Ur4HO"));
  await type(l("aHjARKCK3e2Ur4HO"), vendorCountry);
  await click(l("ou6OGuvDAN5xeWbo"));
  await sleep(5000);
  await click(l("8TgotpQCQQx766bW"));
  await waitForElement(l("tPGQKmg3eIs87chL"));
  await scrollToElement(l("Vendors"));
  await click(l("vCtFY2FxXeX8zxo2"));
  await click(l("cA2MX19MIajRTGze"));
  await click(l("KremQGT1Y7ezfaZo"));
  await type(l("KremQGT1Y7ezfaZo"), vendorName);
  await click(l("f8YAvPrloSpfWOBS"));
  await waitForElement(l("XFbyx9esaNJBQJx8"));
  await GetText(vendorName, vendorTaxID, vendorAddress, vendorCity, vendorCountry, l("uTxK8v328MAPtKKU"), l("uTxK8v328MAPtKKU"), l("uTxK8v328MAPtKKU"), l("uTxK8v328MAPtKKU"), l("uTxK8v328MAPtKKU"));
});

// shared steps \\
async function GetText(Vendor, TaxID, Address, City, Country, vendorName, taxID, addressElement, cityElement, countryElement) {
  await evaluate((Vendor, TaxID, Address, City, Country, vendorName, taxID, addressElement, cityElement, countryElement) => {
    var vendName = vendorName.innerText;
    var taxIDText = taxID.innerText;
    var addrText = addressElement.innerText;
    var cityText = cityElement.innerText;
    var countryText = countryElement.innerText;
    
    if(vendName==Vendor){
        console.log("Vendor Name validation successful");
        if(taxIDText==TaxID){
            console.log("Tax ID validation successful");
            if(addrText==Address){
                console.log("Address validation successful");
                if(cityText==City){
                    console.log("City validation successful");
                    if(countryText==Country){
                        console.log("Country validation successful");
                        console.log("All validations successful");
                        return true;
                    }
                    else{
                        console.log("Country validation failed");
                        return false;
                    } 
                }
                else{
                    console.log("City validation failed");
                    return false;
                }
            }
            else{
                console.log("Address validation failed");
                return false;
            }
        }
        else{
            console.log("Tax ID validation failed");
            return false;
        }
    }
    else{
        console.log("Vendor Name validation failed");
        return false;
    }
    
    
  }, Vendor, TaxID, Address, City, Country, vendorName, taxID, addressElement, cityElement, countryElement);
}


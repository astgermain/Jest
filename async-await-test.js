// Async/Await Testing
// Easier promise handling in tests with async/Await

import {
  capitalize,
  getAlpha2Code,
  countryExtractor,
  countryListLookup,
  getResponse
} from "../language_spoken.js";

test("convert array of country data objects to array of countries", () => {
  //arrange
  const inputObject = [
    {name: "Argentina", capital: "Buenos Aires"},
    {name: "Belize", capital: "Belmopan"},
    {name: "Bolivia", capital: "Sucre"}
  ]
  const expectedValue = ["Argentina","Belize","Bolivia"];
  
  //act
  const actualValue = countryExtractor(inputObject);
  
  //assertions
  expect(actualValue).toEqual(expectedValue);
  expect(actualValue[0]).toBe("Argentina");
  expect(actualValue).toContain("Belize");
  expect(actualValue[2] === "Bolivia").toBeTruthy();
  expect(actualValue[3]).not.toBeDefined();
});

test("correctly fetches a list of countries", async () => {
  //arrange
  const inputLanguageCode = "es";
  const expectedValue ="Argentina";
  //act
  const actualValue = await countryListLookup(inputLanguageCode);
  //assertions
  expect(actualValue).toContain(expectedValue);       
});

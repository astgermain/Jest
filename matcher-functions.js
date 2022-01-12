import {
  capitalize,
  getAlpha2Code,
  countryExtractor,
  countryListLookup,
  getResponse
} from "../language_spoken.js";

test("convert array of country data objects to array of countries", ()=>{
    //arrange
    const inputObject = [
      {name: "Argentina", capital: "Buenos Aires"},
      {name: "Belize", capital: "Belmopan"},
      {name: "Bolivia", capital: "Sucre"}
      ]
    const expectedValue = ["Argentina","Belize","Bolivia"]
    
    //act
    const actualValue = countryExtractor(inputObject)
    
    //assertions

       expect(actualValue).toEqual(expectedValue)
       expect(actualValue[0]).toBe('Argentina')
       expect(actualValue).toContain('Belize')
       expect(actualValue[2] === 'Bolivia').toBeTruthy()
       expect(actualValue[3]).not.toBeDefined()
    
})

/*
.toBeDefined() is used to verify that a variable is not undefined. This is often the first thing checked.
.toEqual() is used to perform deep equality checks between objects.
.toBe() is similar to .toEqual() but is used to compare primitive values.
.toBeTruthy() is used to verify whether a value is truthy or not.
.not is used before another matcher to verify that the opposite result is true
.toContain() is used when we want to verify that an item is in an array. 
In this case, since the .not matcher is used, we are verifying that "Ice Cream" is NOT in the array.
*/
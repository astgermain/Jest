/* Mocking

Mocking functions with jest.fn()
The Jest library provides the jest.fn() function for creating a “mock” function.

An optional implementation function may be passed to jest.fn() to define the mock function’s behavior and return value.
The mock function’s behavior may be further specified using various methods provided to the mock function such as .mockReturnValueOnce().
The mock function’s usage (how it was called, what it returned, etc…) may be validated using the expect() API.
const mockFunction = jest.fn(() => {
  return 'hello';
});
expect(mockFunction()).toBe('hello');
 
mockFunction.mockReturnValueOnce('goodbye');
 
expect(mockFunction()).toBe('goodbye');
expect(mockFunction()).toBe('hello');
expect(mockFunction).toHaveBeenCalledTimes(3);
Mocking modules with jest.mock()
When mocking entire modules, mock implementations of the module should be created in a __mocks__/ folder adjacent to the file being mocked.

In the test files, the jest.mock() method may be used. It accepts a path to the file where the module to be mocked is defined and replaces the actual module with the version defined in the __mocks__/ folder.

The file to be mocked must be imported before it can be mocked with jest.mock().

*/
// Mock File

const httpRequest = jest.fn(() => {
  return Promise.resolve({
    status: "", 
    data:{}
  });
})

export default httpRequest;

// Test File
import {
  capitalize,
  getAlpha2Code,
  countryExtractor,
  countryListLookup,
  getResponse
} from "../language_spoken.js";
import httpRequest from "../utils/http-request.js"

jest.mock('../utils/http-request.js')

// TODO: Import and mock httpRequest

test("convert array of country data objects to array of countries", () => {
  //arrange
  const inputObject = [
    {name: "Argentina", capital: "Buenos Aires"},
    {name: "Belize", capital: "Belmopan"},
    {name: "Bolivia", capital: "Sucre"}
  ];
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

test("correctly fetches a list of countries",  async () => {
  //arrange
  const inputLanguageCode = "jest";
  const expectedValue ="CodeLand";
  const resolvedValue = {
    status: 'MOCK',
    data: [
      { name: "CodeLand", capital: "Codecademy" },
    ]
  };
  // TODO: Mock the first resolved value of httpRequest
httpRequest.mockResolvedValueOnce(resolvedValue)
  //act
  const actualValue = await countryListLookup(inputLanguageCode);
  //assertions
  expect(actualValue).toContain(expectedValue);
});

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

describe("Contact Us Page test cases", () => {
    
    beforeAll(() => {
        console.log("Before all test cases");
    });

    beforeEach(() => {
        console.log("Before each test case");
    });

    afterAll(() => {
        console.log("After all test cases");
    });

    afterEach(() => {
        console.log("After each test case");
    });

    test("Should load contact us component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        // Assertion
        expect(heading).toBeInTheDocument();
    });

    test("Should load button inside Contact component", () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
    
        // Assertion
        expect(button).toBeInTheDocument();
    });

    // You can also use `it` instead of `test` => both are same
    it("Should load input name inside Contact component", () => {
        render(<Contact />);
    
        const inputName = screen.getByPlaceholderText("name");
    
        // Assertion
        expect(inputName).toBeInTheDocument();
    });

    it("Should load all inputs inside Contact component", () => {
        render(<Contact />);
    
        const allInputes = screen.getAllByRole("textbox");
    
        // console.log(allInputes); // This return array of JS objects (React elements)
    
        // Assertion
        expect(allInputes.length).toBe(2);
    
        expect(allInputes.length).not.toBe(3);
    });
});

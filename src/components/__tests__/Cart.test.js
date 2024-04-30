import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header"
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("Should load Restaurant Menu component", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                    <RestaurantMenu />
                </Provider>
            </BrowserRouter>
        )
    );

    const accordianHeader = screen.getByText("Burgers (17)");

    fireEvent.click(accordianHeader);

    const foodItems = screen.getAllByTestId("foodItems");

    expect(foodItems.length).toBe(17);

    const addBtns = screen.getAllByRole("button", { name: "Add +" });

    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart (1 items)")).toBeInTheDocument();
});

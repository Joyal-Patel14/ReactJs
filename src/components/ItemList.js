import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
    const { items } = props;

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        // dispatch action

        dispatch(addItem(item)); // whatever I pass inside my action will go inside my action.payload in store
    };

    return (
        <div>
            {items.map((item) => (
                <div data-testid="foodItems" key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-1 text-left flex">
                    <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button
                                className="p-2 bg-black text-white mx-16 rounded-lg shadow-lg"
                                onClick={() => handleAddItem(item)}
                            >
                                Add +
                            </button>
                        </div>
                        <img src={IMG_URL + item.card.info.imageId} className="w-full"/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;
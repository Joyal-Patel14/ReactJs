import { IMG_URL } from "../utils/constants";

const ItemList = (props) => {
    const { items } = props;

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-1 text-left flex">
                    <div className="w-9/12">
                        <div className="py-2">
                            <sapn>{item.card.info.name}</sapn>
                            <span> - ₹ {item.card.info.price? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 bg-black text-white mx-16 rounded-lg shadow-lg">Add +</button>
                        </div>
                        <img src={IMG_URL + item.card.info.imageId} className="w-full"/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;
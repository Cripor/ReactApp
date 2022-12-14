import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";
import { ItemCount } from "./ItemCount";
import "../App.css"

const ItemDetail = ({ item }) => {
const { addItem, isInCart } = useContext(CartContext);
const navigate = useNavigate();
const [count, setCount] = useState(1);
const [currentStock, setCurrentStock] = useState(item.stock);
const maxQuantity = currentStock;

function handleCount(type) {
    if (type === "plus" && count < maxQuantity) setCount(count + 1);
    if (type === "minus" && count > 1) setCount(count - 1);
}

function handleAdd() {
    if (currentStock < count) alert("No hay suficiente stock de este producto");
    else {
    setCurrentStock(currentStock - count);
    addItem(item, count);
    }
}

function handleCheckout() {
    navigate("/cart");
}

return (
    <div className="d-flex flex-column align-items-center">
    {/* Item image */}
    <div className="d-flex justify-content-center">
        <img src={item.pictureUrl} alt={item.title} className="w-50"/>
    </div>

    {/* Item description */}
    <div className="d-flex flex-column justify-content-center">
        <h2 className="">{item.title}</h2>
        <p className="">{item.description}</p>
        <span className="mt-4 text-xl">
        Price: <strong className="text-gray-800">${item.price}</strong>
        </span>
        {currentStock > 0 && (
        <p className="text-sm">En Stock: {currentStock}</p>
        )}

        <div className="flex flex-col flex-1 items-center">
        {/* Count */}
        {currentStock > 0 ? (
            <ItemCount count={count} handleCount={handleCount} />
        ) : (
            <span className="text-red-500 mt-10">Sin stock</span>
        )}
        <div className="mb-5 mt-3 d-flex gap-3">
            <button onClick={handleAdd} className="w-50 rounded addToCartButton" disabled={currentStock === 0}>
                Agregar al carrito
            </button>
            <button disabled={!isInCart(item.id)} onClick={handleCheckout} className="w-50 rounded addToCartButton">
                Finalizar Compra
            </button>
        </div>
        </div>
    </div>
    </div>
);
};

export default ItemDetail;

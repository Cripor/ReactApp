import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import '../App.css';


export const CartWidget = () => {
    const { productsAdded } = useContext(CartContext);
    const counter = productsAdded.length;
    return (
    <div className="d-flex">
        <Link to="/cart" className="cartWidgetCounter">
            <div className="text-white d-flex align-items-center">
                <div className="fs-2"><AiOutlineShoppingCart /></div>
                <span className="text-white countWidget">{counter}</span>
            </div>
        </Link>
    </div>
    )
}
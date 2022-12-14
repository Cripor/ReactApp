import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Layout } from "../components/Layout";
import { useNavigate } from "react-router-dom";
import Item from "../components/Item";
import { TrashWidget } from "../components/TrashWidget";
import PaymentForm from "../components/PaymentForm";
import '../App.css'

function CheckoutView() {
    const navigate = useNavigate();
    const { productsAdded, totalAmount } = useContext(CartContext);
    const productsCheckList = productsAdded;
    return(
        <Layout>
            <div className="container">
                {productsAdded.length === 0 ? (
                    <div className="d-flex flex-column gap-4 align-items-center justify-content-center mt-3 min-vh-100">
                        <AiOutlineShoppingCart className="fs-1"/>
                        <h1>No hay productos en tu carrito</h1>
                        <button onClick={() => navigate("/")} className="rounded p-2 mt-4">
                            Ir al Inicio
                        </button>
                    </div>
                ) : (
                <div className="d-flex flex-wrap align-items-center justify-content-center mt-5 min-vh-100 gap-2">
                    {productsCheckList.map((product) => {
                    const quantityAdded = product.quantityAdded;
                        return (
                        <div className="d-flex rounded flex-column w-25 justify-content-evenly align-items-center gap-3">
                            <Item product={product.item} quantityAdded={quantityAdded}/>
                            <TrashWidget itemId={product.item.id}/>
                        </div>
                        );
                    })}
                    <PaymentForm total={totalAmount}/>
                </div>
                )}
            </div>
        </Layout>
    )
}

export default CheckoutView
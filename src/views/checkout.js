import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Layout } from "../components/Layout";
import Item from "../components/Item";
import { TrashWidget } from "../components/TrashWidget";
import '../App.css'

function CheckoutView() {
    const { productsAdded } = useContext(CartContext);
    const productsCheckList = productsAdded;
    const navigate = useNavigate();
    const confirm = ()=>{
        alert("Desea confirmar su compra?")
        alert("Gracias por comprar con nosotros!")
        navigate('/')
    }
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
                    <div className="w-100 mt-5">
                        <h2 className="mb-3">Checkout</h2>
                        <form className="col-12">
                            <input type="text" placeholder="Ingrese el número de su tarjeta" className="col-4"/>
                            <select name="select" className="ms-2">
                                <option value="value1">Visa</option>
                                <option value="value2" selected>Mastercard</option>
                                <option value="value3">American Express</option>
                            </select>
                            <div className="mt-3">
                                <input type="text" placeholder="Fecha de expiración" className="col-5"/>
                            </div>
                            <div className="mt-3">
                                <input type="text" placeholder="Nombre y apellido de titular" className="col-5"/>
                            </div>
                            <button className="mt-3 rounded border-dark" onClick={confirm}><submit type="button">Confirmar</submit></button>
                        </form>
                    </div>
                </div>
                )}
            </div>
        </Layout>
    )
}

export default CheckoutView
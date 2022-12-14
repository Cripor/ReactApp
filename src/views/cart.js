import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Item from "../components/Item";
import { Layout } from "../components/Layout";
import { TailSpin } from 'react-loader-spinner';
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";
import '../App.css'

const CartView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const { productsAdded, clear, totalAmount } = useContext(CartContext);

    const handleFinalizePurchase = () => {
        setIsLoading(true);
        setTimeout(() => {
        setIsLoading(false);
        navigate("/checkout");
        }, 1000);
    };

    return (
        <Layout>
            <div className="d-flex flex-column container w-50">
                {productsAdded.length === 0 ? (
                    <div className="d-flex flex-column gap-4 align-items-center justify-content-center mt-3 min-vh-100">
                        <AiOutlineShoppingCart className="fs-1"/>
                        <h1>No has agregado productos</h1>
                        <button onClick={() => navigate("/")} className="rounded p-2 mt-4">
                            Ir al Inicio
                        </button>
                    </div>
                ) : (
                <div>
                    <div className="w-100 d-flex flex-wrap align-items-center justify-content-center mt-5 container-fluid">
                        {productsAdded.map((product) => {
                        const quantityAdded = product.quantityAdded;
                            return (
                            <div className="d-flex flex-column w-50 justify-content-evenly align-items-center gap-3 detailHeight">
                                <Item product={product.item} quantityAdded={quantityAdded}/>
                                <TrashWidget itemId={product.item.id}/>
                            </div>
                            );
                        })}
                    </div>
                    <div className="d-flex justify-content-center mt-4 w-100">
                        {isLoading ? (
                            <div className="min-vh-100">
                                <TailSpin
                                height="80"
                                width="80"
                                color="#5bc0de"
                                ariaLabel="tail-spin-loading"
                                radius="1"
                                wrapperStyle={{}}
                                wrapperClass=""
                                visible={true}
                                />
                            </div>
                        ) : (
                        <div className="d-flex flex-column align-items-center">
                            <span>Total a pagar: ${totalAmount}</span>
                            <button onClick={handleFinalizePurchase}className="w-100 rounded addToCartButton bg-dark text-white mt-3 mb-3">
                                Finalizar Compra
                            </button>
                        </div>
                    )}
                    </div>
                </div>
                )}
            </div>
        </Layout>
    );
};

export default CartView;

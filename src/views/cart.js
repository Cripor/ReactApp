import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import CartWidget from '../components/CartWidget';
import { AiOutlineShoppingCart } from "react-icons/ai";
import Item from "../components/Item";
import { Layout } from "../components/Layout";
import { TailSpin } from 'react-loader-spinner';
import { TrashWidget } from "../components/TrashWidget";
import { CartContext } from "../context/cartContext";

const CartView = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const { productsAdded, clear, totalAmount } = useContext(CartContext);

    const handleFinalizePurchase = () => {
        setIsLoading(true);
        setTimeout(() => {
        clear();
        setIsLoading(false);
        alert("Compra finalizada");
        navigate("/");
        }, 2000);
    };

    return (
        <Layout>
            <div className="d-flex flex-column container w-50">
                {productsAdded.length === 0 ? (
                    <div className="flex flex-col items-center justify-center">
                        <AiOutlineShoppingCart className="fs-1"/>
                        <h1 className="text-2xl">No has agregado productos</h1>
                        <button onClick={() => navigate("/")} className="rounded-lg p-2 bg-gray-800 text-white mt-4">
                            Ir al Inicio
                        </button>
                    </div>
                ) : (
                <div>
                    <div className="flex gap-4">
                        {productsAdded.map((product) => {
                        const quantityAdded = product.quantityAdded;
                            return (
                            <div className="d-flex flex-column align-items-center gap-3">
                                <Item product={product.item} quantityAdded={quantityAdded}/>
                                <TrashWidget itemId={product.item.id}/>
                            </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-end mt-4">
                    {isLoading ? (
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
                    ) : (
                    <div className="d-flex flex-column align-items-center">
                        <span>Total a pagar: ${totalAmount}</span>
                        <button onClick={handleFinalizePurchase}className="w-25 rounded addToCartButton bg-dark text-white mt-3 mb-3">
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

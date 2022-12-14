import { useNavigate } from "react-router-dom";
import '../App.css'

function Item({ product, quantityAdded }) {
    const navigate = useNavigate();

    const description = product.description.slice(0, 30);
    const title = product.title.slice(0, 20);

    function handleNavigate() {
        navigate(`/item/${product.id}`);
    }

    return (
        <div
        onClick={handleNavigate}
        className="d-flex flex-column"
        >
        <div className="d-flex flex-column align-items-center">
            <img src={product.pictureUrl} className="w-50" alt="Product"/>
            <span className="text-2xl font-bold">
            {product.title}
            </span>
            <hr className="mb-2" />
            <p className="mb-2">
            {product.description.length > 30
                ? `${description} ...`
                : product.description}
            </p>
        </div>
        <div className="flex flex-col">
            <hr className="mb-2" />
            <div className="flex justify-between items-center">
                <span className="fs-5 mt-2">${product.price}</span>
                <div className="mt-2">
                    {quantityAdded ? "Agregados" : "En Stock"}:{" "}
                    {quantityAdded || product.stock}
                </div>
                <button className="w-50 rounded addToCartButton bg-dark text-white mt-3">Añadir a carrito</button>
            </div>
        </div>
        </div>
    );
};

export default Item
import { AiOutlineShoppingCart } from 'react-icons/ai';


function CartWidget({onCart}){
    return (
    <div>
        <div className="text-white d-flex align-items-center">
            <div className="fs-2"><AiOutlineShoppingCart /></div>
        </div>
    </div>
    )
}

export default CartWidget
import { AiOutlineShoppingCart } from 'react-icons/ai';

function CartWidget({onCart}){
    return (
    <div>
        <a href='project_reactjs\public\index.html' className="text-white d-flex align-items-center text-decoration-none">
            <li className="fs-2"><AiOutlineShoppingCart /></li>
            <span className="fs-5">{onCart = ''}</span>
        </a>
    </div>
    )
}

export default CartWidget
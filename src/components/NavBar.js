import { AiOutlineShoppingCart } from 'react-icons/ai';
import Dropdownuse from './Dropdown';

function NavBar() {
    return (
        <navbar className="container-fluid" >
            <ul className="list-unstyled d-flex justify-content-evenly align-items-center gap-5">
                <a href='project_reactjs\public\index.html' className="text-white text-decoration-none"><li>Inicio</li></a>
                <div className='text-white'><Dropdownuse/></div>
                <a href='project_reactjs\public\index.html' className="text-white"><li className="fs-1"><AiOutlineShoppingCart /></li></a>
            </ul>
        </navbar>
    )
}

export default NavBar
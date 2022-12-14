import Dropdownuse from './Dropdown';
import { CartWidget } from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <navbar className="container-fluid" >
            <ul className="list-unstyled d-flex justify-content-evenly align-items-center gap-5">
                <Link to="/" className="text-white text-decoration-none">
                    <li>
                        Inicio
                    </li>
                </Link>
                <li className='text-white'>
                    <Dropdownuse/>
                </li>
                <Link to="/item/4dY9h69cZLbx0mEdUWox" className="text-white text-decoration-none">
                    <li>
                        Item
                    </li>
                </Link>
                <Link to="/cart/1" className="text-decoration-none">
                    <CartWidget/>
                </Link>
            </ul>
        </navbar>
    )
}

export default NavBar
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';

function Dropdownuse() {
    return (
    <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Catálogo
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item>
                <Link to='/category/placas' className='text-decoration-none text-black'>
                    Placas de video
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to='/category/perifericos' className='text-decoration-none text-black'>
                    Perifericos
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link to='/' className='text-decoration-none text-black'>
                    Ver Todo
                </Link>
            </Dropdown.Item>
            
        </Dropdown.Menu>
    </Dropdown>
    );
}

export default Dropdownuse
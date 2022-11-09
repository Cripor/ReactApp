import Dropdown from 'react-bootstrap/Dropdown';

function Dropdownuse() {
    return (
    <Dropdown>
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
            Catálogo
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item href="#item1">Placas de video</Dropdown.Item>
            <Dropdown.Item href="project_reactjs\public\index.html">Perifericos</Dropdown.Item>
            <Dropdown.Item href="project_reactjs\public\index.html">Otros</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    );
}

export default Dropdownuse
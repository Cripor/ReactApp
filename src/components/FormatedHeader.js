import Header from './Header';
import NavBar from './NavBar';

function FormatedHeader() {
    return(
        <header className="bg-dark text-white d-flex flex-column gap-5 justify-content-start">
            <Header/>
            <NavBar/>
        </header>
    )
}

export default FormatedHeader;
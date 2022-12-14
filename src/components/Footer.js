import NavBar from './NavBar'
import '../App.css'

function Footer() {
    return(
        <footer className="bg-dark text-white gap-5 justify-content-start mt-5">
            <NavBar className="NavBarOnFooter"/>
        </footer>
    )
}

export default Footer
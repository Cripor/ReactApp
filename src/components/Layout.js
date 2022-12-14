import FormatedHeader from './FormatedHeader';
import Footer from './Footer';
import '../App.css';

export const Layout = ({children}) => {
    return (
        <div className="text-center bgLayout">
            <FormatedHeader/>
                {children}
            <Footer/>
        </div>
    )
}
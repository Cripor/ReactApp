import FormatedHeader from './FormatedHeader';

export const Layout = ({children}) => {
    return (
        <div className="text-center">
            <FormatedHeader/>
            {children}
        </div>
    )
}
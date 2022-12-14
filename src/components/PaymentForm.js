import '../App.css';
import { collection, addDoc, serverTimestamp, getFirestore } from 'firebase/firestore';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/cartContext";

const PaymentForm = ({total}) => {
    const { clear } = useContext(CartContext);
    const navigate = useNavigate();
    const confirm = ()=>{
        alert("Gracias por comprar con nosotros!")
        clear();
        navigate('/')
    }
    const saveAnswer = (event) => {
        event.preventDefault();

        const elementsArray = [...event.target.elements];

        const formData = elementsArray.reduce((accumulator, currentValue) => {
            if(currentValue.id) {
                accumulator[currentValue.id] = currentValue.value
            }

            return accumulator
        }, {});

        const db = getFirestore();
        const submitFormCollection = collection(db, "ventas");
        addDoc(submitFormCollection, {...formData, date:serverTimestamp()})
        confirm();
    }
    return(
        <div className="container p-0">
            <div className="card px-4">
                <p className="h8 py-3">Detalles de pago</p>
                <form className="row gx-3" onSubmit={saveAnswer}>
                    <div className="col-12">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Nombre</p>
                            <input className="form-control mb-3" type="text" id="name" placeholder="Nombre y Apellido de Titular"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Email</p>
                            <input className="form-control mb-3" type="text" id="mail" placeholder="Ingrese su email"/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Número de Tarjeta</p>
                            <input className="form-control mb-3" type="text" id="card-number" placeholder="1234 5678 5678 0123"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">Vencimiento</p>
                            <input className="form-control mb-3" type="text" id="expires" placeholder="MM/YYYY"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-column">
                            <p className="text mb-1">CVV/CVC</p>
                            <input className="form-control mb-3 pt-2" type="password" id="cvv" placeholder="***"/>
                        </div>
                    </div>
                    <div className="col-12 spanSubmit">
                        <div className="btn btn-primary spanSubmit mb-3">
                            <span className="ps-3 spanSubmit">$ {total}</span>
                            <input type="submit" className="btn2" value="→"/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PaymentForm
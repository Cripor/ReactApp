import { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function Adding() {
    let value = 0;
    let stock = 10;
    let [click, setClick] = useState(value);

    let onAdd = (cantidad) => {
        console.log(`Compraste ${cantidad} items`);
    };
    function clickToAdd(){
        setClick(click < stock ? click + 1 : click);
        value = click
    }
    function clickToSub(){
        setClick(click > 0 ? click - 1 : click);
        value = click
    }
    return(
        <div>
            <button className="m-2 fs-4 rounded bg-danger" onClick={() => clickToSub = clickToSub()}>-</button>
            <button className="ms-5 me-3 fs-4 rounded bg-primary" onClick={() => clickToAdd = clickToAdd()}>+</button>
            <button className="rounded ms-2" disabled={click === 0} onClick={() => onAdd(click)}>Comprar</button>
            <AiOutlineShoppingCart className="me-1 ms-3 fs-3"/>
            <span id="clicker">{click}</span>
        </div>
    )
}

export default Adding
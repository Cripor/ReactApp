import image1 from '../assets/images/image1.jpg';

function ItemListContainer() {
    return(
        <div className="container border border-info">
            <h2>Catalogo</h2>
            <div className='mt-5 mb-5' id='item1'>
                <img className='w-25' src={image1}/>
                <p>Placa de video GeForce GTX 1050</p>
                <button>Añadir al carrito</button>
            </div>
        </div>
    )
}

export default ItemListContainer;
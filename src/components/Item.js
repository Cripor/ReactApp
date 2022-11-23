const Item = ( {product} ) => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-between mt-2">
            <div className="w-75 d-flex flex-column justify-content-around align-items-center">
                <div className="mb-2">{product.title}</div>
                <img className="w-50" src={product.pictureUrl}/>
                <p className="mt-3">ID: {product.id} </p>
            </div>
        </div>
    );
};

    export default Item;

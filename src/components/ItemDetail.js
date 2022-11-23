import Adding from './ClickAddSub'

const ItemDetail = ( {itemFromDetail} ) => {
    return(
            <div className='mt-5 mb-5'>
                <img className='w-25' src={itemFromDetail.pictureUrl} alt="placa"/>
                <div>{itemFromDetail.title}</div>
                <Adding/>
            </div>
    )
}

export default ItemDetail
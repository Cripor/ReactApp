export const ItemCount = ({ count, handleCount }) => {
    return (
        <div className="d-flex gap-2 justify-content-center">
            <button onClick={() => handleCount("minus")} className="rounded">-</button>
            <span id="counter">{count}</span>
            <button onClick={() => handleCount("plus")} className="rounded">+</button>
        </div>
    );
};

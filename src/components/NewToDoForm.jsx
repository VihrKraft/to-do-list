export default function NewToDoform({newItem, setNewItem, handleSubmit}) {
    return (
        <form action="" className="new-item-form" onSubmit={(event) => handleSubmit(event)}>
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input type="text" id='item' value={newItem} onChange={(event) => setNewItem(event.target.value)}/>
                <button className="btn">Add</button>
            </div>
        </form>
    );
}
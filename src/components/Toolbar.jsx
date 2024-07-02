function Toolbar ({filters, selected, onSelectedFilter}) {
    
    return (
        <div className="toolbar">
            {filters.map((item) => (
                <button className={item === selected ? "btn btn-outline btn-active" : "btn btn-outline"} onClick={onSelectedFilter}>{item}</button>
            ))}
        </div>
    )
}

export default Toolbar

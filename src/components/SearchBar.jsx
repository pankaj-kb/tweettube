function SearchBar({placeholder, buttonText, className, value, name, onChange, onClick}) {

    return (
        <div>
            <input 
            type="text"
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            className={className}
            value={value}
            />
            <button
            onClick={onClick}>
            {buttonText}
            </button>
        </div>
    )
}

export default SearchBar;
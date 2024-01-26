/* eslint-disable react/prop-types */
function SearchBar({placeholder, buttonText, divClassName, inputClassName, buttonClassName, value, name, onChange, onClick}) {

    return (
        <div className={divClassName}>
            <input
            type="text"
            name={name}
            onChange={onChange}
            placeholder={placeholder}
            className={inputClassName}
            value={value}
            />
            <button
            className={buttonClassName}
            onClick={onClick}>
            {buttonText}
            </button>
        </div>
    )
}

export default SearchBar;
/* eslint-disable react/prop-types */
const Tooltip = ({ text, children }) => {
  return (
    <div className="relative inline-block group">
      {children}
      <div className="bg-accentgray text-accentwhite p-1 text-[15px] text-center font-medium rounded-lg absolute 
      bottom-full left-1/2 transform -translate-x-1/2 opacity-0 
      invisible transition-opacity duration-300 
      group-hover:opacity-100 group-hover:visible">
        {text}
      </div>
    </div>
  );
};

export default Tooltip;

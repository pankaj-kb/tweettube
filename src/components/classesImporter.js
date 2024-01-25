import classNames from "classnames";

const inputClasses = classNames(
  "lg:h-[50px] bg-accentgray rounded-[10px] border-[2px] border-accentgray",
  "w-[100%] text-center text-[20px] focus:outline-none",
  "focus:border-accentpink focus:border-[2px] hover:cursor-pointer",
  "focus:border-opacity-50 hover:border-accentpink"
);
const buttonClasses = classNames(
  "bg-accentpink font-semibold opacity-90",
  "hover:opacity-100 text-accentwhite mt-[20px]",
  "text-center rounded-[10px] h-[40px] w-[50%]",
  "text-[20px] hover:text-accentblack focus:border-none"
);

const fileInputClasses = classNames(
  "text-[15px]",
  "bg-accentgray text-accentwhite",
  "hover:bg-accentblack hover:cursor-pointer",
  "w-[20%] rounded-[10px] font-semibold border-[2px]",
  "border-accentgray hover:border-accentpink",
  "hover:text-accentpink"
)

export { inputClasses, buttonClasses, fileInputClasses }
import classNames from "classnames";

const inputClasses = classNames(
  "h-[50px] bg-accentgray rounded-[10px] border-[2px] border-accentgray",
  "w-[110%] text-center text-[25px] focus:outline-none",
  "focus:border-accentpink focus:border-[2px] hover:cursor-pointer",
  "focus:border-opacity-50 hover:border-accentpink"
);

const buttonClasses = classNames(
  "bg-accentpink font-semibold opacity-90",
  "hover:opacity-100 text-accentwhite mt-[20px]",
  "text-center rounded-[10px] h-[40px] w-[50%]",
  "text-[20px] hover:text-accentblack focus:border-none"
);

const disabledButtonClasses = classNames(
  "bg-accentgray font-semibold opacity-50",
  "text-accentwhite mt-[20px]",
  "text-center rounded-[10px] h-[40px] w-[50%]",
  "text-[20px] cursor-not-allowed"
);

const fileInputClasses = classNames(
  "text-[15px]",
  "bg-accentgray text-accentwhite",
  "hover:bg-accentblack hover:cursor-pointer",
  "w-[100px] h-[50px] rounded-[10px] font-semibold border-[2px]",
  "border-accentgray hover:border-accentpink",
  "hover:text-accentpink"
)

const sideBarLoogosClasses = classNames(
  "text-[35px] hover:text-accentpink cursor-pointer focus:text-accentpink"
)

export { inputClasses, buttonClasses, fileInputClasses, disabledButtonClasses, sideBarLoogosClasses }
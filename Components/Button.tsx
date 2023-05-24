// import {buttonProps} from "../interfaces" ;

type buttonProps = {
  text: String
  icon?: any
}
const Button = ({ text, icon }: buttonProps) => {
  return (
    <button className="flex items-center px-6 bg-[#EE656E] text-sm rounded-full py-3">
      <span>{text}</span>
      <span>
        {icon}
      </span>
    </button>
  );
}

export default Button;
import React from "react";

interface InputControlProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  handleInputChange: (type: string, value: string) => void;
}

const style = {
  container: "flex flex-col gap-2",
  label: "font-semibold text-s text-[#4b4b4b]",
  input:
    "rounded-[5px] border border-solid border-[#eee] outline-0 py-[10px] px-[15px] hover:border-[#ccc] focus:border-[#9900ff]",
};

const InputControl = ({
  label,
  type,
  placeholder,
  value,
  handleInputChange,
}: InputControlProps) => {
  return (
    <div className={style.container}>
      {label && <label className={style.label}>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        className={style.input}
        onChange={(e) => handleInputChange(type, e.target.value)}
      ></input>
    </div>
  );
};

export default InputControl;

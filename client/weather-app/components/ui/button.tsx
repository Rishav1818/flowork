import React from "react";

const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  return (
    <button
      className="text-black bg-green-500 font-small rounded-lg text-sm px-5 py-2.5 me-2 mb-2 h-10"
      {...props}
    />
  );
};

export default Button;

import React from "react";

type ButtonVariant = "solid" | "outline" | "mint";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "solid",
  ...props
}) => {
  const base = "px-4 py-2 rounded-lg font-medium transition shadow-sm text-sm";
  const variants: Record<ButtonVariant, string> = {
    solid: "bg-watermelon text-white hover:bg-rose-500",
    outline:
      "border-2 border-watermelon text-watermelon hover:bg-watermelon hover:text-white",
    mint: "bg-mint text-gray-800 hover:bg-green-300",
  };

  return (
    <button className={`${base} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
};

export default Button;

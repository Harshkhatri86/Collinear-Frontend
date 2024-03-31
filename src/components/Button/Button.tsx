import React, { FC, useRef } from "react";
import { Button as ButtonMUI } from "@mui/material";
import "../../styles/components/Button.css";

export interface ButtonProps {
  disabled?: boolean;
  variant?: "outlined" | "contained";
  height?: number | string;
  width?: number | string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  label?: string | React.ReactNode;
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>
  ) => void;
  type?: "button" | "submit" | "reset";
  isPrimary?: boolean;
}

const Button: FC<ButtonProps> = ({
  disabled = false,
  variant = "contained",
  startIcon,
  endIcon,
  label,
  onClick,
  width = "6rem", 
  type = "button",
  isPrimary,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (isPrimary && event.key === "Enter") {
      onClick?.(event);
    }
  };

  return (
    <>
      <ButtonMUI
        data-testid="submitButton"
        disabled={disabled}
        startIcon={startIcon}
        endIcon={endIcon}
        variant={variant}
        type={type}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        ref={buttonRef}
        sx={{
          width : width
        }}
        className={`button ${variant} ${isPrimary ? "primary" : "secondary"}`}
      >
        {label}
      </ButtonMUI>
    </>
  );
};


export default Button;

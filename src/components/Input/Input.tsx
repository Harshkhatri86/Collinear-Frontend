import { type ChangeEvent, type FC, useEffect, useRef, useState } from "react";
import { IconButton,TextField, InputAdornment } from "@mui/material";
import { styled } from "@mui/system";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import React from "react";


export interface InputProps {
  type?: string;
  isDisabled?: boolean;
  placeholder?: string;
  onValueChange?: (value: string) => void;
  defaultValue?: string;
  defaultFocus?: boolean;
  required?: boolean;
}

const StyledTextField = styled(TextField)(() => ({
  "& .MuiInputBase-root": {
    display: "flex",
    padding: "8px 24px",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    borderRadius: "8px",
    background:
      "linear-gradient(0deg, rgba(239, 239, 253, 0.10) 0%, rgba(239, 239, 253, 0.20) 100%), #FFF",
    boxShadow:
      "0px 12px 96px 0px rgba(228, 229, 252, 0.12), 0px 0px 10px 0px rgba(228, 229, 252, 0.50)",
    height: "20%",
    border: "1px solid gray",
    color: "#9D9DB0",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "24px",
    letterSpacing: "0.3px",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiOutlinedInput-input": {
    color: "#1F1F30",
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
    letterSpacing: "0.3px",
    padding: 0,
    fontFamily : "Lexend, sans-serif", 

  },
  "& .MuiInputBase-root.Mui-focused": {
    background:
      "linear-gradient(0deg, rgba(239, 239, 253, 0.10) 0%, rgba(239, 239, 253, 0.20) 100%), #FFF !important",
    boxShadow: "0px 0px 16px 0px rgba(178, 164, 202, 0.50) !important",
  },
  "& .Mui-disabled": {
    background: "#F0EEF5",
  },
}));

const Input: FC<InputProps> = ({
  type,
  isDisabled,
  placeholder,
  onValueChange,
  defaultValue,
  defaultFocus,
  required,
}) => {
  const [value, setValue] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const focusRef = useRef<HTMLInputElement>(null);

  // Apply default focus when the component mount
  useEffect(() => {
    defaultFocus && handleFocus();
  }, [defaultFocus]);

  // Set default value when the component mount
  useEffect(() => {
    setValue(defaultValue || "");
  }, [defaultValue]);

  const handleFocus = () => {
    focusRef.current?.focus();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsFocus(true);
    onValueChange && onValueChange(e.target.value);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocus(false);
    }, 200);
  };

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleMouseDownPassword = (event: React.MouseEvent) => {
    event.preventDefault();
  };

  const handleCancelIconClick = () => {
    setValue("");
    console.log("canclel click ")
    onValueChange && onValueChange("");
  };

  return (
    <StyledTextField
      inputRef={focusRef}
      fullWidth
      className="Input"
      value={value}
      onChange={handleChange}
      onFocus={() => {
        setIsFocus(true);
      }}
      onBlur={handleBlur}
      InputProps={{
        type: showPassword ? "text" : type,
        required,
        placeholder,
        endAdornment: (
            <InputAdornment position="end">
            {value && isFocus && (
              <CancelRoundedIcon
                color="primary"
                onMouseDown={handleMouseDownPassword}
                onClick={handleCancelIconClick}
                data-testid="cancel-icon"
                sx={{ width: "16px", cursor: "pointer" }}
              />
            )}
            {type === "password" && (
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? (
                  <RemoveRedEyeOutlinedIcon
                    color="primary"
                    sx={{ width: "16px", cursor: "pointer" }}
                  />
                ) : (
                  <VisibilityOffOutlinedIcon
                    color="primary"
                    sx={{ width: "16px", cursor: "pointer" }}
                  />
                )}
              </IconButton>
            )}
          </InputAdornment>
        ),
      }}
      disabled={isDisabled}
    />
  );
};

export default Input;

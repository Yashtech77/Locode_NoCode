import { useState } from "react";

const Password = ({
  label = "Password",
  placeholder = "Enter your password",
  value = "",
  onChange = () => {},
  required = false,
  disabled = false,
  width = "100%",
  height = "40px",
  fontSize = "14px",
  borderColor = "#d1d5db",
  borderRadius = "6px",
  backgroundColor = "#ffffff",
  textColor = "#374151",
  labelColor = "#374151",
  errorMessage = "",
  showError = false,
  showToggle = true,
  id = "password-input"
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-1" style={{ width }}>
      {label && (
        <label 
          htmlFor={id}
          className="text-sm font-medium"
          style={{ color: labelColor }}
        >
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          className="px-3 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          style={{
            width: "100%",
            height,
            fontSize,
            borderColor: showError ? "#ef4444" : borderColor,
            borderRadius,
            backgroundColor: disabled ? "#f9fafb" : backgroundColor,
            color: textColor,
            borderWidth: "1px",
            borderStyle: "solid",
            paddingRight: showToggle ? "40px" : "12px"
          }}
        />
        {showToggle && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            disabled={disabled}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            style={{ fontSize: "12px" }}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {showError && errorMessage && (
        <span className="text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};

export default Password;
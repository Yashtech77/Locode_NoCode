const Email = ({
  label = "Email",
  placeholder = "Enter your email",
  value = "",
  onChange = () => {},
  required = true,
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
  id = "email-input"
}) => {
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
        <input
          id={id}
          type="email"
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
            borderStyle: "solid"
          }} />
        {showError && errorMessage && (
          <span className="text-xs text-red-500">{errorMessage}</span>
        )}
      </div>
    );
  };

export default Email;
const Button = ({
  text = "Button",
  onClick = () => {},
  type = "button", // button, submit, reset
  variant = "primary", // primary, secondary, outline, danger
  size = "medium", // small, medium, large
  disabled = false,
  loading = false,
  width = "auto",
  height = "auto",
  fontSize = "14px",
  borderRadius = "6px",
  icon = null,
  iconPosition = "left", // left, right
  id = "button"
}) => {
  const getVariantStyles = () => {
    const variants = {
      primary: {
        backgroundColor: disabled ? "#9ca3af" : "#3b82f6",
        color: "#ffffff",
        borderColor: disabled ? "#9ca3af" : "#3b82f6"
      },
      secondary: {
        backgroundColor: disabled ? "#f3f4f6" : "#6b7280",
        color: disabled ? "#9ca3af" : "#ffffff",
        borderColor: disabled ? "#d1d5db" : "#6b7280"
      },
      outline: {
        backgroundColor: "transparent",
        color: disabled ? "#9ca3af" : "#3b82f6",
        borderColor: disabled ? "#d1d5db" : "#3b82f6"
      },
      danger: {
        backgroundColor: disabled ? "#9ca3af" : "#ef4444",
        color: "#ffffff",
        borderColor: disabled ? "#9ca3af" : "#ef4444"
      }
    };
    return variants[variant];
  };

  const getSizeStyles = () => {
    const sizes = {
      small: { padding: "6px 12px", fontSize: "12px", minHeight: "32px" },
      medium: { padding: "8px 16px", fontSize: "14px", minHeight: "40px" },
      large: { padding: "12px 24px", fontSize: "16px", minHeight: "48px" }
    };
    return sizes[size];
  };

  const variantStyles = getVariantStyles();
  const sizeStyles = getSizeStyles();

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className="inline-flex items-center justify-center gap-2 border font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:opacity-90"
      style={{
        width,
        height: height !== "auto" ? height : sizeStyles.minHeight,
        fontSize: fontSize || sizeStyles.fontSize,
        borderRadius,
        padding: sizeStyles.padding,
        backgroundColor: variantStyles.backgroundColor,
        color: variantStyles.color,
        borderColor: variantStyles.borderColor,
        borderWidth: "1px",
        borderStyle: "solid",
        cursor: disabled || loading ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1
      }}
    >
      {loading && (
        <div className="animate-spin rounded-full h-4 w-4 border-2 border-current border-t-transparent"></div>
      )}
      {!loading && icon && iconPosition === "left" && <span>{icon}</span>}
      {loading ? "Loading..." : text}
      {!loading && icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
};

export default Button;
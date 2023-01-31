import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder4: "rounded-radius4" };
const variants = {
  OutlinePink700:
    "bg-pink_700 border border-pink_700 border-solid text-white_A700",
};
const sizes = { sm: "p-[11px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder4"]),
  variant: PropTypes.oneOf(["OutlinePink700"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = {
  className: "",
  shape: "RoundedBorder4",
  variant: "OutlinePink700",
  size: "sm",
};

export { Button };

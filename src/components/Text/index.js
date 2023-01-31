import React from "react";
const variantClasses = {
  h1: "font-medium sm:text-[32px] md:text-[34px] text-[36px]",
  h2: "font-medium text-[12px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

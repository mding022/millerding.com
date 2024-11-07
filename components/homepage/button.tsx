
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string; // URL to navigate to, made optional
  onClick?: () => void; // Optional click handler
}

const Button: React.FC<ButtonProps> = ({ children, href, onClick, }) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    // Prevent the default behavior if onClick is defined
    if (onClick) {
      event.preventDefault(); // Prevent navigation if an onClick is provided
      onClick(); // Execute the onClick function
    }
  };

  const buttonContent = (
    <span className="flex items-center">
      {children}
      <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="#111111"
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
        >
          <path
            d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
            fill="#111111"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </span>
  );

  return (
    <a
      href={href} // Use href if provided
      onClick={handleClick} // Attach click handler
      className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#EFE8DD] bg-opacity-0 px-6 font-bold text-neutral-700"
    >
      {buttonContent}
    </a>
  );
};

export default Button;

// components/Button.js
import Link from 'next/link';

export default function Button({ children, href, variant = "primary", className = "" }) {
  const baseClasses = "btn fw-semibold";
  
  const variantClasses = {
    primary: "btn-gold",
    outline: "btn-outline-gold"
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <Link href={href} className={buttonClasses}>
      {children}
    </Link>
  );
}
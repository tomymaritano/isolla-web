import Link from 'next/link';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'outline-white';
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  href,
  onClick,
  variant = 'primary',
  children,
  className = ''
}: ButtonProps) {
  const baseStyles = 'inline-block px-6 py-2 border-2 transition-all duration-300 text-sm font-inter w-fit transform hover:scale-105';

  const variants = {
    primary: 'bg-black text-white border-black hover:bg-gray-800 hover:shadow-lg',
    outline: 'bg-transparent text-black border-black hover:bg-black hover:text-white hover:shadow-lg',
    'outline-white': 'bg-transparent text-white border-white hover:bg-white hover:text-black hover:shadow-lg',
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${className}`;
  const style = { letterSpacing: '0.5px' };

  if (href) {
    return (
      <Link href={href} className={buttonClass} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass} style={style}>
      {children}
    </button>
  );
}

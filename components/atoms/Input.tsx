interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  variant?: 'default' | 'white-border';
}

export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  variant = 'default',
}: InputProps) {
  const variants = {
    default: 'border-b-2 border-gray-300 text-black',
    'white-border': 'bg-transparent text-white placeholder-white/70 border-b-2 border-white',
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`px-4 py-2 outline-none font-inter text-[13px] ${variants[variant]} ${className}`}
    />
  );
}

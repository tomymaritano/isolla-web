import { ReactNode, CSSProperties } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'beige' | 'gray';
  style?: CSSProperties;
}

export default function Section({ children, className = '', background = 'white', style }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    beige: 'bg-[#F2EDE7]',
    gray: 'bg-gray-50',
  };

  return (
    <section className={`py-20 ${backgrounds[background]} ${className}`} style={style}>
      {children}
    </section>
  );
}

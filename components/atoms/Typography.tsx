import { typography, colors } from '@/lib/design-system';

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'label';
  font?: 'inter' | 'bricolage' | 'crimson';
  color?: keyof typeof colors.text;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Typography({
  variant,
  font = 'inter',
  color = 'primary',
  children,
  className = '',
  style = {},
}: TypographyProps) {
  const fontClass = `font-${font}`;
  const textColor = colors.text[color];

  const variants = {
    h1: 'text-[64px] leading-none',
    h2: 'text-[40px] leading-none',
    h3: 'text-[32px]',
    body: 'text-[18px]',
    caption: 'text-[13px]',
    label: 'text-[11px] uppercase tracking-wide',
  };

  const Component = variant.startsWith('h') ? variant : 'p';

  return (
    <Component
      className={`${fontClass} ${variants[variant]} ${className}`}
      style={{ color: textColor, ...style }}
    >
      {children}
    </Component>
  );
}

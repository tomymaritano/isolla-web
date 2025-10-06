import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

// Mock Next.js Link component
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, className, style }: { children: React.ReactNode; href: string; className?: string; style?: React.CSSProperties }) => {
    return <a href={href} className={className} style={style}>{children}</a>;
  },
}));

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('renders as Link when href is provided', () => {
    render(<Button href="/test">Go to test</Button>);
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', '/test');
  });

  it('renders as button when onClick is provided', () => {
    render(<Button onClick={() => {}}>Click</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  it('calls onClick handler when button is clicked', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click</Button>);
    const button = screen.getByRole('button');

    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies primary variant styles by default', () => {
    render(<Button>Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-black', 'text-white', 'border-black');
  });

  it('applies outline variant styles', () => {
    render(<Button variant="outline">Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-transparent', 'text-black', 'border-black');
  });

  it('applies outline-white variant styles', () => {
    render(<Button variant="outline-white">Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-transparent', 'text-white', 'border-white');
  });

  it('applies base styles to all variants', () => {
    render(<Button>Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('inline-block', 'px-6', 'py-2', 'border-2');
  });

  it('applies custom className', () => {
    render(<Button className="custom-class">Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('custom-class');
  });

  it('applies letter-spacing style', () => {
    render(<Button>Button</Button>);
    const button = screen.getByRole('button');
    expect(button).toHaveStyle({ letterSpacing: '0.5px' });
  });

  it('renders as Link with correct variant styles', () => {
    render(<Button href="/test" variant="outline">Link Button</Button>);
    const link = screen.getByRole('link');
    expect(link).toHaveClass('bg-transparent', 'text-black', 'border-black');
  });
});

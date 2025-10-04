import { render, screen } from '@testing-library/react';
import Typography from './Typography';

describe('Typography', () => {
  it('renders children correctly', () => {
    render(<Typography variant="body">Test Content</Typography>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('renders h1 element for h1 variant', () => {
    render(<Typography variant="h1">Heading 1</Typography>);
    const element = screen.getByText('Heading 1');
    expect(element.tagName).toBe('H1');
  });

  it('renders h2 element for h2 variant', () => {
    render(<Typography variant="h2">Heading 2</Typography>);
    const element = screen.getByText('Heading 2');
    expect(element.tagName).toBe('H2');
  });

  it('renders h3 element for h3 variant', () => {
    render(<Typography variant="h3">Heading 3</Typography>);
    const element = screen.getByText('Heading 3');
    expect(element.tagName).toBe('H3');
  });

  it('renders p element for body variant', () => {
    render(<Typography variant="body">Body text</Typography>);
    const element = screen.getByText('Body text');
    expect(element.tagName).toBe('P');
  });

  it('renders p element for caption variant', () => {
    render(<Typography variant="caption">Caption text</Typography>);
    const element = screen.getByText('Caption text');
    expect(element.tagName).toBe('P');
  });

  it('renders p element for label variant', () => {
    render(<Typography variant="label">Label text</Typography>);
    const element = screen.getByText('Label text');
    expect(element.tagName).toBe('P');
  });

  it('applies inter font class by default', () => {
    render(<Typography variant="body">Text</Typography>);
    const element = screen.getByText('Text');
    expect(element).toHaveClass('font-inter');
  });

  it('applies bricolage font class when specified', () => {
    render(<Typography variant="body" font="bricolage">Text</Typography>);
    const element = screen.getByText('Text');
    expect(element).toHaveClass('font-bricolage');
  });

  it('applies crimson font class when specified', () => {
    render(<Typography variant="body" font="crimson">Text</Typography>);
    const element = screen.getByText('Text');
    expect(element).toHaveClass('font-crimson');
  });

  it('applies h1 variant classes', () => {
    render(<Typography variant="h1">Heading</Typography>);
    const element = screen.getByText('Heading');
    expect(element).toHaveClass('text-[64px]', 'leading-none');
  });

  it('applies h2 variant classes', () => {
    render(<Typography variant="h2">Heading</Typography>);
    const element = screen.getByText('Heading');
    expect(element).toHaveClass('text-[40px]', 'leading-none');
  });

  it('applies label variant classes', () => {
    render(<Typography variant="label">Label</Typography>);
    const element = screen.getByText('Label');
    expect(element).toHaveClass('text-[11px]', 'uppercase', 'tracking-wide');
  });

  it('applies custom className', () => {
    render(<Typography variant="body" className="custom-class">Text</Typography>);
    const element = screen.getByText('Text');
    expect(element).toHaveClass('custom-class');
  });

  it('applies custom style', () => {
    render(
      <Typography variant="body" style={{ fontSize: '20px' }}>
        Text
      </Typography>
    );
    const element = screen.getByText('Text');
    expect(element).toHaveStyle({ fontSize: '20px' });
  });

  it('applies primary color by default', () => {
    render(<Typography variant="body">Text</Typography>);
    const element = screen.getByText('Text');
    expect(element).toHaveStyle({ color: '#262622' });
  });

  it('applies secondary color when specified', () => {
    render(<Typography variant="body" color="secondary">Text</Typography>);
    const element = screen.getByText('Text');
    expect(element).toHaveStyle({ color: '#545454' });
  });
});

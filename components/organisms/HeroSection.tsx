import Typography from '@/components/atoms/Typography';
import Button from '@/components/atoms/Button';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-gray-900 flex items-end overflow-hidden">
      <Image
        src="/heromain.jpg"
        alt="Hero background"
        fill
        className="object-cover animate-scale-in"
        priority
      />
      <div className="relative z-10 px-10 pb-16 animate-slide-up">
        <Typography variant="h1" font="bricolage" color="white" className="mb-8" style={{ letterSpacing: '-1px' }}>
          Furniture Design
        </Typography>
        <Button href="/productos" variant="outline-white">
          Ver Colección
        </Button>
      </div>
    </section>
  );
}

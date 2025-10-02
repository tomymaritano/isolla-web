import Image from 'next/image';
import Typography from '@/components/atoms/Typography';
import DesignerShowcase from '@/components/organisms/DesignerShowcase';
import { designers } from '@/lib/data/products';

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[600px] flex items-center justify-center">
        <Image
          src="/heroes/about.jpg"
          alt="Quienes Somos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-crimson text-white text-[28px] md:text-[40px] text-center">
            Quienes Somos
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-48">
        <div className="max-w-7xl mx-auto px-10">
          <div className="max-w-[1200px] mx-auto text-center">
            <Typography variant="h1" font="bricolage" className="mb-8">
              Nuestros Diseñadores
            </Typography>
            <p className="font-crimson mb-4" style={{ fontSize: '28px', lineHeight: '30.8px', letterSpacing: '-0.3px', color: '#262622' }}>
              ISOLLA es un espacio dedicado al diseño y la artesanía contemporánea. Nuestro objetivo es ofrecer muebles y objetos únicos que destacan por su calidad, funcionalidad y estilo.
            </p>
            <p className="font-crimson" style={{ fontSize: '28px', lineHeight: '30.8px', letterSpacing: '-0.3px', color: '#262622' }}>
              Representamos a diseñadores internacionales y trabajamos en colaboración con estudios y marcas reconocidas para desarrollar colecciones que combinan estética y practicidad. En esta primera edición presentamos piezas de {designers.map(d => d.name).join(', ')}.
            </p>
          </div>
        </div>
      </section>

      {/* Designer Showcases - Dynamic from data */}
      {designers.map((designer, index) => (
        <DesignerShowcase
          key={designer.id}
          title={designer.name}
          paragraphs={designer.bio}
          imageSrc={designer.images}
          imageAlt={designer.name}
          imageOnLeft={index === 1}
          textMaxWidth="max-w-[480px]"
        />
      ))}
    </>
  );
}

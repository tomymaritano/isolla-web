import Image from 'next/image';
import Section from '@/components/atoms/Section';
import Container from '@/components/atoms/Container';

export default function DesignSpaceSection() {
  return (
    <Section className="border-t border-b" style={{ borderColor: '#86858A' }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative w-full bg-gray-200">
            <Image
              src="/sections/design-space.png"
              alt="Espacio de diseño de mobiliario contemporáneo"
              width={1920}
              height={1141}
              className="w-full h-auto"
            />
          </div>
          <div className="flex items-center justify-center px-4">
            <h2 className="font-bricolage text-center max-w-[600px] text-[32px] md:text-[48px] lg:text-[64px] leading-tight md:leading-snug">
              Espacio de diseño de mobiliario contemporaneo
            </h2>
          </div>
        </div>
      </Container>
    </Section>
  );
}

import Image from 'next/image';
import Section from '@/components/atoms/Section';
import Container from '@/components/atoms/Container';
import Typography from '@/components/atoms/Typography';

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
          <div className="flex items-center justify-center">
            <Typography
              variant="h1"
              font="bricolage"
              className="text-center max-w-[600px]"
              style={{ lineHeight: '64px' }}
            >
              Espacio de diseño de mobiliario contemporaneo
            </Typography>
          </div>
        </div>
      </Container>
    </Section>
  );
}

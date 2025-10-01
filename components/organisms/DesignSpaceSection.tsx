import Image from 'next/image';
import Section from '@/components/atoms/Section';
import Container from '@/components/atoms/Container';
import Typography from '@/components/atoms/Typography';

export default function DesignSpaceSection() {
  return (
    <Section className="border-t border-b" style={{ borderColor: '#86858A' }}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative h-[800px] lg:h-[1141px] bg-gray-200 overflow-hidden">
            <Image
              src="/sections/design-space.png"
              alt="Espacio de diseño de mobiliario contemporáneo"
              fill
              className="object-cover"
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

import Image from 'next/image';
import Section from '@/components/atoms/Section';
import Container from '@/components/atoms/Container';
import Typography from '@/components/atoms/Typography';
import Button from '@/components/atoms/Button';

export default function CollaborationSection() {
  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 items-start">
          <div>
            <Typography
              variant="h3"
              font="bricolage"
              className="mb-8"
              style={{ lineHeight: '38px' }}
            >
              Colaboramos con reconocidos diseñadores para crear colecciones que transforman espacios, generando armonía entre forma y funcionalidad. Creemos en el diseño que inspira y en piezas que hacen del hogar un lugar auténtico y con identidad.
            </Typography>
            <Button href="/about" variant="outline">
              Quienes Somos
            </Button>
          </div>
          <div className="relative h-[800px] lg:h-[1141px] bg-gray-200 overflow-hidden">
            <Image
              src="/placeholder.jpg"
              alt="Colaboración de diseño Isolla"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

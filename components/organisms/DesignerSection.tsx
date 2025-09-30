import DesignerCard from '@/components/molecules/DesignerCard';
import Section from '@/components/atoms/Section';
import Container from '@/components/atoms/Container';
import { designers } from '@/lib/data/designers';

export default function DesignerSection() {
  return (
    <Section className="border-t" style={{ borderColor: '#86858A' }}>
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designers.map((designer) => (
            <DesignerCard key={designer.id} {...designer} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

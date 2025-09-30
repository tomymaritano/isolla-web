'use client';

import Section from '@/components/atoms/Section';
import Container from '@/components/atoms/Container';
import Typography from '@/components/atoms/Typography';
import { colors } from '@/lib/design-system';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Section>
      <Container>
        <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <Typography
            variant="h3"
            font="bricolage"
            className="max-w-[900px]"
            style={{ lineHeight: '30.8px' }}
          >
            ISOLLA surge de la pasión por la artesanía y el amor al diseño. Un proyecto que presenta muebles únicos que combinan creatividad, estética y significado cultural.
          </Typography>
        </div>
      </Container>
    </Section>
  );
}

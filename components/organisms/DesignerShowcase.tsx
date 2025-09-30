'use client';

import Image from 'next/image';
import Section from '@/components/atoms/Section';
import Container from '@/components/atoms/Container';
import Typography from '@/components/atoms/Typography';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface DesignerShowcaseProps {
  title: string | React.ReactNode;
  paragraphs: string[];
  imageSrc: string | string[];
  imageAlt: string;
  imageOnLeft?: boolean;
}

export default function DesignerShowcase({
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  imageOnLeft = false,
}: DesignerShowcaseProps) {
  const isMultipleImages = Array.isArray(imageSrc);
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();

  const renderImages = () => {
    if (isMultipleImages && imageSrc.length === 3) {
      return (
        <div ref={imageRef} className={`w-full lg:w-[1300px] flex flex-col gap-4 transition-all duration-700 ${imageVisible ? 'animate-scale-in' : 'opacity-0'}`}>
          <div className="relative w-full h-[400px] md:h-[600px] lg:h-[758px] bg-gray-200 overflow-hidden">
            <Image
              src={imageSrc[0]}
              alt={`${imageAlt} 1`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full h-[200px] md:h-[250px] lg:h-[283px] bg-gray-200 overflow-hidden">
              <Image
                src={imageSrc[1]}
                alt={`${imageAlt} 2`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative w-full h-[200px] md:h-[250px] lg:h-[283px] bg-gray-200 overflow-hidden">
              <Image
                src={imageSrc[2]}
                alt={`${imageAlt} 3`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      );
    }

    return (
      <div ref={imageRef} className={`relative w-full h-[400px] md:h-[600px] lg:w-[1300px] lg:h-[1056px] bg-gray-200 overflow-hidden transition-all duration-700 ${imageVisible ? 'animate-scale-in' : 'opacity-0'}`}>
        <Image
          src={imageSrc as string}
          alt={imageAlt}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    );
  };

  return (
    <Section>
      <Container>
        <div className={`grid grid-cols-1 lg:grid-cols-[1fr_1300px] gap-8 items-start ${imageOnLeft ? 'lg:grid-cols-[1300px_1fr]' : ''}`}>
          {imageOnLeft && renderImages()}
          <div ref={textRef} className={`px-4 transition-all duration-700 ${textVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <h2 className="font-bricolage mb-8 text-[28px] md:text-[40px]" style={{ lineHeight: '44px', letterSpacing: '-1.3px' }}>
              {title}
            </h2>
            {paragraphs.map((paragraph, index) => (
              <Typography
                key={index}
                variant="body"
                font="crimson"
                style={{ lineHeight: '28px' }}
                className={`text-[16px] md:text-[18px] ${index < paragraphs.length - 1 ? 'mb-4' : ''}`}
              >
                {paragraph}
              </Typography>
            ))}
          </div>
          {!imageOnLeft && renderImages()}
        </div>
      </Container>
    </Section>
  );
}

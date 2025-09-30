import Image from 'next/image';
import Typography from '@/components/atoms/Typography';
import Button from '@/components/atoms/Button';

interface DesignerCardProps {
  image: string;
  name: string;
  href: string;
}

export default function DesignerCard({ image, name, href }: DesignerCardProps) {
  return (
    <div className="relative h-[796px] overflow-hidden group">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-start p-8">
        <Typography variant="caption" font="inter" color="white" className="mb-2">
          Nuestros diseñadores
        </Typography>
        <Typography variant="h2" font="crimson" color="white" className="mb-4">
          {name}
        </Typography>
        <Button href={href} variant="outline-white">
          Ver Piezas
        </Button>
      </div>
    </div>
  );
}

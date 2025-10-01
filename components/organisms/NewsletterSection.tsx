import Image from 'next/image';
import Typography from '@/components/atoms/Typography';
import NewsletterForm from '@/components/molecules/NewsletterForm';

export default function NewsletterSection() {
  return (
    <section className="relative h-[400px] md:h-[600px] bg-gray-200">
      <div className="absolute inset-0">
        <Image
          src="/sections/newsletter.jpg"
          alt="Espacio de contacto Isolla"
          fill
          className="object-cover"
          priority={false}
        />
      </div>
      <div className="relative h-full flex flex-col items-center justify-center px-4 md:px-10">
        <Typography variant="label" font="inter" color="white" className="mb-4 text-center">
          Contactate con nosotros
        </Typography>
        <Typography variant="h2" font="crimson" color="white" className="mb-8 text-center text-[28px] md:text-[40px]">
          Enterate de nuestras novedades
        </Typography>
        <NewsletterForm />
      </div>
    </section>
  );
}

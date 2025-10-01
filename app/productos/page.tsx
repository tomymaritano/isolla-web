import Image from 'next/image';
import Typography from '@/components/atoms/Typography';
import ProductGrid from '@/components/organisms/ProductGrid';

export default function ProductosPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[672px] flex items-center justify-center">
        <Image
          src="/sections/products.jpg"
          alt="Productos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <Typography variant="label" font="inter" color="white" className="mb-2">
            Exploralos
          </Typography>
          <h1 className="font-crimson text-white text-[28px] md:text-[40px] text-center">
            Nuestros Productos
          </h1>
        </div>
      </section>

      {/* Products Grid */}
      <ProductGrid />
    </>
  );
}

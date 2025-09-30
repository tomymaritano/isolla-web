import Image from 'next/image';
import Typography from '@/components/atoms/Typography';
import ProductCard from '@/components/molecules/ProductCard';
import { products } from '@/lib/data/products';
import { notFound } from 'next/navigation';

export default async function ProductoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image Section - Half Screen */}
        <div className="relative h-[400px] md:h-[600px] lg:h-[1093px] px-4 md:px-10">
          <div className="relative h-full">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 md:p-10 lg:p-16 flex items-center">
          {/* Header */}
          <div className="mb-12">
            <p className="font-inter mb-4" style={{ fontSize: '26px', lineHeight: '33px', letterSpacing: '1.15px' }}>
              {product.category}
            </p>
            <h1 className="font-crimson mb-4" style={{ fontSize: '54px', fontWeight: 400, lineHeight: '66px', letterSpacing: '-0.4px', margin: '40px 0' }}>
              {product.title}
            </h1>
            <p className="font-crimson mb-6" style={{ fontSize: '40px', lineHeight: '49.5px', letterSpacing: '-0.6px' }}>
              {product.price}
            </p>
            {product.description && (
              <p className="font-crimson mb-8" style={{ fontSize: '18px' }}>
                {product.description}
              </p>
            )}
            <button className="bg-black text-white px-8 py-3 font-bricolage text-[16px] hover:bg-gray-800 transition">
              Consultar
            </button>
          </div>
        </div>
      </div>

      {/* Information and Specifications - Two Columns Below Image */}
      {(product.information || product.specifications) && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 px-4 md:px-10 lg:px-16 py-8 md:py-16">
          {/* Information Section */}
          {product.information && (
            <div>
              <h3 className="font-inter mb-6" style={{ fontSize: '22px' }}>
                Información
              </h3>
              <p className="font-crimson" style={{ fontSize: '24px', lineHeight: '30px', letterSpacing: '-0.3px' }}>
                {product.information}
              </p>
            </div>
          )}

          {/* Specifications Section */}
          {product.specifications && (
            <div>
              <h3 className="font-inter mb-6" style={{ fontSize: '22px' }}>
                Especificaciones
              </h3>

              <div className="space-y-6">
                {product.specifications.dimensions && (
                  <div>
                    <p className="font-crimson mb-2" style={{ fontSize: '24px', lineHeight: '30px', letterSpacing: '-0.3px' }}>
                      Dimensiones
                    </p>
                    <p className="font-crimson" style={{ fontSize: '24px', lineHeight: '30px', letterSpacing: '-0.3px' }}>{product.specifications.dimensions}</p>
                  </div>
                )}

                {product.specifications.materials && (
                  <div>
                    <p className="font-crimson mb-2" style={{ fontSize: '24px', lineHeight: '30px', letterSpacing: '-0.3px' }}>
                      Materiales
                    </p>
                    <ul className="font-crimson space-y-1" style={{ fontSize: '24px', lineHeight: '30px', letterSpacing: '-0.3px' }}>
                      {product.specifications.materials.map((material, index) => (
                        <li key={index}>{material}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.specifications.colors && (
                  <div>
                    <p className="font-crimson mb-2" style={{ fontSize: '24px', lineHeight: '30px', letterSpacing: '-0.3px' }}>
                      Colores cerámica
                    </p>
                    <p className="font-crimson" style={{ fontSize: '24px', lineHeight: '30px', letterSpacing: '-0.3px' }}>{product.specifications.colors}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Related Products */}
      <div className="px-4 md:px-10 lg:px-16 py-8 md:py-16">
        <Typography variant="h2" font="bricolage" className="mb-8">
          Descubrí otros productos
        </Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

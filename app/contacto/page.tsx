'use client';

import ProductCard from '@/components/molecules/ProductCard';
import { products } from '@/lib/data/products';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombreCompleto: '',
    email: '',
    telefono: '',
    pais: '',
    consulta: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Info */}
          <div>
            <h1 className="font-bricolage mb-12" style={{ fontSize: '75px', lineHeight: '1.1', letterSpacing: '-1.3px' }}>
              Contacto
            </h1>
            <p className="font-crimson mb-16" style={{ fontSize: '24px', lineHeight: '30px', letterSpacing: '-0.3px' }}>
              Escribinos para conocer nuestras novedades, coordinar una visita al showroom o explorar nuevas colaboraciones
            </p>
            <Link
              href="https://www.instagram.com/isollafurniture"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter hover:opacity-70 transition"
              style={{ fontSize: '20px' }}
            >
              Instagram | @isollafurniture
            </Link>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Primera fila: Nombre y Apellido, Email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-crimson text-[20px] mb-2" style={{ color: '#06272C' }}>
                    Nombre y apellido
                  </label>
                  <input
                    type="text"
                    name="nombreCompleto"
                    placeholder="Nombre y apellido"
                    value={formData.nombreCompleto}
                    onChange={handleChange}
                    className="w-full border font-inter text-[16px] focus:outline-none focus:border-gray-400 transition px-4 py-3"
                    style={{
                      borderColor: '#E8E8E8',
                      backgroundColor: '#F8F8F8',
                      color: 'rgba(6, 39, 44, 0.6)'
                    }}
                    required
                  />
                </div>
                <div>
                  <label className="block font-crimson text-[20px] mb-2" style={{ color: '#06272C' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border font-inter text-[16px] focus:outline-none focus:border-gray-400 transition px-4 py-3"
                    style={{
                      borderColor: '#E8E8E8',
                      backgroundColor: '#F8F8F8',
                      color: 'rgba(6, 39, 44, 0.6)'
                    }}
                    required
                  />
                </div>
              </div>

              {/* Segunda fila: Teléfono, País */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block font-crimson text-[20px] mb-2" style={{ color: '#06272C' }}>
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full border font-inter text-[16px] focus:outline-none focus:border-gray-400 transition px-4 py-3"
                    style={{
                      borderColor: '#E8E8E8',
                      backgroundColor: '#F8F8F8',
                      color: 'rgba(6, 39, 44, 0.6)'
                    }}
                    required
                  />
                </div>
                <div>
                  <label className="block font-crimson text-[20px] mb-2" style={{ color: '#06272C' }}>
                    País
                  </label>
                  <input
                    type="text"
                    name="pais"
                    placeholder="País"
                    value={formData.pais}
                    onChange={handleChange}
                    className="w-full border font-inter text-[16px] focus:outline-none focus:border-gray-400 transition px-4 py-3"
                    style={{
                      borderColor: '#E8E8E8',
                      backgroundColor: '#F8F8F8',
                      color: 'rgba(6, 39, 44, 0.6)'
                    }}
                    required
                  />
                </div>
              </div>

              {/* Tercera fila: Consulta */}
              <div>
                <label className="block font-crimson text-[20px] mb-2" style={{ color: '#06272C' }}>
                  Dejanos tu consulta
                </label>
                <textarea
                  name="consulta"
                  placeholder="Dejanos tu consulta"
                  value={formData.consulta}
                  onChange={handleChange}
                  rows={4}
                  className="w-full border font-inter text-[16px] focus:outline-none focus:border-gray-400 transition resize-none px-4 py-3"
                  style={{
                    borderColor: '#E8E8E8',
                    backgroundColor: '#F8F8F8',
                    color: 'rgba(6, 39, 44, 0.6)'
                  }}
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-black text-white px-8 py-3 font-inter text-[16px] hover:bg-gray-800 transition mt-4"
              >
                CONSULTAR
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="px-4 md:px-10 lg:px-16 py-8 md:py-16">
        <h2 className="font-bricolage mb-8 text-[28px] md:text-[40px]" style={{ letterSpacing: '-1.3px' }}>
          Descubrí otros productos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

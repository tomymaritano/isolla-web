import Link from "next/link";
import Image from "next/image";
import { colors, typography } from "@/lib/design-system";

const pages = [
  { href: "/about", label: "Quienes Somos" },
  { href: "/diseñadores", label: "Diseñadores" },
  { href: "/productos", label: "Productos" },
  { href: "/contacto", label: "Contacto" },
  { href: "/faq", label: "Preguntas Frecuentes" },
];

const socialLinks = [
  { href: "https://instagram.com/isolla", label: "Instagram" },
  { href: "https://tiktok.com/@isolla", label: "TikTok" },
];

const emails = [
  { email: "contact@isolla.co", label: "Contacto" },
  { email: "sales@isolla.co", label: "Ventas" },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200" role="contentinfo">
      <div className="px-4 md:px-10 py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 md:ml-10">
          {/* Logo */}
          <div className="flex justify-center md:justify-start">
            <Link href="/" aria-label="Ir a la página principal">
              <Image src="/logo.svg" alt="Logo de Isolla" width={280} height={92} className="md:w-[335px] md:h-[110px]" />
            </Link>
          </div>

          {/* Pages & Social + Emails */}
          <div className="grid grid-cols-2 gap-6 md:gap-8">
            {/* Pages */}
            <div>
              <ul className="space-y-2">
                {pages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="font-inter hover:text-gray-600 transition"
                      style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}
                    >
                      {page.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social & Emails */}
            <div>
              <ul className="space-y-2 mb-6">
                {socialLinks.map((social) => (
                  <li key={social.href}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-inter hover:text-gray-600 transition"
                      style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>

              <div className="space-y-2">
                {emails.map((item) => (
                  <a
                    key={item.email}
                    href={`mailto:${item.email}`}
                    className="block font-inter hover:text-gray-600 transition"
                    style={{ fontSize: typography.fontSize.sm, color: colors.text.secondary }}
                  >
                    {item.email}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

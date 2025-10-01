import DesignerShowcase from './DesignerShowcase';

export default function ColorsenseSection() {
  return (
    <DesignerShowcase
      title={
        <>
          Colorsense<br />
          by Arte Brotto<br />
          & Foglie d&apos;Oro
        </>
      }
      paragraphs={[
        "Artebrotto & Foglie d'Oro presentan Colorsense, una propuesta única de nueve tonalidades exclusivas diseñadas para transformar la madera de nogal americano en piezas de diseño contemporáneo.",
        "En esta colección, la mesa de apoyo Leonardo se convierte en la protagonista, logrando un perfecto equilibrio entre elegancia y originalidad gracias a la combinación de madera de nogal americano con mármol y cerámica en varios tonos y posibilidades."
      ]}
      imageSrc={["/collections/colorsense/1.png", "/collections/colorsense/2.png", "/collections/colorsense/3.png"]}
      imageAlt="Colección Colorsense by Arte Brotto & Foglie d'Oro"
    />
  );
}

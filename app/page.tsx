import HeroSection from '@/components/organisms/HeroSection';
import ProductGrid from '@/components/organisms/ProductGrid';
import DesignerSection from '@/components/organisms/DesignerSection';
import AboutSection from '@/components/organisms/AboutSection';
import CollaborationSection from '@/components/organisms/CollaborationSection';
import DesignSpaceSection from '@/components/organisms/DesignSpaceSection';
import ColorsenseSection from '@/components/organisms/ColorsenseSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductGrid />
      <CollaborationSection />
      <DesignSpaceSection />
      <DesignerSection />
      <ColorsenseSection />
    </>
  );
}

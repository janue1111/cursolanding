import React from 'react';
import LandingHeader from '../components/LandingHeader';
import HotmartLogo from '../components/HotmartLogo';
import UserAccessLink from '../components/UserAccessLink';
import GuaranteeBanner from '../components/GuaranteeBanner';
import ProductImage from '../components/ProductImage';
import CopyPasteHeadline from '../components/CopyPasteHeadline';
import PromoVideo from '../components/PromoVideo';
import SalesTestimonials from '../components/SalesTestimonials';
import SalesStats from '../components/SalesStats';
import VideoGallery from '../components/VideoGallery';
import UserTransformations from '../components/UserTransformations';
import BenefitsSection from '../components/BenefitsSection';
import InstructorInfo from '../components/InstructorInfo';
import FAQSection from '../components/FAQSection';
import CTAButton from '../components/CTAButton';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="landing-page">
      <LandingHeader />

      <main className="landing-container">
        <HotmartLogo />
        <UserAccessLink />
        <GuaranteeBanner />
        <ProductImage />
        <CopyPasteHeadline />
        <CTAButton />
        <PromoVideo />
        <CTAButton />
        <SalesTestimonials />
        <SalesStats />
        <CTAButton />
        <VideoGallery />
        <CTAButton />
        <UserTransformations />
        <CTAButton />
        <BenefitsSection />
        <CTAButton />
        <InstructorInfo />
        <CTAButton />
        <FAQSection />
        <CTAButton />
        <Footer />
      </main>
    </div>
  );
}

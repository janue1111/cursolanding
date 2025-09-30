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
    <div className="min-h-screen">
      <LandingHeader />
      
      <main className="container mx-auto px-4">
        <HotmartLogo />
        <UserAccessLink />
        <GuaranteeBanner />
        <ProductImage />
        <CopyPasteHeadline />
        <PromoVideo />
        <SalesTestimonials />
        <SalesStats />
        <VideoGallery />
        <UserTransformations />
        <BenefitsSection />
        <InstructorInfo />
        <FAQSection />
        <CTAButton />
        <Footer />
      </main>
    </div>
  );
}

import Image from "next/image";

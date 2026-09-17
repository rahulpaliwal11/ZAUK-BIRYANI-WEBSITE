import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { FeaturedDishes } from './components/sections/FeaturedDishes';
import { MenuSection } from './components/sections/MenuSection';
import { OffersSection } from './components/sections/OffersSection';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { AboutSection } from './components/sections/AboutSection';
import { GallerySection } from './components/sections/GallerySection';
import { ReviewsSection } from './components/sections/ReviewsSection';
import { LocationSection } from './components/sections/LocationSection';
import { OrderHubSection } from './components/sections/OrderHubSection';
import { Footer } from './components/layout/Footer';
import { MobileOrderBar } from './components/layout/MobileOrderBar';
import { CartDrawer } from './components/ui/CartDrawer';
import { ReservationModal } from './components/ui/ReservationModal';
import { ToastContainer } from './components/ui/Toast';

export const App: React.FC = () => {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-wine-950 text-cream-100 relative selection:bg-gold-500 selection:text-wine-950">
        {/* Sticky Luxury Navbar */}
        <Navbar onOpenReservation={() => setIsReservationOpen(true)} />

        {/* Main Content Sections */}
        <main>
          <Hero onOpenReservation={() => setIsReservationOpen(true)} />
          <FeaturedDishes />
          <MenuSection />
          <OffersSection />
          <WhyChooseUs />
          <AboutSection onOpenReservation={() => setIsReservationOpen(true)} />
          <GallerySection />
          <ReviewsSection />
          <LocationSection onOpenReservation={() => setIsReservationOpen(true)} />
          <OrderHubSection />
        </main>

        {/* Royal Footer */}
        <Footer />

        {/* Mobile Floating Action Bar */}
        <MobileOrderBar />

        {/* Slide-out Interactive Cart Drawer */}
        <CartDrawer />

        {/* Table Booking & Reservation Modal */}
        <ReservationModal
          isOpen={isReservationOpen}
          onClose={() => setIsReservationOpen(false)}
        />

        {/* Global Toast Alerts */}
        <ToastContainer />
      </div>
    </CartProvider>
  );
};

export default App;

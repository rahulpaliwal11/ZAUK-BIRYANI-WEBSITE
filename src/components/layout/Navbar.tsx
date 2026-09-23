import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../../data/restaurantInfo';
import { useCart } from '../../context/CartContext';
import { Logo } from '../ui/Logo';
import { 
  ShoppingBag, 
  Menu as MenuIcon, 
  X, 
  Phone, 
  Sparkles, 
  CalendarCheck
} from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const { totalItems, openCart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Bestsellers', href: '#featured' },
    { label: 'Royal Menu', href: '#menu' },
    { label: 'Delivery', href: '#delivery' },
    { label: 'Offers', href: '#offers' },
    { label: 'Our Craft', href: '#craft' },
    { label: 'Story', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-wine-950/95 backdrop-blur-xl py-2.5 sm:py-3 border-b border-gold-500/25 shadow-2xl shadow-wine-950/80'
            : 'bg-gradient-to-b from-wine-950/95 via-wine-950/60 to-transparent py-3 sm:py-4 xl:py-5'
        }`}
      >
        <div className="w-full max-w-[1720px] mx-auto px-3 sm:px-5 lg:px-6 xl:px-8 2xl:px-12 flex items-center justify-between gap-2 lg:gap-3 xl:gap-6">
          
          {/* Logo & Brand Identity */}
          <a
            href="#hero"
            className="flex items-center flex-shrink-0 group focus:outline-none"
            aria-label="Zouk Biryani & Main Course Home"
          >
            <Logo showText={true} size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center gap-2 lg:gap-2.5 xl:gap-3.5 2xl:gap-6 bg-wine-900/60 border border-wine-700/60 px-3.5 xl:px-5 2xl:px-7 py-1.5 xl:py-2 rounded-full backdrop-blur-md shadow-inner flex-shrink min-w-0">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[11px] xl:text-[11.5px] 2xl:text-xs uppercase tracking-wider font-semibold text-cream-200/90 hover:text-gold-400 transition-colors relative py-1 whitespace-nowrap after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gold-gradient hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center flex-shrink-0 gap-2 sm:gap-2.5 xl:gap-3">
            {/* Table Booking Button */}
            <button
              onClick={onOpenReservation}
              className="hidden xl:flex items-center gap-1.5 px-3 xl:px-3.5 2xl:px-4 py-2 rounded-xl bg-wine-850 hover:bg-wine-800 border border-gold-500/30 text-gold-300 hover:text-gold-200 text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow-gold-sm hover:border-gold-400 active:scale-95 whitespace-nowrap"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>Book Table</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2 sm:p-2.5 rounded-xl bg-wine-850 hover:bg-wine-800 border border-gold-500/35 text-cream-100 hover:text-gold-300 transition-all shadow-gold-sm group active:scale-95 flex-shrink-0"
              aria-label={`View Royal Feast tray with ${totalItems} items`}
            >
              <ShoppingBag className="w-4.5 h-4.5 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-gold-gradient text-wine-950 text-[11px] font-black flex items-center justify-center shadow-gold-sm animate-bounce">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Prominent Order Now CTA */}
            <a
              href="#menu"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 sm:px-4 xl:px-5 py-2 xl:py-2.5 rounded-xl bg-gold-gradient hover:brightness-110 text-wine-950 font-black text-xs uppercase tracking-wider shadow-gold-sm hover:shadow-gold-md transition-all active:scale-95 whitespace-nowrap flex-shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Order Now</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-xl bg-wine-850 border border-wine-700 text-cream-200 hover:text-cream-100 focus:outline-none flex-shrink-0"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute inset-0 bg-black/85 backdrop-blur-sm"
          />
          <div className="absolute top-16 right-0 left-0 bg-wine-950/98 border-b border-gold-500/30 p-6 space-y-4 shadow-2xl animate-fadeIn">
            <nav className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-cream-200 hover:text-gold-300 hover:bg-wine-850 rounded-xl transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-gold-500/40 text-xs">→</span>
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-wine-800 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                  `Hello ${RESTAURANT_INFO.name}, I would like to place an order!`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm hover:brightness-110"
              >
                <span>Order via WhatsApp ({RESTAURANT_INFO.phone})</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className="w-full py-3 rounded-xl bg-wine-850 border border-gold-500/40 text-gold-300 font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
              >
                <CalendarCheck className="w-4 h-4 text-gold-400" />
                <span>Reserve a Royal Table</span>
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                className="w-full py-3 rounded-xl bg-wine-900 border border-wine-700 text-cream-200 font-semibold text-xs flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

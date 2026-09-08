import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

export const ZoukWordmark: React.FC<{
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  centered?: boolean;
}> = ({ className = '', size = 'md', centered = false }) => {
  const textSize = {
    sm: 'text-lg tracking-[0.2em]',
    md: 'text-2xl sm:text-3xl tracking-[0.22em]',
    lg: 'text-3xl sm:text-4xl md:text-5xl tracking-[0.24em]',
  };

  const subSize = {
    sm: 'text-[7px] tracking-[0.28em]',
    md: 'text-[8.5px] sm:text-[9.5px] tracking-[0.3em]',
    lg: 'text-[10px] sm:text-[12px] tracking-[0.32em]',
  };

  const diamondSize = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-2.5 h-2.5',
  };

  return (
    <div className={`flex flex-col ${centered ? 'items-center text-center' : 'items-start'} ${className}`}>
      {/* Brand Title: ZOUK with diamond jewel in center of O */}
      <div
        className={`font-serif font-black ${textSize[size]} text-transparent bg-clip-text bg-gradient-to-r from-[#FFFDF5] via-[#FCEAA8] to-[#ECCB77] drop-shadow-sm flex items-center leading-none select-none`}
      >
        <span>Z</span>
        <span className="relative inline-flex items-center justify-center mx-[0.06em]">
          <span>O</span>
          <span className={`absolute ${diamondSize[size]} bg-gradient-to-tr from-[#E5C56A] to-[#FFF5D1] rotate-45 transform shadow-[0_0_8px_rgba(252,234,168,0.9)]`} />
        </span>
        <span>U</span>
        <span>K</span>
      </div>

      {/* Subtitle: BIRYANI & MAIN COURSE with flanking gold lines */}
      <div className={`flex items-center gap-2 w-full mt-1.5 ${centered ? 'justify-center' : ''}`}>
        <span className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#ECCB77]/70 to-[#ECCB77]" />
        <span className={`font-sub uppercase ${subSize[size]} text-cream-100 font-extrabold whitespace-nowrap`}>
          Biryani &amp; Main Course
        </span>
        <span className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#ECCB77]/70 to-[#ECCB77]" />
      </div>
    </div>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  showText = false,
  size = 'md',
}) => {
  const sizeMap = {
    xs: 'w-7 h-7',
    sm: 'w-9 h-9',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
    '2xl': 'w-32 h-32',
  };

  return (
    <div className={`inline-flex items-center gap-3 group select-none ${className}`}>
      {/* Scalloped Brand Emblem Medallion */}
      <div
        className={`relative ${sizeMap[size]} rounded-full flex-shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-gold-sm hover:shadow-gold-md`}
      >
        <img
          src="/logo.svg"
          alt="ZOUK BIRYANI & MAIN COURSE Logo"
          className="w-full h-full object-contain drop-shadow-[0_4px_12px_rgba(84,20,55,0.6)]"
        />
      </div>

      {showText && (
        <ZoukWordmark size={size === 'lg' || size === 'xl' || size === '2xl' ? 'lg' : size === 'sm' ? 'sm' : 'md'} />
      )}
    </div>
  );
};

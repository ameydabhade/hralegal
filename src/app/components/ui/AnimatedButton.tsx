'use client';

interface AnimatedButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent' | 'subtle' | 'modern';
  onClick?: () => void;
}

export const AnimatedButton = ({ children, className = '', href, variant = 'primary', onClick }: AnimatedButtonProps) => {
  const baseClasses = "relative inline-flex items-center justify-center px-6 py-3 font-semibold text-sm transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 rounded-lg group overflow-hidden";
  
  const variants = {
    primary: `
      bg-gradient-to-r from-beige-600 to-beige-700
      hover:from-beige-700 hover:to-beige-800
      text-white shadow-lg hover:shadow-xl
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-white before:to-transparent 
      before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20
    `,
    secondary: `
      bg-transparent border-2 border-beige-600 text-beige-600
      hover:bg-beige-600 hover:text-white hover:border-beige-700
      before:absolute before:inset-0 before:bg-beige-600
      before:scale-x-0 before:origin-left before:transition-transform before:duration-300
      hover:before:scale-x-100 before:-z-10
    `,
    accent: `
      bg-gradient-to-r from-beige-400 to-emerald-500
      hover:from-beige-600 hover:to-emerald-600
      shadow-lg hover:shadow-beige-400/25
      text-white relative
      before:p-[2px] before:bg-gradient-to-r before:from-beige-400 before:to-emerald-400
      before:absolute before:inset-0 before:rounded-lg before:-z-10
    `,
    subtle: `
      bg-gradient-to-r from-beige-400 to-beige-600
      hover:from-beige-600 hover:to-beige-700
      text-white shadow-md hover:shadow-lg
      backdrop-blur-sm
    `,
    modern: `
      bg-gradient-to-r from-emerald-500 to-beige-600
      hover:from-emerald-600 hover:to-beige-700
      text-white shadow-lg hover:shadow-xl
      border border-white/20
    `
  };

  const Component = href ? 'a' : 'button';
  const combinedClasses = `${baseClasses} ${variants[variant]} ${className}`.replace(/\s+/g, ' ').trim();
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={combinedClasses}
    >
      <span className="relative z-10">{children}</span>
    </Component>
  );
}; 
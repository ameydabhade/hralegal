interface PageWrapperProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function PageWrapper({ 
  children, 
  title, 
  subtitle, 
  className = "" 
}: PageWrapperProps) {
  return (
    <div className={`min-h-screen bg-[#ECE5DE] ${className}`}>
      {/* Consistent Hero Section */}
      <section className="pt-32 pb-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 border-b-4 border-gray-800 pb-4 inline-block">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>
      
      {/* Page Content */}
      {children}
    </div>
  );
} 
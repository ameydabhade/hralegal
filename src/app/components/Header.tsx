'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface DropdownItem {
  label: string;
  href: string;
  description?: string;
}

const practiceAreaGroups = [
  {
    title: 'Corporate, Commercial & Company Law',
    color: 'blue',
    underlineColor: 'bg-blue-500',
    textColor: 'text-blue-600',
    items: [
      'Contracts/Agreements & Advisory',
      'Company Secretarial & Governance',
      'Mergers & Acquisitions, JVs & Strategic Alliances',
      'Employment, Labour & Industrial Relations',
      'Intellectual Property',
      'Startups & Emerging Businesses'
    ]
  },
  {
    title: 'Finance, Taxation & Regulatory',
    color: 'amber',
    underlineColor: 'bg-amber-500',
    textColor: 'text-amber-600',
    items: [
      'Corporate Financing',
      'Restructuring, Insolvency & Bankruptcy',
      'Taxation',
      'Compliance, Bribery & White Collar Crime'
    ]
  },
  {
    title: 'Technology, Media & Data',
    color: 'orange',
    underlineColor: 'bg-orange-500',
    textColor: 'text-orange-600',
    items: [
      'Technology & Digital Contracts',
      'Media, Entertainment & Telecommunications',
      'Data Privacy, Cybersecurity & Protection'
    ]
  },
  {
    title: 'Real Estate, Trade & Other Advisory',
    color: 'green',
    underlineColor: 'bg-green-500',
    textColor: 'text-green-600',
    items: [
      'Real Estate',
      'International Trade',
      'Project Management'
    ]
  }
];

const sectorGroups = [
  {
    title: 'Traditional Industries',
    color: 'blue',
    underlineColor: 'bg-blue-500',
    textColor: 'text-blue-600',
    items: [
      'Energy',
      'Infrastructure',
      'Insurance',
      'Real Estate'
    ]
  },
  {
    title: 'Digital & Technology',
    color: 'purple',
    underlineColor: 'bg-purple-500',
    textColor: 'text-purple-600',
    items: [
      'Technology & Telecommunications',
      'E-Commerce & Retail',
      'Internet'
    ]
  },
  {
    title: 'Media & Entertainment',
    color: 'orange',
    underlineColor: 'bg-orange-500',
    textColor: 'text-orange-600',
    items: [
      'Media & Entertainment',
      'Publishing',
      'Education & Learning'
    ]
  },
  {
    title: 'Healthcare & Consumer',
    color: 'green',
    underlineColor: 'bg-green-500',
    textColor: 'text-green-600',
    items: [
      'Pharmaceuticals, Healthcare & Life Sciences',
      'Food & Beverages'
    ]
  }
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
      }, []);

  const handleMouseEnter = (label: string) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
      setActiveMegaMenu(null);
    }, 300); // 300ms delay before hiding
    setHoverTimeout(timeout);
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleMegaMenuLeave = () => {
    const timeout = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 200);
    setHoverTimeout(timeout);
  };

  // Navigation items with actual page sections
  const navItems: { label: string; href: string; dropdown: DropdownItem[] }[] = [
    {
      label: 'Home',
      href: '/',
      dropdown: []
    },
    {
      label: 'About Us',
      href: '/about',
      dropdown: [
        { label: 'meet the founder', href: '/about#founder' },
        { label: 'our story', href: '/about#story' }
      ]
    },
    {
      label: 'Expertise',
      href: '/practice-areas',
      dropdown: [
        { label: 'Practice Areas', href: '/practice-areas' },
        { label: 'Sectors', href: '/sectors' }
      ]
    },
    {
      label: 'Learners Page',
      href: '/learners-page',
      dropdown: []
    },
    {
      label: 'Contact',
      href: '/contact',
      dropdown: []
    }
  ];

  return (
        <header className={`fixed top-4 left-4 right-4 z-50 backdrop-blur-sm border border-beige-300 rounded-[32px] transition-all duration-500 ease-out mx-auto max-w-7xl hover:shadow-xl ${
      isScrolled 
        ? 'bg-beige-200/98 shadow-2xl border-beige-400' 
        : 'bg-beige-100/95 shadow-lg hover:bg-beige-200/98'
    }`}>
        <nav className="max-w-7xl mx-auto px-4 lg:px-6">
          <div className="flex items-center justify-between py-2">
          {/* Logo with Corner Bracket Design */}
          <Link 
            href="/" 
            className="relative flex items-center text-lg font-bold text-gray-900 transition-all duration-300 transform hover:scale-105 group"
          >
            {/* Corner Bracket Frame */}
            <div className="relative px-3 py-1.5">
              {/* Top-left corner bracket */}
              <div className="absolute top-0 left-0 w-5 h-5 transition-all duration-300 group-hover:w-6 group-hover:h-6">
                <div className="absolute top-0 left-0 w-full h-1 bg-black group-hover:bg-gray-800"></div>
                <div className="absolute top-0 left-0 w-1 h-full bg-black group-hover:bg-gray-800"></div>
              </div>
              
              {/* Bottom-right corner bracket */}
              <div className="absolute bottom-0 right-0 w-5 h-5 transition-all duration-300 group-hover:w-6 group-hover:h-6">
                <div className="absolute bottom-0 right-0 w-full h-1 bg-black group-hover:bg-gray-800"></div>
                <div className="absolute bottom-0 right-0 w-1 h-full bg-black group-hover:bg-gray-800"></div>
              </div>
              
              {/* HRA LEGAL text with hover effects */}
              <div className="relative overflow-hidden">
                <span className="relative z-10 transition-all duration-300 group-hover:text-red-600 font-semibold tracking-wide">
                  HRA LEGAL
                </span>
                
                {/* Underline effect on hover */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                
                {/* Background shape that changes on hover */}
                <span className="absolute inset-0 bg-beige-700 transform scale-x-0 transition-all duration-300 group-hover:scale-x-100 origin-left opacity-0 group-hover:opacity-10 rounded"></span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Clean single titles */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
                             <div
                 key={item.label}
                 className="relative"
                 onMouseEnter={() => handleMouseEnter(item.label)}
                 onMouseLeave={handleMouseLeave}
               >
                <Link 
                  href={item.href} 
                  className="relative text-red-600 hover:text-red-700 transition-all duration-300 text-sm font-semibold group transform hover:-translate-y-0.5"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                
                                 {/* Dropdown Menu */}
                 {item.dropdown.length > 0 && activeDropdown === item.label && (
                   <div 
                     className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-3 z-50"
                     onMouseEnter={handleDropdownMouseEnter}
                     onMouseLeave={handleMouseLeave}
                   >
                    {item.dropdown.map((subsection) => (
                      <div key={subsection.label} className="relative">
                        <div
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 lowercase cursor-pointer"
                          onMouseEnter={() => {
                            if (subsection.label === 'Practice Areas') {
                              setActiveMegaMenu('practice-areas');
                            } else if (subsection.label === 'Sectors') {
                              setActiveMegaMenu('sectors');
                            } else {
                              setActiveMegaMenu(null);
                            }
                          }}
                          onMouseLeave={() => {
                            // Keep mega menu open when moving to it
                          }}
                          onClick={() => {
                             window.location.href = subsection.href;
                             setActiveDropdown(null);
                             setActiveMegaMenu(null);
                             if (hoverTimeout) {
                               clearTimeout(hoverTimeout);
                               setHoverTimeout(null);
                             }
                           }}
                        >
                          {subsection.label}
                        </div>
                        
                        {/* Mega Menu for Practice Areas */}
                        {subsection.label === 'Practice Areas' && activeMegaMenu === 'practice-areas' && (
                          <div 
                            className="fixed left-1/2 transform -translate-x-1/2 top-32 w-[90vw] max-w-6xl bg-white rounded-lg shadow-xl border border-gray-100 p-6 z-60"
                            onMouseEnter={() => {
                              setActiveMegaMenu('practice-areas');
                              if (hoverTimeout) {
                                clearTimeout(hoverTimeout);
                                setHoverTimeout(null);
                              }
                            }}
                            onMouseLeave={handleMegaMenuLeave}
                          >
                            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                              {practiceAreaGroups.map((group) => (
                                <div key={group.title} className="space-y-3">
                                  {/* Group Header */}
                                  <div>
                                    <h3 className={`text-lg font-bold ${group.textColor} mb-2`}>
                                      {group.title}
                                    </h3>
                                    <div className={`h-0.5 w-12 ${group.underlineColor}`}></div>
                                  </div>

                                  {/* Practice Items */}
                                  <div className="space-y-1.5">
                                    {group.items.slice(0, 6).map((item, itemIndex) => (
                                      <div
                                        key={itemIndex}
                                        className="flex items-start group cursor-pointer"
                                      >
                                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0 group-hover:bg-red-500 transition-colors"></div>
                                        <span className="text-sm text-gray-700 leading-relaxed hover:text-red-600 transition-colors">
                                          {item}
                                        </span>
                                      </div>
                                    ))}
                                    {group.items.length > 6 && (
                                      <div className="text-sm text-red-600 font-medium cursor-pointer hover:text-red-700">
                                        + {group.items.length - 6} more areas
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                            

                          </div>
                        )}

                        {/* Mega Menu for Sectors */}
                        {subsection.label === 'Sectors' && activeMegaMenu === 'sectors' && (
                          <div 
                            className="fixed left-1/2 transform -translate-x-1/2 top-32 w-[90vw] max-w-6xl bg-white rounded-lg shadow-xl border border-gray-100 p-6 z-60"
                            onMouseEnter={() => {
                              setActiveMegaMenu('sectors');
                              if (hoverTimeout) {
                                clearTimeout(hoverTimeout);
                                setHoverTimeout(null);
                              }
                            }}
                            onMouseLeave={handleMegaMenuLeave}
                          >
                            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                              {sectorGroups.map((group) => (
                                <div key={group.title} className="space-y-3">
                                  {/* Group Header */}
                                  <div>
                                    <h3 className={`text-lg font-bold ${group.textColor} mb-2`}>
                                      {group.title}
                                    </h3>
                                    <div className={`h-0.5 w-12 ${group.underlineColor}`}></div>
                                  </div>

                                  {/* Sector Items */}
                                  <div className="space-y-1.5">
                                    {group.items.slice(0, 6).map((item, itemIndex) => (
                                      <div
                                        key={itemIndex}
                                        className="flex items-start group cursor-pointer"
                                      >
                                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0 group-hover:bg-red-500 transition-colors"></div>
                                        <span className="text-sm text-gray-700 leading-relaxed hover:text-red-600 transition-colors">
                                          {item}
                                        </span>
                                      </div>
                                    ))}
                                    {group.items.length > 6 && (
                                      <div className="text-sm text-red-600 font-medium cursor-pointer hover:text-red-700">
                                        + {group.items.length - 6} more sectors
                                      </div>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Optimized size */}
          <div className="hidden lg:block relative z-10">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2 bg-red-600 text-white text-sm font-semibold rounded-md hover:bg-red-700 transition-colors duration-200"
            >
              Get Legal Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg bg-beige-100 hover:bg-beige-200 transition-all duration-300 transform hover:scale-110 hover:rotate-3 group"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg 
              className={`w-4 h-4 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180' : 'rotate-0'}`}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - Clean titles */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pb-3 border-t border-beige-200 mt-3 pt-3">
            <div className="flex flex-col gap-3 animate-in slide-in-from-top duration-300">
              {navItems.map((item) => (
                <Link 
                  key={item.label}
                  href={item.href} 
                  className="text-red-600 hover:text-red-700 transition-colors text-xs font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div onClick={() => setIsMobileMenuOpen(false)}>
                <Link 
                  href="/contact"
                  className="text-red-600 hover:text-red-700 transition-colors text-xs font-medium relative w-full text-center block mt-2"
                >
                  Get Legal Consultation
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
} 
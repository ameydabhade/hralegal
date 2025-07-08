'use client';
import { useState, useEffect, useRef } from 'react';
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
  
  const headerRef = useRef<HTMLElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Click outside to close mega menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setActiveMegaMenu(null);
      }
    };

    if (activeMegaMenu || activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeMegaMenu, activeDropdown]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
      if (megaMenuTimeoutRef.current) {
        clearTimeout(megaMenuTimeoutRef.current);
      }
    };
  }, []);

  const handleExpertiseHover = () => {
    // Clear any existing timeout
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown('Expertise');
    setActiveMegaMenu(null);
  };

  const handleExpertiseLeave = () => {
    // Add a delay before closing the dropdown
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setActiveMegaMenu(null);
    }, 3000); // 300ms delay
  };



  const closeAllDropdowns = () => {
    // Clear any pending timeouts
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }
    setActiveDropdown(null);
    setActiveMegaMenu(null);
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
    <header 
      ref={headerRef}
      className={`fixed top-4 left-4 right-4 z-50 backdrop-blur-sm border border-gray-300 rounded-[32px] transition-all duration-500 ease-out mx-auto max-w-7xl hover:shadow-xl ${
        isScrolled 
          ? 'bg-[#ECE5DE]/98 shadow-2xl border-gray-400'
          : 'bg-[#ECE5DE]/95 shadow-lg hover:bg-[#ECE5DE]/98'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between py-2">
          {/* Logo with Corner Bracket Design */}
          <Link 
            href="/" 
            className="relative flex items-center text-lg font-bold text-gray-900 transition-all duration-300 transform hover:scale-105 group"
            onClick={closeAllDropdowns}
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
                <span className="absolute inset-0 bg-gray-700 transform scale-x-0 transition-all duration-300 group-hover:scale-x-100 origin-left opacity-0 group-hover:opacity-10 rounded"></span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Clean single titles */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.label === 'Expertise' ? (
                  <div 
                    className="relative"
                    onMouseEnter={handleExpertiseHover}
                    onMouseLeave={handleExpertiseLeave}
                  >
                    <Link 
                      href="/practice-areas"
                    className="relative text-gray-700 hover:text-gray-900 transition-all duration-300 text-sm font-semibold group transform hover:-translate-y-0.5"
                      onClick={closeAllDropdowns}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  </div>
                ) : (
                  <Link 
                    href={item.href} 
                    className="relative text-gray-700 hover:text-gray-900 transition-all duration-300 text-sm font-semibold group transform hover:-translate-y-0.5"
                    onClick={closeAllDropdowns}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
                
                {/* Dropdown Menu for Expertise */}
                {item.label === 'Expertise' && activeDropdown === 'Expertise' && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-3 z-50"
                    onMouseEnter={handleExpertiseHover}
                    onMouseLeave={handleExpertiseLeave}
                  >
                    {item.dropdown.map((subsection) => (
                      <div key={subsection.label} className="relative">
                        <button
                          className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors duration-200 lowercase"
                          onMouseEnter={() => {
                            // Clear any existing mega menu timeout
                            if (megaMenuTimeoutRef.current) {
                              clearTimeout(megaMenuTimeoutRef.current);
                              megaMenuTimeoutRef.current = null;
                            }
                            
                            if (subsection.label === 'Practice Areas') {
                              setActiveMegaMenu('practice-areas');
                            } else if (subsection.label === 'Sectors') {
                              setActiveMegaMenu('sectors');
                            }
                          }}
                          onClick={(e) => {
                            if (subsection.label === 'Practice Areas') {
                              window.location.href = '/practice-areas';
                              setActiveDropdown(null);
                              setActiveMegaMenu(null);
                            } else if (subsection.label === 'Sectors') {
                              window.location.href = '/sectors';
                              setActiveDropdown(null);
                              setActiveMegaMenu(null);
                            } else {
                              window.location.href = subsection.href;
                              setActiveDropdown(null);
                              setActiveMegaMenu(null);
                            }
                          }}
                        >
                          {subsection.label}
                        </button>
                        
                        {/* Mega Menu for Practice Areas */}
                        {subsection.label === 'Practice Areas' && activeMegaMenu === 'practice-areas' && (
                          <div 
                            className="fixed left-1/2 transform -translate-x-1/2 top-32 w-[90vw] max-w-6xl bg-white rounded-lg shadow-xl border border-gray-100 p-6 z-60"
                            onMouseEnter={() => {
                              // Clear any existing timeout when hovering over mega menu
                              if (megaMenuTimeoutRef.current) {
                                clearTimeout(megaMenuTimeoutRef.current);
                                megaMenuTimeoutRef.current = null;
                              }
                              setActiveMegaMenu('practice-areas');
                            }}
                            onMouseLeave={() => {
                              // Add delay before closing mega menu
                              megaMenuTimeoutRef.current = setTimeout(() => {
                                setActiveMegaMenu(null);
                              }, 3000); // 300ms delay
                            }}
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
                                    {group.items.slice(0, 6).map((item, itemIndex) => {
                                      // Convert practice area name to URL slug
                                      const getUrlSlug = (name: string) => {
                                        const urlMap: { [key: string]: string } = {
                                          'Contracts/Agreements & Advisory': '/practice-areas/contracts-agreements-advisory',
                                          'Company Secretarial & Governance': '/practice-areas/company-secretarial-governance',
                                          'Mergers & Acquisitions, JVs & Strategic Alliances': '/practice-areas/mergers-acquisitions-jvs-strategic-alliances',
                                          'Employment, Labour & Industrial Relations': '/practice-areas/employment-labour-industrial-relations',
                                          'Intellectual Property': '/practice-areas/intellectual-property',
                                          'Startups & Emerging Businesses': '/practice-areas/startups-emerging-businesses',
                                          'Real Estate': '/practice-areas/real-estate',
                                          'International Trade': '/practice-areas/international-trade',
                                          'Project Management': '/practice-areas/project-management',
                                          'Technology & Digital Contracts': '/practice-areas/technology-digital-contracts',
                                          'Media, Entertainment & Telecommunications': '/practice-areas/media-entertainment-telecommunications',
                                          'Data Privacy, Cybersecurity & Protection': '/practice-areas/data-privacy-cybersecurity-protection',
                                          'Corporate Financing': '/practice-areas/corporate-financing',
                                          'Restructuring, Insolvency & Bankruptcy': '/practice-areas/restructuring-insolvency-bankruptcy',
                                          'Taxation': '/practice-areas/taxation',
                                          'Compliance, Bribery & White Collar Crime': '/practice-areas/compliance-bribery-white-collar-crime'
                                        };
                                        return urlMap[name] || null;
                                      };
                                      
                                      const url = getUrlSlug(item);
                                      
                                      return (
                                        <div
                                          key={itemIndex}
                                          className="flex items-start group cursor-pointer"
                                          onClick={() => {
                                            if (url) {
                                              window.location.href = url;
                                              setActiveDropdown(null);
                                              setActiveMegaMenu(null);
                                            }
                                          }}
                                        >
                                          <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0 group-hover:bg-gray-600 transition-colors"></div>
                                          <span className={`text-sm leading-relaxed transition-colors ${
                                            url ? 'text-gray-700 hover:text-gray-900 cursor-pointer' : 'text-gray-500'
                                          }`}>
                                            {item}
                                          </span>
                                        </div>
                                      );
                                    })}
                                    {group.items.length > 6 && (
                                      <div className="text-sm text-gray-600 font-medium cursor-pointer hover:text-gray-800">
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
                              // Clear any existing timeout when hovering over mega menu
                              if (megaMenuTimeoutRef.current) {
                                clearTimeout(megaMenuTimeoutRef.current);
                                megaMenuTimeoutRef.current = null;
                              }
                              setActiveMegaMenu('sectors');
                            }}
                            onMouseLeave={() => {
                              // Add delay before closing mega menu
                              megaMenuTimeoutRef.current = setTimeout(() => {
                                setActiveMegaMenu(null);
                              }, 3000); // 300ms delay
                            }}
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
                                        <div className="w-1 h-1 bg-gray-400 rounded-full mt-1.5 mr-2 flex-shrink-0 group-hover:bg-gray-600 transition-colors"></div>
                                        <span className="text-sm text-gray-700 leading-relaxed hover:text-gray-900 transition-colors">
                                          {item}
                                        </span>
                                      </div>
                                    ))}
                                    {group.items.length > 6 && (
                                      <div className="text-sm text-gray-600 font-medium cursor-pointer hover:text-gray-800">
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
              className="inline-flex items-center justify-center px-5 py-2 bg-[#B39F96] text-white text-sm font-semibold rounded-md hover:bg-[#A08B80] transition-colors duration-200"
              onClick={closeAllDropdowns}
            >
              Get Legal Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 hover:rotate-3 group"
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
          <div className="pb-3 border-t border-gray-200 mt-3 pt-3">
            <div className="flex flex-col gap-3 animate-in slide-in-from-top duration-300">
              {navItems.map((item) => (
                <Link 
                  key={item.label}
                  href={item.href} 
                  className="text-gray-700 hover:text-gray-900 transition-colors text-xs font-medium"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    closeAllDropdowns();
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <div onClick={() => {
                setIsMobileMenuOpen(false);
                closeAllDropdowns();
              }}>
                <Link 
                  href="/contact"
                  className="text-gray-700 hover:text-gray-900 transition-colors text-xs font-medium relative w-full text-center block mt-2"
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
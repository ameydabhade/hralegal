'use client';
import { useState, useEffect } from 'react';
import { AlertCircle } from 'lucide-react';

export default function DisclaimerModal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted disclaimer
    const hasAccepted = localStorage.getItem('hra-legal-disclaimer-accepted');
    if (!hasAccepted) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('hra-legal-disclaimer-accepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Redirect away from the site or show alternate message
    window.location.href = 'https://www.google.com';
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/20">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <AlertCircle className="w-8 h-8 text-gray-700 mr-3" />
              <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-gray-800 pb-2 inline-block">Important Disclaimer</h2>
            </div>
          </div>
          
          <div className="space-y-4 mb-8">
            <p className="text-lg font-semibold text-gray-800 border-b border-gray-800 pb-2 inline-block">
              Bar Council of India Disclaimer
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              As per the rules of the Bar Council of India, lawyers and law firms are not permitted to solicit work or advertise. By clicking on the &quot;I Agree&quot; button, you acknowledge and confirm that you are seeking information relating to HRA Legal on your own accord and that there has been no advertisement, touts, personal communication, solicitation, invitation or any other inducement of any sort whatsoever by or on behalf of HRA Legal or any of its members to solicit any work through this website.
            </p>
            
            <div className="bg-gray-50 border-l-4 border-gray-600 p-4 rounded">
              <p className="text-sm text-gray-700">
                <strong>Please note:</strong> This website is intended for informational purposes only and does not constitute legal advice. Any information provided should not be construed as creating an attorney-client relationship.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-end">
            <button
              onClick={handleDecline}
              className="px-6 py-3 border-2 border-gray-600 text-gray-600 font-semibold rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              I Do Not Agree
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200 shadow-lg"
            >
              I Agree & Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 
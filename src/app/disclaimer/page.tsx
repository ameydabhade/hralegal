import { AlertTriangle } from 'lucide-react';

export const metadata = {
  title: 'Disclaimer - HRA Legal',
  description: 'Legal disclaimer for HRA Legal website and services.',
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <AlertTriangle className="w-12 h-12 text-amber-600 mr-4" />
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                Disclaimer
              </h1>
            </div>
       
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 p-8 md:p-12">
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p>
                All the contents of this website are only for general information. The information on this Website is updated from time to time. Please note that there are no promises, and warranties (whether expressed or implied), as to the quality, accuracy, efficacy, completeness, reliance, and performance of the contents of the Website, including (but not limited) to any articles, comments, feedback and advertisements contained within the Website. Certain sections within the website are meant to be interactive, open forum for third parties, et al - and we decline any responsibility for any libel, damages or any other charges that may arise from the same. We will not be liable for any damages (including, without limitation, damages for any consequential loss or loss of business opportunities or projects, or loss of profits) howsoever arising, whether in contract, tort or otherwise from the use of or inability to use the Website or any of its contents including advertisements or from any action or omission taken as a result of using the Website or any such contents. This Website may contain some material in the form of inputs submitted by users and we accept no responsibility for the content or accuracy of such content nor do we make any representations by virtue of the contents of this Website in respect of the existence or availability of any goods and services advertised in the contributory and interactive sections. We make no warranty that the contents of the Website are free from infection by viruses or anything else which has contaminating or destructive properties and shall have no liability in respect thereof. Certain links on the Website lead to resources located on servers maintained by third parties over whom we have no control and accordingly, we accept no responsibility or liability for any of the material contained on those servers. The links are for general information of the users and they are not obliged to visit these links. Any uploads or downloads are not obligatory, and users do it at their sole risk and discretion. Part of this Website contains advertising and other material submitted to us by third parties. Although acceptance of advertisements on the Website on request is subject to our terms and conditions, we expressly disclaim any liability arising out of the usage of these products or services advertised on our Website. This Website will contain articles contributed by several individuals. The views are exclusively their own and do not represent the views of the Website or its management. All liability is excluded to the extent permitted by law including any implied terms. Indian law and jurisdiction applies with respect to contents of this Website. While using this Website for information purposes or otherwise, users acknowledge and accept the above disclaimer, Terms of Use and Privacy Policy.
              </p>
              
              <p className="mt-6">
                This document is published in accordance with the provisions of law of India in force including Information Technology (Intermediaries Guidelines) Rules, 2011 for access or usage of www.hralegal.com (&quot;Website&quot;).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
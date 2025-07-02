'use client';

import { motion } from 'framer-motion';

const preProductionAreas = [
  {
    id: 'development-agreements',
    title: 'Development Agreements',
    description: 'Development including First Look or Exclusive Arrangements, Option Agreements between production company and writer or rights holder, Writer\'s Agreements, and format rights.'
  },
  {
    id: 'financing-agreements',
    title: 'Financing Agreements',
    description: 'Multiple production companies or investors contribute funds, Investment agreements with investor terms for profit sharing and equity.'
  },
  {
    id: 'talent-crew-agreements',
    title: 'Talent and Crew Agreements',
    description: 'Location and Rights Agreements, Location Releases for shooting permissions, Music & Images Licensing for pre-existing content.'
  },
  {
    id: 'script-reviews',
    title: 'Script Reviews',
    description: 'Identify non-compliances or violation of any media laws/regulation to avoid future claims or liabilities.'
  },
  {
    id: 'production-media-liability',
    title: 'Production or Media Liability Insurance',
    description: 'Advising on elements for production or media liability insurance coverage for any unexpected events during production, including cancellation, injury, property damage or rights infringement.'
  }
];

const productionAreas = [
  {
    title: 'Production Agreements',
    description: 'All structures of master production agreements including Co-Production, Commissioning/Work-For-Hire, Production cum Assignment Agreement, Direct Acquisition (ready content) Agreements.'
  },
  {
    title: 'Above-the-Line Contracts',
    description: 'For principal talent (actors, directors, casting director, producers, writers, lead star cast, music composer, lead singers etc.).'
  },
  {
    title: 'Below-the-Line Contracts',
    description: 'For crew members such as line producer, cinematographers, art directors, costume designer, sound engineers, costume designers, etc.'
  },
  {
    title: 'Union and Guild Agreements',
    description: 'Negotiating and managing agreements with industry unions and guilds for cast and crew members.'
  },
  {
    title: 'Copyright and Trademarks',
    description: 'Copyright Registration and Trademark Protection to ensure intellectual property protection and avoid infringement.'
  }
];

const marketingAgreements = [
  {
    title: 'Product Placement Agreements',
    description: 'For in-film placement, standard associate-presenter credit (barter/paid), co-branding promotions etc.'
  },
  {
    title: 'Marketing Agreements',
    description: 'For television, radio, print, outdoor advertising, and online media advertising etc.'
  },
  {
    title: 'PR Agreements',
    description: 'Public relations and promotional agreements for content marketing and brand positioning.'
  },
  {
    title: 'Subcontractor Agreements',
    description: 'For set design, special effects like VFX etc.'
  }
];

const postProductionAreas = [
  {
    title: 'VFX/Editor Contracts',
    description: 'For final edit/cut of the content as per creatives/script review.'
  },
  {
    title: 'Soundtrack and Music Licensing',
    description: 'For BGM and third party music synchronisation.'
  }
];

const distributionAreas = [
  {
    title: 'Pre-Sale Distribution Agreements',
    description: 'For distribution of the content across various platforms (e.g., theatrical, satellite, digital, in-flight streaming etc).'
  },
  {
    title: 'Merchandising Rights',
    description: 'Licensing and distribution agreements for merchandise related to content properties.'
  },
  {
    title: 'Non-Disclosure Agreements',
    description: 'For Test Screening and Feedback to ensure confidentiality and protect intellectual property.'
  },
  {
    title: 'Theatrical Distribution',
    description: 'Distribution agreements for theatrical releases and cinema exhibition.'
  },
  {
    title: 'Television/Satellite Rights',
    description: 'Sale or licensing of content to TV networks via various satellite rights such as Terrestrial Television, Pay Television, Free Television, Cable TV Rights, etc.'
  },
  {
    title: 'Digital Rights',
    description: 'Sale or licensing of content via various digital rights on streaming and download basis such as Video on Demand – Transaction VOD, Subscription VOD, Advertising VOD.'
  },
  {
    title: 'Home Video',
    description: 'Distribution agreements for home video and physical media releases.'
  },
  {
    title: 'International Sales Agreements',
    description: 'Cross-border distribution and licensing agreements for international markets.'
  },
  {
    title: 'Surface Transport Agreements',
    description: 'Including inflight entertainment and other transportation media distribution.'
  }
];

const tvChannelAgreements = [
  {
    title: 'TV Serials Production Agreements',
    description: 'Commissioning Agreements, Deed of Assignments for underlying works, OAP Agreements, Marketing, Advertising, Research & Placement Agreements et al.'
  },
  {
    title: 'Web-Series/Short Formats Productions',
    description: 'Fiction/Non Fiction productions for digital platforms and streaming services.'
  },
  {
    title: 'Format Agreements',
    description: 'Hindi – Fiction and Non-Fiction format licensing and adaptation agreements.'
  },
  {
    title: 'Digital Content Agreements',
    description: 'Including Acquisition, Original Productions, Privacy Policy, T&C\'s et al for digital platforms.'
  },
  {
    title: 'Syndication or Distribution Agreements',
    description: 'For various media rights (Satellite + Digital + Music + Ancillary).'
  },
  {
    title: 'Channel Distribution & Affiliation',
    description: 'Channel (as a whole) Distribution & Affiliation Agreements with broadcasters and platforms.'
  },
  {
    title: 'Post-Production Services',
    description: 'Finance, Ad Sales & Human Resource Agreements for post-production workflows.'
  },
  {
    title: 'Artist and Creative Agreements',
    description: 'Voice over services, music composer, designers, stylists, publishers, authors agreements (for literary, dramatic, musical), teleshopping, forwarding & distribution agency, Contest terms and conditions, PR Agency, advertising agency, Events, Promotions, Marketing, etc.'
  }
];

const musicAgreements = [
  {
    title: 'Music Streaming Agreements',
    description: 'Licensing agreements for music streaming platforms and digital distribution.'
  },
  {
    title: 'Music Acquisitions',
    description: 'Across all genres Bollywood, South, North, Pop, and A&R for content libraries.'
  },
  {
    title: 'Music Production Agreements',
    description: 'All Underlying Works including Lyricist, Music Composer, Singer, Performer et al.'
  },
  {
    title: 'Artist Recording Agreements',
    description: 'Sound Recording Assignment Agreements for recording artists and performers.'
  },
  {
    title: 'Music Publishing Agreements',
    description: 'For composers and songwriters to manage and license music used in production.'
  },
  {
    title: 'Synchronization Agreements',
    description: 'Synchronization rights (for film/TV synchronization) and Master rights (for recorded music).'
  }
];

const contentStandards = [
  {
    title: 'Content Viewing & Opinion Standards',
    description: 'Legal documents for Standards and Practices related to script viewing vis-à-vis content viewing and opinions are primarily governed by a mix of statutory regulations and self-regulatory mechanisms to ensure that content aired on television, the internet, and other media platforms adheres to certain ethical, moral, and legal standards.'
  }
];

const telecomsAreas = [
  {
    title: 'Telecommunications Regulations',
    description: 'Providing counsel on telecommunications regulations, spectrum licensing, and compliance with government regulations related to telecommunications services.'
  }
];

const mediaProjects = [
  {
    title: 'Legal Documentation Framework',
    description: 'Designing agreement requisition forms / purchase requisitions, Templatization of all types of agreements, Rights Management System - Customization and Execution.'
  },
  {
    title: 'Contractual Process Management',
    description: 'Designing Contractual Matrix to simplify the documentation process, Standard Operating Process - for Legal Documentation.'
  },
  {
    title: 'Compliance & Guidelines',
    description: 'Prepare framework/guidelines for implementation (Standard & Practices, Online Curated Content (OCC) Code of Ethics, Applicability of Stamp Duty state-wise/agreement-wise, Marketing Guidelines etc.)'
  },
  {
    title: 'Due Diligence Services',
    description: 'Apart from all enlisted above, we further conduct Due Diligence of the Content/Corporate Actions/Party etc to ensure clear title or chain of documents.'
  }
];

export default function MediaEntertainmentTelecommunicationsPage() {
  return (
    <div className="min-h-screen bg-[#ECE5DE]">
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-[#ECE5DE]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Media, Entertainment & Telecommunications
              <div className="h-1 bg-gray-800 w-32 mx-auto mt-4"></div>
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We have enriching experience of close to 2 decades in Media and Entertainment sector, 
              with a nuanced understanding of all the paperwork, processes, procedure involved 
              during the stages of content making. stages include pre-development, development, 
              production, releases, and post releases of the content via any modes and medium of 
              communication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pre-Production Services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Pre-Production
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {preProductionAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-3 border-b-2 border-gray-800 pb-1 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#ECE5DE]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Production
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {productionAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Agreements */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Marketing Agreements
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketingAgreements.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-Production */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#ECE5DE]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Post-Production
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {postProductionAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Distribution & Licensing */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Distribution & Licensing
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {distributionAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TV/Channel/General Media Agreements */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#ECE5DE]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              TV/Channel/General Media Agreements
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {tvChannelAgreements.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Agreements */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Music Agreements
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {musicAgreements.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Standards & Practices */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#ECE5DE]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Standards & Practices
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {contentStandards.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-800 pb-2 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Projects */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Media Projects
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {mediaProjects.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Telecommunications */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#ECE5DE]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              Telecommunications
              <div className="h-1 bg-gray-800 w-24 mx-auto mt-4"></div>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            {telecomsAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 text-center"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-gray-800 pb-2 inline-block">{area.title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 
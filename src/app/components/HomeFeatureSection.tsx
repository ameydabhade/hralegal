'use client';

import { motion } from 'framer-motion';
import { 
  Laptop,
  GitBranch,
  Workflow,
  Presentation,
  Building
} from 'lucide-react';

const primaryServices = [
  {
    icon: Laptop,
    title: "Legal Software Customizations",
    description: "Tailored legal software solutions to streamline your legal processes and improve efficiency."
  },
  {
    icon: GitBranch,
    title: "Project Management",
    description: "Comprehensive project management for complex legal initiatives and organizational transformations."
  },
  {
    icon: Workflow,
    title: "Process Flow Charts & SOPs",
    description: "Development of detailed process flow charts and standard operating procedures for legal operations."
  },
  {
    icon: Presentation,
    title: "Training & Presentations",
    description: "Professional training sessions and presentations to enhance your team's legal knowledge and compliance."
  }
];

const HomeFeatureSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-sage-50 via-cream-50 to-beige-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto">
            Comprehensive legal solutions tailored to your needs
          </p>
        </motion.div>

                 {/* Primary Services */}
         <div className="mb-16">
           <motion.h3
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             viewport={{ once: true }}
             className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center"
           >
             Primary Services
           </motion.h3>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {primaryServices.map((service, index) => (
               <motion.div
                 key={service.title}
                 initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.6, delay: index * 0.1 }}
                 viewport={{ once: true }}
                 whileHover={{ scale: 1.02 }}
                 className="bg-gradient-to-r from-cream-50 to-beige-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300"
               >
                 <div className="flex items-start">
                   <div className="p-3 bg-white rounded-lg shadow-sm mr-4 flex-shrink-0">
                     <service.icon className="w-6 h-6 text-sage-700" />
                   </div>
                   <div>
                     <h4 className="text-lg font-semibold text-gray-900 mb-2">
                       {service.title}
                     </h4>
                     <p className="text-gray-600 text-sm leading-relaxed">
                       {service.description}
                     </p>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>

        {/* End-to-End Legal Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-sage-600 to-sage-800 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/4 left-1/4 w-24 h-24 border border-white rounded-full"
            />
            <motion.div
              animate={{ rotate: [360, 0] }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              className="absolute top-3/4 right-1/4 w-16 h-16 border border-white rounded-full"
            />
          </div>

          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-white bg-opacity-20 rounded-xl mr-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold">
                End-to-End Legal Services
              </h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <p className="text-lg leading-relaxed mb-6 text-sage-100">
                  HRA Legal offers comprehensive end-to-end legal services, covering every aspect 
                  of your legal needs from initial structuring to final execution.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Contract drafting & execution",
                    "Founder agreements & NDAs",
                    "Legal notices & replies",
                    "Policy implementation",
                    "Database management",
                    "Process setup & SOPs"
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <div className="w-2 h-2 bg-cream-300 rounded-full mr-3 flex-shrink-0" />
                      <p className="text-sage-100 text-sm">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-semibold mb-4 text-cream-100">
                  Complete Legal Department Management
                </h4>
                <p className="text-sage-100 leading-relaxed text-sm mb-4">
                  We provide comprehensive solutions for established and emerging businesses, 
                  including complete legal department management for your company.
                </p>
                <p className="text-sage-100 leading-relaxed text-sm">
                  Our detailed services for each area of practice can be found in their 
                  respective sections, ensuring you have access to specialized expertise 
                  across all legal domains.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFeatureSection;
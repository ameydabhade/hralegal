'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { getJobPostings, getJobPosting, JobPosting } from '../../../lib/sanity'
import { PortableText } from '@portabletext/react'
import { 
  GraduationCap, 
  Briefcase, 
  Mail, 
  FileText, 
  Heart, 
  Users, 
  TrendingUp, 
  Award,
  MapPin,
  Calendar,
  Clock,
  ArrowLeft,
  Search,
  Building
} from 'lucide-react';

function CareersContent() {
  const [jobs, setJobs] = useState<JobPosting[]>([])
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('')
  
  const searchParams = useSearchParams()
  const router = useRouter()
  const jobId = searchParams.get('job')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jobPostings = await getJobPostings()
        setJobs(jobPostings)
        
        if (jobId) {
          const job = jobPostings.find(j => j._id === jobId)
          if (job) {
            const fullJob = await getJobPosting(job._id)
            setSelectedJob(fullJob)
          }
        }
      } catch (error) {
        console.error('Error fetching job data:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [jobId])

  const handleJobClick = async (job: JobPosting) => {
    setLoading(true)
    try {
      const fullJob = await getJobPosting(job._id)
      if (!fullJob) {
        console.error('Job not found')
        return
      }
      setSelectedJob(fullJob)
      router.push(`/careers?job=${job._id}`, { scroll: false })
    } catch (error) {
      console.error('Error fetching job:', error)
      // Show error state or fallback
    } finally {
      setLoading(false)
    }
  }

  const handleBackToList = () => {
    setSelectedJob(null)
    router.push('/careers', { scroll: false })
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }



  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'internship':
        return GraduationCap
      case 'retainer':
        return Award
      default:
        return Briefcase
    }
  }

  const types = [...new Set(jobs.map(job => job.type))].filter(Boolean)

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.summary.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === '' || job.type === selectedType
    return matchesSearch && matchesType
  })

  const whyJoinUs = [
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Work in a dynamic, passionate and inclusive environment that fosters professional growth."
    },
    {
      icon: TrendingUp,
      title: "Professional Development",
      description: "Continuous learning opportunities and exposure to diverse legal practice areas."
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "We believe in fostering well-being within a vibrant and enjoyable workspace."
    },
    {
      icon: Award,
      title: "Excellence & Innovation",
      description: "Be part of an entrepreneurial mindset with strong conviction and principled leadership."
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-[#ECE5DE] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    )
  }

  // Individual Job View
  if (selectedJob) {
    return (
      <div className="min-h-screen bg-[#ECE5DE] py-12">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          {/* Back Button */}
          <button 
            onClick={handleBackToList}
            className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Job Listings
          </button>

          {/* Job Header */}
          <header className="mb-8">
            <div className="mb-4 flex items-center gap-3 flex-wrap">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-full">
                {selectedJob.type}
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-600 text-sm font-medium rounded-full">
                {selectedJob.experience}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              {selectedJob.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>{selectedJob.location}</span>
              </div>
              
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Posted {formatDate(selectedJob.postedAt)}</span>
              </div>
              
              {selectedJob.applicationDeadline && (
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Apply by {formatDate(selectedJob.applicationDeadline)}</span>
                </div>
              )}

              
            </div>

            <p className="text-xl text-gray-700 leading-relaxed">
              {selectedJob.summary}
            </p>
          </header>

          {/* Job Content */}
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Job Description */}
              <section className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Job Description</h2>
                <div className="prose prose-lg max-w-none">
                  {selectedJob.description && selectedJob.description.length > 0 ? (
                    <PortableText 
                      value={selectedJob.description}
                      components={{
                        block: {
                          normal: ({children}) => <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>,
                          h2: ({children}) => <h3 className="text-xl font-bold text-gray-800 mb-3 mt-6">{children}</h3>,
                          h3: ({children}) => <h4 className="text-lg font-bold text-gray-800 mb-2 mt-4">{children}</h4>,
                        },
                        list: {
                          bullet: ({children}) => <ul className="list-disc list-inside mb-4 text-gray-700">{children}</ul>,
                          number: ({children}) => <ol className="list-decimal list-inside mb-4 text-gray-700">{children}</ol>,
                        },
                        listItem: {
                          bullet: ({children}) => <li className="mb-1">{children}</li>,
                          number: ({children}) => <li className="mb-1">{children}</li>,
                        },
                      }}
                    />
                  ) : (
                    <p className="text-gray-700">Job description will be provided during the application process.</p>
                  )}
                </div>
              </section>

              {/* Responsibilities */}
              <section className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Responsibilities</h2>
                {selectedJob.responsibilities && selectedJob.responsibilities.length > 0 ? (
                  <ul className="space-y-3">
                    {selectedJob.responsibilities.map((responsibility, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-[#B39F96] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">Responsibilities will be provided during the application process.</p>
                )}
              </section>

              {/* Qualifications */}
              <section className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Qualifications & Requirements</h2>
                {selectedJob.qualifications && selectedJob.qualifications.length > 0 ? (
                  <ul className="space-y-3">
                    {selectedJob.qualifications.map((qualification, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-[#B39F96] rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{qualification}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-700">Qualifications will be provided during the application process.</p>
                )}
              </section>

              {/* Skills */}
              {selectedJob.skills && selectedJob.skills.length > 0 && (
                <section className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Required Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              )}

              
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Apply Now Card */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Apply for this Position</h3>
                
                {selectedJob.applicationInstructions && (
                  <div className="mb-6">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {selectedJob.applicationInstructions}
                    </p>
                  </div>
                )}

                <a 
                  href={`mailto:${selectedJob.contactEmail || 'info@hralegal.com'}?subject=Application for ${selectedJob.title}`}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-[#B39F96] text-white font-semibold rounded-lg hover:bg-[#A08B80] transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Apply Now
                </a>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    Contact: {selectedJob.contactEmail || 'info@hralegal.com'}
                  </p>
                </div>
              </div>

              {/* Job Details */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">Job Details</h3>
                <div className="space-y-3 text-sm">

                  <div className="flex justify-between">
                    <span className="text-gray-600">Type:</span>
                    <span className="font-medium text-gray-800">{selectedJob.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Experience:</span>
                    <span className="font-medium text-gray-800">{selectedJob.experience}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Location:</span>
                    <span className="font-medium text-gray-800">{selectedJob.location}</span>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Job Listings View
  return (
    <div className="min-h-screen bg-[#ECE5DE]">
      {/* Hero Section */}
      <section className="pt-24 pb-6">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
                      <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 border-b-4 border-gray-800 pb-4 inline-block">
              Careers
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Join HRA Legal and build your career with a team committed to excellence, integrity, and professional growth.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section id="why" className="pb-12">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-800 pb-2 inline-block">Why Choose HRA Legal?</h2>
            <p className="text-base text-gray-700 max-w-3xl mx-auto">
              At HRA Legal, we foster a culture driven by entrepreneurial mindset, strong conviction, principled leadership, resilience, continuous learning, and focus on work-life balance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyJoinUs.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                                  <div className="w-16 h-16 bg-[#ECE5DE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="w-8 h-8 text-[#B39F96]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">{benefit.title}</h3>
                  <p className="text-gray-700 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section id="openings" className="bg-[#ECE5DE] py-12">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-800 pb-2 inline-block">Current Openings</h2>
            <p className="text-base text-gray-700">
              Explore our current job opportunities and find your perfect role.
            </p>
          </div>

          {/* Filters */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B39F96] focus:border-transparent"
              />
            </div>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B39F96] focus:border-transparent"
            >
              <option value="">All Types</option>
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Job Listings */}
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <Building className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No job openings found</h3>
              <p className="text-gray-500">
                {jobs.length === 0 
                  ? "We don&apos;t have any active job postings at the moment. Please check back later."
                  : "No jobs match your current filters. Try adjusting your search criteria."
                }
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-6">
              {filteredJobs.map((job) => {
                const IconComponent = getTypeIcon(job.type);
              return (
                  <div key={job._id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#B39F96] rounded-lg flex items-center justify-center mr-4">
                          <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                          <h3 className="text-xl font-bold text-gray-800 mb-1">{job.title}</h3>
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 line-clamp-3">
                      {job.summary}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{job.location}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{formatDate(job.postedAt)}</span>
                  </div>
                  
                      
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {job.experience}
                        </span>
                  </div>

                      <button
                        onClick={() => handleJobClick(job)}
                        className="px-4 py-2 bg-[#B39F96] text-white font-semibold rounded-md hover:bg-[#A08B80] transition-colors duration-200"
                      >
                        View Details
                      </button>
                  </div>
                </div>
              );
            })}
          </div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section id="process" className="py-12">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 border-b-2 border-gray-800 pb-2 inline-block">Application Process</h2>
              <p className="text-base text-gray-700">
                We welcome applications from passionate legal professionals who share our values and commitment to excellence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ECE5DE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-[#B39F96]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">1. Submit Application</h3>
                <p className="text-gray-600">Send your application for the specific role you&apos;re interested in</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ECE5DE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#B39F96]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">2. Review Process</h3>
                <p className="text-gray-600">Our team reviews applications and conducts interviews with suitable candidates</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ECE5DE] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[#B39F96]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 border-b border-gray-800 pb-1 inline-block">3. Welcome Aboard</h3>
                <p className="text-gray-600">Successful candidates join our team and begin their growth journey with HRA Legal</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#ECE5DE] py-16">
                  <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-800 pb-2 inline-block">
            Ready to Start Your Career Journey?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Take the first step towards an exciting career in law with HRA Legal. We look forward to hearing from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@hralegal.com"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#B39F96] text-white font-semibold rounded-lg hover:bg-[#A08B80] transition-colors duration-200"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Us
            </a>
            <a 
              href="/about"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-[#B39F96] text-[#B39F96] font-semibold rounded-lg hover:bg-[#B39F96] hover:text-white transition-colors duration-200"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

function LoadingFallback() {
  return (
    <div className="min-h-screen bg-[#ECE5DE] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-800 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  )
}

export default function CareersPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <CareersContent />
    </Suspense>
  )
} 
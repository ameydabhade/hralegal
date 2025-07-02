import {defineField, defineType} from 'sanity'

export const jobPosting = defineType({
  name: 'jobPosting',
  title: 'Job Posting',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          {title: 'Legal', value: 'legal'},
          {title: 'Litigation', value: 'litigation'},
          {title: 'Compliance', value: 'compliance'},
          {title: 'Intellectual Property', value: 'ip'},
          {title: 'Real Estate', value: 'realestate'},
        ]
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          {title: 'Full-time', value: 'fulltime'},
          {title: 'Part-time', value: 'parttime'},
          {title: 'Internship', value: 'internship'},
          {title: 'Retainership', value: 'retainer'},
        ]
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'experience',
      title: 'Experience Level',
      type: 'string',
      options: {
        list: [
          {title: 'Entry Level (0-2 years)', value: 'entry'},
          {title: 'Senior Level (3+ years)', value: 'senior'},
          {title: 'Executive Level (8+ years)', value: 'executive'},
          {title: 'Student/Graduate', value: 'student'},
        ]
      },
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'summary',
      title: 'Job Summary',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Job Description',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    }),
    defineField({
      name: 'responsibilities',
      title: 'Key Responsibilities',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      validation: (Rule: any) => Rule.required().min(3),
    }),
    defineField({
      name: 'qualifications',
      title: 'Qualifications & Requirements',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      validation: (Rule: any) => Rule.required().min(3),
    }),
    defineField({
      name: 'skills',
      title: 'Required Skills',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'postedAt',
      title: 'Posted Date',
      type: 'datetime',
      validation: (Rule: any) => Rule.required(),
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'applicationDeadline',
      title: 'Application Deadline',
      type: 'datetime',
    }),
    defineField({
      name: 'isActive',
      title: 'Active Job Posting',
      type: 'boolean',
      initialValue: true,
      description: 'Toggle to show/hide this job posting',
    }),
    defineField({
      name: 'applicationInstructions',
      title: 'Application Instructions',
      type: 'text',
      rows: 3,
      initialValue: 'Please write to us at info@hralegal.com along with a letter of interest showcasing your educational qualifications and future career path and goals.',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'info@hralegal.com',
      validation: (Rule: any) => Rule.email(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      department: 'department',
      type: 'type',
      isActive: 'isActive',
    },
    prepare(selection) {
      const {title, department, type, isActive} = selection
      return {
        title: title,
        subtitle: `${department} • ${type} ${isActive ? '(Active)' : '(Inactive)'}`,
      }
    },
  },
}) 
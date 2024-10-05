import React from 'react'
import { Briefcase, Building, Globe } from 'lucide-react'
import { Job } from '../types'

interface JobCardProps {
  job: Job
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">{job.title}</h2>
      <div className="flex items-center text-gray-600 mb-2">
        <Building className="w-4 h-4 mr-2" />
        <span>{job.company_name}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-2">
        <Globe className="w-4 h-4 mr-2" />
        <span>{job.candidate_required_location}</span>
      </div>
      <div className="flex items-center text-gray-600 mb-4">
        <Briefcase className="w-4 h-4 mr-2" />
        <span>{job.job_type}</span>
      </div>
      <a
        href={job.url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
      >
        Apply Now
      </a>
    </div>
  )
}

export default JobCard
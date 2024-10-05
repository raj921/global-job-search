import React, { useState, useEffect } from 'react'
import { Search, Globe } from 'lucide-react'
import JobList from './components/JobList'
import SearchBar from './components/SearchBar'
import { Job } from './types'

function App() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetchJobs()
  }, [])

  const fetchJobs = async () => {
    try {
      const response = await fetch('https://remotive.com/api/remote-jobs?limit=50')
      const data = await response.json()
      setJobs(data.jobs)
    } catch (error) {
      console.error('Error fetching jobs:', error)
    }
  }

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company_name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold flex items-center">
            <Globe className="mr-2" /> Global Job Search
          </h1>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>
      </header>
      <main className="container mx-auto py-8">
        <JobList jobs={filteredJobs} />
      </main>
    </div>
  )
}

export default App
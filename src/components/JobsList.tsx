import React, { useState, useMemo } from 'react';
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Briefcase, MapPin, Clock, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  description: string;
  postedDate: string;
  category: string;
  featured: boolean;
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp",
    location: "Remote / San Francisco",
    type: "Full-time",
    salary: "$120k - $160k",
    description: "Join our team to build beautiful, responsive web applications that delight our customers.",
    postedDate: "2 days ago",
    category: "Development",
    featured: true
  },
  {
    id: 2,
    title: "Backend Developer",
    company: "DataSystems Inc",
    location: "New York",
    type: "Full-time",
    salary: "$100k - $140k",
    description: "Work on scalable backend systems using modern technologies.",
    postedDate: "1 week ago",
    category: "Development",
    featured: false
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "Creative Solutions",
    location: "Remote",
    type: "Contract",
    salary: "$90k - $120k",
    description: "Create engaging user experiences for our digital products.",
    postedDate: "3 days ago",
    category: "Design",
    featured: true
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "London",
    type: "Full-time",
    salary: "$110k - $150k",
    description: "Manage and improve our cloud infrastructure and deployment processes.",
    postedDate: "5 days ago",
    category: "DevOps",
    featured: false
  },
  {
    id: 5,
    title: "Product Manager",
    company: "InnovateTech",
    location: "Berlin",
    type: "Full-time",
    salary: "$95k - $130k",
    description: "Lead product development initiatives and drive product strategy.",
    postedDate: "Just now",
    category: "Management",
    featured: true
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "AnalyticsPro",
    location: "Remote / Boston",
    type: "Full-time",
    salary: "$115k - $155k",
    description: "Apply machine learning and statistical methods to solve complex business problems.",
    postedDate: "4 days ago",
    category: "Data Science",
    featured: false
  },
  {
    id: 7,
    title: "Marketing Specialist",
    company: "GrowthPartners",
    location: "Chicago",
    type: "Full-time",
    salary: "$70k - $90k",
    description: "Develop and implement marketing strategies to increase brand awareness and engagement.",
    postedDate: "1 week ago",
    category: "Marketing",
    featured: false
  },
  {
    id: 8,
    title: "Mobile Developer (iOS)",
    company: "AppWorks",
    location: "Austin",
    type: "Full-time",
    salary: "$100k - $130k",
    description: "Create stunning mobile experiences for iOS platform using Swift.",
    postedDate: "3 days ago",
    category: "Development",
    featured: false
  },
  {
    id: 9,
    title: "Project Manager",
    company: "Systemics Ltd",
    location: "Remote / Toronto",
    type: "Contract",
    salary: "$85k - $115k",
    description: "Oversee project lifecycle from initiation to successful delivery.",
    postedDate: "6 days ago",
    category: "Management",
    featured: false
  },
  {
    id: 10,
    title: "Cybersecurity Analyst",
    company: "SecureNet",
    location: "Washington DC",
    type: "Full-time",
    salary: "$110k - $140k",
    description: "Protect our company's data and systems from cyber threats and vulnerabilities.",
    postedDate: "2 days ago",
    category: "Security",
    featured: true
  }
];

const categories = [
  "All Categories", 
  "Development", 
  "Design", 
  "DevOps", 
  "Management", 
  "Marketing", 
  "Data Science", 
  "Security"
];

const jobTypes = ["All Types", "Full-time", "Part-time", "Contract", "Internship"];

const JobsList: React.FC<{ onSelectJob: (jobId: number) => void }> = ({ onSelectJob }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All Categories');
  const [typeFilter, setTypeFilter] = useState('All Types');
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 5;
  
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = categoryFilter === 'All Categories' || job.category === categoryFilter;
      const matchesType = typeFilter === 'All Types' || job.type === typeFilter;
      
      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchTerm, categoryFilter, typeFilter]);

  // Calculate pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-job-primary mb-2">Find Your Dream Job</h1>
            <p className="text-gray-600 text-lg">Discover opportunities that match your skills and career goals</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg shadow-sm mb-8">
            <div className="mb-6 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search for jobs, companies, or locations..."
                className="pl-10 pr-4 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow">
                <Select value={categoryFilter} onValueChange={(value) => setCategoryFilter(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Filter by category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="flex-grow">
                <Select value={typeFilter} onValueChange={(value) => setTypeFilter(value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Job type" />
                  </SelectTrigger>
                  <SelectContent>
                    {jobTypes.map((type) => (
                      <SelectItem key={type} value={type}>{type}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-job-secondary hover:bg-blue-700 text-white font-bold">
                <Filter className="mr-2 h-4 w-4" /> Filter Jobs
              </Button>
            </div>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No matching jobs found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
            </div>
          ) : (
            <div className="space-y-6">
              {currentJobs.map((job) => (
                <Card 
                  key={job.id}
                  className={`hover:shadow-lg transition-shadow cursor-pointer ${job.featured ? 'border-l-4 border-job-secondary' : ''}`}
                  onClick={() => onSelectJob(job.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div className="flex-grow">
                        {job.featured && (
                          <Badge className="bg-job-secondary text-white mb-2">Featured</Badge>
                        )}
                        <h3 className="text-xl font-bold text-job-primary mb-1">
                          {job.title}
                        </h3>
                        <p className="text-gray-600 mb-3">{job.company}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <Badge variant="outline" className="bg-job-light text-job-primary flex items-center gap-1">
                            <Briefcase className="h-3 w-3" /> {job.type}
                          </Badge>
                          <Badge variant="outline" className="bg-job-light text-job-primary flex items-center gap-1">
                            <MapPin className="h-3 w-3" /> {job.location}
                          </Badge>
                          <Badge variant="outline" className="bg-job-light text-job-primary">
                            {job.salary}
                          </Badge>
                        </div>
                        <p className="text-gray-600">{job.description}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-3 ml-auto pt-2">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" /> Posted {job.postedDate}
                        </div>
                        <Button 
                          size="sm" 
                          variant="outline" 
                          className="hover:bg-job-secondary hover:text-white transition-colors border-job-secondary text-job-secondary"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectJob(job.id);
                          }}
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <div className="mt-8 flex justify-center">
                <Pagination>
                  <PaginationContent>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(page);
                          }}
                          isActive={currentPage === page}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default JobsList;

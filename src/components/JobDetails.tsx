
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Calendar, MapPin, Briefcase, Clock, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Job } from './JobsList';

interface JobDetailsProps {
  job: Job;
}

const JobDetails: React.FC<JobDetailsProps> = ({ job }) => {
  // Generic responsibilities based on job category
  const getResponsibilities = (category: string) => {
    const commonResponsibilities = [
      "Collaborate with cross-functional teams to achieve company goals",
      "Contribute to a positive work environment and company culture",
      "Participate in regular meetings and provide status updates"
    ];

    const categorySpecificResponsibilities: Record<string, string[]> = {
      "Development": [
        `Lead ${job.title.toLowerCase()} initiatives for our core products`,
        "Write clean, maintainable, and efficient code",
        "Troubleshoot and debug applications to optimize performance",
        "Implement new features based on user feedback and requirements"
      ],
      "Design": [
        "Create intuitive and visually appealing user interfaces",
        "Develop design systems and style guides",
        "Conduct user research and usability testing",
        "Create wireframes, prototypes, and high-fidelity mockups"
      ],
      "DevOps": [
        "Manage and improve cloud infrastructure and deployment processes",
        "Implement CI/CD pipelines for efficient software delivery",
        "Monitor system performance and address issues proactively",
        "Ensure high availability and reliability of systems"
      ],
      "Management": [
        "Lead and mentor a team of professionals",
        "Develop and implement strategic initiatives",
        "Monitor department performance and set goals",
        "Manage budgets and resources effectively"
      ],
      "Marketing": [
        "Develop and execute marketing strategies",
        "Create engaging content for various platforms",
        "Analyze marketing performance metrics",
        "Identify opportunities for brand growth"
      ],
      "Data Science": [
        "Develop and implement machine learning models",
        "Analyze large datasets to extract insights",
        "Create data visualizations and reports",
        "Collaborate with engineers to deploy models into production"
      ],
      "Security": [
        "Implement and maintain security systems",
        "Conduct security assessments and penetration testing",
        "Respond to security incidents and threats",
        "Develop security policies and procedures"
      ],
      "Finance": [
        "Analyze financial data and prepare reports",
        "Develop financial forecasts and budgets",
        "Ensure compliance with financial regulations",
        "Identify opportunities for cost savings"
      ],
      "Customer Service": [
        "Provide exceptional support to clients",
        "Resolve customer inquiries and issues promptly",
        "Maintain positive customer relationships",
        "Identify opportunities for service improvement"
      ]
    };

    return [
      ...(categorySpecificResponsibilities[job.category] || []),
      ...commonResponsibilities
    ];
  };

  // Generic requirements based on job category
  const getRequirements = (category: string) => {
    const commonRequirements = [
      "Strong communication and teamwork skills",
      "Problem-solving abilities with attention to detail",
      "Ability to work independently and in a team environment"
    ];

    const categorySpecificRequirements: Record<string, string[]> = {
      "Development": [
        "Bachelor's degree in Computer Science or related field",
        `3+ years of experience in ${job.title.toLowerCase()}`,
        "Strong knowledge of relevant programming languages and frameworks",
        "Experience with version control systems (Git)"
      ],
      "Design": [
        "Bachelor's degree in Design or related field",
        "3+ years of experience in UX/UI design",
        "Proficiency in design tools (Figma, Adobe XD, Sketch)",
        "Strong portfolio demonstrating design capabilities"
      ],
      "DevOps": [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of experience in cloud infrastructure",
        "Knowledge of containerization and orchestration tools",
        "Experience with automation and CI/CD pipelines"
      ],
      "Management": [
        "Bachelor's degree in Business or related field",
        "5+ years of experience in management roles",
        "Strong leadership and team management skills",
        "Experience with budget planning and resource allocation"
      ],
      "Marketing": [
        "Bachelor's degree in Marketing or related field",
        "3+ years of experience in marketing",
        "Experience with digital marketing tools and platforms",
        "Knowledge of SEO, content marketing, and social media strategies"
      ],
      "Data Science": [
        "Master's or PhD in Computer Science, Statistics, or related field",
        "3+ years of experience in data science",
        "Proficiency in Python, R, and SQL",
        "Experience with machine learning frameworks"
      ],
      "Security": [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of experience in cybersecurity",
        "Knowledge of security protocols and best practices",
        "Relevant security certifications (CISSP, CEH, etc.)"
      ],
      "Finance": [
        "Bachelor's degree in Finance or Accounting",
        "3+ years of experience in financial analysis",
        "Knowledge of financial regulations and reporting standards",
        "Experience with financial software and tools"
      ],
      "Customer Service": [
        "Bachelor's degree or equivalent experience",
        "2+ years of experience in customer service",
        "Strong interpersonal and communication skills",
        "Experience with CRM software and tools"
      ]
    };

    return [
      ...(categorySpecificRequirements[job.category] || []),
      ...commonRequirements
    ];
  };

  const benefits = [
    "Competitive salary and equity package",
    "Comprehensive health, dental, and vision insurance",
    "Flexible work schedule and remote work options",
    "Professional development budget for conferences and courses",
    "Regular team events and retreats"
  ];
  
  const responsibilities = getResponsibilities(job.category);
  const requirements = getRequirements(job.category);
  
  return (
    <div className="py-8 bg-gray-50 animate-fade-in" id="details">
      <div className="max-w-4xl mx-auto">
        {/* Job Header */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-8">
          <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
            <div>
              <div className="mb-2 flex items-center gap-2">
                {job.featured && (
                  <Badge className="bg-job-secondary text-white">Featured</Badge>
                )}
                <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200">
                  {job.postedDate === "Just now" ? "New" : job.postedDate}
                </Badge>
              </div>
              
              <h1 className="text-3xl font-bold text-job-primary">{job.title}</h1>
              <p className="text-xl text-gray-600 mt-1">{job.company}</p>
            </div>
            
            <div className="flex flex-col gap-2 items-end">
              <p className="text-2xl font-bold text-job-secondary">{job.salary}</p>
              <div className="text-gray-500 flex items-center">
                <Clock className="h-4 w-4 mr-1" /> Posted {job.postedDate}
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-gray-600 mb-6">
            <div className="flex items-center gap-1">
              <Briefcase className="h-5 w-5 text-gray-400" />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="h-5 w-5 text-gray-400" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <User className="h-5 w-5 text-gray-400" />
              <span>3+ years experience</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-5 w-5 text-gray-400" />
              <span>Start date: Immediate</span>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div>
            <h2 className="text-xl font-semibold text-job-primary mb-4">About the role</h2>
            <p className="text-gray-700 leading-relaxed">
              {job.company} is looking for a {job.title} to join our growing team. 
              {job.description}
            </p>
            
            <p className="text-gray-700 leading-relaxed mt-4">
              Our ideal candidate is passionate about delivering excellence, 
              stays up-to-date with the latest industry trends, and has a proven track 
              record of success in a collaborative environment.
            </p>
          </div>
        </div>
        
        {/* Job Details */}
        <div className="grid grid-cols-1 gap-8">
          <Card className="shadow-md">
            <CardHeader className="bg-job-primary text-white">
              <CardTitle>Key Responsibilities</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {responsibilities.map((item, index) => (
                  <li key={index} className="flex">
                    <Check className="h-6 w-6 text-job-secondary mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardHeader className="bg-job-primary text-white">
              <CardTitle>Requirements & Qualifications</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {requirements.map((item, index) => (
                  <li key={index} className="flex">
                    <Check className="h-6 w-6 text-job-secondary mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardHeader className="bg-job-primary text-white">
              <CardTitle>Benefits & Perks</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {benefits.map((item, index) => (
                  <li key={index} className="flex">
                    <Check className="h-6 w-6 text-job-secondary mr-2 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="bg-gray-50 border-t pt-6">
              <p className="text-gray-600 italic">
                {job.company} is an equal opportunity employer committed to creating an inclusive 
                workplace for all individuals.
              </p>
            </CardFooter>
          </Card>
          
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold text-job-primary mb-3">
              Ready to Join Our Team?
            </h3>
            <p className="text-gray-600 mb-6">
              Submit your application below and our team will review it promptly.
            </p>
            <Button size="lg" className="bg-job-secondary hover:bg-blue-700 text-white font-bold px-8">
              Apply for this Position
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;

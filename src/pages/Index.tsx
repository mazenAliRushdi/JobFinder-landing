import React, { useRef, useState, useEffect } from "react";
import Header from "@/components/Header";
import JobsList from "@/components/JobsList";
import JobDetails from "@/components/JobDetails";
import ApplicationForm from "@/components/ApplicationForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Job } from "@/components/JobsList";

import { jobs } from "@/components/JobsList";

const Index: React.FC = () => {
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const applyFormRef = useRef<HTMLDivElement>(null);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const scrollToApply = () => {
    if (applyFormRef.current) {
      applyFormRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  useEffect(() => {
    if (selectedJobId) {
      const job = jobs.find(job => job.id === selectedJobId);
      setSelectedJob(job || null);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedJobId]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const scrollToApplyParam = params.get('scrollToApply');
    if (scrollToApplyParam === 'true') {
      scrollToApply();
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header scrollToApply={scrollToApply} />
      
      <main className="flex-grow">
        {!selectedJobId ? (
          <JobsList onSelectJob={setSelectedJobId} />
        ) : (
          <>
            <div className="container mx-auto px-4 py-4">
              <Button
                variant="ghost" 
                className="mb-4 flex items-center text-job-primary hover:text-job-secondary"
                onClick={() => setSelectedJobId(null)}
              >
                <ArrowLeft className="mr-1 h-4 w-4" /> Back to all jobs
              </Button>
              
              {selectedJob && (
                <JobDetails job={selectedJob} />
              )}
              
              <div ref={applyFormRef} className="mt-8 pt-8 border-t border-gray-200 scroll-mt-20">
                <div className="bg-white rounded-lg shadow-md p-8">
                  <h2 className="text-2xl font-bold text-job-primary mb-6">
                    Apply for {selectedJob?.title}
                  </h2>
                  <ApplicationForm />
                </div>
              </div>
            </div>
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;

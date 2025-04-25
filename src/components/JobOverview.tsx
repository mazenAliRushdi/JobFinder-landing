
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface JobOverviewProps {
  scrollToApply: () => void;
}

const JobOverview: React.FC<JobOverviewProps> = ({ scrollToApply }) => {
  return (
    <section className="py-12 bg-white animate-fade-in">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-job-primary mb-4">
            Senior Frontend Developer
          </h1>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="outline" className="bg-job-light text-job-primary px-3 py-1">
              Full-time
            </Badge>
            <Badge variant="outline" className="bg-job-light text-job-primary px-3 py-1">
              Remote / San Francisco
            </Badge>
            <Badge variant="outline" className="bg-job-light text-job-primary px-3 py-1">
              $120k - $160k
            </Badge>
          </div>
          
          <Card className="mb-8 shadow-lg">
            <CardContent className="p-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                TechCorp is looking for a Senior Frontend Developer to join our growing team. 
                In this role, you'll work closely with our product and design teams to build 
                beautiful, responsive web applications that delight our customers. This is a key 
                position with opportunities for growth and leadership.
              </p>
            </CardContent>
          </Card>
          
          <div className="flex justify-center">
            <Button 
              onClick={scrollToApply} 
              size="lg"
              className="bg-job-secondary hover:bg-blue-700 text-white font-bold px-8 py-6 text-lg"
            >
              Apply for this position
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobOverview;

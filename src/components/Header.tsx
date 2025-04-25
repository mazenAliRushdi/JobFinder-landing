
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Briefcase, User } from "lucide-react";

interface HeaderProps {
  scrollToApply: () => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToApply }) => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-job-primary text-white py-4 px-6 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <button 
          onClick={handleLogoClick}
          className="flex items-center group hover:opacity-90 transition-opacity"
        >
          <Briefcase className="mr-2 h-6 w-6 text-job-secondary" />
          <div className="font-bold text-2xl flex items-center">
            <span className="text-job-secondary">Job</span>
            <span>Finder</span>
          </div>
        </button>
        
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost"
            size="sm"
            className="text-white hover:bg-job-secondary/20 hidden md:flex"
          >
            <User className="h-5 w-5 mr-1" /> Sign In
          </Button>
          
          <Button 
            onClick={scrollToApply}
            className="bg-job-secondary hover:bg-blue-700 text-white font-bold"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

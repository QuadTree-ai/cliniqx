import React from 'react';
import { Button } from "@/components/ui/button";
import { Share, Download, Printer } from "lucide-react";

const TopButtons: React.FC = () => {
  const handleShare = () => {
    console.log("Share button clicked");
    // Implement share functionality
  };

  const handleDownload = () => {
    console.log("Download button clicked");
    // Implement download functionality
  };

  const handlePrint = () => {
    console.log("Print button clicked");
    // Implement print functionality
  };

  return (
    <div className="flex space-x-2">
      <Button onClick={handleShare} variant="outline" size="sm">
        <Share className="mr-2 h-4 w-4" /> Share
      </Button>
      <Button onClick={handleDownload} variant="outline" size="sm">
        <Download className="mr-2 h-4 w-4" /> Download
      </Button>
      <Button onClick={handlePrint} variant="outline" size="sm">
        <Printer className="mr-2 h-4 w-4" /> Print
      </Button>
    </div>
  );
};

export default TopButtons;

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PHONE_REGEX, CLINIQX_CARD_REGEX } from '../../constant';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Upload, Share2 } from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import Image from 'next/image';
import { fetchCustomerInfo } from '@/utils/api';
import { CustomerInfo as ApiCustomerInfo } from '@/utils/api'; // Assuming this is where fetchCustomerInfo is defined
import { CustomerInfo } from '@/types/customer';
import AddCustomerForm from './newcustomer';

const UploadReportCard: React.FC = () => {
  const [identifier, setIdentifier] = useState({ phone: "", cliniqx: "" });
  const [files, setFiles] = useState<File[]>([]);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [previews, setPreviews] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);

  const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'phone' | 'cliniqx') => {
    const value = e.target.value;
    setIdentifier(prev => ({ ...prev, [type]: value }));
  };

  const isValidIdentifier = () => {
    return (PHONE_REGEX.test(identifier.phone) || CLINIQX_CARD_REGEX.test(identifier.cliniqx));
  };

  const handleSearch = async () => {
    if (!isValidIdentifier()) {
      toast({
        title: "Invalid Input",
        description: "Please enter a valid phone number or CliniQX card number.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    try {
      const id = identifier.phone || identifier.cliniqx;
      const customerData = await fetchCustomerInfo(id);
      if (customerData) {
        setCustomerInfo({
          name: customerData.name,
          image: customerData.image || '',
          age: customerData.age || 0,
          diseases: customerData.diseases || [],
          location: customerData.location || '',
        } as CustomerInfo);
      } else {
        setCustomerInfo(null);
        toast({
          title: "Customer Not Found",
          description: "No customer found with the provided identifier.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error fetching customer data:", error);
      toast({
        title: "Error",
        description: "An error occurred while fetching customer data.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles);
    }
  };

  const handleFiles = (newFiles: File[]) => {
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
    generatePreviews(newFiles);
    simulateUpload();
  };

  const generatePreviews = (files: File[]) => {
    const newPreviews = files.map(file => {
      if (file.type.startsWith('image/')) {
        return URL.createObjectURL(file);
      }
      return '';
    });
    setPreviews(prevPreviews => [...prevPreviews, ...newPreviews]);
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const handleShareReport = () => {
    const customerName = customerInfo?.name || "Customer";
    const now = new Date();
    const formattedDate = now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    const shortDate = now.toLocaleDateString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    });

    console.log("Sharing report:", customerName, shortDate, formattedDate);
    toast({
      title: "Report Shared",
      description: `${customerName} has been notified on ${shortDate}, ${formattedDate}.`,
    });
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <Card className="lg:col-span-1 w-full">
        <CardHeader>
          <CardTitle>Search Patient</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Phone Number"
              value={identifier.phone}
              onChange={(e) => handleIdentifierChange(e, 'phone')}
            />
            <Input
              type="text"
              placeholder="CliniQX Card Number"
              value={identifier.cliniqx}
              onChange={(e) => handleIdentifierChange(e, 'cliniqx')}
            />
            <Button onClick={handleSearch} className="w-full" disabled={isLoading}>
              {isLoading ? 'Searching...' : 'Search'}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-1 w-full">
        <CardHeader>
          <CardTitle>Patient Information</CardTitle>
        </CardHeader>
        <CardContent>
          {customerInfo ? (
            <div className="flex items-center space-x-4">
              <Avatar className="w-24 h-24">
                <AvatarImage src={customerInfo.image} alt={customerInfo.name} />
                <AvatarFallback>NA</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <h3 className="text-xl font-semibold">{customerInfo.name}</h3>
                <p className="text-sm text-gray-500">Age: {customerInfo.age}</p>
                <p className="text-sm text-gray-500">Diseases: {customerInfo.diseases.join(', ')}</p>
                <p className="text-sm text-gray-500">Location: {customerInfo.location}</p>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="mb-4">No customer found</p>
              <Button onClick={() => setShowAddCustomerForm(true)}>Add New Customer</Button>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="col-span-1 lg:col-span-2 relative">
        <CardHeader className="flex justify-between items-center">
          <CardTitle className="text-left">Upload Reports</CardTitle>
        </CardHeader>
        <CardContent>
          {files.length > 0 && (
            <Button
              onClick={handleShareReport}
              className="absolute top-4 right-4 py-1 text-sm flex items-center justify-center"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share Report
            </Button>
          )}
          <div 
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center flex flex-col items-center justify-center"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleFileDrop}
          >
            <Upload className="w-12 h-12 text-gray-400 mb-4" />
            <p className="text-lg mb-4">Drag and drop files here</p>
            <p className="text-sm text-gray-500 mb-4">or</p>
            <input
              type="file"
              multiple
              onChange={handleFileInput}
              className="hidden"
              id="file-input"
            />
            <Button onClick={() => document.getElementById('file-input')?.click()}>
              Select Files
            </Button>
          </div>
          {files.length > 0 && (
            <div className="mt-4 w-full">
              <div className="flex flex-wrap gap-4">
                {previews.map((preview, index) => (
                  preview && (
                    <Image
                      key={index}
                      src={preview}
                      alt={files[index].name}
                      width={96}
                      height={96}
                      className="object-cover rounded"
                    />
                  )
                ))}
              </div>
              {uploadProgress < 100 && (
                <>
                  <Progress value={uploadProgress} className="w-full mt-4" />
                  <p className="text-sm text-gray-500 mt-2">Uploading: {uploadProgress}%</p>
                </>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {showAddCustomerForm && (
        <AddCustomerForm
          onClose={() => setShowAddCustomerForm(false)}
          onAdd={(newCustomer) => {
            setCustomerInfo(newCustomer);
            setShowAddCustomerForm(false);
            toast({
              title: "Customer Added",
              description: "New customer has been successfully added.",
            });
          }}
        />
      )}
    </div>
  );
};

export default UploadReportCard;
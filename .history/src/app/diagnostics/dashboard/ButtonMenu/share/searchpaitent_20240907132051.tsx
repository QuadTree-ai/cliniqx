import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Identifier } from './types';
import { Phone, CreditCard, Search, UserPlus } from 'lucide-react';

interface SearchPatientProps {
  identifier: Identifier;
  handleIdentifierChange: (e: React.ChangeEvent<HTMLInputElement>, type: keyof Identifier) => void;
  handleSearch: () => void;
  isLoading: boolean;
  onAddNewPatient: () => void;
}

const SearchPatient: React.FC<SearchPatientProps> = ({
  identifier,
  handleIdentifierChange,
  handleSearch,
  isLoading,
  onAddNewPatient
}) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="pb-4">
        <CardTitle className="text-2xl font-bold">Search Patient</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="Phone Number"
            value={identifier.phone}
            onChange={(e) => handleIdentifierChange(e, 'phone')}
            className="pl-10"
          />
        </div>
        <div className="relative">
          <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            placeholder="CliniQX Card Number"
            value={identifier.cliniqx}
            onChange={(e) => handleIdentifierChange(e, 'cliniqx')}
            className="pl-10"
          />
        </div>
        <div className="flex space-x-2 pt-2">
          <Button 
            onClick={handleSearch} 
            disabled={isLoading}
            className="flex-1 bg-blue-600 hover:bg-blue-700"
          >
            {isLoading ? 'Searching...' : 'Search'}
            <Search className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            onClick={onAddNewPatient}
            variant="outline"
            className="flex-1"
          >
            Add New Patient
            <UserPlus className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchPatient;

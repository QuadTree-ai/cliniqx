import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Identifier } from './types';

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
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Search Patient</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => { e.preventDefault(); handleSearch(); }} className="space-y-4">
          <div className="space-y-2">
            <Input
              placeholder="Phone Number"
              value={identifier.phone}
              onChange={(e) => handleIdentifierChange(e, 'phone')}
              className="w-full"
            />
            <Input
              placeholder="CliniQX Card Number"
              value={identifier.cliniqx}
              onChange={(e) => handleIdentifierChange(e, 'cliniqx')}
              className="w-full"
            />
          </div>
          <div className="flex justify-between items-center pt-2">
            <Button type="submit" disabled={isLoading} className="w-1/2 mr-2">
              {isLoading ? 'Searching...' : 'Search'}
            </Button>
            <Button onClick={onAddNewPatient} variant="outline" className="w-1/2 ml-2">
              Add New Patient
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default SearchPatient;
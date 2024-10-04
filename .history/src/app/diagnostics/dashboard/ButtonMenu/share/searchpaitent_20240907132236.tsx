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
    <Card>
      <CardHeader>
        <CardTitle>Search Patient</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 space-y-2">
          <Input
            placeholder="Phone Number"
            value={identifier.phone}
            onChange={(e) => handleIdentifierChange(e, 'phone')}
          />
          <Input
            placeholder="CliniQX Card Number"
            value={identifier.cliniqx}
            onChange={(e) => handleIdentifierChange(e, 'cliniqx')}
          />
          <div className="flex space-x-2">
            <Button onClick={handleSearch} disabled={isLoading}>
              {isLoading ? 'Searching...' : 'Search'}
            </Button>
            <Button onClick={onAddNewPatient}>Add New Patient</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SearchPatient;

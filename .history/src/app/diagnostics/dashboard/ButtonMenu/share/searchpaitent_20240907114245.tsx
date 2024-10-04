import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CustomerInfo } from '@/types/customer';
import AddCustomerForm from './newcustomer';
import { useHandlers } from './handle';

const SearchPatient: React.FC = () => {
  const [identifier, setIdentifier] = useState({ phone: '', cliniqx: '' });
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);
  const [showAddCustomerForm, setShowAddCustomerForm] = useState(false);

  const {
    handleIdentifierChange,
    handleSearch,
    handleAddCustomer
  } = useHandlers();

  const onAddCustomer = (newCustomer: CustomerInfo) => {
    setCustomerInfo(newCustomer);
    setShowAddCustomerForm(false);
  };

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
            onChange={(e) => handleIdentifierChange(e, 'phone', setIdentifier)}
          />
          <Input
            placeholder="CliniQX Card Number"
            value={identifier.cliniqx}
            onChange={(e) => handleIdentifierChange(e, 'cliniqx', setIdentifier)}
          />
          <div className="flex space-x-2">
            <Button onClick={() => handleSearch(identifier, setCustomerInfo)}>Search</Button>
            <Button onClick={() => setShowAddCustomerForm(true)}>Add New Patient</Button>
          </div>
        </div>
        {customerInfo && (
          <div className="mt-4">
            <Avatar className="w-16 h-16 mb-2">
              <AvatarImage src={customerInfo.image} alt={customerInfo.name} />
              <AvatarFallback>{customerInfo.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h3 className="text-lg font-semibold">{customerInfo.name}</h3>
            <p>Age: {customerInfo.age}</p>
            <p>Diseases: {customerInfo.diseases.join(', ')}</p>
            <p>Location: {customerInfo.location}</p>
            <p>Phone: {customerInfo.phone}</p>
            <p>CliniQX Card: {customerInfo.cliniqx}</p>
          </div>
        )}
        {showAddCustomerForm && (
          <AddCustomerForm
            onClose={() => setShowAddCustomerForm(false)}
            onAdd={onAddCustomer}
          />
        )}
      </CardContent>
    </Card>
  );
};

export default SearchPatient;

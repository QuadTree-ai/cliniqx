import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CustomerInfo } from '@/types/customer';

interface AddCustomerFormProps {
  onClose: () => void;
  onAdd: (customer: CustomerInfo) => void;
}

const AddCustomerForm: React.FC<AddCustomerFormProps> = ({ onClose, onAdd }) => {
  const [newCustomer, setNewCustomer] = useState<Partial<CustomerInfo>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      ...newCustomer,
      id: Math.random().toString(36).substr(2, 9),
      image: '/path-to-default-image.jpg',
    } as CustomerInfo);
    onClose();
  };

  return (
    <Card className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 z-10">
      <CardHeader>
        <CardTitle>Add New Customer</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Input
            className="mb-2"
            placeholder="Name"
            value={newCustomer.name || ''}
            onChange={(e) => setNewCustomer({...newCustomer, name: e.target.value})}
          />
          <Input
            className="mb-2"
            placeholder="Age"
            type="number"
            value={newCustomer.age || ''}
            onChange={(e) => setNewCustomer({...newCustomer, age: parseInt(e.target.value)})}
          />
          <Input
            className="mb-2"
            placeholder="Phone Number"
            value={newCustomer.phone || ''}
            onChange={(e) => setNewCustomer({...newCustomer, phone: e.target.value})}
          />
          <Input
            className="mb-2"
            placeholder="Location"
            value={newCustomer.location || ''}
            onChange={(e) => setNewCustomer({...newCustomer, location: e.target.value})}
          />
          <div className="flex justify-end space-x-2 mt-4">
            <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
            <Button type="submit">Add Customer</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddCustomerForm;
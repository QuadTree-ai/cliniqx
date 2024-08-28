import React from 'react';
import { Input } from '@/components/ui/input';

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const OwnerDetails: React.FC<Props> = ({ handleChange }) => (
  <div>
    <Input name="ownerName" placeholder="Owner's Name" onChange={handleChange} />
    <Input name="email" placeholder="Email" type="email" onChange={handleChange} />
    <Input name="phone" placeholder="Phone Number" type="tel" onChange={handleChange} />
  </div>
);

export default OwnerDetails;

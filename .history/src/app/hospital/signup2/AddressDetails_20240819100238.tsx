import React from 'react';
import { Input } from '@/components/ui/input';

type Props = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const AddressDetails: React.FC<Props> = ({ handleChange }) => (
  <div>
    <Input name="address" placeholder="Address" onChange={handleChange} />
  </div>
);

export default AddressDetails;

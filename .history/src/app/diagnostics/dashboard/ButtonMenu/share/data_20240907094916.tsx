import { MongoClient } from 'mongodb';
import { isGoogleComputeEngine } from 'gcp-metadata';

export interface CustomerInfo {
  name: string;
  image: string;
  age: number;
  diseases: string[];
  location: string;
  phone: string;
  cliniqx: string;
}

const dummyCustomerInfo: CustomerInfo = {
phone: "1234567890",
  cliniqx: "1234567890",
  name: "John Doe",
  image: "/path-to-customer-image.jpg",
  age: 35,
  diseases: ["Diabetes", "Hypertension"],
  location: "New York, USA"
};

export async function fetchCustomerInfo(identifier: string): Promise<CustomerInfo | null> {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error('MongoDB URI is not defined');
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('your_database_name');
    const customers = database.collection('customers');

    const customer = await customers.findOne({
      $or: [
        { phone: identifier },
        { cliniqxCardNumber: identifier }
      ]
    });

    if (customer) {
      return {
        name: customer.name,
        image: customer.image,
        age: customer.age,
        diseases: customer.diseases,
        location: customer.location,
        phone: customer.phone,
        cliniqx: customer.cliniqxCardNumber // Assuming this is the correct field name
      };
    } else {
      return dummyCustomerInfo; // Return dummy data if no customer found
    }
  } finally {
    await client.close();
  }
}

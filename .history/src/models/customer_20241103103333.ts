// src/models/customer.ts

import { ObjectId } from "mongodb";

export interface Customer {
  _id?: ObjectId; // Change _id type to ObjectId
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  cardNumber: string;
  createdAt: Date;
}

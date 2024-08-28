import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";
import { Customer } from "@/models/customer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phoneNumber, password, cardNumber }: Customer = req.body;

    try {
      const client = await clientPromise;
      const db = client.db("customer");

      const newCustomer: Omit<Customer, "_id"> = {
        firstName,
        lastName,
        email,
        phoneNumber,
        password,
        cardNumber: cardNumber || new Date().getTime().toString(), // Default card number logic
        createdAt: new Date(),
      };

      // Insert the new customer
      const result = await db.collection("customers").insertOne(newCustomer);

      res.status(200).json({ success: true, customerId: result.insertedId });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to create account." });
    }
  } else {
    res.status(405).json({ success: false, error: "Method not allowed." });
  }
}

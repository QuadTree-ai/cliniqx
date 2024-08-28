// src/data/dummyData.ts

export const orders = [
    {
      id: "Oe31b70H",
      date: "November 23, 2023",
      customer: "Liam Johnson",
      email: "liam@example.com",
      phone: "+1 234 567 890",
      items: [
        { name: "Glimmer Lamps", quantity: 2, price: 250 },
        { name: "Aqua Filters", quantity: 1, price: 49 },
      ],
      subtotal: 299,
      shipping: 5,
      tax: 25,
      total: 329,
      paymentMethod: "Visa",
      paymentLast4: "4532",
      shippingAddress: {
        name: "Liam Johnson",
        address: "1234 Main St.",
        city: "Anytown",
        state: "CA",
        zip: "12345",
      },
      billingAddressSameAsShipping: true,
    },
    // Add more orders as needed
  ];
  
  export const summaryData = {
    week: { amount: 1329, percentageChange: 25 },
    month: { amount: 5329, percentageChange: 10 },
  };
  
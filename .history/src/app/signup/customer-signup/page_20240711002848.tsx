      {/* Customer Section */}
      <section id="customer-section" className="min-h-screen flex flex-col items-center justify-center py-12 space-y-6 relative">
        <div className="container mx-auto flex items-center justify-center space-x-12">
          <Card className="relative overflow-hidden w-1/2 max-w-2xl transition-transform duration-500 rounded-lg shadow-lg">
            <img
              src="/customer.jpeg"
              alt="I'm a Customer"
              className="w-full h-96 object-cover"
            />
          </Card>
          <div className="flex flex-col items-start space-y-4 max-w-lg">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              I'm a Customer
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Join as a customer to access personalized services and exclusive offers.
            </p>
            <Link href="/customer-signup" passHref>
              <Button className="rounded-md py-3 px-8 text-white bg-gray-500 hover:bg-black transition-colors duration-200 flex items-center space-x-2">
                <User className="w-6 h-6 text-white" />
                <span>Customer Signup</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-12 w-full text-center">
          <p className="text-xl text-gray-700 mb-4">
            If you are a business owner or medical professional
          </p>
          <a href="#business-section" className="flex justify-center">
            <ArrowDown className="w-10 h-10 text-gray-700 hover:text-gray-900 transition-colors duration-200" />
          </a>
        </div>
      </section>
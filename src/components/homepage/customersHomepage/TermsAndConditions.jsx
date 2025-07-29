import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 md:p-12">
        
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-10">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-4">Terms & Conditions</h1>
        <p className="text-sm text-gray-500 text-right mb-4">Last updated: July 28, 2025</p>

        <div className="space-y-6 text-gray-800">
          <section>
            <h2 className="font-semibold mb-1">1. Introduction</h2>
            <p>
              Welcome to [YourAppName]. These Terms and Conditions govern your use of our platform. By using our services, you agree to comply with and be bound by these terms.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-1">2. Eligibility & Account Registration</h2>
            <p>
              To register an account, you must be at least 18 years old. You are responsible for providing accurate and complete registration information.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-1">3. Vendor Responsibilities</h2>
            <p>
              Vendors must ensure product accuracy, meet delivery timelines, and follow our quality standards as outlined in our vendor guidelines.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-1">4. Product Listings & Accuracy</h2>
            <p>
              All product listings must include truthful and complete descriptions, images, and pricing. Misleading content may result in account suspension.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-1">5. Order Fulfillment & Shipping</h2>
            <p>
              Vendors are required to fulfill orders promptly and communicate shipping timelines clearly to buyers.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-1">6. Returns & Refunds</h2>
            <p>
              Return and refund policies depend on vendor terms and must comply with platform policies and applicable local laws.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-1">7. Payment Terms</h2>
            <p>
              All payments are processed through our secure system. Commission fees and payout schedules are detailed in the vendor agreement.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;

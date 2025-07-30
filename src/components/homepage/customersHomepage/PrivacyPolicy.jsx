import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#FAF8F2] min-h-screen ">

      <div className='bg-[#696966] py-28'>
        <h1 className="text-2xl md:text-5xl popbold font-semibold text-white text-center mb-4">Privacy Policy</h1>

      </div>
      <div className="w-full mx-auto bg-white rounded-lg shadow-md p-6 md:p-20">
        {/* <h1 className="text-2xl md:text-3xl font-semibold text-center mb-4">Privacy Policy</h1> */}
        <p className="text-sm text-gray-500 text-right mb-4">Last updated: July 28, 2025</p>

        <div className="space-y-6 text-gray-800">
          <section>
            <h2 className="font-semibold mb-1">1. Introduction</h2>
            <p>
              This Privacy Policy describes how [YourAppName] collects, uses, and shares your personal information when you use our platform.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-1">2. Information We Collect</h2>
            <p>
              We collect information you provide during account registration, transactions, and interactions—including names, contact info, and device data.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-1">3. How We Use Information</h2>
            <p>
              Your data is used to provide and improve our services, process payments, communicate with you, and ensure platform security.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-1">4. Sharing Your Information</h2>
            <p>
              We do not sell your data. We may share information with service providers who help us operate the platform, under strict confidentiality terms.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-1">5. Cookies & Tracking</h2>
            <p>
              We use cookies and similar technologies to enhance your browsing experience and analyze platform traffic.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-1">6. Your Rights</h2>
            <p>
              You may request access, correction, or deletion of your personal data by contacting our support team.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-1">7. Data Security</h2>
            <p>
              We implement industry-standard measures to protect your data, including encryption and secure server infrastructure.
            </p>
          </section>

          <section>
            <h2 className="font-semibold mb-1">8. Changes to This Policy</h2>
            <p>
              We may update this policy periodically. You will be notified of significant changes via email or platform notification.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

// src/pages/TermsPage.jsx
export default function TermsPage() {
  return (
   <div className="relative p-5 max-w-4xl mx-auto text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">Effective Date: September 30th 2025</p>

      <p className="mb-6">
        Welcome to the official website of{" "}
        <span className="font-semibold">VeeKITES  Global Services Limited</span>.
        By accessing, browsing, or using this website, you agree to be bound by
        these Terms & Conditions, which govern your use of our services,
        products, and online platforms.
      </p>
      <p className="mb-6">
        If you do not agree with any part of these Terms, kindly refrain from
        using this website.
      </p>

      {/* 1. Company Information */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Company Information</h2>
        <p>
          VeeKITES  Global Services Limited is a duly registered company under
          the Companies and Allied Matters Act (CAMA) 2020 of the Federal
          Republic of Nigeria, with its registered office at:{" "}
          <span className="font-semibold">
            House 49, O.A.U Quarters, Maitama, Abuja.
          </span>
        </p>
      </section>

      {/* 2. Use of Website */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Use of Website</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            You agree to use this website lawfully and in compliance with all
            applicable Nigerian laws and regulations, including the Cybercrimes
            (Prohibition, Prevention, etc.) Act 2025.
          </li>
          <li>
            You must not use the website in any way that may damage, impair, or
            interfere with its functionality.
          </li>
          <li>
            Unauthorized access, attempts to breach security, or use of this
            website for fraudulent, unlawful, or harmful purposes are strictly
            prohibited.
          </li>
        </ul>
      </section>

      {/* 3. Products & Services */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Products & Services</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            Information about our services and products provided on this website
            is for general informational purposes only and does not constitute a
            legally binding offer.
          </li>
          <li>
            We reserve the right to modify, suspend, or discontinue any part of
            our services without prior notice.
          </li>
        </ul>
      </section>

      {/* 4. Intellectual Property Rights */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          4. Intellectual Property Rights
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            All content on this website, including logos, designs, text,
            graphics, images, and software, are the intellectual property of
            VeeKITES  Global or its licensors and are protected under the
            Copyright Act, Cap C28, Laws of the Federation of Nigeria 2004.
          </li>
          <li>
            You may not reproduce, copy, distribute, or use any material from
            this website without prior written consent from VeeKITES  Global.
          </li>
        </ul>
      </section>

      {/* 5. Data Protection & Privacy */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          5. Data Protection & Privacy
        </h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            We are committed to protecting your personal data in accordance with
            the Nigeria Data Protection Act 2023 and other applicable data
            protection regulations.
          </li>
          <li>
            By using this website, you consent to the collection, use, and
            processing of your data in line with our{" "}
            <a href="/privacy-policy" className="text-blue-600 underline">
              Privacy Policy
            </a>
            .
          </li>
        </ul>
      </section>
    </div>
  );
}

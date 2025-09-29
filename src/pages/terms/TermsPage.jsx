// src/pages/TermsPage.jsx
export default function TermsPage() {
  return (
    <div className="relative p-5 max-w-4xl mx-auto text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: September 2025</p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          Welcome to our platform. By accessing or using our service, you agree
          to be bound by these Terms and Conditions. Please read them carefully
          before using the service.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. User Responsibilities</h2>
        <p>
          You agree to use our services only for lawful purposes and in a way
          that does not infringe the rights of others. You are responsible for
          maintaining the confidentiality of your account details.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Limitations of Liability</h2>
        <p>
          We are not responsible for any damages or losses arising from your use
          of the platform, including but not limited to data loss, downtime, or
          unauthorized access.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Changes to Terms</h2>
        <p>
          We may update these Terms from time to time. Continued use of our
          services after changes are posted means you accept the updated terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Contact Us</h2>
        <p>
          If you have any questions regarding these Terms & Conditions, please
          contact us at <span className="font-semibold">support@example.com</span>.
        </p>
      </section>
    </div>
  );
}

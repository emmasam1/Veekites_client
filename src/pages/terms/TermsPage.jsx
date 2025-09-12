// src/pages/TermsPage.jsx
import { useState } from "react";

export default function TermsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("terms");

  // content map
  const content = {
    terms: {
      title: "Roblox Terms of Use",
      intro: "Welcome to the Roblox universe, where imagination and creativity rule!",
      body: (
        <>
          <p className="text-gray-300 mb-4">
            Roblox Corporation ("Roblox") offers the Platform (the “Platform”)
            and various other features and services, like websites, applications
            and forums, in order to allow users to play, create and connect.
          </p>
          <p className="text-gray-300 mb-4">
            In order to maximize the experience of all users of the Services,
            Roblox has established terms and conditions (collectively, the
            “Roblox Terms”) that apply to use of the Services by Users.
          </p>
          <p className="text-gray-300">
            Certain Roblox Terms may only apply to particular Services, so make
            sure to read and understand all of them.
          </p>
        </>
      ),
    },
    privacy: {
      title: "Privacy Policy",
      intro: "Your privacy matters to us.",
      body: (
        <>
          <p className="text-gray-300 mb-4">
            We collect certain data to improve our services, including gameplay
            data, account information, and preferences.
          </p>
          <p className="text-gray-300">
            Please review this policy carefully to understand how your
            information is used.
          </p>
        </>
      ),
    },
    community: {
      title: "Community Standards",
      intro: "Building a safe and positive community together.",
      body: (
        <>
          <p className="text-gray-300 mb-4">
            We expect all players to interact respectfully, avoid harassment,
            and follow the rules of fair play.
          </p>
          <p className="text-gray-300">
            Violations may result in warnings, suspensions, or permanent bans.
          </p>
        </>
      ),
    },
  };

  return (
    <div className="flex min-h-screen bg-[#dbe9f2] text-black">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 transform bg-[#4d6b7a] w-64 p-6 transition-transform duration-300 ease-in-out z-30 
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 md:static md:w-64`}
      >
        <h2 className="text-lg font-semibold mb-6">Articles in this section</h2>
        <nav className="space-y-2">
          <button
            onClick={() => setActiveSection("terms")}
            className={`w-full text-left px-3 py-2 rounded-md ${
              activeSection === "terms" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            Terms of Use
          </button>
          <button
            onClick={() => setActiveSection("privacy")}
            className={`w-full text-left px-3 py-2 rounded-md ${
              activeSection === "privacy" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveSection("community")}
            className={`w-full text-left px-3 py-2 rounded-md ${
              activeSection === "community" ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            Community Standards
          </button>
        </nav>
      </aside>

      {/* Overlay on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Top bar for mobile */}
        <header className="flex items-center justify-between bg-gray-800 px-4 py-3 md:hidden">
          <h1 className="text-lg font-bold">Terms</h1>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md bg-gray-700"
          >
            ☰
          </button>
        </header>

        <main className="p-6 md:p-10">
          <h1 className="text-3xl font-bold mb-4">
            {content[activeSection].title}
          </h1>

          <section>
            <h2 className="text-xl font-semibold mb-3">▼ Introduction</h2>
            <div className="bg-gray-800 p-4 rounded-md mb-6">
              <h3 className="font-semibold mb-2 text-gray-100">
                {content[activeSection].intro}
              </h3>
              {content[activeSection].body}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

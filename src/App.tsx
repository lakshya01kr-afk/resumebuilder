import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            ResumeAI Pro
          </h1>
          <p className="text-xl text-gray-600">
            AI-powered resume builder that generates professional, ATS-friendly resumes instantly
          </p>
        </header>

        <main className="bg-white rounded-lg shadow-xl p-8">
          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Features
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-gray-700">AI-powered resume generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-gray-700">Professional templates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-gray-700">ATS-friendly formatting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-gray-700">Smart suggestions and optimizations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span className="text-gray-700">Export to PDF</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                Get Started
              </h2>
              <p className="text-gray-700 mb-4">
                Create your professional resume in minutes with our AI-powered builder.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                Start Building
              </button>
            </section>
          </div>
        </main>

        <footer className="text-center mt-12 text-gray-600">
          <p>&copy; 2026 ResumeAI Pro. All rights reserved.</p>
        </footer>
      </div>
      <Analytics />
    </div>
  );
}

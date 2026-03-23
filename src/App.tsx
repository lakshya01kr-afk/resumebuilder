import { SpeedInsights } from '@vercel/speed-insights/react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          ResumeAI Pro — AI Resume Builder SaaS
        </h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-700 text-center">
            AI-powered resume builder that generates professional, ATS-friendly resumes instantly.
          </p>
        </div>
      </div>
      <SpeedInsights />
    </div>
  );
}

export default App;

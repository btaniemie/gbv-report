"use client";

interface ReportSubmittedProps {
  data: any;
  onComplete: (data: any) => void;
}

export function ReportSubmitted({ data }: ReportSubmittedProps) {
  const reportId = data.reportId || "ERROR-ID-NOT-FOUND";

  return (
    <div className="text-center space-y-6">
      <div className="flex flex-col items-center">
        <div className="bg-purple-500/10 rounded-full p-3">
          <svg
            className="w-16 h-16 text-purple-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-medium text-white">
          Report Successfully Submitted
        </h3>
        <p className="mt-2 text-sm text-zinc-400">
          We have securely received your report
        </p>
      </div>

      <div className="bg-zinc-800/50 rounded-lg p-6 max-w-md mx-auto">
        <h4 className="text-white font-medium mb-2">Your Report ID</h4>
        <div className="bg-zinc-900 rounded p-3">
          <code className="text-purple-400">{reportId}</code>
        </div>
        <p className="mt-2 text-sm text-zinc-400">
          Save this ID to track your report status 
        </p>
      </div>

      <div className="pt-4">
        <button
          onClick={() => (window.location.href = "/")}
          className="inline-flex items-center justify-center rounded-lg bg-purple-500 px-4 py-2 text-sm font-medium text-white hover:bg-purple-400"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}
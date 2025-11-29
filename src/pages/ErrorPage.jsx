import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AlertTriangle, Home, RefreshCw, ArrowLeft } from "lucide-react";

const ErrorPage = () => {
  const location = useLocation();
  const [errorData, setErrorData] = useState(null);

  useEffect(() => {
    // Try to get error from location state first
    if (location.state?.error) {
      setErrorData({
        message:
          location.state.error?.message ||
          location.state.error?.toString() ||
          "Unknown error",
        stack: location.state.error?.stack || "",
        componentStack: location.state.errorInfo?.componentStack || "",
      });
    } else {
      // Try to get error from sessionStorage (from ErrorBoundary)
      try {
        const storedError = sessionStorage.getItem("errorBoundaryError");
        if (storedError) {
          setErrorData(JSON.parse(storedError));
          // Clear it after reading
          sessionStorage.removeItem("errorBoundaryError");
        }
      } catch (e) {
        console.error("Failed to read error from sessionStorage:", e);
      }
    }
  }, [location.state]);

  const handleReload = () => {
    window.location.reload();
  };

  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="max-w-[1200px] mx-auto my-8 px-4">
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-[#dc3545]/10 rounded-full mb-4">
            <AlertTriangle className="w-10 h-10 text-[#dc3545]" />
          </div>
          <h1 className="text-[#1a2332] text-[2rem] md:text-[2.5rem] font-semibold mb-4">
            Something Went Wrong
          </h1>
          <p className="text-[#8b95a5] text-lg mb-6 max-w-2xl mx-auto">
            We're sorry, but something unexpected happened. Our team has been
            notified and is working to fix the issue.
          </p>
        </div>

        {errorData && (
          <div className="py-4 px-6 rounded-md mb-6 border-0 border-solid border-l-4 bg-[#fff3cd] border-[#856404] text-[#856404]">
            <strong>Error Details:</strong>
            <p className="mt-2 text-sm font-mono break-all">
              {errorData.message}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
          <button
            onClick={handleGoHome}
            className="px-6 py-3 bg-[#1a2332] text-white rounded-lg font-semibold hover:bg-[#0e131c] transition-colors flex items-center gap-2 border-none"
          >
            <Home className="w-5 h-5" />
            Go to Home
          </button>
          <button
            onClick={handleReload}
            className="px-6 py-3 bg-[#d4af37] text-[#1a2332] rounded-lg font-semibold hover:bg-[#b8952e] transition-colors flex items-center gap-2 border-none"
          >
            <RefreshCw className="w-5 h-5" />
            Reload Page
          </button>
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-[#8b95a5] text-white rounded-lg font-semibold hover:bg-[#6b7480] transition-colors no-underline flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>
        </div>

        {process.env.NODE_ENV === "development" && errorData && (
          <details className="mt-6 p-4 bg-[#e8eaed] rounded-lg">
            <summary className="cursor-pointer text-[#1a2332] font-semibold mb-2">
              Error Stack (Development Only)
            </summary>
            <div className="mt-2 space-y-4">
              {errorData.componentStack && (
                <div>
                  <strong className="text-[#1a2332] text-sm">
                    Component Stack:
                  </strong>
                  <pre className="mt-1 text-xs text-[#8b95a5] overflow-auto max-h-96 bg-white p-3 rounded">
                    {errorData.componentStack}
                  </pre>
                </div>
              )}
              {errorData.stack && (
                <div>
                  <strong className="text-[#1a2332] text-sm">
                    Error Stack:
                  </strong>
                  <pre className="mt-1 text-xs text-[#8b95a5] overflow-auto max-h-96 bg-white p-3 rounded">
                    {errorData.stack}
                  </pre>
                </div>
              )}
            </div>
          </details>
        )}

        <div className="mt-8 pt-8 border-t border-[#e8eaed]">
          <p className="text-[#8b95a5] text-sm mb-4">You might want to try:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/home"
              className="px-4 py-2 bg-[#e8eaed] text-[#1a2332] rounded-lg font-medium hover:bg-[#c0c5ce] transition-colors no-underline text-sm"
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="px-4 py-2 bg-[#e8eaed] text-[#1a2332] rounded-lg font-medium hover:bg-[#c0c5ce] transition-colors no-underline text-sm"
            >
              Dashboard
            </Link>
            <Link
              to="/curriculum"
              className="px-4 py-2 bg-[#e8eaed] text-[#1a2332] rounded-lg font-medium hover:bg-[#c0c5ce] transition-colors no-underline text-sm"
            >
              Curriculum
            </Link>
            <Link
              to="/chat"
              className="px-4 py-2 bg-[#e8eaed] text-[#1a2332] rounded-lg font-medium hover:bg-[#c0c5ce] transition-colors no-underline text-sm"
            >
              Chat with Vicky
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;

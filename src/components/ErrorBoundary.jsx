import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, Home, RefreshCw } from "lucide-react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
    // You can log the error to an error reporting service here
    console.error("Error caught by boundary:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
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
                We're sorry, but something unexpected happened. Our team has been notified and is working to fix the issue.
              </p>
            </div>

            <div className="py-4 px-6 rounded-md mb-6 border-0 border-solid border-l-4 bg-[#fff3cd] border-[#856404] text-[#856404]">
              <strong>Error Details:</strong>
              <p className="mt-2 text-sm font-mono break-all">
                {this.state.error && this.state.error.toString()}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <button
                onClick={this.handleReset}
                className="px-6 py-3 bg-[#1a2332] text-white rounded-lg font-semibold hover:bg-[#0e131c] transition-colors flex items-center gap-2 border-none"
              >
                <Home className="w-5 h-5" />
                Go to Home
              </button>
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-[#d4af37] text-[#1a2332] rounded-lg font-semibold hover:bg-[#b8952e] transition-colors flex items-center gap-2 border-none"
              >
                <RefreshCw className="w-5 h-5" />
                Reload Page
              </button>
            </div>

            {process.env.NODE_ENV === "development" && this.state.errorInfo && (
              <details className="mt-6 p-4 bg-[#e8eaed] rounded-lg">
                <summary className="cursor-pointer text-[#1a2332] font-semibold mb-2">
                  Error Stack (Development Only)
                </summary>
                <pre className="mt-2 text-xs text-[#8b95a5] overflow-auto">
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;


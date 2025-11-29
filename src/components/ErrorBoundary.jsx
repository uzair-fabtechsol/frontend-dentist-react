import React from "react";

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

    // Log error to console
    console.error("Error caught by boundary:", error, errorInfo);

    // Store error in sessionStorage for the error page to access
    try {
      sessionStorage.setItem(
        "errorBoundaryError",
        JSON.stringify({
          message: error?.message || error?.toString() || "Unknown error",
          stack: error?.stack || "",
          componentStack: errorInfo?.componentStack || "",
        })
      );
    } catch (e) {
      console.error("Failed to store error in sessionStorage:", e);
    }

    // Redirect to error page
    window.location.href = "/error";
  }

  render() {
    if (this.state.hasError) {
      // This will briefly show while redirecting
      return null;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

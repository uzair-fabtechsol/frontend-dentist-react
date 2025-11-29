import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFoundPage = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-8 px-4">
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md text-center">
        <div className="mb-6">
          <h1 className="text-[#1a2332] text-[6rem] md:text-[8rem] font-bold mb-4">
            404
          </h1>
          <h2 className="text-[#1a2332] text-[2rem] md:text-[2.5rem] font-semibold mb-4">
            Page Not Found
          </h2>
          <p className="text-[#8b95a5] text-lg mb-6 max-w-2xl mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been
            moved, deleted, or the URL might be incorrect.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="px-6 py-3 bg-[#1a2332] text-white rounded-lg font-semibold hover:bg-[#0e131c] transition-colors no-underline flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Go to Home
          </Link>
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-[#d4af37] text-[#1a2332] rounded-lg font-semibold hover:bg-[#b8952e] transition-colors no-underline flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>
        </div>

        <div className="mt-8 pt-8 border-t border-[#e8eaed]">
          <p className="text-[#8b95a5] text-sm mb-4">
            You might be looking for:
          </p>
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

export default NotFoundPage;

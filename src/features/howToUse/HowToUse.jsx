import { Link } from "react-router-dom";

const HowToUse = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-8">
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-[fadeIn_0.5s_ease-in]">
        <div className="border-b-2 border-[#e8eaed] pb-4 mb-6 text-center">
          <h1 className="text-[#1a2332] text-[1.75rem] font-semibold">
            How to Use This Platform 📖
          </h1>
          <p className="text-[#8b95a5] text-base mt-2">
            Your Quick Start Guide to Maximum Results
          </p>
        </div>

        <div className="mt-4 mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#1a2332] font-medium">
              Onboarding Progress
            </span>
            <span className="text-[#1a2332] font-semibold">100%</span>
          </div>
          <div className="w-full h-6 bg-[#e8eaed] rounded-xl overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#4a90e2] to-[#d4af37] rounded-xl transition-all duration-500 flex items-center justify-end pr-2"
              style={{ width: "100%" }}
            >
              <span className="text-white text-xs font-semibold">
                Complete!
              </span>
            </div>
          </div>
        </div>

        <div className="py-4 px-6 rounded-md mb-6 border-0 border-solid border-l-4 bg-[#d4edda] border-[#155724] text-[#155724]">
          <strong>🎉 You're Almost Ready!</strong> Just a few minutes to
          understand how everything works, and you'll be on your way to
          financial mastery.
        </div>

        <div className="mt-4">
          <h2 className="text-[#1a2332] text-xl font-semibold mb-3">
            Platform Navigation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#e8eaed]">
              <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
                📊 Dashboard
              </h3>
              <p className="text-[#8b95a5]">
                Your home base. See your progress, upcoming lessons, tasks, and
                quick access to all features.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#e8eaed]">
              <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
                📚 Curriculum
              </h3>
              <p className="text-[#8b95a5]">
                Access all 12 weekly modules. Each includes video lessons,
                guides, case studies, and quizzes.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#e8eaed]">
              <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
                💬 Chat with Vicky
              </h3>
              <p className="text-[#8b95a5]">
                Your 24/7 AI assistant. Ask questions, get reminders, receive
                implementation help anytime.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#e8eaed]">
              <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
                📋 Implementation Tracker
              </h3>
              <p className="text-[#8b95a5]">
                Track which strategies you've implemented and measure your
                actual tax savings.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#e8eaed]">
              <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
                🏆 Progress & Certification
              </h3>
              <p className="text-[#8b95a5]">
                Monitor your completion status and work toward your
                certification.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#e8eaed]">
              <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
                📁 Resource Library
              </h3>
              <p className="text-[#8b95a5]">
                Access all templates, checklists, calculators, and reference
                materials.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-[#1a2332] text-xl font-semibold mb-2">
            Weekly Learning Flow
          </h2>
          <p className="text-[#8b95a5] mb-3">
            Here's how each week works for maximum retention and implementation:
          </p>

          <div className="bg-[#e8eaed] rounded-lg p-6 shadow-md border border-[#d0d5dc] mt-3">
            <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
              Step 1: Watch the Video Lesson (20-30 minutes)
            </h3>
            <p className="text-[#8b95a5] mb-2">
              Norman explains the tax strategy, shows real examples, and breaks
              down exactly how it works.
            </p>
            <ul className="list-none pl-0 mt-2 space-y-1">
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Take notes on key concepts
              </li>
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Pause and rewatch sections as needed
              </li>
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Think about how it applies to your situation
              </li>
            </ul>
          </div>

          <div className="bg-[#e8eaed] rounded-lg p-6 shadow-md border border-[#d0d5dc] mt-3">
            <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
              Step 2: Review the Case Study (10 minutes)
            </h3>
            <p className="text-[#8b95a5] mb-2">
              See a real dentist who implemented the strategy and their actual
              results.
            </p>
            <ul className="list-none pl-0 mt-2 space-y-1">
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Compare their situation to yours
              </li>
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Calculate potential impact for your practice
              </li>
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Note any questions or concerns
              </li>
            </ul>
          </div>

          <div className="bg-[#e8eaed] rounded-lg p-6 shadow-md border border-[#d0d5dc] mt-3">
            <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
              Step 3: Complete the Knowledge Check (5 minutes)
            </h3>
            <p className="text-[#8b95a5] mb-2">
              Quick quiz to ensure you understand the core concepts before
              moving forward.
            </p>
            <ul className="list-none pl-0 mt-2 space-y-1">
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Must score 70% or higher to proceed
              </li>
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Can retake unlimited times
              </li>
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Immediate feedback on incorrect answers
              </li>
            </ul>
          </div>

          <div className="bg-[#e8eaed] rounded-lg p-6 shadow-md border border-[#d0d5dc] mt-3">
            <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
              Step 4: Download Implementation Checklist (5 minutes)
            </h3>
            <p className="text-[#8b95a5] mb-2">
              Get your personalized action plan for implementing this strategy.
            </p>
            <ul className="list-none pl-0 mt-2 space-y-1">
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Step-by-step tasks in order
              </li>
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Who you need to involve (CPA, attorney, etc.)
              </li>
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Expected timeline and costs
              </li>
            </ul>
          </div>

          <div className="bg-[#e8eaed] rounded-lg p-6 shadow-md border border-[#d0d5dc] mt-3">
            <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
              Step 5: Schedule Implementation (10-15 minutes)
            </h3>
            <p className="text-[#8b95a5] mb-2">
              Put tasks on your calendar and start taking action.
            </p>
            <ul className="list-none pl-0 mt-2 space-y-1">
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Add tasks to your calendar
              </li>
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Schedule meetings with your team
              </li>
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                Track progress in the platform
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-[#1a2332] text-xl font-semibold mb-3">
            Pro Tips for Success
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#e8eaed]">
            <ul className="list-none pl-0 space-y-3">
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                <strong className="text-[#1a2332]">Block Your Time:</strong>{" "}
                Schedule 60-90 minutes every week. Sunday mornings or Wednesday
                evenings work well for most dentists.
              </li>
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                <strong className="text-[#1a2332]">Don't Rush:</strong> It's
                better to master one strategy per week than to race through
                without understanding.
              </li>
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                <strong className="text-[#1a2332]">Ask Questions:</strong> Use
                Vicky (AI assistant) whenever you're confused. There are no dumb
                questions!
              </li>
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                <strong className="text-[#1a2332]">
                  Implement as You Learn:
                </strong>{" "}
                Don't wait until the end. Start implementing strategies
                immediately for faster results.
              </li>
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                <strong className="text-[#1a2332]">
                  Share with Your Team:
                </strong>{" "}
                Loop in your CPA, bookkeeper, and office manager on relevant
                strategies.
              </li>
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                <strong className="text-[#1a2332]">Track Everything:</strong>{" "}
                Use the Implementation Tracker to monitor your actual tax
                savings. This keeps you motivated!
              </li>
              <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
                <strong className="text-[#1a2332]">
                  Join Community Calls:
                </strong>{" "}
                Attend optional live Q&A sessions to learn from other dentists.
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-[#1a2332] text-xl font-semibold mb-3">
            Getting Help
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#e8eaed]">
              <h4 className="text-[#1a2332] text-lg font-semibold mb-2">
                🤖 Vicky (AI Assistant)
              </h4>
              <p className="text-[#8b95a5] mb-1">
                <strong className="text-[#1a2332]">Best for:</strong> Quick
                questions, clarifications, reminders
              </p>
              <p className="text-[#8b95a5] mb-1">
                <strong className="text-[#1a2332]">Response time:</strong>{" "}
                Instant
              </p>
              <p className="text-[#8b95a5]">
                <strong className="text-[#1a2332]">Available:</strong> 24/7
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#e8eaed]">
              <h4 className="text-[#1a2332] text-lg font-semibold mb-2">
                📧 Support Team
              </h4>
              <p className="text-[#8b95a5] mb-1">
                <strong className="text-[#1a2332]">Best for:</strong> Technical
                issues, account questions
              </p>
              <p className="text-[#8b95a5] mb-1">
                <strong className="text-[#1a2332]">Response time:</strong>{" "}
                Within 24 hours
              </p>
              <p className="text-[#8b95a5]">
                <strong className="text-[#1a2332]">Email:</strong>{" "}
                support@dentistacademy.com
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#e8eaed]">
              <h4 className="text-[#1a2332] text-lg font-semibold mb-2">
                🎥 Live Q&A Sessions
              </h4>
              <p className="text-[#8b95a5] mb-1">
                <strong className="text-[#1a2332]">Best for:</strong> Complex
                questions, networking
              </p>
              <p className="text-[#8b95a5] mb-1">
                <strong className="text-[#1a2332]">Frequency:</strong> Bi-weekly
                on Thursdays
              </p>
              <p className="text-[#8b95a5]">
                <strong className="text-[#1a2332]">Duration:</strong> 60 minutes
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md border border-[#e8eaed]">
              <h4 className="text-[#1a2332] text-lg font-semibold mb-2">
                👥 Student Community
              </h4>
              <p className="text-[#8b95a5] mb-1">
                <strong className="text-[#1a2332]">Best for:</strong> Peer
                advice, motivation
              </p>
              <p className="text-[#8b95a5] mb-1">
                <strong className="text-[#1a2332]">Access:</strong> Private
                forum and groups
              </p>
              <p className="text-[#8b95a5]">
                <strong className="text-[#1a2332]">Activity:</strong> Daily
                discussions
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-[#1a2332] text-xl font-semibold mb-2">
            Certification Requirements
          </h2>
          <p className="text-[#8b95a5] mb-2">
            To earn your certification, you must:
          </p>
          <ul className="list-none pl-0 mt-2 space-y-1">
            <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              Complete all 12 weekly modules
            </li>
            <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              Score 70%+ on all knowledge checks
            </li>
            <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              Implement at least 3 tax strategies
            </li>
            <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              Complete the final mastery assessment
            </li>
            <li className="text-[#8b95a5] pl-6 relative before:content-['✓'] before:absolute before:left-0 before:text-[#28a745] before:font-bold">
              Submit your implementation case study
            </li>
          </ul>
          <div className="py-4 px-6 rounded-md mt-3 border-0 border-solid border-l-4 bg-[#d1ecf1] border-[#0c5460] text-[#0c5460]">
            <strong>Certification Benefits:</strong> Official credential,
            digital badge, listing in our directory, access to advanced
            masterclasses, and lifetime community membership.
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-[#1a2332] text-xl font-semibold mb-3">
            Mobile Access
          </h2>
          <div className="py-4 px-6 rounded-md border-0 border-solid border-l-4 bg-[#d4edda] border-[#155724] text-[#155724]">
            <strong>📱 Learn on the Go!</strong>
            <br />
            This platform is fully mobile-responsive. Watch lessons, take
            quizzes, and chat with Vicky from your phone or tablet. Bookmark
            this page or add it to your home screen for easy access.
          </div>
        </div>

        <div className="mt-4">
          <h2 className="text-[#1a2332] text-xl font-semibold mb-3">
            Your Schedule
          </h2>
          <div className="bg-white rounded-lg p-6 shadow-md border border-[#e8eaed]">
            <p className="text-[#1a2332] font-semibold mb-2">
              <strong>Weekly Time Commitment:</strong>
            </p>
            <ul className="ml-6 mt-4 space-y-1 list-disc text-[#8b95a5]">
              <li>Video Lesson: 20-30 minutes</li>
              <li>Case Study Review: 10 minutes</li>
              <li>Knowledge Check: 5 minutes</li>
              <li>Implementation Planning: 15-20 minutes</li>
              <li className="font-semibold text-[#1a2332]">
                Total: 60-90 minutes/week
              </li>
            </ul>
            <p className="mt-3 text-[#8b95a5]">
              <strong className="text-[#1a2332]">
                Plus: Implementation time varies by strategy (usually 1-4
                hours/month)
              </strong>
            </p>
          </div>
        </div>

        <div className="py-4 px-6 rounded-md mt-4 border-0 border-solid border-l-4 bg-[#fff3cd] border-[#856404] text-[#856404]">
          <strong>⚠️ Important Note:</strong> This program provides education on
          tax strategies. Always consult with your qualified CPA or tax attorney
          before implementing any strategy. We are not providing personalized
          tax advice.
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6">
          <Link
            to="/goal-setting"
            className="px-6 py-3 bg-[#8b95a5] text-white rounded-lg font-semibold text-center hover:bg-[#6b7480] transition-colors no-underline"
          >
            ← Previous: Goal Setting
          </Link>
          <Link
            to="/dashboard"
            className="px-6 py-3 bg-[#28a745] text-white rounded-lg font-semibold text-center hover:bg-[#218838] transition-colors no-underline"
          >
            Start Learning! →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowToUse;

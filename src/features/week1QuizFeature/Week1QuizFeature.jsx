import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Week1QuizFeature = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
  });
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const correctAnswers = {
    q1: "b",
    q2: "b",
    q3: "d",
    q4: "c",
    q5: "b",
    q6: "b",
    q7: "b",
    q8: "c",
    q9: "c",
    q10: "b",
  };

  const handleOptionSelect = (question, value) => {
    setAnswers((prev) => ({
      ...prev,
      [question]: value,
    }));
    setSelectedOptions((prev) => ({
      ...prev,
      [question]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let correctCount = 0;
    const total = 10;

    for (let i = 1; i <= 10; i++) {
      const question = `q${i}`;
      if (answers[question] === correctAnswers[question]) {
        correctCount++;
      }
    }

    const percentage = (correctCount / total) * 100;
    setScore(correctCount);
    setShowResults(true);
    window.scrollTo(0, 0);
  };

  const passed = (score / 10) * 100 >= 70;

  const QuizOption = ({ question, value, label, optionKey }) => {
    const isSelected = selectedOptions[question] === value;
    return (
      <div
        onClick={() => handleOptionSelect(question, value)}
        className={`p-4 my-3 border-2 border-solid rounded-md cursor-pointer transition-all ${
          isSelected
            ? "border-[#4a90e2] bg-[#4a90e2] text-white"
            : "border-[#e8eaed] hover:border-[#4a90e2] hover:bg-[#e8eaed]"
        }`}
      >
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            name={question}
            value={value}
            checked={isSelected}
            onChange={() => handleOptionSelect(question, value)}
            className="mr-3 w-5 h-5 cursor-pointer"
          />
          {label}
        </label>
      </div>
    );
  };

  const QuizQuestion = ({ questionNum, question, options }) => {
    return (
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4">
        <h3 className="text-[#1a2332] text-lg font-semibold mb-2">
          Question {questionNum} of 10
        </h3>
        <p className="mt-2 mb-4 text-[#1a2332]">
          <strong>{question}</strong>
        </p>
        {options.map((option, index) => (
          <QuizOption
            key={index}
            question={`q${questionNum}`}
            value={option.value}
            label={option.label}
            optionKey={option.value}
          />
        ))}
      </div>
    );
  };

  if (showResults) {
    const percentage = (score / 10) * 100;
    return (
      <div className="max-w-[1400px] mx-auto my-8 px-4">
        <div className="bg-white rounded-lg p-8 mb-6 shadow-md animate-[fadeIn_0.5s_ease-in]">
          <h2 className="text-[#1a2332] text-[1.75rem] font-semibold mb-4">
            Quiz Results
          </h2>
          <div className="text-center py-8">
            <div
              className={`text-[4rem] font-bold mb-4 ${
                passed ? "text-[#28a745]" : "text-[#dc3545]"
              }`}
            >
              {percentage}%
            </div>
            <p className="text-[1.5rem] mt-4 text-[#8b95a5]">
              You scored {score} out of 10
            </p>
            <div
              className={`py-4 px-6 rounded-md mt-3 border-0 border-solid border-l-4 ${
                passed
                  ? "bg-[#d4edda] border-[#155724] text-[#155724]"
                  : "bg-[#fff3cd] border-[#856404] text-[#856404]"
              }`}
            >
              {passed ? (
                <>
                  <strong>🎉 Congratulations! You passed!</strong>
                  <br />
                  You have a strong understanding of R.O.B.S. strategy.
                </>
              ) : (
                <>
                  <strong>Keep Learning!</strong>
                  <br />
                  Review the lesson and case study, then try again. You need 70%
                  to pass.
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
            {passed ? (
              <>
                <Link
                  to="/dashboard"
                  className="px-6 py-3 bg-[#8b95a5] text-white rounded-lg font-semibold text-center hover:bg-[#6b7480] transition-colors no-underline"
                >
                  Back to Dashboard
                </Link>
                <Link
                  to="/week2-lesson"
                  className="px-6 py-3 bg-[#1a2332] text-white rounded-lg font-semibold text-center hover:bg-[#0e131c] transition-colors no-underline"
                >
                  Continue to Week 2 →
                </Link>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setShowResults(false);
                    setAnswers({
                      q1: "",
                      q2: "",
                      q3: "",
                      q4: "",
                      q5: "",
                      q6: "",
                      q7: "",
                      q8: "",
                      q9: "",
                      q10: "",
                    });
                    setSelectedOptions({});
                    setScore(0);
                  }}
                  className="px-6 py-3 bg-[#8b95a5] text-white rounded-lg font-semibold hover:bg-[#6b7480] transition-colors border-none"
                >
                  Retake Quiz
                </button>
                <Link
                  to="/week1-lesson"
                  className="px-6 py-3 bg-[#1a2332] text-white rounded-lg font-semibold text-center hover:bg-[#0e131c] transition-colors no-underline"
                >
                  Review Lesson
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1400px] mx-auto my-8 px-4">
      <div className="bg-white rounded-lg p-8 mb-6 shadow-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 animate-[fadeIn_0.5s_ease-in]">
        <div className="border-b-2 border-[#e8eaed] pb-4 mb-6 text-center">
          <h1 className="text-[#1a2332] text-[1.75rem] font-semibold">
            Week 1 Knowledge Check
          </h1>
          <p className="text-[#8b95a5] text-base mt-2">
            Test Your Understanding of R.O.B.S. Strategy
          </p>
        </div>

        <div className="py-4 px-6 rounded-md mb-6 border-0 border-solid border-l-4 bg-[#d1ecf1] border-[#0c5460] text-[#0c5460]">
          <strong>Passing Score: 70% (7 out of 10 questions)</strong>
          <br />
          You can retake this quiz as many times as needed. Take your time!
        </div>
      </div>

      <form onSubmit={handleSubmit} className="animate-[fadeIn_0.5s_ease-in]">
        <QuizQuestion
          questionNum={1}
          question="What does R.O.B.S. stand for?"
          options={[
            {
              value: "a",
              label: "A) Retirement Optimization for Business Strategies",
            },
            { value: "b", label: "B) Rollover for Business Startups" },
            { value: "c", label: "C) Retirement Owned Business Structure" },
            {
              value: "d",
              label: "D) Restructured Operation of Business Savings",
            },
          ]}
        />

        <QuizQuestion
          questionNum={2}
          question="What is the primary benefit of using R.O.B.S.?"
          options={[
            { value: "a", label: "A) It eliminates all business taxes" },
            {
              value: "b",
              label:
                "B) It allows tax-free and penalty-free use of retirement funds for business",
            },
            { value: "c", label: "C) It doubles your retirement savings" },
            { value: "d", label: "D) It provides free government grants" },
          ]}
        />

        <QuizQuestion
          questionNum={3}
          question="What type of entity must you form to use R.O.B.S.?"
          options={[
            { value: "a", label: "A) Sole Proprietorship" },
            { value: "b", label: "B) Limited Liability Company (LLC)" },
            { value: "c", label: "C) S-Corporation" },
            { value: "d", label: "D) C-Corporation" },
          ]}
        />

        <QuizQuestion
          questionNum={4}
          question="In Dr. Sarah Chen's case study, how much did she save using R.O.B.S.?"
          options={[
            { value: "a", label: "A) $50,000" },
            { value: "b", label: "B) $100,000" },
            { value: "c", label: "C) $160,000" },
            { value: "d", label: "D) $250,000" },
          ]}
        />

        <QuizQuestion
          questionNum={5}
          question="What is the typical setup timeframe for R.O.B.S.?"
          options={[
            { value: "a", label: "A) 1-2 weeks" },
            { value: "b", label: "B) 4-8 weeks" },
            { value: "c", label: "C) 3-6 months" },
            { value: "d", label: "D) Over 1 year" },
          ]}
        />

        <QuizQuestion
          questionNum={6}
          question="What is the early withdrawal penalty you avoid by using R.O.B.S.?"
          options={[
            { value: "a", label: "A) 5%" },
            { value: "b", label: "B) 10%" },
            { value: "c", label: "C) 15%" },
            { value: "d", label: "D) 20%" },
          ]}
        />

        <QuizQuestion
          questionNum={7}
          question="Who is R.O.B.S. typically IDEAL for?"
          options={[
            { value: "a", label: "A) Dentists over age 65 looking to retire" },
            {
              value: "b",
              label: "B) Dentists under 59½ buying or starting a practice",
            },
            { value: "c", label: "C) Dentists with no retirement savings" },
            {
              value: "d",
              label:
                "D) Dentists who own their practice and need working capital",
            },
          ]}
        />

        <QuizQuestion
          questionNum={8}
          question="What is the minimum recommended retirement account balance for R.O.B.S.?"
          options={[
            { value: "a", label: "A) $10,000" },
            { value: "b", label: "B) $25,000" },
            { value: "c", label: "C) $50,000" },
            { value: "d", label: "D) $100,000" },
          ]}
        />

        <QuizQuestion
          questionNum={9}
          question="What is a common mistake to avoid with R.O.B.S.?"
          options={[
            { value: "a", label: "A) Using it to buy a practice" },
            { value: "b", label: "B) Working with specialists" },
            {
              value: "c",
              label: "C) Taking a DIY approach without professional help",
            },
            { value: "d", label: "D) Rolling over your 401(k)" },
          ]}
        />

        <QuizQuestion
          questionNum={10}
          question="What is the typical first-year cost for R.O.B.S. setup and maintenance?"
          options={[
            { value: "a", label: "A) $1,000 - $2,000" },
            { value: "b", label: "B) $6,000 - $11,000" },
            { value: "c", label: "C) $20,000 - $30,000" },
            { value: "d", label: "D) $50,000+" },
          ]}
        />

        <div className="bg-white rounded-lg p-8 mb-6 shadow-md mt-4">
          <button
            type="submit"
            className="w-full px-6 py-4 bg-[#28a745] text-white rounded-lg font-semibold text-lg hover:bg-[#218838] transition-colors border-none"
          >
            Submit Quiz
          </button>
          <Link
            to="/week1-case-study"
            className="block w-full mt-2 px-6 py-3 bg-[#8b95a5] text-white rounded-lg font-semibold text-center hover:bg-[#6b7480] transition-colors no-underline"
          >
            ← Back to Case Study
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Week1QuizFeature;

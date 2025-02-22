import React from 'react';
import Meditation from '@/assets/Meditation.jpg'; 
import Treatment from '@/assets/Treatment.avif'; 
import Twitter from '@/assets/Twitter.webp'; 
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ai from "@/assets/ai.jpg"
const Home = () => {

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = [
    {
      question: "What symptoms are you experiencing?",
      options: ["Feeling sad", "Depressed", "Anxiety", "Overthinking", "Panic attacks", "Mood swings"],
    },
    {
      question: "How long have you had these symptoms?",
      options: ["<1 week", "1-2 weeks", ">1 month", ">2 months", ">6 months"],
    },
    {
      question: "Any other symptoms?",
      options: ["Loss of interest", "Impulsive behavior", "Hallucinations", "Disturbed sleep", "None"],
    },
  ];

  const doctors = {
    Psychiatrist: [{ name: "Dr. Sanjay Chugh", contact: "New Delhi" }],
    Psychologist: [{ name: "Dr. Sameer Parikh", contact: "Fortis Healthcare" }],
  };

  const conditions = {
    "Feeling sad,>2 weeks,Loss of interest": {
      diagnosis: ["Depression"],
      remedies: ["Regular exercise", "Mindfulness meditation", "Journaling", "Social support"],
      doctors: ["Psychiatrist"],
    },
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    if (!isChatOpen) {
      setQIndex(0);
      setAnswers([]);
    }
  };

  const recordAnswer = (answer) => {
    setAnswers([...answers, answer]);
    setQIndex(qIndex + 1);
  };

  const showDiagnosis = () => {
    const key = answers.join(",");
    const result = conditions[key] || {
      diagnosis: ["General Consultation Needed"],
      remedies: ["Maintain hydration", "Monitor symptoms"],
      doctors: ["General Physician"],
    };
  }


  return (
    <>
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chatbot Button */}
      <div
        className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
        onClick={toggleChat}
      >
        <img src={ai} alt="Chatbot" className="w-10 h-10 animate-ping" />
      </div>

      {/* Chat Box */}
      {isChatOpen && (
        <div className="w-80 h-[400px] bg-white rounded-lg shadow-lg flex flex-col mt-2">
          {/* Chat Header */}
          <div className="bg-blue-500 text-white p-4 rounded-t-lg flex justify-between items-center">
            <span className="font-semibold">Health Assistant</span>
            <span className="cursor-pointer text-xl" onClick={toggleChat}>
              ×
            </span>
          </div>

          {/* Chat Content */}
          <div className="flex-1 p-4 overflow-y-auto">
            {qIndex < questions.length ? (
              <>
                <div className="bg-gray-100 p-3 rounded-lg mb-3">
                  {questions[qIndex].question}
                </div>
                <div className="grid gap-2">
                  {questions[qIndex].options.map((option, index) => (
                    <button
                      key={index}
                      className="bg-white border border-gray-200 p-2 rounded-full text-sm hover:bg-gray-50"
                      onClick={() => recordAnswer(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="bg-gray-100 p-3 rounded-lg">
                {showDiagnosis()}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  

      
      <div className="w-full h-[50vh] pt-20 flex flex-col justify-center items-center bg-black px-4">
        <h1 className="text-4xl md:text-5xl text-[#c6d8e2] text-center mb-6 font-serif">
          Welcome,
        </h1>
        <h1 className="text-2xl md:text-4xl text-[#c6d8e2] text-center mb-4 font-serif">
          “Your Journey to Mental Wellness Starts Here”
        </h1>
        <h1 className="text-2xl md:text-4xl text-[#c6d8e2] text-center font-serif">
          “Find Support, Resources, and Peace of Mind”
        </h1>
      </div>

      <div className='pt-10 flex flex-col justify-center items-center'>
        <h1 className='text-3xl md:text-4xl text-black text-center mb-9 font-serif max-w-[90%] lg:max-w-[70%]'>About Us</h1>
        <p className='text-lg md:text-xl text-gray-700 text-center font-serif leading-relaxed max-w-[90%] lg:max-w-[70%]"'>Welcome to Harmony, your safe space for mental wellness. Our mission is to help young individuals navigate stress, anxiety, and emotional challenges by providing support, resources, and guidance. Whether you're struggling with academic pressure, relationships, or personal growth, we offer self-help tools, meditation guides, expert advice, and community support to help you find balance and peace of mind.

Join us on this journey to better mental health—because you’re not alone. 💙</p>
      </div>

      
      <div className="pt-20 flex flex-wrap justify-center items-center gap-6 px-4">


        <div className="flex flex-col w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105  border-1 hover:border-gray-300 p-4">
          
          <div className="text-center py-4 bg-gray-200 rounded-t-2xl">
            <h1 className="text-xl font-bold text-black font-serif"><Link to="/Meditation">Meditation</Link></h1>
          </div>
          
          <div className="w-full">
            <img src={Meditation} alt="Meditation" className="w-full h-64 object-cover rounded-b-2xl" />
          </div>
        </div>

        <div className="flex flex-col w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105  border-1 hover:border-gray-300 p-4">
          
          <div className="text-center py-4 bg-gray-200 rounded-t-2xl">
            <h1 className="text-xl font-bold text-black font-serif"><Link to="/chalanges">Treatment</Link></h1>
          </div>
          
          <div className="w-full">
            <img src={Treatment} alt="Meditation" className="w-full h-64 object-cover rounded-b-2xl" />
          </div>
        </div>

        <div className="flex flex-col w-80 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105  border-1 hover:border-gray-300 p-4">
          
          <div className="text-center py-4 bg-gray-200 rounded-t-2xl">
            <h1 className="text-xl font-bold text-black font-serif"><Link to="/Post">Twitter</Link></h1>
          </div>
          
          <div className="w-full">
            <img src={Twitter} alt="Meditation" className="w-full h-64 object-cover rounded-b-2xl" />
          </div>
        </div>
        
        

      </div>

  
      <div className="flex flex-col items-center w-full pt-10 px-4 md:px-10">
        <h1 className="text-3xl md:text-4xl text-black text-center mb-9 font-serif max-w-[90%] lg:max-w-[70%]">
          The Silent Struggles of Youth: Stress, Anxiety & Overcoming Them
        </h1>
        <p className="text-lg md:text-xl text-gray-700 text-center font-serif leading-relaxed max-w-[90%] lg:max-w-[70%]">
          In today’s fast-paced world, many young people find themselves trapped in a cycle of stress, anxiety, and emotional distress. 
          From academic pressure and workload to love relationships, peer pressure, and family expectations, life can feel overwhelming. 
          Social media often adds to this, creating unrealistic comparisons and fear of missing out (FOMO). Financial struggles, career uncertainties, 
          and loneliness further contribute to mental exhaustion, leaving youth feeling stuck and hopeless.
          <br /><br />
          But here’s the good news—help is available. This web app is designed to be a safe space where you can find support, resources, 
          and guidance to manage your mental well-being. Whether it’s self-help tools, meditation guides, expert advice, or community support, 
          this platform offers ways to cope with stress, build resilience, and find peace of mind.
          <br /><br />
          By taking small steps—practicing mindfulness, setting boundaries, seeking help, and staying connected—you can regain control and 
          create a healthier, happier life. Your journey to mental wellness starts here! 💙
        </p>
      </div>
    </>
  );
};

export default Home;

"use client";
import { Card, CardContent } from "@/components/smackathon/FAQ/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/smackathon/FAQ/ui/accordion";
import { useState } from "react";
import FAQBackground from "./faq-background";
const faqData = [
  {
    id: "1",
    question: "What is SMACKATHON?",
    answer:
      "SMACKATHON is an innovative hackathon that brings together developers, designers, and creative minds to solve real-world problems through technology. It's a competitive event where participants collaborate to build innovative solutions within a limited timeframe.",
  },
  {
    id: "2",
    question: "Why should one participate in Smackathon?",
    answer:
      "Participating in SMACKATHON offers numerous benefits including skill development, networking opportunities, exposure to industry experts, hands-on experience with cutting-edge technologies, and the chance to win exciting prizes while making a real impact.",
  },
  {
    id: "3",
    question:
      "Is there any eligibility criteria to participate in Smackathon? If yes, which candidates are eligible?",
    answer:
      "SMACKATHON is open to students, professionals, and technology enthusiasts. Participants should have basic programming knowledge and passion for innovation. Teams can include members from different backgrounds including developers, designers, and business strategists.",
  },
  {
    id: "4",
    question: "Is accommodation facility available for outsiders?",
    answer:
      "Yes, we provide accommodation assistance for outstation participants — only for boys on the day of the Hackathon. Girls are requested to make their own accommodation arrangements. Details about nearby hotels, hostels, and partner stays will be shared with registered participants. Early registration is recommended to secure the best options.",
  },
  {
    id: "5",
    question: "What are the perks of attending Smackathon?",
    answer:
      "Participants enjoy free meals, swag kits, mentorship from industry experts, networking sessions, workshops, access to premium tools and platforms, certificates of participation, and of course, exciting cash prizes and recognition for winners.",
  },
  {
    id: "6",
    question: "When will the problem statement be provided to the candidate?",
    answer:
      "Problem statements will be revealed at the opening ceremony of SMACKATHON. This ensures fair competition and prevents advance preparation. However, general themes and focus areas may be shared during registration to help teams prepare.",
  },
  {
    id: "7",
    question: "Do I compulsorily need to have a team to participate?",
    answer:
      "While team participation is encouraged (3-5 members), individual participation is also welcome. We can help solo participants find teammates during the team formation session at the beginning of the event.",
  },
];

export default function Component() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
     
    <div className=' w-full overflow-hidden bg-gradient-to-b from-[#0a0a0f] to-[#110012] shadow-[0_-100px_100px_50px_rgba(0,0,0,0.8)]'>
      {/* Continuous gradient background for seamless transition */}
      {/* ASSESSMENT CRITERIA SECTION */}
      <Card className="w-full max-w-none mx-0 bg-gradient-to-br from-[#0a0a0f]/80 via-[#120014]/60 to-[#0a0a0f]/80 backdrop-blur-sm relative z-5 overflow-hidden shadow-[0_120px_0_0_rgba(16,0,18,0.85),0_220px_140px_80px_rgba(10,10,15,0.85)] shadow-black border-0">
        <CardContent className="py-10 sm:py-16 md:py-20 text-center relative overflow-hidden">
          {/* Enhanced Geometric Pattern Background - Contained */}
          <div className="absolute inset-0 opacity-10 overflow-hidden">
            {/* Triangle Pattern - Enhanced with Glow */}
            <div className="absolute top-8 left-8 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-pink-400 drop-shadow-[0_0_8px_rgba(244,114,182,0.6)]"></div>
            <div className="absolute top-16 right-16 w-0 h-0 border-l-10 border-r-10 border-b-15 border-l-transparent border-r-transparent border-b-pink-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.6)]"></div>
            <div className="absolute bottom-12 left-12 w-0 h-0 border-l-12 border-r-12 border-b-18 border-l-transparent border-r-transparent border-b-pink-400 drop-shadow-[0_0_12px_rgba(244,114,182,0.6)]"></div>
            <div className="absolute top-32 left-1/3 w-0 h-0 border-l-6 border-r-6 border-b-9 border-l-transparent border-r-transparent border-b-pink-500/70 drop-shadow-[0_0_6px_rgba(236,72,153,0.4)]"></div>
            <div className="absolute bottom-32 right-1/3 w-0 h-0 border-l-7 border-r-7 border-b-11 border-l-transparent border-r-transparent border-b-pink-400/70 drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]"></div>

            {/* Circle Pattern - Enhanced with Glow */}
            <div className="absolute top-20 right-8 w-16 h-16 rounded-full border-4 border-pink-400 shadow-[0_0_20px_rgba(244,114,182,0.5)]"></div>
            <div className="absolute bottom-20 right-20 w-12 h-12 rounded-full border-3 border-pink-500 shadow-[0_0_16px_rgba(236,72,153,0.5)]"></div>
            <div className="absolute top-2/3 left-16 w-10 h-10 rounded-full border-2 border-pink-400/70 shadow-[0_0_12px_rgba(244,114,182,0.4)]"></div>
            <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full border-2 border-pink-500/70 shadow-[0_0_10px_rgba(236,72,153,0.4)]"></div>
            <div className="absolute top-1/3 right-1/4 w-14 h-14 rounded-full border-3 border-pink-400/50 shadow-[0_0_18px_rgba(244,114,182,0.3)]"></div>

            {/* Square Pattern - Enhanced with Glow */}
            <div className="absolute top-1/2 left-8 w-12 h-12 border-3 border-pink-400 rotate-45 shadow-[0_0_16px_rgba(244,114,182,0.5)]"></div>
            <div className="absolute bottom-8 left-1/3 w-8 h-8 bg-pink-400/50 rotate-45 shadow-[0_0_12px_rgba(244,114,182,0.6)]"></div>
            <div className="absolute top-24 right-1/3 w-10 h-10 border-2 border-pink-500 rotate-45 shadow-[0_0_14px_rgba(236,72,153,0.5)]"></div>
            <div className="absolute bottom-1/3 left-20 w-6 h-6 bg-pink-500/60 rotate-45 shadow-[0_0_10px_rgba(236,72,153,0.6)]"></div>
            <div className="absolute top-40 left-2/3 w-9 h-9 border-2 border-pink-400/60 rotate-45 shadow-[0_0_12px_rgba(244,114,182,0.4)]"></div>

            {/* Squid Game Themed Shapes */}
            {/* Honeycomb Pattern */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 border-2 border-pink-400/50 rotate-0 shadow-[0_0_8px_rgba(244,114,182,0.4)]" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
                  <div className="w-full h-full bg-pink-400/20"></div>
                </div>
              </div>
            </div>
            
            {/* Star Pattern (reminiscent of guard masks) */}
            <div className="absolute bottom-20 left-1/4 w-6 h-6 text-pink-500/70" style={{textShadow: '0 0 8px rgba(236,72,153,0.6)'}}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-[0_0_6px_rgba(236,72,153,0.5)]">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </div>
            
            {/* Umbrella Symbol */}
            <div className="absolute top-3/4 right-1/3 w-8 h-8 text-pink-400/60" style={{textShadow: '0 0 10px rgba(244,114,182,0.6)'}}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full drop-shadow-[0_0_8px_rgba(244,114,182,0.5)]">
                <path d="M12 2C8.14 2 5 5.14 5 9h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7zm0 3c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4zm0 6v9h2v-9h-2z"/>
              </svg>
            </div>
            
            {/* Diamond Pattern */}
            <div className="absolute top-1/4 left-3/4 w-6 h-6 bg-pink-500/40 rotate-45 shadow-[0_0_10px_rgba(236,72,153,0.5)]" style={{clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'}}>
            </div>
            
            {/* Bridge/Ladder Pattern */}
            <div className="absolute bottom-1/4 right-12 flex flex-col space-y-1">
              <div className="w-6 h-1 bg-pink-400/30 shadow-[0_0_4px_rgba(244,114,182,0.5)]"></div>
              <div className="w-6 h-1 bg-pink-400/30 shadow-[0_0_4px_rgba(244,114,182,0.5)]"></div>
              <div className="w-6 h-1 bg-pink-400/30 shadow-[0_0_4px_rgba(244,114,182,0.5)]"></div>
            </div>
            
            {/* Marbles Pattern */}
            <div className="absolute top-1/6 right-1/6 grid grid-cols-2 gap-1">
              <div className="w-2 h-2 rounded-full bg-pink-400/50 shadow-[0_0_4px_rgba(244,114,182,0.6)]"></div>
              <div className="w-2 h-2 rounded-full bg-pink-500/50 shadow-[0_0_4px_rgba(236,72,153,0.6)]"></div>
              <div className="w-2 h-2 rounded-full bg-pink-500/50 shadow-[0_0_4px_rgba(236,72,153,0.6)]"></div>
              <div className="w-2 h-2 rounded-full bg-pink-400/50 shadow-[0_0_4px_rgba(244,114,182,0.6)]"></div>
            </div>
            
            {/* Tug of War Rope Pattern */}
            <div className="absolute bottom-1/3 left-1/6 w-12 h-1 bg-gradient-to-r from-pink-400/40 to-pink-500/40 shadow-[0_0_6px_rgba(240,93,173,0.5)] transform rotate-12"></div>

            {/* Enhanced Grid Pattern with Glow */}
            <div className="absolute top-1/3 right-1/4 grid grid-cols-4 gap-1">
              <div className="w-3 h-3 bg-pink-400/40 shadow-[0_0_4px_rgba(244,114,182,0.6)]"></div>
              <div className="w-3 h-3 bg-pink-500/40 shadow-[0_0_4px_rgba(236,72,153,0.6)]"></div>
              <div className="w-3 h-3 bg-pink-400/40 shadow-[0_0_4px_rgba(244,114,182,0.6)]"></div>
              <div className="w-3 h-3 bg-pink-500/40 shadow-[0_0_4px_rgba(236,72,153,0.6)]"></div>
              <div className="w-3 h-3 bg-pink-500/40 shadow-[0_0_4px_rgba(236,72,153,0.6)]"></div>
              <div className="w-3 h-3 bg-pink-400/40 shadow-[0_0_4px_rgba(244,114,182,0.6)]"></div>
              <div className="w-3 h-3 bg-pink-500/40 shadow-[0_0_4px_rgba(236,72,153,0.6)]"></div>
              <div className="w-3 h-3 bg-pink-400/40 shadow-[0_0_4px_rgba(244,114,182,0.6)]"></div>
              <div className="w-3 h-3 bg-pink-400/40 shadow-[0_0_4px_rgba(244,114,182,0.6)]"></div>
              <div className="w-3 h-3 bg-pink-500/40 shadow-[0_0_4px_rgba(236,72,153,0.6)]"></div>
              <div className="w-3 h-3 bg-pink-400/40 shadow-[0_0_4px_rgba(244,114,182,0.6)]"></div>
              <div className="w-3 h-3 bg-pink-500/40 shadow-[0_0_4px_rgba(236,72,153,0.6)]"></div>
              <div className="w-3 h-3 bg-pink-500/40 shadow-[0_0_4px_rgba(236,72,153,0.6)]"></div>
              <div className="w-3 h-3 bg-pink-400/40 shadow-[0_0_4px_rgba(244,114,182,0.6)]"></div>
              <div className="w-3 h-3 bg-pink-500/40 shadow-[0_0_4px_rgba(236,72,153,0.6)]"></div>
              <div className="w-3 h-3 bg-pink-400/40 shadow-[0_0_4px_rgba(244,114,182,0.6)]"></div>
            </div>

            {/* Additional Geometric Elements with Glow */}
            <div className="absolute bottom-16 right-1/4 w-0 h-0 border-l-5 border-r-5 border-b-8 border-l-transparent border-r-transparent border-b-pink-500/50 drop-shadow-[0_0_6px_rgba(236,72,153,0.5)]"></div>
            <div className="absolute top-16 left-1/4 w-7 h-7 rounded-full bg-pink-400/30 shadow-[0_0_10px_rgba(244,114,182,0.5)]"></div>
            <div className="absolute bottom-24 left-2/3 w-5 h-5 bg-pink-500/40 rotate-45 shadow-[0_0_8px_rgba(236,72,153,0.5)]"></div>
          </div>

          {/* Section Title */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold font-[var(--font-geist-sans)] text-transparent bg-gradient-to-r from-fuchsia-400 via-white to-violet-400 bg-clip-text mb-6 tracking-widest relative z-10">
            Assessment Criteria
          </h2>
          <p className="text-gray-300 text-lg mb-16 tracking-wide relative z-10">
            For SMACKATHON 2025
          </p>

          {/* Criteria Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-2 sm:px-4 md:px-16 lg:px-24 xl:px-32">
            {/* Quality of work */}
             <Card className="bg-[#0c0b10]/70 border-4 border-fuchsia-500/20 backdrop-blur-sm shadow-[0_24px_60px_-12px_rgba(16,0,18,0.6)] hover:shadow-[0_36px_90px_-12px_rgba(217,70,239,0.4)] hover:border-fuchsia-400/60 transition-all duration-200 cursor-pointer group min-h-[160px] sm:min-h-[180px] md:min-h-[200px] w-full">
              <CardContent className="p-4 sm:p-6 md:p-10 text-left h-full flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-fuchsia-500 to-violet-500 rounded-full flex items-center justify-center shadow-lg group-hover:animate-pulse">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-fuchsia-400 transition-colors">
                      Quality of work submitted
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors">
                      Excellence in code quality, design, and overall execution
                      of your project.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeliness */}
            <Card className="bg-[#0c0b10]/70 border-4 border-violet-500/20 backdrop-blur-sm shadow-[0_24px_60px_-12px_rgba(16,0,18,0.6)] hover:shadow-[0_36px_90px_-12px_rgba(139,92,246,0.4)] hover:border-violet-400/60 transition-all duration-200 cursor-pointer group min-h-[160px] sm:min-h-[180px] md:min-h-[200px] w-full">
              <CardContent className="p-4 sm:p-6 md:p-10 text-left h-full flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg group-hover:animate-pulse">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-violet-400 transition-colors">
                      Timeliness of submissions
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors">
                      Meeting deadlines and delivering your work within the
                      specified timeframes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Participation */}
            <Card className="bg-[#0c0b10]/70 border-4 border-purple-500/20 backdrop-blur-sm shadow-[0_24px_60px_-12px_rgba(16,0,18,0.6)] hover:shadow-[0_36px_90px_-12px_rgba(168,85,247,0.4)] hover:border-purple-400/60 transition-all duration-200 cursor-pointer group min-h-[160px] sm:min-h-[180px] md:min-h-[200px] w-full">
              <CardContent className="p-4 sm:p-6 md:p-10 text-left h-full flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg group-hover:animate-pulse">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-400 transition-colors">
                      Participation in discussions
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors">
                      Active engagement in team discussions, mentorship
                      sessions, and community interactions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Innovation */}
            <Card className="bg-[#0c0b10]/70 border-4 border-indigo-500/20 backdrop-blur-sm shadow-[0_24px_60px_-12px_rgba(16,0,18,0.6)] hover:shadow-[0_36px_90px_-12px_rgba(99,102,241,0.4)] hover:border-indigo-400/60 transition-all duration-200 cursor-pointer group min-h-[160px] sm:min-h-[180px] md:min-h-[200px] w-full">
              <CardContent className="p-4 sm:p-6 md:p-10 text-left h-full flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg group-hover:animate-pulse">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-indigo-400 transition-colors">
                      Innovation through imagination
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed group-hover:text-white transition-colors">
                      Creative thinking, unique approaches, and innovative
                      solutions to complex problems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      

      {/* FAQ Section */}
      <div className="relative w-full max-w-none mt-0 py-42 bg-gradient-to-b from-[#0a0a0f]/80 via-[#100012]/60 to-[#110012]/80 rounded-2xl backdrop-blur-sm transition-all duration-300 z-10 overflow-hidden min-h-[900px]">
        {/* Track-Inspired Background Effects */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #3b0e3e 2px, transparent 2px),radial-gradient(circle at 75% 75%, #5b1a5e 2px, transparent 2px)`,
              backgroundSize: "80px 80px",
            }}
          ></div>
        </div>
        {/* Floating Geometric Shapes with Enhanced Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[2%] text-6xl text-pink-500/15 font-bold animate-pulse drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]" style={{textShadow: '0 0 30px rgba(236,72,153,0.6), 0 0 60px rgba(236,72,153,0.4)'}}>
            △
          </div>
          <div className="absolute top-[20%] right-[1%] text-5xl text-pink-400/15 font-bold animate-pulse drop-shadow-[0_0_16px_rgba(244,114,182,0.8)]" style={{textShadow: '0 0 25px rgba(244,114,182,0.6), 0 0 50px rgba(244,114,182,0.4)'}}>
            ○
          </div>
          <div className="absolute top-[35%] left-[1%] text-7xl text-pink-500/15 font-bold animate-pulse drop-shadow-[0_0_24px_rgba(236,72,153,0.8)]" style={{textShadow: '0 0 35px rgba(236,72,153,0.6), 0 0 70px rgba(236,72,153,0.4)'}}>
            □
          </div>
          <div className="absolute top-[50%] right-[2%] text-4xl text-pink-400/15 font-bold animate-pulse drop-shadow-[0_0_14px_rgba(244,114,182,0.8)]" style={{textShadow: '0 0 20px rgba(244,114,182,0.6), 0 0 40px rgba(244,114,182,0.4)'}}>
            △
          </div>
          <div className="absolute top-[65%] left-[3%] text-6xl text-pink-500/15 font-bold animate-pulse drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]" style={{textShadow: '0 0 30px rgba(236,72,153,0.6), 0 0 60px rgba(236,72,153,0.4)'}}>
            ○
          </div>
          <div className="absolute top-[80%] right-[1%] text-5xl text-pink-400/15 font-bold animate-pulse drop-shadow-[0_0_18px_rgba(244,114,182,0.8)]" style={{textShadow: '0 0 28px rgba(244,114,182,0.6), 0 0 55px rgba(244,114,182,0.4)'}}>
            □
          </div>
          
          {/* Squid Game Themed Elements at Margins */}
          {/* Guard Mask Symbols */}
          <div className="absolute top-[15%] left-[1%] w-8 h-8 text-pink-400/20 animate-pulse drop-shadow-[0_0_12px_rgba(244,114,182,0.6)]" style={{textShadow: '0 0 20px rgba(244,114,182,0.5)'}}>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2L13.5 8.5L20 9L14.5 14L16 20L12 17L8 20L9.5 14L4 9L10.5 8.5L12 2Z"/>
            </svg>
          </div>
          
          {/* Doll Eyes Pattern */}
          <div className="absolute top-[25%] right-[2%] flex space-x-1 animate-pulse">
            <div className="w-3 h-3 rounded-full bg-pink-400/30 shadow-[0_0_8px_rgba(244,114,182,0.6)]"></div>
            <div className="w-3 h-3 rounded-full bg-pink-400/30 shadow-[0_0_8px_rgba(244,114,182,0.6)]"></div>
          </div>
          
          {/* Honeycomb Pattern */}
          <div className="absolute top-[40%] left-[2%] w-10 h-10 animate-pulse">
            <div className="w-full h-full border-2 border-pink-500/30 shadow-[0_0_10px_rgba(236,72,153,0.5)]" style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}>
              <div className="w-full h-full bg-pink-500/10"></div>
            </div>
          </div>
          
          {/* Money Symbol */}
          <div className="absolute top-[55%] right-[1%] text-3xl text-pink-500/20 font-bold animate-pulse drop-shadow-[0_0_12px_rgba(236,72,153,0.6)]" style={{textShadow: '0 0 20px rgba(236,72,153,0.5)'}}>
            ₩
          </div>
          
          {/* Player Number Pattern */}
          <div className="absolute top-[70%] left-[1%] w-8 h-8 rounded-full border-2 border-pink-500/30 flex items-center justify-center text-xs text-pink-500/40 font-bold shadow-[0_0_8px_rgba(236,72,153,0.4)] animate-pulse">
            456
          </div>
          
          {/* Marble Pattern */}
          <div className="absolute top-[85%] right-[3%] grid grid-cols-3 gap-1 animate-pulse">
            <div className="w-2 h-2 rounded-full bg-pink-400/40 shadow-[0_0_4px_rgba(244,114,182,0.6)]"></div>
            <div className="w-2 h-2 rounded-full bg-pink-500/40 shadow-[0_0_4px_rgba(236,72,153,0.6)]"></div>
            <div className="w-2 h-2 rounded-full bg-pink-400/40 shadow-[0_0_4px_rgba(244,114,182,0.6)]"></div>
          </div>
          
          {/* Glass Bridge Pattern */}
          <div className="absolute top-[30%] left-[3%] flex flex-col space-y-1 animate-pulse">
            <div className="w-4 h-1 bg-pink-500/20 shadow-[0_0_6px_rgba(236,72,153,0.4)]"></div>
            <div className="w-4 h-1 bg-pink-400/20 shadow-[0_0_6px_rgba(244,114,182,0.4)]"></div>
            <div className="w-4 h-1 bg-pink-500/20 shadow-[0_0_6px_rgba(236,72,153,0.4)]"></div>
          </div>
          
          {/* Umbrella Candy Shape */}
          <div className="absolute top-[45%] right-[3%] w-6 h-6 text-pink-400/25 animate-pulse drop-shadow-[0_0_8px_rgba(244,114,182,0.5)]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <path d="M12 2C8.14 2 5 5.14 5 9h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.86-3.14-7-7-7zm0 7v11h2V9h-2z"/>
            </svg>
          </div>
          
          {/* Squid Shape */}
          <div className="absolute top-[75%] left-[2%] w-8 h-8 text-pink-500/20 animate-pulse drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
              <ellipse cx="12" cy="8" rx="6" ry="4"/>
              <path d="M12 12v8M8 16l-2 4M16 16l2 4M6 14l-2 2M18 14l2 2"/>
            </svg>
          </div>
          
          {/* Additional Random Margin Elements */}
          <div className="absolute top-[60%] right-[2%] text-4xl text-pink-500/15 font-bold animate-pulse drop-shadow-[0_0_16px_rgba(236,72,153,0.8)]" style={{textShadow: '0 0 24px rgba(236,72,153,0.6), 0 0 48px rgba(236,72,153,0.4)'}}>
            ◆
          </div>
          
          <div className="absolute top-[90%] left-[1%] text-3xl text-pink-400/15 font-bold animate-pulse drop-shadow-[0_0_12px_rgba(244,114,182,0.8)]" style={{textShadow: '0 0 18px rgba(244,114,182,0.6), 0 0 36px rgba(244,114,182,0.4)'}}>
            ★
          </div>
        </div>

        <div className="relative z-10 w-full max-w-none mx-auto px-4 py-10">
          <div className="text-center mb-18">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold font-[var(--font-geist-sans)] text-transparent bg-gradient-to-r from-fuchsia-400 via-white to-violet-400 bg-clip-text mb-6 tracking-widest drop-shadow-2xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300 tracking-wide">
              Everything you need to know about SMACKATHON
            </p>
          </div> 
          <Accordion
            type="single"
            collapsible
            className="space-y-6 px-2 sm:px-4 md:px-16 lg:px-24 xl:px-32"
          >
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-none"
              >
                <div className="bg-[#0c0b10]/70 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-fuchsia-400/40 hover:shadow-[0_24px_60px_-12px_rgba(93,0,110,0.35)] hover:bg-[#0c0b10]/80 transition-all duration-200 group relative overflow-hidden min-h-[120px]">
                  {/* Simplified Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/5 to-violet-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

                  <AccordionTrigger className="px-4 sm:px-8 py-8 text-left hover:no-underline group relative z-10">
                    <div className="flex items-center gap-4 w-full">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 via-amber-400 to-orange-500 flex items-center justify-center text-[#2d1a00] font-bold text-lg shadow-lg group-hover:animate-pulse group-hover:shadow-yellow-400/50 group-hover:scale-110 transition-all duration-300 border border-yellow-300/40 relative">
                        <span
                          className="absolute inset-0 rounded-full pointer-events-none z-0"
                          style={{
                            boxShadow:
                              "0 0 12px 2px #fde68a88, 0 0 24px 6px #fbbf2488",
                          }}
                        ></span>
                        <span className="relative z-10">{faq.id}</span>
                      </div>
                      <span className="text-lg font-semibold text-white group-hover:text-fuchsia-400 transition-colors duration-300 drop-shadow-sm">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-4 sm:px-8 pb-8 relative z-10">
                    <div className="ml-14 sm:ml-16 text-gray-300 leading-relaxed text-base sm:text-lg font-semibold group-hover:text-white/90 transition-colors duration-300">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Dark Transition Section - Matching Overall Flow */}
      <div className="w-full h-24 bg-gradient-to-b from-[#110012]/80 via-[#0f0011]/60 to-[#110012] relative overflow-hidden">
        {/* Seamless transition to maintain continuity */}
      </div>
    </div>
  );
}

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
    <div className="min-h-screen bg-gradient-to-br from-[#0a0c1b] via-[#101223] to-[#181a2b] flex flex-col items-center justify-start p-4 relative overflow-hidden py-8">
      {/* Removed SquidGameBackground. Using dark blue/black gradient background. */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary animate-pulse"></div>
        <div className="absolute top-40 right-32 w-0 h-0 border-l-12 border-r-12 border-b-24 border-l-transparent border-r-transparent border-b-primary"></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 border-2 border-accent rotate-45"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 pointer-events-none z-0"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-primary/20 via-primary/10 to-transparent rounded-full blur-xl pointer-events-none z-0"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-radial from-accent/15 via-secondary/8 to-transparent rounded-full blur-xl pointer-events-none z-0"></div>

      {/* ASSESSMENT CRITERIA SECTION */}
      <Card className="w-full max-w-none mx-0 bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 border-2 border-pink-500/40 backdrop-blur-sm shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 transition-all duration-300 hover:border-pink-400/60 relative z-10 overflow-hidden min-h-[800px]">
        <CardContent className="px-4 py-20 text-center relative overflow-hidden">
          {/* Enhanced Geometric Pattern Background - Contained */}
          <div className="absolute inset-0 opacity-20 overflow-hidden">
            {/* Triangle Pattern - Enhanced */}
            <div className="absolute top-8 left-8 w-0 h-0 border-l-8 border-r-8 border-b-12 border-l-transparent border-r-transparent border-b-pink-400"></div>
            <div className="absolute top-16 right-16 w-0 h-0 border-l-10 border-r-10 border-b-15 border-l-transparent border-r-transparent border-b-cyan-400"></div>
            <div className="absolute bottom-12 left-12 w-0 h-0 border-l-12 border-r-12 border-b-18 border-l-transparent border-r-transparent border-b-pink-400"></div>
            <div className="absolute top-32 left-1/3 w-0 h-0 border-l-6 border-r-6 border-b-9 border-l-transparent border-r-transparent border-b-cyan-400/70"></div>
            <div className="absolute bottom-32 right-1/3 w-0 h-0 border-l-7 border-r-7 border-b-11 border-l-transparent border-r-transparent border-b-pink-400/70"></div>

            {/* Circle Pattern - Enhanced */}
            <div className="absolute top-20 right-8 w-16 h-16 rounded-full border-4 border-pink-400"></div>
            <div className="absolute bottom-20 right-20 w-12 h-12 rounded-full border-3 border-cyan-400"></div>
            <div className="absolute top-2/3 left-16 w-10 h-10 rounded-full border-2 border-pink-400/70"></div>
            <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full border-2 border-cyan-400/70"></div>
            <div className="absolute top-1/3 right-1/4 w-14 h-14 rounded-full border-3 border-pink-400/50"></div>

            {/* Square Pattern - Enhanced */}
            <div className="absolute top-1/2 left-8 w-12 h-12 border-3 border-pink-400 rotate-45"></div>
            <div className="absolute bottom-8 left-1/3 w-8 h-8 bg-pink-400/50 rotate-45"></div>
            <div className="absolute top-24 right-1/3 w-10 h-10 border-2 border-cyan-400 rotate-45"></div>
            <div className="absolute bottom-1/3 left-20 w-6 h-6 bg-cyan-400/60 rotate-45"></div>
            <div className="absolute top-40 left-2/3 w-9 h-9 border-2 border-pink-400/60 rotate-45"></div>

            {/* Enhanced Grid Pattern */}
            <div className="absolute top-1/3 right-1/4 grid grid-cols-4 gap-1">
              <div className="w-3 h-3 bg-pink-400/40"></div>
              <div className="w-3 h-3 bg-cyan-400/40"></div>
              <div className="w-3 h-3 bg-pink-400/40"></div>
              <div className="w-3 h-3 bg-cyan-400/40"></div>
              <div className="w-3 h-3 bg-cyan-400/40"></div>
              <div className="w-3 h-3 bg-pink-400/40"></div>
              <div className="w-3 h-3 bg-cyan-400/40"></div>
              <div className="w-3 h-3 bg-pink-400/40"></div>
              <div className="w-3 h-3 bg-pink-400/40"></div>
              <div className="w-3 h-3 bg-cyan-400/40"></div>
              <div className="w-3 h-3 bg-pink-400/40"></div>
              <div className="w-3 h-3 bg-cyan-400/40"></div>
              <div className="w-3 h-3 bg-cyan-400/40"></div>
              <div className="w-3 h-3 bg-pink-400/40"></div>
              <div className="w-3 h-3 bg-cyan-400/40"></div>
              <div className="w-3 h-3 bg-pink-400/40"></div>
            </div>

            {/* Additional Geometric Elements */}
            <div className="absolute bottom-16 right-1/4 w-0 h-0 border-l-5 border-r-5 border-b-8 border-l-transparent border-r-transparent border-b-cyan-400/50"></div>
            <div className="absolute top-16 left-1/4 w-7 h-7 rounded-full bg-pink-400/30"></div>
            <div className="absolute bottom-24 left-2/3 w-5 h-5 bg-cyan-400/40 rotate-45"></div>
          </div>

          {/* Luxury Border Effect */}
          <div className="absolute inset-2 border border-pink-400/40 rounded-lg"></div>

          {/* Section Title */}
          <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-pink-400 via-white to-cyan-400 bg-clip-text mb-6 tracking-widest relative z-10">
            Assessment Criteria
          </h2>
          <p className="text-gray-300 text-lg mb-16 tracking-wide relative z-10">
            For SMACKATHON 2025
          </p>

          {/* Criteria Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-8 md:px-16 lg:px-24 xl:px-32">
            {/* Quality of work */}
            <Card className="bg-black/50 border border-pink-500/40 backdrop-blur-sm shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:border-pink-400/60 transition-all duration-200 cursor-pointer group min-h-[200px]">
              <CardContent className="p-10 text-left h-full flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-pink-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg group-hover:animate-pulse">
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
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                      Quality of work submitted
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      Excellence in code quality, design, and overall execution
                      of your project.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeliness */}
            <Card className="bg-black/50 border border-cyan-500/40 backdrop-blur-sm shadow-lg shadow-pink-500/20 hover:shadow-cyan-500/40 hover:border-cyan-400/60 transition-all duration-200 cursor-pointer group min-h-[200px]">
              <CardContent className="p-10 text-left h-full flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:animate-pulse">
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
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                      Timeliness of submissions
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      Meeting deadlines and delivering your work within the
                      specified timeframes.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Participation */}
            <Card className="bg-black/50 border border-green-500/40 backdrop-blur-sm shadow-lg shadow-pink-500/20 hover:shadow-green-500/40 hover:border-green-400/60 transition-all duration-200 cursor-pointer group min-h-[200px]">
              <CardContent className="p-10 text-left h-full flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg group-hover:animate-pulse">
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
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors">
                      Participation in discussions
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
                      Active engagement in team discussions, mentorship
                      sessions, and community interactions.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Innovation */}
            <Card className="bg-black/50 border border-purple-500/40 backdrop-blur-sm shadow-lg shadow-pink-500/20 hover:shadow-purple-500/40 hover:border-purple-400/60 transition-all duration-200 cursor-pointer group min-h-[200px]">
              <CardContent className="p-10 text-left h-full flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg group-hover:animate-pulse">
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
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      Innovation through imagination
                    </h3>
                    <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors">
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
      <div className="relative w-full max-w-none mt-8 py-28 bg-[#111] rounded-2xl border-2 border-pink-500/40 backdrop-blur-sm shadow-xl shadow-pink-500/30 transition-all duration-300 z-10 overflow-hidden min-h-[900px]">
        {/* Track-Inspired Background Effects */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #ff1493 2px, transparent 2px),radial-gradient(circle at 75% 75%, #ff69b4 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>
        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[5%] text-6xl text-pink-500/20 font-bold animate-pulse">
            △
          </div>
          <div className="absolute top-[20%] right-[10%] text-5xl text-pink-500/20 font-bold animate-pulse">
            ○
          </div>
          <div className="absolute bottom-[25%] left-[15%] text-7xl text-pink-500/20 font-bold animate-pulse">
            □
          </div>
          <div className="absolute top-[60%] right-[20%] text-4xl text-pink-500/20 font-bold animate-pulse">
            △
          </div>
          <div className="absolute bottom-[40%] right-[30%] text-6xl text-pink-500/20 font-bold animate-pulse">
            ○
          </div>
        </div>
        {/* Scanlines */}
        <div className="absolute inset-0 pointer-events-none opacity-10">
          <div
            className="w-full h-full"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 20, 147, 0.3) 2px, rgba(255, 20, 147, 0.3) 4px)",
            }}
          ></div>
        </div>

        <div className="relative z-10 w-full max-w-none mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-pink-400 via-white to-cyan-400 bg-clip-text mb-6 tracking-widest drop-shadow-2xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-300 tracking-wide">
              Everything you need to know about SMACKATHON
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-6 px-8 md:px-16 lg:px-24 xl:px-32">
            {faqData.map((faq) => (
              <AccordionItem
                key={faq.id}
                value={faq.id}
                className="border-none"
              >
                <div className="bg-black/60 rounded-2xl border border-pink-500/30 backdrop-blur-sm hover:border-pink-400/50 hover:shadow-md hover:shadow-pink-500/20 hover:bg-black/70 transition-all duration-200 group relative overflow-hidden min-h-[120px]">
                  {/* Simplified Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/3 to-cyan-500/3 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

                  <AccordionTrigger className="px-8 py-8 text-left hover:no-underline group relative z-10">
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
                      <span className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors duration-300 drop-shadow-sm">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-8 pb-8 relative z-10">
                    <div className="ml-16 text-gray-300 leading-relaxed text-lg font-semibold group-hover:text-white/90 transition-colors duration-300">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

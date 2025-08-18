import { MemberCard } from "./members_cards"
import { teamMembers } from "./team_data"

export default function TeamMembers() {
  // Group team members by their teams
  const teamGroups = {
    "CORE COMMITTEE": teamMembers.filter(member => 
      [ "PRESIDENT","ACM CHAIRPERSON","ACM VICE-CHAIRPERSON","VICE PRESIDENT","ACM SECRETARY", "ACM JOINT SECRETARY", "TREASURER", "JOINT TREASURER"].includes(member.position)
    ),
    "TECHNICAL TEAM": teamMembers.filter(member => 
      ["TECHNICAL HEAD","ACM TECHNICAL HEAD", "WEB MASTERS", "TECHNICAL CO-HEAD", "TECHNICAL MEMBER"].includes(member.position)
    ),
    "EVENT MANAGEMENT TEAM": teamMembers.filter(member => 
      ["E M HEAD", "H M HEAD", "E M MASTERS", "E M CO-HEAD", "E M MEMBER", "H M", "H M MEMBER"].includes(member.position)
    ),
    "LITERATURE TEAM": teamMembers.filter(member => 
      ["LITERATURE HEAD", "LITERATURE CO-HEAD", "CONTENT CREATION MASTERS"].includes(member.position)
    ),
    "DESIGN TEAM": teamMembers.filter(member => 
      ["ACM DESIGN HEAD", "DESIGN HEAD", "ARTS HEAD", "DESIGN MASTERS", "ARTS CO-HEAD", "ART CO-HEAD", "DESIGN MEMBER","Design MEMBER"].includes(member.position)
    ),
    "PUBLICITY TEAM": teamMembers.filter(member => 
      ["ACM PR HEAD", "PUBLICITY HEAD", "PUBLICITY CO-HEAD", "PR MASTERS","PUBLICITY MEMBER"].includes(member.position)
    ),
    "CULTURAL TEAM": teamMembers.filter(member => 
      ["CULTURAL HEAD", "CULTURAL CO-HEAD"].includes(member.position)
    ),
    "SPONSORSHIP TEAM": teamMembers.filter(member => 
      ["SPONSORSHIP HEAD", "SPONSORSHIP CO-HEAD", "SPONSORSHIP MEMBER"].includes(member.position)
    ),
    "SOCIAL MEDIA TEAM": teamMembers.filter(member => 
      ["SOCIAL MEDIA HEAD", "SOCIAL MEDIA CO-HEAD"].includes(member.position)
    ),
    "DATABASE TEAM": teamMembers.filter(member => 
      ["DATABASE HEAD", "DATABASE CO-HEAD", "DATABASE MEMBER"].includes(member.position)
    ),
    "PHOTOGRAPHY TEAM": teamMembers.filter(member => 
      ["PHOTOGRAPHY HEAD", "PHOTOGRAPHY CO-HEAD"].includes(member.position)
    ),
    "SPORTS TEAM": teamMembers.filter(member => 
      ["SPORTS HEAD", "SPORTS CO-HEAD","SPORTS MEMBER"].includes(member.position)
    )
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ scrollBehavior: 'smooth' }}>
      {/* Fixed background gradient to cover entire scrollable area */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-900 via-gray-900 to-black" />
      <div className="absolute inset-0 pointer-events-none">
        {/* Neon geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border-4 border-pink-500 rotate-45 opacity-60 shadow-[0_0_30px_#ec4899]"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-4 border-emerald-400 opacity-50 shadow-[0_0_25px_#34d399]"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 border-4 border-pink-500 rounded-full opacity-40 shadow-[0_0_20px_#ec4899]"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 border-4 border-emerald-400 rotate-45 opacity-45 shadow-[0_0_25px_#34d399]"></div>

        {/* Left margin elements */}
        <div className="absolute top-1/4 left-2 w-16 h-40 border-2 border-cyan-400 opacity-25 shadow-[0_0_20px_#22d3ee]"></div>
        <div className="absolute top-3/4 left-4 w-12 h-12 border-3 border-pink-400 rotate-12 opacity-30 shadow-[0_0_15px_#f472b6]"></div>
        <div className="absolute top-1/2 left-1 w-8 h-24 border-2 border-emerald-300 opacity-20 shadow-[0_0_12px_#6ee7b7]"></div>
        <div className="absolute bottom-1/4 left-3 w-20 h-6 border-2 border-purple-400 opacity-35 shadow-[0_0_18px_#c084fc]"></div>

        {/* Right margin elements */}
        <div className="absolute top-1/3 right-2 w-14 h-36 border-2 border-pink-400 opacity-30 shadow-[0_0_22px_#f472b6]"></div>
        <div className="absolute top-2/3 right-4 w-18 h-18 border-3 border-cyan-400 rotate-45 opacity-25 shadow-[0_0_16px_#22d3ee]"></div>
        <div className="absolute top-1/6 right-1 w-10 h-28 border-2 border-emerald-400 opacity-20 shadow-[0_0_14px_#34d399]"></div>
        <div className="absolute bottom-1/3 right-3 w-22 h-8 border-2 border-purple-500 opacity-40 shadow-[0_0_20px_#a855f7]"></div>
        <div className="absolute top-5/6 right-2 w-6 h-16 border-2 border-pink-300 opacity-25 shadow-[0_0_10px_#fbb6ce]"></div>

        {/* Chess icon with neon effect */}
        <div className="absolute top-1/2 left-20 transform -translate-y-1/2 opacity-20">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" className="drop-shadow-[0_0_15px_#06b6d4]">
            <path
              d="M19 22H5v-2h14v2zm-8-3.5c-1.38 0-2.5-.84-2.5-1.88V15.5h5v1.12c0 1.04-1.12 1.88-2.5 1.88zm2.5-4.5h-5v-1c0-.55.45-1 1-1h3c.55 0 1 .45 1 1v1zm-1-3H9.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h3c.28 0 .5.22.5.5s-.22.5-.5.5zm-1-2H10c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1zm0-3H10c-.55 0-1-.45-1-1s.45-1 1-1h2c.55 0 1 .45 1 1s-.45 1-1 1z"
              fill="#06b6d4"
              stroke="#06b6d4"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        {/* Additional decorative elements */}
        <div className="absolute top-60 right-10 w-16 h-16 border-2 border-cyan-400 opacity-30 shadow-[0_0_15px_#22d3ee]"></div>
        <div className="absolute bottom-60 left-1/2 w-12 h-12 border-2 border-pink-400 rounded-full opacity-35 shadow-[0_0_12px_#f472b6]"></div>

        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
            linear-gradient(rgba(236, 72, 153, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(236, 72, 153, 0.3) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-12 px-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
              UPSURGE Team Members
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto drop-shadow-lg">
              Meet our talented team of developers, designers, and innovators who make Upsurge an amazing Event of YCCE Nagpur.
            </p>
          </div>

          {/* Team Sections */}
          {Object.entries(teamGroups).map(([teamName, members]) => {
            if (members.length === 0) return null;
            
            return (
              <div key={teamName} className="mb-20">
                {/* Team Section Header */}
                <div className="text-center mb-10">
                  <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text mb-2 drop-shadow-lg">
                    {teamName}
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto rounded-full"></div>
                </div>

                {/* Team Members Grid */}
                <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto will-change-transform" style={{ scrollBehavior: 'smooth' }}>
                  {members.map((member, index) => (
                    <div key={member.id} className="flex-shrink-0">
                      <MemberCard
                        name={member.name}
                        position={member.position}
                        imageUrl={member.imageUrl}
                        instagramUrl={member.instagramUrl}
                        linkedinUrl={member.linkedinUrl}
                        githubUrl={member.githubUrl}
                        index={index}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

//Footer Section Content
export const FooterContactDetailsCosmos = [
  {
    name: "Paras Kalbande",
    position: "(President COSMOS)",
    phone: "8308106950",
    tel: "tel:8308106950",
  },
  {
    name: "Karan Kangali",
    position: "(President COSMOS)",
    phone: "7517418938",
    tel: "tel:7517418938",
  },
];

export const FooterContactDetailsACM = [
  {
    name: "Om Mane",
    position: "(ACM Chairperson)",
    phone: "8767332854",
    tel: "tel:8767332854",
  },
  {
    name: "Shantanu Nichante",
    position: "(ACM Vice-Chairperson)",
    phone: "7588338042",
    tel: "tel:7588338042",
  },
];

import InstagramIcon from "./public/img/Instagram Icon";
import MailSend01Icon from "./public/svg/MailSend01Icon";
import Linkedin01Icon from "./public/svg/Linkedin01Icon.jsx";

export const FooterSocialLinks = [
  {
    icon: <InstagramIcon />,
    alt: "Instagram",
    href: "https://www.instagram.com/smack_athon2024",
  },
  {
    icon: <MailSend01Icon />,
    alt: "Email",
    href: "mailto:smackathon2k25@gmail.com",
  },
  {
    icon: <Linkedin01Icon />,
    alt: "Linkedin",
    href: "https://www.linkedin.com/company/yccecosmos/",
  },
];

//Goodies Section Content
export const goodiesReward = [
  "Goodies for the top three winning teams!",
  "Surprise gifts activity during the event!",
  "Exciting certificates for all participants!",
];

export const NavLinks = [
  { name: "Home", href: "/" },
  { name: "Smackathon", href: "/smackathon" },
  { name: "Events", href: "/events" },
  { name: "Schedule", href: "/Schedule" },
  { name: "Team", href: "/teams" },
];

export const EventLogos = [""];

export const rules = [
  "Team must consist of minimum 3 and a maximum of 5 members.",
  "Team access pass will be distributed to the team upon registration, which will be used for further references.",
  "The ideas presented by the teams should be original and not protected by patents, copyrights, or technical publications.",
  "All official communication will be through the Smackathon email (smackathon@upsurge2k25.tech). Participants must monitor all folders.",
  "Registrations must be completed through the Upsurge 2k25 website by 19st August 2025 to secure a spot.",
  "Smackathon team is not responsible for late, lost, or mis-directed entries.",
  "Problem statements will be provided on the day the Hackathon starts.",
  "The team must commit to the given Git repository every hour during the Hackathon.",
  "At least 2 members must be present at the allotted table at all times during Smackathon.",
  "Participants must not engage in malicious activities. Damage to college property leads to disqualification.",
  "Meals and rest areas will be provided if food and accommodation is opted. One accommodation ticket includes 2 beds.",
  //"Per YCCE Policy, female participants cannot stay overnight. After 7 PM they must leave and can return at 6 AM. Female team members coming from outside Nagpur should be responsible for their own accommodation arrangements.",
  "Rules may change at the discretion of the Smackathon organizing team.",
];

export const timelineItems = [
  { day: "DAY 1", time: ["08:30 AM"], desc: "Check-in Time for Teams" },
  {
    day: "DAY 1",
    time: ["10:00 AM", "11:30 AM"],
    desc: "Problem Statements Released, Submit Problem Statements",
  },
  {
    day: "DAY 1",
    time: ["12:00 PM", "3:00 PM - 5:00 PM"],
    desc: "Development Begins, Idea Presentation",
  },
  {
    day: "DAY 1",
    time: ["7:30 PM - 8:30 PM", "10:30 PM"],
    desc: "Dinner (coupon holders), Accommodation for ticket holders",
  },
  {
    day: "DAY 2",
    time: ["7:00 AM - 8:00 AM", "8:30 AM"],
    desc: "Breakfast, Final Elimination",
  },
  {
    day: "DAY 2",
    time: ["10:00 AM - 12:00 PM", "12:00 PM"],
    desc: "Final Presentations, Top 5 Finalists Declaration",
  },
  { day: "DAY 2", time: ["2:00 PM"], desc: "Winners Announcement" },
];

////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////// Events Data Desktop ////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

export const EventsDataDesktop = [
  {
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755367043/smackathon_1_mpznmo.webp",
    title: "Smackathon",
    id: "smackathon",
    prizePool: "30,000",
    entryFees: 599,
    teamMembers: "3-5",
    description:
      "Smackathon is a 24-hour hackathon where teams work to develop innovative solutions to real-world problems. Participants engage in a series of challenges across diverse domains such as Education, Healthcare, Finance, Web 3.0, Agriculture, Environment, and Open Innovation. The event encourages creativity, collaboration, and problem-solving.",
    registerLink: "https://upsurge2k25.tech/smackathon",
  },
  {
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755344946/ideathonn_vf9nhu.webp",
    title: "Ideathon",
    id: "ideathon",
    prizePool: "10,000",
    entryFees: 299,
    teamMembers: "1-4",
    description:
      "The Ideathon, in collaboration with Technology Business Incubator (TBI) at YCCE, is a high-energy idea-pitching competition to spark innovation and entrepreneurship. Participants brainstorm solutions to real-world problems, refine concepts with guidance from mentors, and pitch to an expert panel. The event encourages creativity, collaboration, and problem solving.",
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScGEkV_mlS5PFcD27dl6ytLVQEK3fOzIa5tPn3G2yp7Hj8nGg/viewform?usp=dialog",
  },
  {
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755344941/escape_romm_iabp8s.webp",
    title: "Escape Room",
    id: "escapeRoom",
    prizePool: "2,000",
    entryFees: 200,
    teamMembers: "3-5",
    description: (
      <>
        A high-stakes, team-based challenge testing logic, teamwork, and quick
        thinking. Teams of 3 face three thrilling rounds:
        <br />
        1. Find the torch in the dark <br />
        2. Crack riddles, locks, and puzzles <br />
        3. Uncover the key to escape. Race against time. Decode the clues.
        Escape before it’s too late
      </>
    ),
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSfHy_BCTCmbrPEriFkkE_8Z9NoDGT33hdMOQn9KDOIZhGcUtQ/viewform?usp=header",
  },
  {
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755344949/singularityy_a5lqum.webp",
    title: "Singularity",
    id: "singularity",
    prizePool: "8,000",
    entryFees: 400,
    teamMembers: "2-4",
    description:
      "It is a team-based technical competition where groups of four compete in mini-events like Debugging, AI or Not, and AI Front-End. Each event tests different technical and analytical skills. Teams earn points for their performance, and the highest-scoring team wins a cash prize.",
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSe-KEtVbuYhhb8z7gNWVZJ8_3fAJfGJHdYVNXDzLyWOfjjFOA/viewform?usp=dialog",
  },
  {
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755367043/ctf_4_hgzuxc.webp",
    title: "Capture the Flag",
    id: "captureTheFlag",
    prizePool: "2,000",
    entryFees: 200,
    teamMembers: "2-4",
    description:
      "Project: SIGNAL is a tech puzzle event in Capture The Flag style where individuals or teams solve creative digital challenges to uncover hidden flags. Each puzzle earns points and boosts your leaderboard rank. Perfect for techies and curious minds, beginners and pros alike—no experience needed! Solve, learn, and level up.",
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSft7H3G9_wD0wpnByTeyHows1EFKZCy-RzrSRcyukj8eJ_P0g/viewform",
  },
  {
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755367603/fifa_h_rlelzb.webp",
    title: "FIFA",
    id: "fifa",
    prizePool: "2,000",
    entryFees: 59,
    teamMembers: "Solo",
    description:
      "EA Sports FC – Where Football Meets the Future. Experience the ultimate football simulation with authentic teams, leagues, and players. Build your dream team in Ultimate Team, compete in thrilling matches, or enjoy 5v5 Rush Mode. With lifelike graphics, dynamic gameplay, and regular updates, the action never stops!",
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScoU4QIiJpf4we-o0xCQe3drevG_lIhz5w9TebeIXMx_mGJLg/viewform?usp=dialog",
  },
  {
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755367603/F1_simulatorr_cs2hkl.webp",
    title: "F1 Simulator",
    id: "f1Simulator",
    prizePool: "NA",
    entryFees: 79,
    teamMembers: "Solo",
    description:
      "Drive Your Dream with Car Simulator, a dynamic driving game combining realistic physics and open-world exploration. Choose from 100+ vehicles, customize them, tackle missions, or race friends in multiplayer. With vibrant cities, day-night cycles, and immersive sounds, every drive feels thrilling and authentic.",
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeOCw62is36UYcXjpY7UOZFe7LUEMQ9fz_pd40WajPQEW6Rsw/viewform?usp=header",
  },
  {
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755367603/freefire_h_s0weih.webp",
    title: "Free Fire",
    id: "freeFire",
    prizePool: "12,000",
    entryFees: 200,
    teamMembers: "2-4",
    description:
      "Garena Free Fire is a fast-paced mobile battle royale where 50 players drop onto a remote island to be the last one standing. Scavenge weapons, armor, and supplies while navigating a shrinking safe zone. With quick 10–20 minute matches, it delivers intense, competitive action perfect for gaming on the go.",
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScsFoHVEiujXaZ2FQOUeNNoVq9vt9hJXZ6F_-QX0MBY-WZIaw/viewform",
  },
  {
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755344940/coding_relayy_rvsie0.webp",
    title: "Coding Relay",
    id: "codingRelay",
    prizePool: "2,500",
    entryFees: 100,
    teamMembers: "2-3",
    description: `It is a team event (2–3 members) where teams collaboratively solve 3 basic DSA problems in 1 hour. Problem statements are revealed 10 mins prior for discussion only—no coding. During the event, each member codes for 20 mins in sequence, continuing from where the previous member left.`,
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSe07LRLsfEFKC3DQG93UUIkbw7aYlkjTEXG7QpY-Ea0n2Cwkg/viewform?usp=dialog",
  },
  {
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755344940/cipherchasee_lboito.webp",
    title: "Cipher Chase",
    id: "cipherChase",
    prizePool: "5,000",
    entryFees: 179,
    teamMembers: "1-4",
    description:
      "Cipher Chase is a thrilling treasure hunt for coders. Participants start by scanning a QR code to unlock their first coding challenge. Solving it reveals a clue to the next QR. Each QR presents a new problem, testing speed, logic, and programming skills. The hunt continues until all challenges are solved and the final destination is reached.",
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSd_Bh9TYzy6ajrdWZB83MWzxU37JXaNc54pLN0sG95IZWsQYg/viewform?usp=header",
  },
  {
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755344939/alphinatee_dxnycx.webp",
    title: "Alphinate",
    id: "alphinate",
    prizePool: "4,000",
    entryFees: 299,
    teamMembers: "3-5",
    description:
      "Alphinate is an innovation-focused exhibition where students showcase technical projects. Participants present ideas, demonstrate models, and engage in Q&A with judges. The event highlights creativity, practicality, and presentation skills. Winners receive trophies and rewards, while all gain exposure, confidence, and the chance to inspire others.",
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSdMczhjufrTqSfGZO0mwz_pXbo1rsx7UxtJIffuwrCIfUVriQ/viewform?usp=sharing&ouid=110467277229543546554",
  },
  {
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755367603/SmackDown_h_yun145.webp",
    title: "WWE SmackDown",
    id: "wweSmackDown",
    prizePool: "NA",
    entryFees: 49,
    teamMembers: "Solo",
    description:
      "Step into the virtual ring with the WWE SmackDown! Here Comes the Pain Tournament. Players compete in a knockout format, showcasing gaming skills and strategies in intense wrestling matchups. Winners advance round by round, with the ultimate champion receiving prizes and certificates in this thrilling fest highlight.",
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLScv9b8lEjs4chXGPdfpK-y3oEESfAwKBuDtvidYpR8xd51vvg/viewform?usp=sharing&ouid=110467277229543546554",
  },
  {
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755367604/carrom_h_w61vuu.webp",
    title: "Carrom Event",
    id: "carromEvent",
    prizePool: "1,000",
    entryFees: 39,
    teamMembers: "Solo",
    description:
      "The Carrom Event blends competition and casual play. In Tournament Mode, skilled players compete in a knockout format for prizes, while the Casual Play Zone offers a relaxed space for everyone to enjoy. The event unites enthusiasts and casual players, fostering fun, community, and friendly competition.",
    registerLink:
      "https://docs.google.com/forms/d/e/1FAIpQLSeaZYaOsDNFeqUrTl4VCQ_DRmqCqISgRdqxG3fQ_xgFLbOzwQ/viewform?usp=dialog ",
  },
];

////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////// Eevents Data Mobile ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

export const EventsDataMobile = [
  {
    title: "Smackathon",
    description:
      "A 24-hour hackathon where teams build innovative solutions across domains like education, health, and finance, fostering creativity, teamwork, and problem-solving under pressure.",
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755367043/smackathon_1_mpznmo.webp",
    detailsLink: "/events/#smackathon",
  },
  {
    title: "Ideathon",
    description:
      "An idea-pitching competition with TBI at YCCE where participants brainstorm real-world solutions, receive mentorship, and pitch to experts for potential incubation and funding.",
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755344946/ideathonn_vf9nhu.webp",
    detailsLink: "/events/#ideathon",
  },
  {
    title: "Escape Room",
    description:
      "A fast-paced team challenge with puzzles, riddles, and clue-hunting across three rounds, testing logic, collaboration, and speed to escape in time.",
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755344941/escape_romm_iabp8s.webp",
    detailsLink: "/events/#escapeRoom",
  },
  {
    title: "Singularity",
    description:
      "A multi-round technical contest where teams tackle debugging, AI, and problem-solving events, earning points to showcase innovation and analytical skills.",
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755344949/singularityy_a5lqum.webp",
    detailsLink: "/events/#singularity",
  },
  {
    title: "Capture the Flag",
    description:
      "A cybersecurity puzzle event where players solve digital challenges to uncover hidden “flags,” blending logic, problem-solving, and fun tech learning.",
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755367043/ctf_4_hgzuxc.webp",
    detailsLink: "/events/#captureTheFlag",
  },
  {
    title: "FIFA",
    description:
      "A football simulation with authentic teams, dynamic gameplay, and thrilling modes, delivering an immersive and competitive sports gaming experience.",
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755367603/fifa_h_rlelzb.webp",
    detailsLink: "/events/#fifa",
  },
  {
    title: "F1 Simulator",
    description:
      "A realistic racing simulator with diverse vehicles, customizable features, and open-world driving for solo adventures or competitive multiplayer thrills.",
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755367603/F1_simulatorr_cs2hkl.webp",
    detailsLink: "/events/#f1Simulator",
  },
  {
    title: "Free Fire",
    description:
      "A mobile battle royale where 50 players fight to survive, combining strategy, quick matches, and intense action on a shrinking map.",
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755367603/freefire_h_s0weih.webp",
    detailsLink: "/events/#freeFire",
  },
  {
    title: "Coding Relay",
    description:
      "A team coding race where members take turns solving DSA problems under strict time limits, testing collaboration and programming skills.",
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755344940/coding_relayy_rvsie0.webp",
    detailsLink: "/events/#codingRelay",
  },
  {
    title: "Cipher Chase",
    description:
      "A coding treasure hunt where solving problems reveals QR clues, pushing participants to combine logic, speed, and programming to reach the finish.",
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755344940/cipherchasee_lboito.webp",
    detailsLink: "/events/#cipherChase",
  },
  {
    title: "Alphinate",
    description:
      "A technical project showcase where students present innovations, working models, and ideas on stage, highlighting creativity, practicality, and presentation skills.",
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755344939/alphinatee_dxnycx.webp",
    detailsLink: "/events/#alphinate",
  },
  {
    title: "WWE SmackDown",
    description:
      "A knockout-style gaming tournament where participants compete in virtual wrestling matches, battling round by round to become champion.",
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755367603/SmackDown_h_yun145.webp",
    detailsLink: "/events/#wweSmackDown",
  },
  {
    title: "Carrom Event",
    description:
      "A dual-format competition offering a knockout tournament for skilled players and a casual zone for fun play, uniting enthusiasts and newcomers alike.",
    poster:
      "https://res.cloudinary.com/dok1hsojb/image/upload/v1755367604/carrom_h_w61vuu.webp",
    detailsLink: "/events/#carromEvent",
  },
];

export const eventBlocksdesktop = [
  "Smackathon [10:00am 24hrs]",
  "CTF [11:00am]",
  "Singularity [11:00 am]",
  "Cipher Chase [11:00 am]",
  "F1 Stimulation [All Day]",
  "Free Fire [11:00 am]",
  "Alphanite [11:00 am]",
  "FIFA [All Day]",
];

export const eventBlocksDay2desktop = [
  "F1 Stimulation [All Day]",
  "FIFA [All Day]",
  "Ideathon [11:00am]",
  "Escape Room [11:00am]",
  "Coding Relay [10:00 am]",
  "Smackathon",
];

export const eventBlocks = [
  "Smackathon [10:00am 24hrs]",
  "CTF [11:00am]",
  "Singularity [11:00 am]",
  "Cipher Chase [11:00 am]",
  "F1 Stimulation [All Day]",
  "Free Fire [11:00 am]",
  "FIFA [All Day]",
  "Alphanite [11:00 am]",
];

export const eventBlocksDay2 = [
  "F1 Stimulation [All Day]",
  "FIFA [All Day]",
  "Ideathon [11:00am]",
  "Escape Room [11:00am]",
  "Coding Relay [10:00am]",
  "Smackathon",
];

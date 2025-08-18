// Client-side data service for events
export const eventsData = [
  // Day 1 Events
  {
    id: "1",
    title: "Smackathon",
    description:
      "A 24-hour hackathon where teams build innovative solutions across domains like education, health, and finance, fostering creativity, teamwork, and problem-solving under pressure.",
    venue: "Seminar Hall",
    time: "10:00 AM",
    day: 1,
    order: 1,
    details:
      "Master the art of perfect stillness. Our guards will teach you the precise movements and timing required to survive this classic children's game. Remember: when the doll turns around, absolute stillness is your only ally.",
    shapeType: "circle",
  },
  {
    id: "2",
    title: "Capture the Flag",
    description:
      "A cybersecurity puzzle event where players solve digital challenges to uncover hidden “flags,” blending logic, problem-solving, and fun tech learning.",
    venue: "LAB 3 & 4",
    time: "11:00 AM",
    day: 1,
    order: 2,
    details:
      "Develop steady hands and unwavering focus as you practice extracting delicate shapes from honeycomb candy. Choose your shape wisely - some are easier than others, but all require absolute precision.",
    shapeType: "triangle",
  },
  {
    id: "3",
    title: "Singularity",
    description:
      "A multi-round technical contest where teams tackle debugging, AI, and problem-solving events, earning points to showcase innovation and analytical skills.",
    venue: "LAB 5 & 6",
    time: "11:00 AM",
    day: 1,
    order: 3,
    details:
      "Strength alone won't win this battle. Learn positioning, rhythm, and team coordination. Discover why the old man's team had such an advantage and how you can apply those same principles.",
    shapeType: "square",
  },
  {
    id: "4",
    title: "Cipher Chase",
    description:
      "A QR treasure hunt where solving problems reveals QR clues, pushing participants to combine logic, speed, and programming to reach the finish.",
    venue: "YCCE Campus",
    time: "11:00 AM",
    day: 1,
    order: 4,
    details:
      "The most emotionally challenging game. Practice various marble games while learning to read your opponents and manage the psychological pressure of playing against people you trust.",
    shapeType: "circle",
  },
  {
    id: "5",
    title: "Alphinate",
    description:
      "A technical project showcase where students present innovations, working models, and ideas on stage, highlighting creativity, practicality, and presentation skills.",
    venue: "CSE YCCE",
    time: "11:00 AM",
    day: 1,
    order: 5,
    details:
      "Learn to identify tempered vs. regular glass through subtle visual cues. Understand the physics of weight distribution and discover the mathematical approach that could save your life on that terrifying bridge.",
    shapeType: "triangle",
  },
  {
    id: "6",
    title: "Free Fire",
    description:
      "A mobile battle royale where 50 players fight to survive, combining strategy, quick matches, and intense action on a shrinking map.",
    venue: "CSE YCCE",
    time: "11:00 AM",
    day: 1,
    order: 6,
    details:
      "Master the traditional Korean children's game that gives the competition its name. Learn both offensive and defensive strategies, understand the playground layout, and prepare for the ultimate confrontation.",
    shapeType: "square",
  },
  {
    id: "7",
    title: "F1 Simulator",
    description:
      "A realistic racing simulator with diverse vehicles, customizable features, and open-world driving for solo adventures or competitive multiplayer thrills.",
    venue: "LAB 7",
    time: "All Day",
    day: 1,
    order: 7,
    details:
      "Master the traditional Korean children's game that gives the competition its name. Learn both offensive and defensive strategies, understand the playground layout, and prepare for the ultimate confrontation.",
    shapeType: "square",
  },
  {
    id: "8",
    title: "FIFA",
    description:
      "A football simulation with authentic teams, dynamic gameplay, and thrilling modes, delivering an immersive and competitive sports gaming experience.",
    venue: "LAB 1-2",
    time: "All Day",
    day: 1,
    order: 7,
    details:
      "Master the traditional Korean children's game that gives the competition its name. Learn both offensive and defensive strategies, understand the playground layout, and prepare for the ultimate confrontation.",
    shapeType: "square",
  },
  // Day 2 Events
  {
    id: "9",
    title: "Coding Relay",
    description:
      "A team coding race where members take turns solving DSA problems under strict time limits, testing collaboration and programming skills.",
    venue: "LAB 1-2",
    time: "10:00 AM",
    day: 2,
    order: 1,
    details:
      "Develop the mental fortitude needed to survive extreme pressure. Learn coping mechanisms, stress management, and how to maintain your humanity in impossible situations.",
    shapeType: "circle",
  },
  {
    id: "10",
    title: "Ideathon",
    description:
      "A 24-hour hackathon where teams build innovative solutions across domains like education, health, and finance, fostering creativity, teamwork, and problem-solving under pressure.",
    venue: "In-Front of YCCE (Stage)",
    time: "11:00 AM",
    day: 2,
    order: 2,
    details:
      "Navigate the complex social dynamics of life-or-death competition. Learn when to trust, when to betray, and how to form alliances that could mean the difference between victory and elimination.",
    shapeType: "triangle",
  },
  {
    id: "11",
    title: "Escape Room",
    description:
      "A fast-paced team challenge with puzzles, riddles, and clue-hunting across three rounds, testing logic, collaboration, and speed to escape in time.",
    venue: "LAB 1-2",
    time: "11:00 AM",
    day: 2,
    order: 3,
    details:
      "Essential medical skills for high-stress situations. Learn to treat injuries, manage shock, and provide critical care when professional medical help isn't available.",
    shapeType: "square",
  },
  {
    id: "12",
    title: "F1 Simulator",
    description:
      "A realistic racing simulator with diverse vehicles, customizable features, and open-world driving for solo adventures or competitive multiplayer thrills.",
    venue: "LAB 7",
    time: "All Day",
    day: 2,
    order: 4,
    details:
      "Develop your ability to detect lies, read micro-expressions, and see through manipulation tactics. In the games, your ability to judge character could be your most valuable skill.",
    shapeType: "circle",
  },
  {
    id: "13",
    title: "FIFA",
    description:
      "A football simulation with authentic teams, dynamic gameplay, and thrilling modes, delivering an immersive and competitive sports gaming experience.",
    venue: "LAB 1-2",
    time: "All Day",
    day: 2,
    order: 5,
    details:
      "Learn to make the most of minimal resources. Understand rationing, trading, and the economics of scarcity that govern life in the competition dormitory.",
    shapeType: "triangle",
  },
];

// Helper functions to filter events
export const getEventsByDay = (day) => {
  return eventsData
    .filter((event) => event.day === day)
    .sort((a, b) => a.order - b.order);
};

export const getAllEvents = () => {
  return eventsData.sort((a, b) => a.day - b.day || a.order - b.order);
};

// Simulate async data fetching for compatibility with React Query
export const fetchEventsByDay = async (day) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return getEventsByDay(day);
};

export const fetchAllEvents = async () => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  return getAllEvents();
};

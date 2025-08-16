import placeholder from "./public/placeholder.svg";
const placeholderUrl = typeof placeholder === "string" ? placeholder : (placeholder && placeholder.src) ? placeholder.src : placeholder;

export const teamMembers = [
  {
    id: 1,
    name: "Gayati Umap",
    position: "SECRETARY",
    imageUrl: placeholderUrl,
    instagramUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/gayatri-umap/",
    githubUrl: "https://github.com/gayatriumap19", // Add GitHub URL here if available
  },

  // JOINT SECRETARY
  {
    id: 2,
    name: "Tiya Banerjee",
    position: "JOINT SECRETARY",
    imageUrl: placeholderUrl,
    instagramUrl: "https://www.instagram.com/tiyabanerjee_?igsh=ZzZkcTdzNm14ODkw",
    linkedinUrl: "https://www.linkedin.com/in/tiya-banerjee",
    githubUrl: "", // Add GitHub URL here if available
  },

  // WEB MASTERS
  {
    id: 3,
    name: "Himanshu Chavan",
    position: "WEB MASTERS",
  imageUrl: placeholderUrl,
    instagramUrl: "https://www.instagram.com/himanshuchavan98?igsh=MWxvdDY5Z2dycjAwbw==",
    linkedinUrl: "https://www.linkedin.com/in/himanshu-chavan-1a0b5330a/",
    githubUrl: "https://github.com/Himanshujchavan"
  },
  {
    id: 4,
    name: "Akanksha Sawant",
    position: "WEB MASTERS",
  imageUrl: placeholderUrl,
  instagramUrl: "",
  linkedinUrl: "https://www.linkedin.com/in/akanksha-sawant-2598a1305",
  githubUrl: "https://github.com/nastyax0"
  },
  {
    id: 5,
    name: "Atul Thakre",
    position: "WEB MASTERS",
  imageUrl: placeholderUrl,
  instagramUrl: "",
  linkedinUrl: "https://www.linkedin.com/in/atul-thakre-logers?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  githubUrl: "https://github.com/Atul-ThakreLO"
  },

  // EVENT MANAGEMENT MASTERS
  {
    id: 6,
    name: "Rohan Andelkar",
    position: "E M MASTERS",
  imageUrl: placeholderUrl,
  instagramUrl: "https://www.instagram.com/rohan___jills?igsh=MWV2bXVlM3RlNmhj",
  linkedinUrl: "https://www.linkedin.com/in/rohanandelkar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  githubUrl: "https://github.com/rohanandelkar"  
},
  {
    id: 7,
    name: "Aditya Mendhe",
    position: "E M MASTERS",
  imageUrl: placeholderUrl,
  instagramUrl: "https://www.instagram.com/aditya_mendhe29",
  linkedinUrl: "https://www.linkedin.com/in/aditya-mendhe-869896282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  githubUrl: "https://github.com/Aditya125-cell"
  },
  {
    id: 8,
    name: "Achal Shahu",
    position: "E M MASTERS",
  imageUrl: placeholderUrl,
  instagramUrl: "https://www.instagram.com/achallll.04?igsh=MXV0a2l1aTdzdjV3bQ==",
  linkedinUrl: "https://www.linkedin.com/in/achal-sahu-480891284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  githubUrl: ""
  },
  {
    id: 9,
    name: "Vedant Bomidwar",
    position: "E M MASTERS",
  imageUrl: placeholderUrl,
  instagramUrl: "https://www.instagram.com/vedant_b04?igsh=MWRnemh1NGNuOHhqMA==",
  linkedinUrl: "https://www.linkedin.com/in/vedantbomidwar",
  githubUrl: "https://github.com/Vedantb04",
  },

  // CONTENT CREATION MASTERS
  {
    id: 10,
    name: "Himanshi  Choubal",
    position: "CONTENT CREATION MASTERS",
  imageUrl: placeholderUrl,
  instagramUrl: "https://www.instagram.com/himanshi_choubal?igsh=MTNodzdiZTk4MTA4Mw==",
  linkedinUrl: "https://www.linkedin.com/in/himanshi-choubal-430026299/",
  githubUrl: "",
  },
  {
    id: 11,
    name: "Granthi Kaur",
    position: "CONTENT CREATION MASTERS",
  imageUrl: placeholderUrl,
  instagramUrl: "",
  linkedinUrl: "",
  githubUrl: "",
  },
  {
    id: 12,
    name: "Soukhya Sasankar",
    position: "CONTENT CREATION MASTERS",
  imageUrl: placeholderUrl,
  instagramUrl: "",
  linkedinUrl: "https://www.linkedin.com/in/soukhya-sasankar-91080a35a",
  githubUrl: "",
  },

  // DESIGN MASTERS
  {
    id: 13,
    name: "Aditya Rajankar",
    position: "DESIGN Head",
  imageUrl: placeholderUrl,
  instagramUrl: "https://www.instagram.com/adityar.og/",
  linkedinUrl: "https://www.linkedin.com/in/aditya-rajankar/",
  githubUrl: "",
  },
  {
    id: 14,
    name: "Divesh Kshirsagar",
    position: "DESIGN MASTERS",
  imageUrl: placeholderUrl,
  instagramUrl: "https://www.instagram.com/divesh.kshirsagar?igsh=MTJlajVkOW95ZDkzdw==",
  linkedinUrl: "https://www.linkedin.com/in/divesh-kshirsagar",
  githubUrl: "https://github.com/Divesh-Kshirsagar",
  },
  {
    id: 15,
    name: "Aishwarya Khetade",
    position: "DESIGN MASTERS",
  imageUrl: placeholderUrl,
  instagramUrl: "https://www.instagram.com/aishwarya__k10?igsh=b3hqdjJlNzVyb3pk",
  linkedinUrl: "https://www.linkedin.com/in/aishwarya-khetade-8a6124253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  githubUrl: "",
  },
  {
    id: 16,
    name: "Shreya Sakhare",
    position: "DESIGN MASTERS",
  imageUrl: placeholderUrl,
  instagramUrl: "https://www.instagram.com/shreyasakharee?igsh=MWF1NjQzeDA3OWE0cQ==",
  linkedinUrl: "",
  githubUrl: "",
  },

  // PR MASTERS
  {
    id: 18,
    name: "Neha Kotalwar",
    position: "PR MASTERS",
  imageUrl: placeholderUrl,
  instagramUrl: "",
  linkedinUrl: "https://www.linkedin.com/in/neha-kotalwar-304753274",
  githubUrl: "https://github.com/nehakotalwar",
  },
  {
    id: 17,
    name: "Aaditi Bedarkar ",
    position: "PR Head",
  imageUrl:"https://drive.google.com/open?id=1cY-1E55ZpyMlCByR82PYSEd5llZlo_8o",
  instagramUrl: "",
  linkedinUrl: "",
  githubUrl: "",
  },
];

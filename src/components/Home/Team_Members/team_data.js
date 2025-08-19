import placeholder from "./public/placeholder.svg";
const placeholderUrl =
  typeof placeholder === "string"
    ? placeholder
    : placeholder && placeholder.src
    ? placeholder.src
    : placeholder;

export const teamMembers = [
  //CORE COMMITEE
  {
    id: 1005,
    name: "Paras Kalbande",
    position: "PRESIDENT",
    imageUrl: "/profile_photo/paras_.jpeg",
  },
  {
    id: 73,
    name: "Karan Kangali",
    position: "PRESIDENT",
    imageUrl: "/profile_photo/Karan_Kangali.png",
    instagramUrl:
      "https://www.instagram.com/__karan17_?igsh=MXB4YXcybDJ4MzhqYw==",
    linkedinUrl: "http://www.linkedin.com/in/karankangali",
    githubUrl: "",
  },
  {
    id: 68,
    name: "Om Mane",
    position: "ACM CHAIRPERSON",
    imageUrl: "/profile_photo/Om_Mane.jpg",
    instagramUrl:
      "https://www.instagram.com/shantanu_nichante?igsh=bmd6OW85czM2MmZj",
    linkedinUrl: "https://www.linkedin.com/in/shantanu-nichante",
    githubUrl: "https://github.com/shantanu-nichante",
  },
  {
    id: 1,
    name: "Shantanu Nichante",
    position: "ACM VICE-CHAIRPERSON",
    imageUrl: "/profile_photo/Shantanu_Nichante.png",
    instagramUrl:
      "https://www.instagram.com/shantanu_nichante?igsh=bmd6OW85czM2MmZj",
    linkedinUrl: "https://www.linkedin.com/in/shantanu-nichante",
    githubUrl: "https://github.com/shantanu-nichante",
  },
  {
    id: 730,
    name: "Jagdish Kachhawah",
    position: "VICE PRESIDENT",
    imageUrl: "/profile_photo/Jagdish_Kachhawah.jpg",
    instagramUrl: "https://www.instagram.com/mc_sukuna?igsh=MXBkY3J5NTAxYm41",
    linkedinUrl: "http://www.linkedin.com/in/jagdish-kachhawah-21jk",
    githubUrl: "https://github.com/jagdish-kachhawah21/jagdish-kachhawah21",
  },
  {
    id: 4,
    name: "Alok Roy",
    position: "TREASURER",
    imageUrl: "/profile_photo/Alok_Roy.jpg",
    instagramUrl: "https://www.instagram.com/alokproy",
    linkedinUrl: "https://in.linkedin.com/in/alok-roy-",
    githubUrl: "https://github.com/AlokRoyal",
  },
  {
    id: 2,
    name: "Gayati Umap",
    position: "ACM SECRETARY",
    imageUrl: "/profile_photo/Gayati_Umap.jpg",
    instagramUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/gayatri-umap/",
    githubUrl: "https://github.com/gayatriumap19",
  },
  {
    id: 5,
    name: "Aditya Chafale",
    position: "JOINT SECRETARY",
    imageUrl: "/profile_photo/Aditya_Chafale.jpg",
    instagramUrl:
      "https://www.instagram.com/aditya_chafale_?igsh=MXh5dmM3d3RzenBlNg==",
    linkedinUrl:
      "https://www.linkedin.com/in/aditya-chafale-34332228b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },
  {
    id: 6,
    name: "Dishita Ghuge",
    position: "JOINT TREASURER",
    imageUrl: "/profile_photo/Dishita_Ghuge.jpg",
    instagramUrl:
      "https://www.instagram.com/dishitaghuge_?igsh=MTE1NjFnODM5d3NxeA%3D%3D&utm_source=qr",
    linkedinUrl:
      "https://www.linkedin.com/in/dishita-ghuge-79a67b2a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "https://github.com/dishitaghuge01",
  },
  {
    id: 3,
    name: "Tiya Banerjee",
    position: "ACM JOINT SECRETARY",
    imageUrl: "/profile_photo/Tiya_Banerjee.jpg",
    instagramUrl:
      "https://www.instagram.com/tiyabanerjee_?igsh=ZzZkcTdzNm14ODkw",
    linkedinUrl: "https://www.linkedin.com/in/tiya-banerjee",
    githubUrl: "",
  },
  // TECHNICAL TEAM
  {
    id: 7,
    name: "Laukik Lanje",
    position: "TECHNICAL HEAD",
    imageUrl: "/profile_photo/Laukik_Lanje.jpg",
    instagramUrl: "https://www.instagram.com/laukik2404?igsh=OWhlZm4xaXljdXJi",
    linkedinUrl:
      "https://www.linkedin.com/in/laukik-lanje?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "https://github.com/laukik-24",
  },
  {
    id: 8,
    name: "Mehul Kohad",
    position: "TECHNICAL HEAD",
    imageUrl: "/profile_photo/Mehul_Kohad.jpg",
    instagramUrl: "https://www.instagram.com/mehulkohad?igsh=amgzYWxuZW1qOWN4",
    linkedinUrl: "http://linkedin.com/in/mehul-kohad",
    githubUrl: "https://github.com/mehul515",
  },
  {
    id: 71,
    name: "Suyash Borikar",
    position: "ACM TECHNICAL HEAD",
    imageUrl: "/profile_photo/Suyash_Borikar.jpg",
    instagramUrl: "https://www.instagram.com/__suyash__2310",
    linkedinUrl: "https://www.linkedin.com/suyash-borikar",
    githubUrl: "https://www.github.com/Suyash2304",
  },
  {
    id: 9,
    name: "Lokesh Parate",
    position: "TECHNICAL HEAD",
    imageUrl: "/profile_photo/Lokesh_Parate.jpg",
    instagramUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/lokesh-parate-08a70b256",
    githubUrl: "https://github.com/supremeStrange-04",
  },
  {
    id: 14,
    name: "Rishabh Gokhe",
    position: "TECHNICAL CO-HEAD",
    imageUrl: "/profile_photo/Rishabh_Gokhe.png",
    instagramUrl: "https://www.instagram.com/rishabh_gokhe/",
    linkedinUrl: "https://www.linkedin.com/in/rishabh-gokhe",
    githubUrl: "https://github.com/rishabhgokhe",
  },
  {
    id: 12,
    name: "Atul Thakre",
    position: "WEB MASTERS",
    imageUrl: "/profile_photo/ATUL.jpg",
    instagramUrl: "",
    linkedinUrl:
      "https://www.linkedin.com/in/atul-thakre-logers?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "https://github.com/Atul-ThakreLO",
  },
  {
    id: 11,
    name: "Akanksha Sawant",
    position: "WEB MASTERS",
    imageUrl: "/profile_photo/Akanksha_Sawant.jpeg",
    instagramUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/akanksha-sawant-2598a1305",
    githubUrl: "https://github.com/nastyax0",
  },
  {
    id: 10,
    name: "Himanshu Chavan",
    position: "WEB MASTERS",
    imageUrl: "/profile_photo/Himanshu_chavan.jpg",
    instagramUrl:
      "https://www.instagram.com/himanshuchavan98?igsh=MWxvdDY5Z2dycjAwbw==",
    linkedinUrl: "https://www.linkedin.com/in/himanshu-chavan-1a0b5330a/",
    githubUrl: "https://github.com/Himanshujchavan",
  },
  {
    id: 13,
    name: "Saksham Khobragade",
    position: "TECHNICAL CO-HEAD",
    imageUrl: "/profile_photo/Saksham_Khobragade.jpg",
    instagramUrl:
      "https://www.instagram.com/skshm_sk?igsh=MXhnaTNjNXp1OTA4bw==",
    linkedinUrl:
      "https://www.linkedin.com/in/saksham-khobragade-a421112b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "https://github.com/Sakshamk17",
  },
  {
    id: 15,
    name: "Yogesh Nagrare",
    position: "TECHNICAL MEMBER",
    imageUrl: "/profile_photo/Yogesh_Nagrare.jpg",
    instagramUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/yogesh-nagrare-707a9b32a/",
    githubUrl: "https://github.com/Yogesh-Nagrare",
  },
  {
    id: 1012,
    name: "Sujal Dandhale",
    position: "TECHNICAL MEMBER",
    imageUrl: "/profile_photo/Sujal_Dandhale.png",
    instagramUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/sujal-dandhale",
    githubUrl: "https://github.com/Sujal1123",
  },
  // EVENT MANAGEMENT Team
  {
    id: 16,
    name: "Mandar Lakhe",
    position: "E M HEAD",
    imageUrl: "/profile_photo/Mandar_Lakhe.JPG",
    instagramUrl: "",
    linkedinUrl: "",
    githubUrl: "",
  },
  {
    id: 1013,
    name: "Dhruv Munghate",
    position: "E M HEAD",
    imageUrl: "/profile_photo/Dhruv_Munghate.jpg",
    instagramUrl:
      "https://www.instagram.com/_.dhruv_munghate._?igsh=NTZwcDJlNWF3ejcw",
    linkedinUrl:
      "https://www.linkedin.com/in/dhruv-munghate-a69023339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },
  {
    id: 17,
    name: "Kushal Javkhedkar",
    position: "H M HEAD",
    imageUrl: "/profile_photo/Kushal_Javkhedkar.JPG",
    instagramUrl:
      "https://www.instagram.com/kushal.javkhedkar?igsh=NGZpM3MxZndkZ21x",
    linkedinUrl:
      "https://www.linkedin.com/in/kushal-nitin-javkhedkar-85813a327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },
  {
    id: 25,
    name: "Diya Choudhari",
    position: "H M HEAD",
    imageUrl: "/profile_photo/Diya_Choudhari.jpg",
    instagramUrl: "https://www.instagram.com/diya_choudhari28/",
    linkedinUrl: "https://www.linkedin.com/in/diya-choudhari-aa5861263/",
    githubUrl: "https://github.com/Diya-Choudhari",
  },
  {
    id: 22,
    name: "Aditya Tekade",
    position: "E M CO-HEAD",
    imageUrl: "/profile_photo/Aditya_Tekade.jpg",
    instagramUrl:
      "https://www.instagram.com/adityatekade_18?igsh=MXRzOXY0OGh4NGcxeg==",
    linkedinUrl:
      "https://www.linkedin.com/in/aditya-tekade-626104287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "https://github.com/Adityamtekade/",
  },
  {
    id: 1001,
    name: "Ayush Dhurvey",
    position: "E M CO-HEAD",
    imageUrl: "/profile_photo/Ayush_Dhurvey.jpg",
    instagramUrl:
      "https://www.instagram.com/ayush_dhurve_09?igsh=NXY0eWVpeHo0YWh2&utm_source=qr",
    linkedinUrl: "",
    githubUrl: "",
  },
  {
    id: 23,
    name: "Bhavesh Doifode",
    position: "E M CO-HEAD",
    imageUrl: "/profile_photo/Bhavesh_Doifode.jpeg",
    instagramUrl:
      "https://www.instagram.com/doifode__27/profilecard/?igsh=M2xsc3I0bnFuYmR3",
    linkedinUrl:
      "https://www.linkedin.com/in/bhavesh-doifode-a760312a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    githubUrl: "",
  },
  {
    id: 18,
    name: "Rohan Andelkar",
    position: "E M MASTERS",
    imageUrl: "/profile_photo/Rohan_Andelkar.jpg",
    instagramUrl:
      "https://www.instagram.com/rohan___jills?igsh=MWV2bXVlM3RlNmhj",
    linkedinUrl:
      "https://www.linkedin.com/in/rohanandelkar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "https://github.com/rohanandelkar",
  },
  {
    id: 19,
    name: "Aditya Mendhe",
    position: "E M MASTERS",
    imageUrl: "/profile_photo/Aditya_Mendhe.jpg",
    instagramUrl: "https://www.instagram.com/aditya_mendhe29",
    linkedinUrl:
      "https://www.linkedin.com/in/aditya-mendhe-869896282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "https://github.com/Aditya125-cell",
  },
  {
    id: 20,
    name: "Achal Shahu",
    position: "E M MASTERS",
    imageUrl: "/profile_photo/Achal_Shahu.png",
    instagramUrl:
      "https://www.instagram.com/achallll.04?igsh=MXV0a2l1aTdzdjV3bQ==",
    linkedinUrl:
      "https://www.linkedin.com/in/achal-sahu-480891284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },
  {
    id: 21,
    name: "Vedant Bomidwar",
    position: "E M MASTERS",
    imageUrl: "/profile_photo/Vedant_Bomidwar.jpg",
    instagramUrl:
      "https://www.instagram.com/vedant_b04?igsh=MWRnemh1NGNuOHhqMA==",
    linkedinUrl: "https://www.linkedin.com/in/vedantbomidwar",
    githubUrl: "https://github.com/Vedantb04",
  },
  {
    id: 24,
    name: "Kripa Vazirani",
    position: "E M MEMBER",
    imageUrl: "/profile_photo/Kripa_Vazirani.jpg",
    instagramUrl:
      "https://www.instagram.com/kripa_vazirani12?igsh=MXhxeTA0MDV2MHI0OA%3D%3D&utm_source=qr",
    linkedinUrl: "",
    githubUrl: "",
  },
  {
    id: 111,
    name: "Arjun Kadam",
    position: "H M CO-HEAD",
    imageUrl: "/profile_photo/Arjun_Kadam.jpg",
    instagramUrl:
      "https://www.instagram.com/arjun__1107?igsh=MXN0ZG14M2RwdGJicA%3D%3D&utm_source=qr",
    linkedinUrl: "",
    githubUrl: "",
  },
  {
    id: 26,
    name: "Riya Singh",
    position: "H M MEMBER",
    imageUrl: "/profile_photo/Riya_Singh.JPG",
    instagramUrl:
      "https://www.instagram.com/xoxoo_riyaa/profilecard/?igsh=ejdjbGM1OGJieHh4",
    linkedinUrl:
      "https://www.linkedin.com/in/riya-singh-ba2ba8345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },
  //LITERATURE TEAM
  {
    id: 27,
    name: "Nishita Dande",
    position: "LITERATURE HEAD",
    imageUrl: "/profile_photo/Nishita_Dande.jpg",
    instagramUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/nishita-dande",
    githubUrl: "",
  },
  {
    id: 28,
    name: "Dhani Rathod",
    position: "LITERATURE HEAD",
    imageUrl: "/profile_photo/DHANI.jpg",
    instagramUrl:
      "https://www.instagram.com/dhaniirathod?igsh=MW94cHluZGtvaGtmeA==",
    linkedinUrl: "https://www.linkedin.com/in/dhani-rathod",
    githubUrl: "https://github.com/DhaniRathod",
  },
  {
    id: 100000,
    name: "Ayush Patil",
    position: "LITERATURE HEAD",
    imageUrl: "/profile_photo/Ayush_Patil.jpeg",
    instagramUrl:
      "https://www.instagram.com/ayusshpatil28/profilecard/?igsh=MW5lOGliYmsxbXo1ag==",
    linkedinUrl: "https://www.linkedin.com/in/ayussshpatil",
    githubUrl: "",
  },
  {
    id: 29,
    name: "Neha Dhawas",
    position: "LITERATURE CO-HEAD",
    imageUrl: "/profile_photo/Neha_Dhawas.jpg",
    instagramUrl:
      "https://www.instagram.com/neha._.dhawas?igsh=MXZpeHVjdXgwMjZsaA==",
    linkedinUrl:
      "https://www.linkedin.com/in/neha-dhawas?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl:
      "https://github.com/nehaadhawas?tab=overview&from=2025-07-01&to=2025-07-04",
  },
  {
    id: 69,
    name: "Prutha Zilpilwar",
    position: "LITERATURE CO-HEAD",
    imageUrl: "/profile_photo/Prutha_Zilpilwar.jpg",
    instagramUrl: "https://www.instagram.com/pz_z23?igsh=MXY0amhocHhkNHI3Zg==",
    linkedinUrl: "",
    githubUrl: "",
  },
  {
    id: 1009,
    name: "Aliya Sayyed",
    position: "LITERATURE CO-HEAD",
    imageUrl: "/profile_photo/Aliya_Sayyad.jpg",
    instagramUrl: "",
    linkedinUrl:
      "https://www.linkedin.com/in/aliya-sayyed-85909a28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "https://github.com/Aliya-28",
  },
  {
    id: 30,
    name: "Himanshi  Choubal",
    position: "CONTENT CREATION MASTERS",
    imageUrl: "/profile_photo/Himanshi_Choubal.jpg",
    instagramUrl:
      "https://www.instagram.com/himanshi_choubal?igsh=MTNodzdiZTk4MTA4Mw==",
    linkedinUrl: "https://www.linkedin.com/in/himanshi-choubal-430026299/",
    githubUrl: "",
  },
  {
    id: 31,
    name: "Granthi Kaur",
    position: "CONTENT CREATION MASTERS",
    imageUrl: "/profile_photo/Granthi_Kaur.png",
    instagramUrl: "",
    linkedinUrl: "",
    githubUrl: "",
  },
  {
    id: 32,
    name: "Soukhya Sasankar",
    position: "CONTENT CREATION MASTERS",
    imageUrl: "/profile_photo/Soukhya_Sasankar.png",
    instagramUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/soukhya-sasankar-91080a35a",
    githubUrl: "",
  },

  // DESIGN Team
  {
    id: 1007,
    name: "Chitraksh Chavan",
    position: "DESIGN HEAD",
    imageUrl: "/profile_photo/chitraksh_chavan.jpg",
    instagramUrl:
      "https://www.instagram.com/chitraksh_9?igsh=MXFqOXI3emZrNHhuOQ==",
    linkedinUrl: "https://www.linkedin.com/in/chitraksh-chavan",
    githubUrl: "https://github.com/Chitraksh09error",
  },
  {
    id: 33,
    name: "Aditya Rajankar",
    position: "ACM DESIGN HEAD",
    imageUrl: "/profile_photo/Aditya_Rajankar.png",
    instagramUrl: "https://www.instagram.com/adityar.og/",
    linkedinUrl: "https://www.linkedin.com/in/aditya-rajankar/",
    githubUrl: "",
  },

  {
    id: 34,
    name: "Devyani Gharad",
    position: "ARTS HEAD",
    imageUrl: "/profile_photo/Devyani_Gharad.jpg",
    instagramUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/devyani-gharad",
    githubUrl: "",
  },
  {
    id: 35,
    name: "Janvi Thakre",
    position: "ARTS HEAD",
    imageUrl: "/profile_photo/JANVI_THAKRE.jpg",
    instagramUrl:
      "https://www.instagram.com/justt_janvi07?igsh=MW1sNDZlZjlvcTRmYg==",
    linkedinUrl: "http://linkedin.com/in/janvi-thakre",
    githubUrl: "https://github.com/JanviThakre",
  },
  {
    id: 1005,
    name: "Vaishnavi Dhomane",
    position: "DESIGN CO-HEAD",
    imageUrl: "/profile_photo/Vaishnavi_Dhomane.jpg",
    instagramUrl: "https://www.instagram.com/vaishnavii_2912/",
    linkedinUrl:
      "https://www.linkedin.com/in/vaishnavi-dhomane-38a12a28b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },
  {
    id: 1006,
    name: "Saurabh Kulavi",
    position: "DESIGN CO-HEAD",
    imageUrl: "/profile_photo/SAURABH_KULAVI.jpg",
    instagramUrl: "https://www.instagram.com/_saurhubbbb?igsh=b2Rkb2lvaHpmMHcw",
    linkedinUrl:
      "https://www.linkedin.com/in/saurabh-kulavi-b4b871316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "https://github.com/saurabhkulavi",
  },
  {
    id: 38,
    name: "Rohini Bhoyar",
    position: "ARTS CO-HEAD",
    imageUrl: "/profile_photo/Rohini_Bhoyar.jpg",
    instagramUrl:
      "https://www.instagram.com/rohini_bhoyar_?igsh=czV6Mmp1bHFxODFq",
    linkedinUrl:
      "https://www.linkedin.com/in/rohini-bhoyar-08089a376?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },
  {
    id: 39,
    name: "Vaibhavi Tumsare",
    position: "ART CO-HEAD",
    imageUrl: "/profile_photo/Vaibhavi_Tumsare.JPG",
    instagramUrl: "https://www.instagram.com/vaibhavi.tumsare_/",
    linkedinUrl: "https://www.linkedin.com/in/vaibhavi-tumsare-40320b2b4",
    githubUrl: "https://github.com/Vaibhavitumsare",
  },
  {
    id: 36,
    name: "Divesh Kshirsagar",
    position: "DESIGN MASTERS",
    imageUrl: "/profile_photo/Divesh_Kshirsagar.jpg",
    instagramUrl:
      "https://www.instagram.com/divesh.kshirsagar?igsh=MTJlajVkOW95ZDkzdw==",
    linkedinUrl: "https://www.linkedin.com/in/divesh-kshirsagar",
    githubUrl: "https://github.com/Divesh-Kshirsagar",
  },
  {
    id: 37,
    name: "Aishwarya Khetade",
    position: "DESIGN MASTERS",
    imageUrl: "/profile_photo/Aishwarya_Khetade.jpg",
    instagramUrl:
      "https://www.instagram.com/aishwarya__k10?igsh=b3hqdjJlNzVyb3pk",
    linkedinUrl:
      "https://www.linkedin.com/in/aishwarya-khetade-8a6124253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },
  {
    id: 40,
    name: "Shreya Sakhare",
    position: "DESIGN MASTERS",
    imageUrl: "/profile_photo/Shreya_Sakhare.jpg",
    instagramUrl:
      "https://www.instagram.com/shreyasakharee?igsh=MWF1NjQzeDA3OWE0cQ==",
    linkedinUrl: "",
    githubUrl: "",
  },
  {
    id: 41,
    name: "Nicky Meshram",
    position: "DESIGN MEMBER",
    imageUrl: "/profile_photo/Nicky_Meshram.jpg",
    instagramUrl: "https://www.instagram.com/nickyymeshram",
    linkedinUrl: "https://www.linkedin.com/in/nickymeshram",
    githubUrl: "https://github.com/NickyMeshram",
  },

  {
    id: 42,
    name: "Savani Apte",
    position: "Design MEMBER",
    imageUrl: "/profile_photo/Savani_Apte.jpg",
    instagramUrl: "",
    linkedinUrl:
      "https://www.linkedin.com/in/savani-apte-93a882304?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },
  // PUBLICITY Team
  {
    id: 44,
    name: "Atharva Vaidya",
    position: "PUBLICITY HEAD",
    imageUrl: "/profile_photo/Atharva_Vaidya.jpg",
    instagramUrl: "https://www.instagram.com/atharva3402/",
    linkedinUrl: "http://www.linkedin.com/in/atharva-vaidya-b19b0125a",
    githubUrl: "",
  },
  {
    id: 45,
    name: "Raj Bhelkar",
    position: "PUBLICITY HEAD",
    imageUrl: "/profile_photo/Raj_Bhelkar.JPG",
    instagramUrl:
      "https://www.instagram.com/_rajkb?igsh=ejA0MnRoNmh5NjVm&utm_source=ig_contact_invite",
    linkedinUrl:
      "https://www.linkedin.com/in/raj-bhelkar-53750725a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },
  {
    id: 43,
    name: "Aaditi Bedarkar ",
    position: "ACM PR Head",
    imageUrl: "/profile_photo/Aaditi_Bedarkar.png",
    instagramUrl:
      "https://www.instagram.com/adityatekade_18?igsh=MXRzOXY0OGh4NGcxeg==",
    linkedinUrl:
      "https://www.linkedin.com/in/aditya-tekade-626104287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "https://github.com/Adityamtekade/",
  },
  {
    id: 46,
    name: "Samiksha Bilgaye",
    position: "PUBLICITY CO-HEAD",
    imageUrl: "/profile_photo/Samiksha_Bilgaye.png",
    instagramUrl:
      "https://www.instagram.com/_.sam._1205?igsh=MXQwN2JkNmxieXd1MQ%3D%3D&utm_source=qr",
    linkedinUrl:
      "https://www.linkedin.com/in/samiksha-bilgaye-b91a71339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    githubUrl: "",
  },
  {
    id: 47,
    name: "Sana Channawar",
    position: "PUBLICITY CO-HEAD",
    imageUrl: "/profile_photo/Sana_Channawar.jpg",
    instagramUrl:
      "https://www.instagram.com/sana__1509?igsh=MTNxaHhwazViZGpzdA==",
    linkedinUrl:
      "https://www.linkedin.com/in/sana-channawar-b63a2b2b9?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },
  {
    id: 72,
    name: "Nikhilesh Ghormode",
    position: "PR MASTERS",
    imageUrl: "/profile_photo/Nikhilesh_Ghormode.png",
    instagramUrl:
      "https://www.instagram.com/nikhileshghormode?igsh=MWFqcDJoaDQwa2ZmOA==",
    linkedinUrl: "https://www.linkedin.com/in/nikhilesh-ghormode-a3720728a",
    githubUrl: "https://github.com/NIKHILESH22",
  },
  {
    id: 70,
    name: "Neha Kotalwar ",
    position: "PR MASTERS",
    imageUrl: "/profile_photo/Neha_Kotalwar.jpg",
    instagramUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/neha-kotalwar-304753274",
    githubUrl: "https://github.com/nehakotalwar",
  },
  {
    id: 49,
    name: "Sarthak Chavan",
    position: "PR MASTERS",
    imageUrl: "/profile_photo/Sarthak_Chavan.png",
    instagramUrl: "https://www.instagram.com/saarthakk7?igsh=c3czdnFmcDYyNml2",
    linkedinUrl:
      "https://www.linkedin.com/in/sarthakk-chavan?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },
  {
    id: 10090,
    name: "Khushi Vegad",
    position: "PUBLICITY MEMBER",
    imageUrl: "/profile_photo/Khushi_vegad.jpeg",
    instagramUrl:
      "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=lotbehu",
    linkedinUrl: "https://www.linkedin.com/in/khushi-vegad",
    githubUrl: "",
  },
  {
    id: 1008,
    name: "Abhinav Tomar",
    position: "PUBLICITY MEMBER",
    imageUrl: "/profile_photo/Abhinav_Tomar.jpg",
    instagramUrl: "",
    linkedinUrl:
      "https://www.linkedin.com/in/abhinavjaihind?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },

  //CULTURAL TEAM
  {
    id: 49,
    name: "Richa Kalpande",
    position: "CULTURAL HEAD",
    imageUrl: "/profile_photo/Richa_Kalpande.jpeg",
    instagramUrl:
      "https://www.instagram.com/richa.k23?igsh=MXBzNGFxbzNvbDNsZg==",
    linkedinUrl: "http://www.linkedin.com/in/richa-kalpande",
    githubUrl: "https://github.com/richa-k23",
  },
  {
    id: 50,
    name: "Ayush Asutkar",
    position: "CULTURAL HEAD",
    imageUrl: "/profile_photo/Ayush_Asutkar.jpg",
    instagramUrl: "",
    linkedinUrl: "",
    githubUrl: "",
  },
  {
    id: 51,
    name: "Vaishnavi Asare",
    position: "CULTURAL HEAD",
    imageUrl: "/profile_photo/Vaishnavi_Asare.jpg",
    instagramUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/vaishnavi-asare",
    githubUrl: "",
  },
  {
    id: 52,
    name: "Saee Nimbalkar",
    position: "CULTURAL CO-HEAD",
    imageUrl: "/profile_photo/Saee_Nimbalkar.jpg",
    instagramUrl:
      "https://www.instagram.com/saeee.nimbalkar?igsh=MWtzY3c4eW40Y3B6Mg==",
    linkedinUrl:
      "https://www.linkedin.com/in/saeeenimbalkar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },

  // SPONSORSHIP TEAM
  {
    id: 53,
    name: "Darpan Thakur",
    position: "SPONSORSHIP HEAD",
    imageUrl: "/profile_photo/Darpan_Thakur.png",
    instagramUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/darpan-thakur",
    githubUrl: "",
  },
  {
    id: 1010,
    name: "Riddhi Nahate",
    position: "SPONSORSHIP HEAD",
    imageUrl: "/profile_photo/Riddhi_Nahate.jpg",
    instagramUrl:
      "https://www.instagram.com/_.riddhi09?igsh=MWx5eDMyNXV1bnd2cQ==",
    linkedinUrl:
      "https://www.linkedin.com/in/riddhi-nahate-1893a0254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },
  {
    id: 54,
    name: "Kabeir Kaushik",
    position: "SPONSORSHIP CO-HEAD",
    imageUrl: "/profile_photo/Kabeir_Kaushik.jpeg",
    instagramUrl:
      "https://www.instagram.com/kabeirrr?igsh=NHhjY2dmNXd0aDZ1&utm_source=qr",
    linkedinUrl: "https://www.linkedin.com/in/kabeirkaushik",
    githubUrl: "",
  },
  {
    id: 55,
    name: "Advait Mahajan",
    position: "SPONSORSHIP MEMBER",
    imageUrl: "/profile_photo/Advait_Mahajan.jpg",
    instagramUrl: "https://www.instagram.com/iamadvait_225",
    linkedinUrl: "https://www.linkedin.com/in/advaitmahajan255",
    githubUrl: "https://github.com/IAmAdvait",
  },

  // SOCIAL MEDIA TEAM
  {
    id: 56,
    name: "Ayush Sontakke",
    position: "SOCIAL MEDIA HEAD",
    imageUrl: "/profile_photo/Ayush_Sontakke.jpg",
    instagramUrl:
      "https://www.instagram.com/___ayushsontakke___09?igsh=MWVycWUxOTNkcnZzaw==",
    linkedinUrl:
      "https://www.linkedin.com/in/ayush-sontakke-779202280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },
  {
    id: 57,
    name: "Disha Nannaware",
    position: "SOCIAL MEDIA CO-HEAD",
    imageUrl: "/profile_photo/Disha_Nannaware.jpeg",
    instagramUrl: "",
    linkedinUrl: "http://linkedin.com/in/disha-nannaware-074883319",
    githubUrl: "",
  },
  {
    id: 1011,
    name: "Ishika Lohakare",
    position: "SOCIAL MEDIA CO-HEAD",
    imageUrl: "/profile_photo/Ishika_Lohakare.jpg",
    instagramUrl:
      "https://www.instagram.com/ishika.230?igsh=MWZoeGUzbDMyODh4bQ==",
    linkedinUrl:
      "https://www.linkedin.com/in/ishika-lohakare?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },

  // DATABASE TEAM
  {
    id: 58,
    name: "Anshu Vairagade",
    position: "DATABASE HEAD",
    imageUrl: "/profile_photo/Anshu_Vairagade.png",
    instagramUrl: "",
    linkedinUrl: "http://www.linkedin.com/in/anshuvairagade",
    githubUrl: "https://github.com/AnshuVairagade",
  },
  {
    id: 59,
    name: "Abhang Kolte",
    position: "DATABASE HEAD",
    imageUrl: "/profile_photo/Abhang_Kolte.jpg",
    instagramUrl: "",
    linkedinUrl: "http://linkedin.com/in/abhang-kolte-a16897281",
    githubUrl: "",
  },
  {
    id: 60,
    name: "Shreya Kashyap",
    position: "DATABASE HEAD",
    imageUrl: "/profile_photo/Shreya_Kashyap.JPG",
    instagramUrl: "https://www.instagram.com/shreya__.kashyap/?next=%2F",
    linkedinUrl: "http://linkedin.com/in/shreya-kashyap3537",
    githubUrl: "",
  },
  {
    id: 61,
    name: "Bhawana Nirwan",
    position: "DATABASE CO-HEAD",
    imageUrl: "/profile_photo/Bhawana_Nirwan.jpg",
    instagramUrl:
      "https://www.instagram.com/ask_bhhavanaa_?igsh=cnczbzJ5bzE2cDQ5",
    linkedinUrl: "https://www.linkedin.com/in/bhawana-nirwan",
    githubUrl: "",
  },
  {
    id: 62,
    name: "Shaki Gajbhiye",
    position: "DATABASE MEMBER",
    imageUrl: "/profile_photo/Shaki_Gajbhiye.jpg",
    instagramUrl:
      "https://www.instagram.com/shakigajbhiye?igsh=Y290NW1wcXg0YWtw",
    linkedinUrl:
      "https://www.linkedin.com/in/shaki-gajbhiye?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "https://github.com/Shaki-2005",
  },
  //PHOTOGRAPHY TEAM
  {
    id: 63,
    name: "Jatin Mahajan",
    position: "PHOTOGRAPHY HEAD",
    imageUrl: "/profile_photo/Jatin_Mahajan.jpg",
    instagramUrl: "https://www.instagram.com/_jatin.mahajan_",
    linkedinUrl: "https://www.linkedin.com/in/jatin-mahajan",
    githubUrl: "",
  },
  {
    id: 64,
    name: "Krushnangi Manekar",
    position: "PHOTOGRAPHY HEAD",
    imageUrl: "/profile_photo/Krushnangi_Manekar.jpg",
    instagramUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/krushnangi-manekar",
    githubUrl: "https://github.com/Krushnangi",
  },
  {
    id: 65,
    name: "Shreeyash Dhale",
    position: "PHOTOGRAPHY CO-HEAD",
    imageUrl: "/profile_photo/Shreeyash_Dhale.jpeg",
    instagramUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/shreeyash-dhale-249a1b2b9",
    githubUrl: "",
  },

  // SPORTS TEAM

  {
    id: 66,
    name: "Kshitij Shrikhande",
    position: "SPORTS HEAD",
    imageUrl: "/profile_photo/Kshitij_Shrikhande.jpg",
    instagramUrl: "",
    linkedinUrl: "https://www.linkedin.com/in/kshitij-shrikhande",
    githubUrl: "",
  },
  {
    id: 1002,
    name: "Chinmay Tekade",
    position: "SPORTS HEAD",
    imageUrl: "/profile_photo/CHINMAY_TEKADE.jpg",
    instagramUrl: "https://www.instagram.com/chinmay11_?igsh=OXVoMm4xMGF3bXls",
    linkedinUrl:
      "https://www.linkedin.com/in/chinmay-tekade-95447a248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },
  {
    id: 1004,
    name: "Vedant Raut",
    position: "SPORTS HEAD",
    imageUrl: "/profile_photo/Vedant_Raut.jpg",
    instagramUrl: "",
    linkedinUrl:
      "https://www.linkedin.com/in/vedant-raut-ab2b3225a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "",
  },
  {
    id: 67,
    name: "Omair Khan",
    position: "SPORTS CO-HEAD",
    imageUrl: "/profile_photo/Omair_Khan.JPG",
    instagramUrl: "https://www.instagram.com/omair.586/",
    linkedinUrl: "https://www.linkedin.com/in/omair-ahmad-khan-383621345/",
    githubUrl: "https://github.com/OmairKhan29",
  },
  {
    id: 70,
    name: "Rushabh Thakurdware",
    position: "SPORTS CO-HEAD",
    imageUrl: "/profile_photo/Rushabh_Thakurdware.jpg",
    instagramUrl: "",
    linkedinUrl:
      "https://www.linkedin.com/in/rushabh-thakurdware-63a9a12aa/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "https://github.com/rushabhthakurdware",
  },
  {
    id: 7000,
    name: "Tanmay Isal",
    position: "SPORTS MEMBER",
    imageUrl: "/profile_photo/Tanmay_isal.jpeg",
    instagramUrl: "https://www.instagram.com/tanmayy6711?igsh=MXEwY3k1ZmluZGI0Mg==&utm_source=ig_contact_invite",
    linkedinUrl:
      "",
    githubUrl: "",
  },
  {
    id: 1003,
    name: "Hrishikesh Divekar",
    position: "SPORTS MEMBER",
    imageUrl: "/profile_photo/Hrishikesh_Divekar.jpg",
    instagramUrl:
      "https://www.instagram.com/hrishikesh.divekar?igsh=MXJzODl3bnVyMDN3Yw==",
    linkedinUrl:
      "https://www.linkedin.com/in/hrishikesh-divekar-505255345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    githubUrl: "https://github.com/HrishikeshDivekar",
  },
  {
    id: 100309,
    name: "Atharva Pagar",
    position: "MEMBER",
    imageUrl: "/profile_photo/Atharva_pagar.jpeg",
    instagramUrl:
      "https://www.instagram.com/atharva_pagar/",
    linkedinUrl:
      "http://www.linkedin.com/in/atharva-pagar-65830b28b",
    githubUrl: "",
  },
];

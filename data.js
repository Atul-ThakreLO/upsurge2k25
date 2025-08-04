export const FooterContactDetails = [
  {
    name: "Karan Kangali",
    position: "(President Cosmos)",
    phone: "9158494481",
    tel: "tel:9158494481",
  },
  {
    name: "Om Mane",
    position: "(President ACM)",
    phone: "9158494481",
    tel: "tel:9158494481",
  },
];

import InstagramIcon from "./public/img/Instagram Icon";
import MailSend01Icon from "./public/svg/MailSend01Icon";

export const FooterSocialLinks = [
  {
    icon: <InstagramIcon />,
    alt: "Instagram",
    href: "https://www.instagram.com/upsurge.ycce/",
  },
  {
    icon: <MailSend01Icon />,
    alt: "Email",
    href: "mailto:ycce@gmail.com",
  },
];

export const NavLinks = [
  { name: "Home", href: "/" },
  { name: "Smackathon", href: "/smackathon" },
  { name: "Events", href: "#" },
  { name: "Schedule", href: "#" },
  { name: "Team", href: "#" },
];

export const EventLogos = [""];

export const rules = [
  "Team must consist of minimum 3 and a maximum of 5 members.",
  "Team access pass will be distributed to the team upon registration, which will be used for further references.",
  "The ideas presented by the teams should be original and not protected by patents, copyrights, or technical publications.",
  "All official communication will be through the Smackathon email (smackathon@upsurge2k25.tech). Participants must monitor all folders.",
  "Registrations must be completed through the Upsurge 2k25 website by 21st August 2025 to secure a spot.",
  "Smackathon team is not responsible for late, lost, or mis-directed entries.",
  "Problem statements will be provided on the day the Hackathon starts.",
  "The team must commit to the given Git repository every hour during the Hackathon.",
  "At least 2 members must be present at the allotted table at all times during Smackathon.",
  "Participants must not engage in malicious activities. Damage to college property leads to disqualification.",
  "Meals and rest areas will be provided if food and accommodation is opted. One accommodation ticket includes 2 beds.",
  "Per YCCE Policy, female participants cannot stay overnight. After 8 PM they must leave and can return at 6 AM. Female team members coming from outside Nagpur should be responsible for their own accommodation arrangements.",
  "Rules may change at the discretion of the Smackathon organizing team.",
];

export const timelineItems = [
  { day: "DAY 1", time: ["08:30 AM"], desc: "Check-in Time for Teams" },
  { day: "DAY 1", time: ["10:00 AM", "11:30 AM"], desc: "Problem Statements Released, Submit Problem Statements" },
  { day: "DAY 1", time: ["12:00 PM", "3:00 PM - 5:00 PM"], desc: "Development Begins, Idea Presentation" },
  { day: "DAY 1", time: ["7:30 PM - 8:30 PM", "10:30 PM"], desc: "Dinner (coupon holders), Accommodation for ticket holders" },
  { day: "DAY 2", time: ["7:00 AM - 8:00 AM", "8:30 AM"], desc: "Breakfast, Final Elimination" },
  { day: "DAY 2", time: ["10:00 AM - 12:00 PM", "12:00 PM"], desc: "Final Presentations, Top 5 Finalists Declaration" },
  { day: "DAY 2", time: ["2:00 PM"], desc: "Winners Announcement" },
];
import TeamMembers from "@/components/Home/Team_Members/page";
import Footer from "@/components/Home/Footer/Footer.jsx";
import { FooterContactDetailsCosmos } from "../../../data";

export default function Home() {
    return(
        <div>
            <TeamMembers/>
            
          <div className="w-full h-40 sm:h-56 bg-gradient-to-b from-slate-900 via-gray-900 to-black" />
            <Footer footerDetails={FooterContactDetailsCosmos} />
        </div>

    );
}

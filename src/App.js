import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/onewelcome";
import Slider from "./Components/twoslider";
import Three from "./Components/threewhatmakes";
import FourIntroducing from "./Components/fourIntro";
import Deskfeatures from "./Components/deskfeatures";
import one from "./assets/pcfeatures/theone.png";
import two from "./assets/pcfeatures/thetwo.png";
import three from "./assets/pcfeatures/thethree.png";
import four from "./assets/pcfeatures/thefour.png";
import five from "./assets/pcfeatures/thefive.png";
import six from "./assets/pcfeatures/thesix.png";
import seven from "./assets/pcfeatures/theseven.png";
import eight from "./assets/pcfeatures/theeight.png";
import nine from "./assets/pcfeatures/thenine.png";
import Footer from "./Components/Footer";
import Fivenow from "./Components/fivenowtrans";
import Sixnow from "./Components/sixnow";
import ContactUs from "./Components/contactus";
import Four from "./Components/four";

function App() {
  return (
    <div className="">
      <Navbar />
      <Welcome />
      <div className="hidden lg:block overflow-hidden">
        <Deskfeatures
          title="1.TranslateAll"
          desc="Used for Translating WhatsApp, Facebook & Text Messages. TranslateAll
          by MagTapp works on any app installed in your phone. ​"
          img={one}
          settings="mr-56"
        />
        <Deskfeatures
          title="2. Voice to Voice Translation"
          desc="Voice translator is easy way to communicate between the people of different languages spoken. Its easy way just click on microphone icon and speak any words or sentence in your native language and it translate this to your desired language which language you already selected for translation. You can also copy this translated text and send it to your friends."
          img={two}
          settings="ml-64"
        />
        <Deskfeatures
          title="3. MagTapp 2.0 has 12 Indian & 30 
        International Languages"
          desc="MagTapp Image Dictionary and MagTapp Translate is available in 42 Languages of which 12 Indian Languages are Hindi, Bengali, Marathi,  Gujrati,  Tamil,  Telugu,  Kannada,  Malayalam, Punjabi, Odia, Urdu, Nepali, and 30 International Languages are Afrikaans, Arabic, Azerbaijani, Bosnian, Cebuano, Filipino, French, German, Greek, Haitian, Hausa, Hmong, Igbo, Italian, Japanese, Javanese, Khmer, Korean, Lao, Myanmar, Persian, Russian, Somali, Spanish, Swahili, Thai, Turkish, Yoruba & Zulu."
          img={three}
        />
        <Deskfeatures
          title="4. 10,000+ Visual Idioms in 
        Different Categories"
          desc=""
          img={four}
        />
        <Deskfeatures
          title="5. Online Books (10,000 + Downloadable Books 
          and PDF’s added in MagDoc Library)"
          desc="All Documents (MagDoc) / Online Books has introduced Online  Document  Library where 10,000+ User Generated Document files have been added. Free Download and Read NCERT Books &   Solutions with NCERT  Notes for Class 5 to Class 12. Free Download Notes for UPSC / PCS on Environment, Economics, International Relations, Science   & Technology,  Geography, History & Polity for Exam Preparation. Free Download IITJEE Mains & Advance Notes, Previous Year Question Papers, Physics, Chemistry & Maths Notes with Daily Practise Paper for each subject.   Free  download  Previous  Yea r Question  Papers  and  Notes  on Biology, Chemistry & Physics for NEET & Medical Exam Preparation. Free Download SSC Exam Preparation Notes on Maths, GK & GS, Reasoning, English & Previous Year Question Papers. Free Download CBSE Sample Paper, Notes , Marks  Wise  Questions  for  Class  6 to Class 12. Free Download ICSE Board Books Solution, Notes, Important Questions for Class 6 to Class 12. Free Download Notes for CA Foundation, CA  Intermediate  &  CA  Final  Exam  Preparation. Free Download  Engineering  Notes for  Civil,  CS,  Electrical  &  Mechanical.  Free Download  Medical  Revision  Notes  for  MBBS,  BMBS,  Clinical  Examination,  Clinical Procedures, Medicine, Surgery, Anatomy. Free Download  Note s &  Books  for  Learning  Digital  Marketing  Skills.  Entrepreneurship,  Self  Improvement,  Food, Grooming, Finance, Happiness,  etc.  Download  all  these  Document  Files  and  Read  it  in MagDoc’s Document Reader with One Tap Visual Meaning, Document Listening & Translation Feature"
          img={five}
          settings="mr-40"
        />
        <Deskfeatures
          title="6. Video Courses"
          desc="We have added Video Courses for Class 6 to Class 12 Students in the Hindi Language for students to learn from home. Video Courses contain free Video Courses by Expert Teachers."
          img={six}
        />
        <Deskfeatures
          title="7. All New Image Dictionary (MagBot 2.0)"
          desc="Use Image Dictionary (MagBot) for Searching Visual Meaning of Words, for Translating Sentences, for Voice to Voice Translation, and for Image Translation."
          img={seven}
          settings="mr-56"
        />
        <Deskfeatures
          title="8. Camera Translation"
          desc="Use your camera for instant text translation, just Open Camera Take Photo, Select Area and get the Translation in Selected Language."
          img={eight}
          settings="ml-56"
        />
        <Deskfeatures
          title="9. Night Mode"
          desc=""
          img={nine}
          settings="ml-20"
        />
        <Footer />
      </div>
      <div className="lg:hidden">
        <Slider />
        <Three />
        {/* <FourIntroducing /> */}
        <Four />
        <Fivenow />
        <Sixnow />
        <ContactUs />
      </div>

      <div className="h-10 w-full"></div>
    </div>
  );
}

export default App;

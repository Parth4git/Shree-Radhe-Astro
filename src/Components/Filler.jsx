import React from "react";
import { useNavigate } from "react-router-dom";

const Filler = (props) => {
  const navigate = useNavigate();
  return (
    <section className=" mx-auto px-6 bg-gray-800 py-12 items-center flex flex-col justify-center">
      {/* <h3 className="text-3xl font-bold text-center text-white mb-4">
        {props.title}
      </h3> */}
      <p className="text-amber-200 text-2xl font-serif mb-4 max-w-7xl">
        हमारी ज्योतिष और पूजा सेवाएँ न केवल शहर में बल्कि शहर के बाहर भी प्रदान
        की जाती हैं। यदि आप किसी विशेष समस्या, जीवन में उतार-चढ़ाव, या कोई भी
        मानसिक एवं शारीरिक कष्ट महसूस कर रहे हैं, तो हमआपकी सेवा में उपलब्ध है।
        हम दूरस्थ स्थानों पर भी अपनी पूजा, यज्ञ, और ज्योतिषीय परामर्श के माध्यम
        से आपको समाधान देने के लिए तैयार हैं।
      </p>

      <button
        className="mt-4 bg-amber-400 hover:bg-amber-500 text-white font-bold py-4 px-6 rounded"
        onClick={() => {
          navigate("/contact");
        }}
      >
        <span className="text-2xl">📞 </span>
        Get a Consultation on Call Now
      </button>
    </section>
  );
};

export default Filler;

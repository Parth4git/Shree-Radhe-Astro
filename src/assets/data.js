const serviceData = [
  {
    titleEn: "Kundli Match Making",
    titleHi: "कुंडली मिलान",
    titleGu: "કુંડળી મેળાપ",
    image: "https://weddingbyte.com/new/images/kundalbr.png",
    descriptionEn: "Kundli Match Making is a traditional practice in Hindu astrology that involves comparing the birth charts of two individuals to assess their compatibility for marriage. It considers planetary positions, doshas, and other astrological factors to determine if the couple is well-suited for each other.",
    descriptionHi: "कुंडली मिलान एक पारंपरिक प्रथा है जिसमें दो व्यक्तियों की जन्म कुंडलियों की तुलना की जाती है ताकि यह आंका जा सके कि वे विवाह के लिए कितने अनुकूल हैं। यह ग्रहों की स्थिति, दोषों और अन्य ज्योतिषीय कारकों पर विचार करता है।",
    descriptionGu: "કુંડળી મેળાપ હિંદુ જ્યોતિષમાં એક પરંપરાગત પ્રથા છે જેમાં લગ્ન માટેની સુસંગતતાનું મૂલ્યાંકન કરવા માટે બે વ્યક્તિઓના જન્મ ચાર્ટની તુલના કરવામાં આવે છે. તે ગ્રહોની સ્થિતિ, દોષો અને અન્ય જ્યોતિષીય પરિબળોને ધ્યાનમાં લે છે."
  },
  {
    titleEn: "Nakshatra Pooja",
    titleHi: "नक्षत्र पूजा",
    titleGu: "નક્ષત્ર પૂજા",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Vp10GcDoLlBI0-53wHK7Gw4JYbDBDpL2vA&s",
    descriptionEn: "Nakshatra Pooja is a Hindu ritual performed to honor the lunar mansions (nakshatras) in Vedic astrology. It is believed to enhance positive energies and mitigate negative influences associated with one's birth star.",
    descriptionHi: "नक्षत्र पूजा एक हिंदू अनुष्ठान है जो वेदिक ज्योतिष में चंद्रमा के निवास स्थानों (नक्षत्रों) का सम्मान करने के लिए किया जाता है। यह किसी के जन्म तारे से जुड़े नकारात्मक प्रभावों को कम करने और सकारात्मक ऊर्जा को बढ़ाने में मदद करता है।",
    descriptionGu: "નક્ષત્ર પૂજા એક હિંદુ રીતરિવાજ છે જે વૈદિક જ્યોતિષમાં ચંદ્રની હવેલીઓ (નક્ષત્રો)નું સન્માન કરવા માટે કરવામાં આવે છે. એવું માનવામાં આવે છે કે તે સકારાત્મક ઊર્જાને વધારે છે અને જન્મ તારા સાથે સંકળાયેલા નકારાત્મક પ્રભાવોને ઘટાડે છે."
  },
  {
    titleEn: "Ratna",
    titleHi: "रत्न",
    titleGu: "રત્ન",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkzS2-c7Qb98bZOVzLrT3p294M_9dOPvIMWA&s",
    descriptionEn: "Ratna refers to gemstones in Vedic astrology. Each gemstone is associated with a specific planet and is believed to possess unique energies that can influence an individual's life positively when worn.",
    descriptionHi: "रत्न वेदिक ज्योतिष में रत्नों को संदर्भित करता है। प्रत्येक रत्न एक विशेष ग्रह से जुड़ा होता है और माना जाता है कि जब इसे पहना जाता है तो यह किसी व्यक्ति के जीवन पर सकारात्मक प्रभाव डालने वाली अद्वितीय ऊर्जा रखता है।",
    descriptionGu: "રત્ન વૈદિક જ્યોતિષમાં રત્નોને દર્શાવે છે. દરેક રત્ન એક ચોક્કસ ગ્રહ સાથે જોડાયેલું છે અને એવું માનવામાં આવે છે કે જ્યારે પહેરવામાં આવે ત્યારે તે વ્યક્તિના જીવન પર સકારાત્મક રીતે પ્રભાવ પાડી શકે તેવી અનન્ય ઊર્જા ધરાવે છે."
  },
  {
    titleEn: "Pitra Dosh Pooja",
    titleHi: "पितृ दोष पूजा",
    titleGu: "પિતૃ દોષ પૂજા",
    image: "https://www.omkarmic.in/wp-content/uploads/2020/11/pitra-dosha-puja.jpg",
    descriptionEn: "Pitra Dosh Pooja is a ritual performed to appease ancestral spirits and resolve issues related to Pitra Dosh, which is believed to arise from unresolved ancestral karma. It aims to bring peace and blessings from ancestors.",
    descriptionHi: "पितृ दोष पूजा एक अनुष्ठान है जो पूर्वजों की आत्माओं को संतुष्ट करने और पितृ दोष से संबंधित मुद्दों को हल करने के लिए किया जाता है। यह अनसुलझे पूर्वजों के कर्मों से उत्पन्न माना जाता है। इसका उद्देश्य शांति और आशीर्वाद लाना है।",
    descriptionGu: "પિતૃ દોષ પૂજા એક રીતરિવાજ છે જે પૂર્વજોની આત્માઓને શાંત કરવા અને પિતૃ દોષ સાથે સંકળાયેલા મુદ્દાઓને ઉકેલવા માટે કરવામાં આવે છે. એવું માનવામાં આવે છે કે તે અનછેદ્ય પૂર્વજોના કર્મમાંથી ઉદ્ભવે છે. તેનો ઉદ્દેશ્ય શાંતિ અને આશીર્વાદ લાવવાનો છે."
  },
  {
    titleEn: "Vedic Astrology",
    titleHi: "वैदिक ज्योतिष",
    titleGu: "વૈદિક જ્યોતિષ",
    image: "https://adityakundali.com/wp-content/uploads/2024/11/VEDIC-ASTROLOGY.jpg",
    descriptionEn: "Vedic astrology, also known as Jyotish, is an ancient Indian system of astrology that uses the positions of celestial bodies at the time of a person's birth to provide insights into their personality, life events, and future.",
    descriptionHi: "वैदिक ज्योतिष, जिसे ज्योतिष भी कहा जाता है, एक प्राचीन भारतीय ज्यોतिष प्रणाली है जो किसी व्यक्ति के जन्म के समय आकाशीय पिंडों की स्थिति का उपयोग करके उनके व्यक्तित्व, जीवन की घटनाओं और भविष्य के बारे में अंतर्दृष्टि प्रदान करती है।",
    descriptionGu: "વૈદિક જ્યોતિષ, જેને જ્યોતિષ તરીકે પણ ઓળખવામાં આવે છે, તે પ્રાચીન ભારતીય જ્યોતિષ પ્રણાલી છે જે વ્યક્તિના જન્મ સમયે ખગોળીય પિંડોની સ્થિતિનો ઉપયોગ કરીને તેમના વ્યક્તિત્વ, જીવનની ઘટનાઓ અને ભવિષ્ય વિશે અંતર્દૃષ્ટિ આપે છે."
  },
  {
    titleEn: "KalSarp Dosh Pooja",
    titleHi: "कालसर्प दोष पूजा",
    titleGu: "કાલસર્પ દોષ પૂજા",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4jlkrMLoQPQlR2JJ5s9-huiy_w_QFTaD1Og&s",
    descriptionEn: "KalSarp Dosh Pooja is a ritual performed to mitigate the effects of Kalsarp Dosh, a condition in Vedic astrology where all planets are positioned between Rahu and Ketu. It is believed to bring peace and prosperity.",
    descriptionHi: "कालसर्प दोष पूजा एक अनुष्ठान है जो कालसर्प दोष के प्रभावों को कम करने के लिए किया जाता है। यह एक स्थिति है जिसमें सभी ग्रह राहु और केतु के बीच स्थित होते हैं। इसे शांति और समृद्धि लाने वाला माना जाता है।",
    descriptionGu: "કાલસર્પ દોષ પૂજા એક રીતરિવાજ છે જે કાલસર્પ દોષના અસરોને ઘટાડવા માટે કરવામાં આવે છે. આ વૈદિક જ્યોતિષમાં એક સ્થિતિ છે જ્યાં બધા ગ્રહો રાહુ અને કેતુ વચ્ચે સ્થિત થાય છે. એવું માનવામાં આવે છે કે તે શાંતિ અને સમૃદ્ધિ લાવે છે."
  },
  {
    titleEn: "KUNDALI HASTREKHA",
    titleHi: "कुंडली हस्तरेखा",
    titleGu: "કુંડળી હસ્તરેખા",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl7ASXKUSlzZCbGrz8fbs7udGaBN6a4j0SrA&s",
    descriptionEn: 'Kundali" refers to a birth chart in Hindu astrology, while "Hastrekha" translates to palmistry. Hastrekha explores the lines and markings on the palm to offer predictions about various aspects of life.',
    descriptionHi: 'कुंडली" का अर्थ हिंदू ज्योतिष में जन्म कुंडली है, जबकि "हस्तरेखा" का अनुवाद हस्तरेखा विज्ञान में किया जाता है। हस्तरेखा जीवन के विभिन्न पहलुओं के बारे में भविष्यवाणियाँ करने के लिए हथेली पर रेखाओं और चिह्नों का पता लगाती है।',
    descriptionGu: '"કુંડળી" હિંદુ જ્યોતિષમાં જન્મ ચાર્ટને દર્શાવે છે, જ્યારે "હસ્તરેખા" નો અર્થ હથેળી વાંચન થાય છે. હસ્તરેખા જીવનના વિવિધ પાસાઓ વિશે આગાહીઓ આપવા માટે હથેળી પરની રેખાઓ અને નિશાનીઓની ચર્ચા કરે છે.'
  },
  {
    titleEn: "VASTU TIPS",
    titleHi: "वस्तु टिप्स",
    titleGu: "વાસ્તુ ટિપ્સ",
    image: "https://varanasiastrologer.com/assets/img/ser5.jpg",
    descriptionEn: "Vastu tips focus on creating a harmonious living space by aligning with natural energies and cosmic forces, emphasizing proper room placement and positive energy. These tips aim to enhance well-being and prosperity.",
    descriptionHi: "वास्तु टिप्स प्राकृतिक ऊर्जा और ब्रह्मांडीय बलों के साथ संरेखण करके एक सामंजस्यपूर्ण रहने की जगह बनाने पर ध्यान केंद्रित करते हैं, उचित कमरे के स्थान और सकारात्मक ऊर्जा पर जोर देते हैं। ये टिप्स भलाई और समृद्धि को बढ़ाने का लक्ष्य रखते हैं।",
    descriptionGu: "વાસ્તુ ટિપ્સ કુદરતી ઊર્જા અને બ્રહ્માંડીય શક્તિઓ સાથે સંરેખણ કરીને સુમેળભર્યું જીવન સ્થાન બનાવવા પર ધ્યાન કેન્દ્રિત કરે છે, યોગ્ય ઓરડાની જગ્યા અને સકારાત્મક ઊર્જા પર ભાર મૂકે છે. આ ટિપ્સ સુખાકારી અને સમૃદ્ધિને વધારવાનો લક્ષ રાખે છે."
  },
  {
    titleEn: "LAL KITAB",
    titleHi: "लाल किताब",
    titleGu: "લાલ કિતાબ",
    image: "/nayan_service_lalKitab.jpg",
    descriptionEn: "Lal Kitab is an ancient astrological text known for practical remedies and Totkes. It predicts fortune based on planetary positions, avoiding mantras and gemstones. It emphasizes simple, effective solutions for life challenges.",
    descriptionHi: "लाल किताब एक प्राचीन ज्योतिषीय ग्रंथ है जो व्यावहारिक उपचारों और टोटके के लिए जाना जाता है। यह ग्रहों की स्थिति के आधार पर भाग्य की भविष्यवाणी करता है, मंत्रों और रत्नों से बचता है। यह जीवन की चुनौतियों के लिए सरल, प्रभावी समाधानों पर जोर देता है।",
    descriptionGu: "લાલ કિતાબ એક પ્રાચીન જ્યોતિષીય ગ્રંથ છે જે વ્યવહારિક ઉપાયો અને ટોટકાઓ માટે જાણીતી છે. તે ગ્રહોની સ્થિતિના આધારે ભાગ્યની આગાહી કરે છે, મંત્રો અને રત્નોને ટાળે છે. તે જીવનની પડકારો માટે સરળ, અસરકારક ઉકેલો પર ભાર મૂકે છે."
  },
  {
    titleEn: "SATYA NARAYAN KATHA",
    titleHi: "सत्यनारायण कथा",
    titleGu: "સત્યનારાયણ કથા",
    image: "https://onlinepanditg.in/images/resource/s16.jpg",
    descriptionEn: "A Hindu ritual dedicated to Lord Vishnu in his form as Satyanarayan. The katha is recited to seek blessings for prosperity, peace, and happiness.",
    descriptionHi: "भगवान विष्णु के सत्यनारायण रूप को समर्पित एक हिंदू अनुष्ठान। कथा का पाठ समृद्धि, शांति और खुशी के लिए आशीर्वाद प्राप्त करने के लिए किया जाता है।",
    descriptionGu: "ભગવાન વિષ્ણુના સત્યનારાયણ સ્વરૂપને સમર્પિત એક હિંદુ રીતરિવાજ. સમૃદ્ધિ, શાંતિ અને સુખ માટે આશીર્વાદ મેળવવા માટે કથા સંભળાવવામાં આવે છે."
  },
  {
    titleEn: "NAVGRAH POOJA",
    titleHi: "नवग्रह पूजा",
    titleGu: "નવગ્રહ પૂજા",
    image: "/nayan_service_NAVGRAH POOJA.jpg",
    descriptionEn: "Navgrah Pooja is a ritual to align spiritual and physical energies, invoking the nine planetary deities through chants and offerings for cosmic harmony.",
    descriptionHi: "नवग्रह पूजा एक अनुष्ठान है जो आध्यात्मिक और भौतिक ऊर्जा को संरेखित करने के लिए किया जाता है, नौ ग्रहों के देवताओं को मंत्रों और भेंटों के माध्यम से ब्रह्मांडीय सामंजस्य के लिए बुलाया जाता है।",
    descriptionGu: "નવગ્રહ પૂજા એક રીતરિવાજ છે જે આધ્યાત્મિક અને ભૌતિક ઊર્જાને સંરેખિત કરવા માટે કરવામાં આવે છે, નવ ગ્રહોના દેવતાઓને બ્રહ્માંડીય સુમેળ માટે મંત્રો અને ભેટો દ્વારા બોલાવવામાં આવે છે."
  },
  {
    titleEn: "GRAH PRAVESH",
    titleHi: "गृह प्रवेश",
    titleGu: "ગૃહ પ્રવેશ",
    image: "/nayan_service_GRAH PRAVESH.jpg",
    descriptionEn: "Griha Pravesh Pooja is a housewarming ritual done before entering a new home, meant to cleanse negativity and bring auspiciousness as per Hindu traditions.",
    descriptionHi: "गृह प्रवेश पूजा एक गृहप्रवेश अनुष्ठान है जो नए घर में प्रवेश करने से पहले किया जाता है, जिसका उद्देश्य नकारात्मकता को दूर करना और हिंदू परंपराओं के अनुसार शुभता लाना है।",
    descriptionGu: "ગૃહ પ્રવેશ પૂજા એક ગૃહપ્રવેશની રીત છે જે નવા ઘરમાં પ્રવેશ કરતા પહેલા કરવામાં આવે છે, જેનો હેતુ નકારાત્મકતાને દૂર કરવાનો અને હિંદુ પરંપરાઓ મુજબ શુભતા લાવવાનો છે."
  }
];

export default serviceData;
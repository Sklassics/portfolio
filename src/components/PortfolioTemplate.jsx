
import React, { useState,useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import {
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaDribbble
} from 'react-icons/fa';
import "../index.css";

const PortfolioTemplate = () => {
  const [navItems, setNavItems] = useState(["Home", "Services","Contact", "Work", "About", "Pricing"]);
  // const [selectedPage, setSelectedPage] = useState("Resume");
  const [selectedPage, setSelectedPage] = useState("Home");

  const [content, setContent] = useState({

    Home: "",
    Services : "",
    Work: "",
    Contact: "",
    About: "",
    Pricing: ""
  });
  const navigate = useNavigate();

  const location = useLocation();
  const isPublished = location.pathname === "/published";



  // Navbar items
  const [newNavItem, setNewNavItem] = useState("");
  const [showCustomize, setShowCustomize] = useState(true);
  const [fullname, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const[addressone , setAddressOne] = useState("");
  const[addresstwo , setAddressTwo] = useState("");
  const[contact,setContact] = useState("");
  const[contactone,setContactOne] = useState("");
  const[contacttwo,setContactTwo] = useState("");
  const[followus , setFollowus] = useState("");
  const[privacy,setPrivacy] = useState("");
  const[term,setTerm] = useState("");
  const[cookie,setCookie] = useState("");
  const[rights,setRights] = useState("");
  
  
  

 
  const [name, setName] = useState("Your Name");
  const [pdf, setPdf] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  

  // work details
  const [workName, setWorkName] = useState("");
  const [workTitle, setWorkTitle] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // Stores image preview URL
  const [workDescription, setWorkDescription] = useState("");
  const [workservice,setWorkService] = useState("");
  const [workserviceone,setWorkServiceOne] = useState("");
  const [workservicetwo,setWorkServiceTwo] = useState("");

  const [workNameone, setWorkNameOne] = useState("");
  const [workTitleone, setWorkTitleOne] = useState("");
  const [imageUrlone, setImageUrlOne] = useState(""); // Stores image preview URL
  const [workDescriptionone, setWorkDescriptionOne] = useState("");
 
  const [workNametwo, setWorkNameTwo] = useState("");
  const [workTitletwo, setWorkTitleTwo] = useState("");
  const [imageUrltwo, setImageUrlTwo] = useState(""); // Stores image preview URL
  const [imageUrlthree, setImageUrlThree] = useState(""); // Stores image preview URL
  const [workDescriptiontwo, setWorkDescriptionTwo] = useState("");


  const [workHeading, setWorkHeading] = useState("");
 

  


  // const [recorded, setRecorded] = useState("");
  // const [recordeddesc, setRecordeddesc] = useState("");
  // const [videotitle, setVideotitle] = useState("");
  // const [year, setYear] = useState("");
  // const [yvideo, setYvideo] = useState("");
  // const [videotitletwo, setVideotitletwo] = useState("");
  // const [yeartwo, setYeartwo] = useState("");

  // const [yvideotwo, setYvideotwo] = useState("");

  // const getEmbedURL = (url) => {
  //   if (!url) return null; // Prevents empty string issues
  //   const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.+?v=))([^&?]+)/);
  //   return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : null;
  // };
  
//Contact

   const [contactheading,setContactHeading] = useState("");
   const [contacttext,setContactText] = useState("");
   const [contactname,setContactName] = useState("");
   const [phone,setPhone] = useState("");
   const [contactnum,setContactNum] = useState("");
   const [contactmail,setContactMail] = useState("");

   const [adr,setAdr] = useState("");
   const [contactaddress,setContactAddress] = useState("");
   const [contactstreet , setContactstreet] = useState("");






//Home

  const [imageUrlhome, setImageUrlhome] = useState(""); // Stores image preview URL
  const [homename, setHomename] = useState("");
  const [hometitle, setHometitle] = useState("");
  const [homeheading , setHomeHeading] = useState("");
  const [homedesc, setHomedesc] = useState("");
  const [hometext, setHometext] = useState("");
  const [homeh, setHomeH] = useState("");
  const [homehone , setHomeHone] = useState("");
  const [index ,setIndex] = useState(0);
  const [scrolltext , setScrollText] = useState("");
  const [scrolltextone , setScrollTextone] = useState("");
  const [scrolltexttwo , setScrollTexttwo] = useState("");
  const [scrolltextthree , setScrollTextthree] = useState("");
  const [scrollpara , setScrollPara] = useState("");
  const [scrollparaone , setScrollParaone] = useState("");
  const [scrollparatwo , setScrollParatwo] = useState("");
  const [scrollparathree , setScrollParathree] = useState("");
  const titles = [scrolltext, scrolltextone, scrolltexttwo, scrolltextthree];
  const descriptions = [scrollpara, scrollparaone, scrollparatwo, scrollparathree];

  const handleScroll = (direction) => {
    if (direction === "up" && index > 0) {
      setIndex(index - 1);
    } else if (direction === "down" && index < titles.length - 1) {
      setIndex(index + 1);
    }
  };



  const [homesh,setHomeSh] = useState("");
  const [homeshone , setHomeShone] = useState("");
  const [imagetxt , setImageTxt] = useState("");
  const [imagetxtone , setImageTxtone] = useState("");
  const [imagetxttwo , setImageTxttwo] = useState("");
  const [hovertxt , setHoverTxt] = useState("");
  const [hovertxtone , setHoverTxtone] = useState("");
  const [hovertxttwo , setHoverTxttwo] = useState("");
  const [imageUrlhomeone, setImageUrlhomeone] = useState(""); // Stores image preview URL
  const [imageUrlhometwo, setImageUrlhometwo] = useState("");
  const [imageUrlhomethree, setImageUrlhomethree] = useState("");
  const [imageUrlhomefour, setImageUrlhomefour] = useState("");
  const [homesubheading , setHomesubheading] = useState("");
  const [homedescone, setHomedescone] = useState("");
  const [homesuccess, setHomeSuccess] = useState("");
  const [homesuccessone,setHomeSuccessOne] = useState("");
  const [clientstory ,setClientStory]  = useState("");
  const [clientname , setClientName] = useState("");
  const [clientprofession,setClientProfession] = useState("");
  const [clientstoryone ,setClientStoryOne]  = useState("");
  const [clientnameone , setClientNameOne] = useState("");
  const [clientprofessionone,setClientProfessionOne] = useState("");
  const [clientstorytwo,setClientStoryTwo] = useState("");
  const [clientnametwo , setClientNameTwo] = useState("");
  const [clientprofessiontwo,setClientProfessionTwo] = useState("");
  const [clientstorythree,SetClientStoryThree] = useState("");
  const [clientnamethree , setClientNameThree] = useState("");
  const [clientprofessionthree,setClientProfessionThree] = useState("");
  const [clientstoryfour ,setClientStoryFour]  = useState("");
  const [clientnamefour , setClientNameFour] = useState("");
  const [clientprofessionfour,setClientProfessionFour] = useState("");
  const [clientstoryfive ,setClientStoryFive]  = useState("");
  const [clientnamefive , setClientNameFive] = useState("");
  const [clientprofessionfive,setClientProfessionFive] = useState("");
  const [clientstorysix ,setClientStorySix]  = useState("");
  const [clientnamesix , setClientNameSix] = useState("");
  const [clientprofessionsix,setClientProfessionSix] = useState("");
  const [clientstoryseven ,setClientStorySeven]  = useState("");
  const [clientnameseven , setClientNameSeven] = useState("");
  const [clientprofessionseven,setClientProfessionSeven] = useState("");
  const [clientstoryeight ,setClientStoryEight]  = useState("");
  const [clientnameeight , setClientNameEight] = useState("");
  const [clientprofessioneight,setClientProfessionEight] = useState("");

// Services 


const [servicetitle, setServiceTitle] = useState("");
const [serviceheading , setServiceHeading] = useState("");
const [servicepara , setServicePara] = useState("");
const [servicesub,setServiceSub] = useState("");
const [imageUrlservice ,setImageUrlService] = useState("");
const [servicet,setServiceT] = useState("");
const [serviced,setServiceD] = useState("");
const [imageUrlserviceone ,setImageUrlServiceone] = useState("");
const [servicetone,setServiceTone] = useState("");
const [servicedone,setServiceDone] = useState("");
const [imageUrlservicetwo ,setImageUrlServicetwo] = useState("");
const [servicettwo,setServiceTtwo] = useState("");
const [servicedtwo,setServiceDtwo] = useState("");
const [imageUrlservicethree  ,setImageUrlServicethree] = useState("");
const [servicetthree,setServiceTthree] = useState("");
const [servicedthree,setServiceDthree] = useState("");
const [imageUrlservicefour  ,setImageUrlServicefour] = useState("");
const [servicetfour,setServiceTfour] = useState("");
const [servicedfour,setServiceDfour] = useState("");
const [imageUrlservicefive ,setImageUrlServicefive] = useState("");
const [servicetfive,setServiceTfive] = useState("");
const [servicedfive,setServiceDfive] = useState("");
const [imageUrlservicesix ,setImageUrlServicesix] = useState("");
const [servicetsix,setServiceTsix] = useState("");
const [servicedsix,setServiceDsix] = useState("");
const [benefith, setBenefitH] = useState("");
const [benefithone, setBenefitHone] = useState("");
const [benefitone , setBenefitone] = useState("");
const [benefithtwo, setBenefitHtwo] = useState("");
const [benefittwo , setBenefittwo] = useState("");








    // const [researchFiles, setResearchFiles] = useState([]);

  // About  details

  const [abouttitle, setAboutTitle] = useState("");
  const [aboutheading, setAboutHeading] = useState("");
  const [imageUrlout, setImageUrlout] = useState(""); // Stores image preview URL
  const [imageUrlouttwo, setImageUrlouttwo] = useState(""); // Stores image preview URL
  const [imageUrloutthree, setImageUrloutthree] = useState(""); // Stores image preview URL
  const [imageUrloutfour, setImageUrloutfour] = useState(""); // Stores image preview URL
  const [imageUrloutfive, setImageUrloutfive] = useState(""); // Stores image preview URL
  const [imageUrloutsix, setImageUrloutsix] = useState(""); 
  const [imageUrloutseven, setImageUrloutseven] = useState(""); 
  const [imageUrlouteight, setImageUrlouteight] = useState(""); 
  const [aboutheadingone,setAboutHeadingOne] = useState("");
  const [aboutdescription,setAboutDescription] = useState("");
  const [aboutteam,setAboutteam] = useState("");
  const [teammemname ,setTeammemname] = useState("");
  const [teammemrole ,setTeammemrole] = useState("");
  const [teammemonename ,setTeammemonename] = useState("");
  const [teammemonerole ,setTeammemonerole] = useState("");
  const [teammemtwoname ,setTeammemtwoname] = useState("");
  const [teammemtworole ,setTeammemtworole] = useState("");
  const [imageUrlteam, setImageUrlteam] = useState(""); 
  const [imageUrlteamone, setImageUrlteamone] = useState(""); 
  const [imageUrlteamtwo, setImageUrlteamtwo] = useState(""); 
  const [aboutexpert,setAboutexpert] = useState("");
  const [abtheading,setAbtheading] = useState("");
  const [abttxt,setAbttxt] = useState("");
  const [aboutservice,setAboutservice] = useState("");
  const [abtheadingone,setAbtheadingone] = useState("");
  const [abttxtone,setAbttxtone] = useState("");
  const [imageUrlabt, setImageUrlabt] = useState(""); 
  const [imageUrlabtone, setImageUrlabtone] = useState(""); 
  


  



  const [aboutheadingtwo,setAboutHeadingTwo] = useState("");
  const [aboutdescriptionone,setAboutDescriptionOne] = useState("");
  const [aboutdescriptiontwo,setAboutDescriptionTwo] = useState("");
  const [aboutdescriptionthree,setAboutDescriptionThree] = useState("");
  const [aboutdescriptionfour,setAboutDescriptionFour] = useState("");
  const [aboutdescriptionfive,setAboutDescriptionFive] = useState("");
  const [aboutdescriptionsix,setAboutDescriptionSix] = useState("");
  

  
 

  // Personal details
  const [pricingName, setPricingName] = useState("");
  const [pricingTitle, setPricingTitle] = useState("");
  const [personalDetailsDesc, setPersonalDetailsDesc] = useState("");
  const [imageUrlper, setImageUrlper] = useState("");
  const [imageUrlpertwo, setImageUrlpertwo] = useState("");
  const [personalDetailsTitletwo, setPersonalDetailsTitletwo] = useState("");
  const [personalDetailsDesctwo, setPersonalDetailsDesctwo] = useState("");
  const [imageUrlperthree, setImageUrlperthree] = useState("");
  const [imageUrlperfour, setImageUrlperfour] = useState("");



  const handleSaveProfileDetails = () => {
    const profileData = {
      name,
      fullname,
      address,
      addressone,
      addresstwo,
      contact,
      contactone,
      contacttwo,
      followus,
      privacy,
      term,
      cookie,
      rights
    };
  
    localStorage.setItem("profileDetails", JSON.stringify(profileData)); // Save in localStorage
    alert("Profile details saved successfully!");
  };
  

  useEffect(() => {
    const savedProfile = localStorage.getItem("profileDetails");
    if (savedProfile) {
      const parsedProfile = JSON.parse(savedProfile);
      setFullName(parsedProfile.fullname);
      setAddress(parsedProfile.address);
      setAddressOne(parsedProfile.addressone);
      setAddressTwo(parsedProfile.addresstwo);
      setContact(parsedProfile.contact);
      setContactOne(parsedProfile.contactone);
      setContactTwo(parsedProfile.contacttwo);
      setFollowus(parsedProfile.folloowus);
      setPrivacy(parsedProfile.privacy);
      setTerm(parsedProfile.term);
      setCookie(parsedProfile.cookie);  
      setRights(parsedProfile.rights);

      
    }
  }, []);
  


  
  useEffect(() => {
    if (selectedPage) {
      document.getElementById(selectedPage.toLowerCase() + "-section")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedPage]);
  
// Save Home Section 
  const handleSaveHome = () => {
    const homeData = {
      name: homename,
      title: hometitle,
      heading : homeheading,
      description: homedesc,
      image: imageUrlhome,
      paragraph: hometext,
      descriptionone: homedescone,
      imageone: imageUrlhomeone,
      imagetwo : imageUrlhometwo,
      imagethree : imageUrlhomethree,
      homesuccess :homesuccess,
   homesuccessone : homesuccessone,
      clientstory : clientstory,
      clientname : clientname,
      profession : clientprofession,
      storyone : clientstoryone,
      clientnameone : clientnameone,
      professionone : clientprofessionone,
      storytwo : clientstorytwo,
      nametwo : clientnametwo,
      professiontwo : clientprofessiontwo,
      storythree : clientstorythree,
      namethree : clientnamethree,
      professionthree : clientprofessionthree,
      storyfour : clientstoryfour,
      namefour : clientnamefour,
      professionfour : clientprofessionfour,
      storyfive : clientstoryfive,
      namefive : clientnamefive,
      professionfive : clientprofessionfive,
      storysix : clientstorysix,
      namesix : clientnamesix,
      professionsix : clientprofessionsix,
      storyseven : clientstoryseven,
      nameseven : clientnameseven,
      professionseven : clientprofessionseven,
      storyeight : clientstoryeight,
      nameeight : clientnameeight,
      professioneight : clientprofessioneight,
      subheading : homesh,
      subheadingone : homeshone,
      imagetext : imagetxt,
      imagetextone : imagetxtone,
      imagetexttwo : imagetxttwo,
      hovertext : hovertxt,
      hovertextone : hovertxtone,
      hovertextwo : hovertxttwo,
      homesubheading : homesubheading,
      imagefour : imageUrlhomefour,
      homeh : homeh,
      homehone : homehone,
      index: index,
      scrolltext : scrolltext,
      scrolltextone : scrolltextone,
      scrolltexttwo : scrolltexttwo,
      scrolltextthree : scrolltextthree,
      scrollpara : scrollpara,
      scrollparaone : scrollparaone,
      scrollparatwo : scrollparatwo,
      scrollparathree : scrollparathree,
     
     

    };
  
    setContent((prev) => ({
      ...prev,
      Home: homeData
    }));
  
    localStorage.setItem("homeSection", JSON.stringify(homeData)); // Save in localStorage
    alert("Home section saved!");
  };
  
  // Load saved data on refresh
  useEffect(() => {
    const savedHome = localStorage.getItem("homeSection");
    if (savedHome) {
      const parsedHome = JSON.parse(savedHome);
      setHomename(parsedHome.name);
      setHometitle(parsedHome.title);
      setHomeHeading(parsedHome.homeheading);
      setHomedesc(parsedHome.description);
      setImageUrlhome(parsedHome.image);
      setHometext(parsedHome.paragraph);
      setHomedescone(parsedHome.descriptionone);
      setImageUrlhomeone(parsedHome.imageone);
      setHomeSuccess(parsedHome.homesuccess);
      setHomeSuccessOne(parsedHome.homesuccessone);
      setClientStory(parsedHome.clientstory);
      setClientName(parsedHome.clientname);
      setClientProfession(parsedHome.clientprofession);
      setClientStoryOne(parsedHome.clientstoryone);
      setClientNameOne(parsedHome.clientnameone);
      setClientProfessionTwo(parsedHome.clientprofessiontwo);
     SetClientStoryThree(parsedHome.clientstorythree);
      setClientNameThree(parsedHome.clientnamethree);
      setClientProfessionThree(parsedHome.clientprofessionthree);
      setClientStoryFour(parsedHome.clientstoryfour);
      setClientNameFour(parsedHome.clientnamefour);
      setClientProfessionFour(parsedHome.clientprofessionfour);
      setClientStoryFive(parsedHome.clientstoryfive);
      setClientNameFive(parsedHome.clientnamefive);
      setClientProfessionFive(parsedHome.clientprofessionfive);
      setClientStorySix(parsedHome.clientstorysix);
      setClientNameSix(parsedHome.clientnamesix);
      setClientProfessionSix(parsedHome.clientprofessionsix);
      setClientStorySeven(parsedHome.clientstoryseven);
      setClientNameSeven(parsedHome.clientnameseven);
      setClientProfessionSeven(parsedHome.clientprofessionseven);
      setClientStoryEight(parsedHome.clientstoryeight);
      setClientNameEight(parsedHome.clientnameeight);
      setClientProfessionEight(parsedHome.clientprofessioneight);
      setHomeSh(parsedHome.homesh);
      setHomeShone(parsedHome.homeshone);
      setImageTxt(parsedHome.imagetxt);
      setImageTxtone(parsedHome.imagetxtone);
      setImageTxttwo(parsedHome.imagetxttwo);
      setHoverTxt(parsedHome.hovertxt);
      setHoverTxtone(parsedHome.hovertxtone);
      setHoverTxttwo(parsedHome.hovertxttwo);
      setHomesubheading(parsedHome.homesubheading);
      setImageUrlhometwo(parsedHome.imageUrlhometwo);
      setImageUrlhomethree(parsedHome.imageUrlhomethree);
      setImageUrlhomefour(parsedHome.imageUrlhomefour);
      setHomeH(parsedHome.homeh);
      setHomeHone(parsedHome.homehone);
      setIndex(parsedHome.index);
      setScrollText(parsedHome.scrolltext);
      setScrollTextone(parsedHome.scrolltextone);
      setScrollTexttwo(parsedHome.scrolltexttwo);
      setScrollTextthree(parsedHome.scrolltextthree);
      setScrollPara(parsedHome.scrollpara);
      setScrollParaone(parsedHome.scrollparaone);
      setScrollParatwo(parsedHome.scrollparatwo);
      setScrollParathree(parsedHome.scrollparathree);


    }
  }, []);
  
  
  const savedImage = localStorage.getItem("homeImage");
  if (savedImage) {
    setImageUrl(savedImage);
  }

  // const handleSaveResume = () => {
  //   if (pdfUrl) {
  //     localStorage.setItem("resumeSection", pdfUrl);
  //     alert("Resume saved successfully!");
  //   } else {
  //     alert("No resume uploaded to save!");
  //   }
  // };
  
  // // Load saved resume on refresh
  // useEffect(() => {
  //   const savedPdfUrl = localStorage.getItem("resumeSection");
  //   if (savedPdfUrl) {
  //     setPdfUrl(savedPdfUrl);
  //   }
  // }, []);
  // Save Services
const handleSaveService = () => {
 const serviceData = {
    servicetitle,
    serviceheading,
    servicepara,
    imageUrlservice,
    servicet,
    serviced,
    imageUrlserviceone,
    servicetone,
    servicedone,
    imageUrlservicetwo,
    servicettwo,
    servicedtwo,
    imageUrlservicethree,
    servicetthree,
    servicedthree,
    imageUrlservicefour,
    servicetfour,
    servicedfour,
    imageUrlservicefive,
    servicetfive,
    servicedfive,
    imageUrlservicesix,
    servicetsix,
    servicedsix,
    servicesub,
    benefith,
    benefithone,
    benefithtwo,
    benefitone,
    benefittwo,
    
  };

  localStorage.setItem("serviceSection", JSON.stringify(serviceData));
  alert("service section saved!");
};

// Load saved Expertise data on refresh
useEffect(() => {
  const savedServices = localStorage.getItem("ServiceSection");
  if (savedServices) {
    const parsedServices = JSON.parse(savedServices);
    setServiceTitle(parsedServices.servicetitle);
    setServiceHeading(parsedServices.serviceheading);
    setServicePara(parsedServices.servicepara);
    setImageUrlService(parsedServices.imageUrlservice);
    setServiceT(parsedServices.servicet);
    setServiceD(parsedServices.serviced);
    setImageUrlServiceone(parsedServices.imageUrlservice);
    setServiceTone(parsedServices.servicetone);
    setServiceDone(parsedServices.servicedone);
    setImageUrlServicetwo(parsedServices.imageUrlservicetwo);
    setServiceTtwo(parsedServices.servicettwo);
    setServiceDtwo(parsedServices.servicedtwo);
    setImageUrlServicetwo(parsedServices.imageUrlservicetwo);
    setServiceTtwo(parsedServices.servicettwo);
    setServiceDtwo(parsedServices.servicedtwo);
    setImageUrlServicethree(parsedServices.imageUrlservicethree);
    setServiceTthree(parsedServices.servicetthree);
    setServiceDthree(parsedServices.servicedthree);
    setImageUrlServicefour(parsedServices.imageUrlservicefour);
    setServiceTfour(parsedServices.servicetfour);
    setServiceDfour(parsedServices.servicedfour);
    setImageUrlServicefive(parsedServices.imageUrlservicefive);
    setServiceTfive(parsedServices.servicetfive);
    setServiceDfive(parsedServices.servicedfive);
    setImageUrlServicesix(parsedServices.imageUrlservicesix);
    setServiceTsix(parsedServices.servicetsix);
    setServiceDsix(parsedServices.servicedsix);
    setServiceSub(parsedServices.servicesub);
    setBenefitH(parsedServices.benefith);
    setBenefitHone(parsedServices.benefithone);
    setBenefitHtwo(parsedServices.benefithtwo);
    setBenefitone(parsedServices.benefitone);
    setBenefitHtwo(parsedServices.benefithtwo);

  }
}, []);

  
  // Save Research Section
  const handleSaveResearch = () => {
    const researchData = {
      workName,
      workTitle,
      imageUrl,
      workDescription,
      workNameone,
      workTitleone,
      imageUrlone,
      workDescriptionone,
      workNametwo,
      workTitletwo,
      imageUrltwo,
      imageUrlthree,
      workDescriptiontwo,
      workHeading,
      workservice,
      workserviceone,
      workservicetwo,
      
     
     
    //   recorded,
    // recordeddesc,
    // videotitle,
    // year,
    // yvideo,
    // videotitletwo,
    // yeartwo,
    // yvideotwo
      
    };
  
    localStorage.setItem("researchSection", JSON.stringify(researchData));
    alert("Research section saved!");
  };
  
  // Load saved research data on refresh
  useEffect(() => {
    const savedResearch = localStorage.getItem("researchSection");
    if (savedResearch) {
      const parsedResearch = JSON.parse(savedResearch);
      setWorkName(parsedResearch.workName);
      setWorkTitle(parsedResearch.workTitle);
      setImageUrl(parsedResearch.imageUrl);
      setWorkDescription(parsedResearch.workDescription);
      setWorkNameOne(parsedResearch.workNameone);
      setWorkTitleOne(parsedResearch.workTitleone);
      setImageUrlOne(parsedResearch.imageUrlone);
      setWorkDescriptionOne(parsedResearch.workDescriptionone);
      setWorkNameTwo(parsedResearch.workNametwo);
      setWorkTitleTwo(parsedResearch.workTitletwo);
      setImageUrlTwo(parsedResearch.imageUrltwo);
      setImageUrlThree(parsedResearch.imageUrlthree);
      setWorkDescriptionTwo(parsedResearch.workDescriptiontwo);
      setWorkHeading(parsedResearch.workHeading);
      setWorkService(parsedResearch.workservice);
      setWorkServiceOne(parsedResearch.workserviceone);
      setWorkServiceTwo(parsedResearch.workservicetwo);
     
    //   setRecorded(parsedResearch.recorded);
    // setRecordeddesc(parsedResearch.recordeddesc);
    // setVideotitle(parsedResearch.videotitle);
    // setYear(parsedResearch.year);
    // setYvideo(parsedResearch.yvideo);
    // setVideotitletwo(parsedResearch.videotitletwo);
    // setYeartwo(parsedResearch.yeartwo);
    // setYvideotwo(parsedResearch.yvideotwo);
    }
  }, []);
  //save contact

  const handleSaveContact = () => {
      const contactData = {
        contactheading,
        contacttext,
        contactname,
        phone,
        adr,
        contactnum,
        contactmail,
        contactaddress,
        contactstreet



     
      };
      localStorage.setItem("ContactSection", JSON.stringify(contactData));
      alert("Contact section saved!");
    
  };

  // Load saved Contact data on refresh
useEffect(() => {
  const savedContact = localStorage.getItem("ContactSection");
  if (savedContact) {
    const parsedContact = JSON.parse(savedContact);
    setContactHeading(parsedContact.contactheading);
    setContactText(parsedContact.contacttext);
    setContactName(parsedContact.contactname);
    setPhone(parsedContact.phone);
    setContactNum(parsedContact.contactnum);
    setContactMail(parsedContact.contactmail);
    setAdr(parsedContact.adr);
    setContactAddress(parsedContact.contactaddress);
    setContactstreet(parsedContact.contactstreet);





  }
}, []); 



  // Save About Section
const handleSaveAbout = () => {
  const aboutData = {
    abouttitle,
    aboutheading,
    aboutheadingone,
    imageUrlout,
    imageUrlouttwo,
    imageUrloutthree,
    imageUrloutfour,
    imageUrloutfive,
    imageUrloutsix,
    imageUrloutseven,
    imageUrlouteight,
    aboutheadingtwo,
    aboutdescription,
    aboutdescriptionone,
    aboutdescriptiontwo,
    aboutdescriptionthree,
    aboutdescriptionfour,
    aboutdescriptionfive,
    aboutdescriptionsix,
    teammemname,
    teammemrole,
    teammemonename,
    teammemonerole,
    teammemtwoname,
    teammemtworole,
    imageUrlteam,
    imageUrlteamone,
    imageUrlteamtwo,
    aboutexpert,
    abtheading,
    abttxt,
    abtheadingone,
    abttxtone,
    aboutservice,
    imageUrlabt,
    imageUrlabtone

    

    
  };

  localStorage.setItem("AboutSection", JSON.stringify(aboutData));
  alert("About section saved!");
};

// Load saved about data on refresh
useEffect(() => {
  const savedAbout = localStorage.getItem("AboutSection");
  if (savedAbout) {
    const parsedAbout = JSON.parse(savedAbout);
    setAboutTitle(parsedAbout.abouttitle);
    setAboutHeading(parsedAbout.aboutheading);
    setAboutHeadingOne(parsedAbout.aboutheadingone);
    setAboutHeadingTwo(parsedAbout.aboutheadingtwo);
    setAboutDescription(parsedAbout.aboutdescription);
    setAboutDescriptionOne(parsedAbout.aboutdescriptionone);
    setAboutDescriptionTwo(parsedAbout.aboutdescriptiontwo);
    setAboutDescriptionThree(parsedAbout.aboutdescriptionthree);
    setAboutDescriptionFour(parsedAbout.aboutdescriptionfour);
    setAboutDescriptionFive(parsedAbout.aboutdescriptionfive);
    setAboutDescriptionSix(parsedAbout.aboutdescriptionsix);
    setImageUrlout(parsedAbout.imageUrlout);
    setImageUrlouttwo(parsedAbout.imageUrlouttwo);
    setImageUrloutthree(parsedAbout.imageUrloutthree);
    setImageUrloutfour(parsedAbout.imageUrloutfour);
    setImageUrloutfive(parsedAbout.imageUrloutfive);
    setImageUrloutsix(parsedAbout.imageUrloutsix);
    setImageUrloutseven(parsedAbout.imageUrloutseven);
    setImageUrlouteight(parsedAbout.imageUrlouteight);
    setImageUrlteam(parsedAbout.imageUrlteam);
    setImageUrlteamone(parsedAbout.imageUrlteamone);
    setImageUrlteamtwo(parsedAbout.imageUrlteamtwo);
    setTeammemname(parsedAbout.teammemname);
    setTeammemrole(parsedAbout.teammemrole);
    setTeammemonename(parsedAbout.teammemname);
    setTeammemonerole(parsedAbout.teammemrole);
    setTeammemtwoname(parsedAbout.teammemname);
    setTeammemtworole(parsedAbout.teammemrole);
    setAboutexpert(parsedAbout.aboutexpert);
    setAboutservice(parsedAbout.aboutservice);
    setAbtheading(parsedAbout.abtheading);
    setAbttxt(parsedAbout.abttxt);
    setAbtheadingone(parsedAbout.abtheadingone);
    setAbttxtone(parsedAbout.abttxtone);
    setImageUrlabt(parsedAbout.imageUrlabt);
    setImageUrlabtone(parsedAbout.imageUrlabtone);



   
   
  }
}, []);

useEffect(() => {
  const savedPersonal = localStorage.getItem("personalSection");
  if (savedPersonal) {
    const parsedPersonal = JSON.parse(savedPersonal);
    setPersonalDetails(parsedPersonal.personalDetails);
    setPersonalDetailsTitle(parsedPersonal.personalDetailsTitle);
    setPersonalDetailsDesc(parsedPersonal.personalDetailsDesc);
    setImageUrlper(parsedPersonal.imageUrlper);
    setImageUrlpertwo(parsedPersonal.imageUrlpertwo);
    setPersonalDetailsTitletwo(parsedPersonal.personalDetailsTitletwo);
    setPersonalDetailsDesctwo(parsedPersonal.personalDetailsDesctwo);
    setImageUrlperthree(parsedPersonal.imageUrlperthree);
    setImageUrlperfour(parsedPersonal.imageUrlperfour);
  }
}, []);
// 🛠️ Save Personal Details to Local Storage
const handleSavePersonal = () => {
  const personalData = {
    personalDetails,
    personalDetailsTitle,
    personalDetailsDesc,
    imageUrlper,
    imageUrlpertwo,
    personalDetailsTitletwo,
    personalDetailsDesctwo,
    imageUrlperthree,
    imageUrlperfour,
  };

  localStorage.setItem("personalSection", JSON.stringify(personalData));
  alert("Personal details saved successfully! ✅");
};



  
  // Handle input field changes
  const handleNavChange = (e) => setNewNavItem(e.target.value);

  // Add new navigation menu item
  const addNavItem = () => {
    if (newNavItem.trim() && !navItems.includes(newNavItem)) {
      setNavItems([...navItems, newNavItem]);
      setContent({ ...content, [newNavItem]: "New section content." });
      setNewNavItem("");
    }
  };

  // Delete a navigation menu item
  const deleteNavItem = (item) => {
    const updatedNav = navItems.filter((nav) => nav !== item);
    setNavItems(updatedNav);
    setSelectedPage(updatedNav[0] || ""); // Fallback to first available tab
  };

  // Handle PDF file upload for Resume
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPdf(file);
      setPdfUrl(URL.createObjectURL(file));
    }
  };

  
  const handleResearchFileUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview
        setImageUrl(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrl("");
      }
    }
  };
  const handleResearchFileUploadtwo = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview
        setImageUrltwo(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrltwo("");
      }
    }
  };
  const handleResearchFileUploadthree = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview
        setImageUrlthree(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlthree("");
      }
    }
  };
  const handleResearchFileUploadfour = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlfour(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlfour("");
      }
    }
  };
  const handleResearchFileUploadout = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlout(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlout("");
      }
    }
  };

  const handleResearchFileUploadouttwo = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlouttwo(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlouttwo("");
      }
    }
  };
  const handleResearchFileUploadoutthree = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrloutthree(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrloutthree("");
      }
    }
  };
  const handleResearchFileUploadoutfour = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrloutfour(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrloutfour("");
      }
    }
  };
  const handleResearchFileUploadoutfive = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrloutfive(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrloutfive("");
      }
    }
  };
  const handleResearchFileUploadoutsix = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrloutsix(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrloutsix("");
      }
    }
  };
  const handleResearchFileUploadoutseven = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrloutseven(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrloutseven("");
      }
    }
  };
  const handleResearchFileUploadouteight = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlouteight(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrloutseven("");
      }
    }
  };
  const handleResearchFileUploadteam = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlteam(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlteam("");
      }
    }
  };
  const handleResearchFileUploadteamone = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlteamone(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlteamone("");
      }
    }
  };
  const handleResearchFileUploadteamtwo = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlteamtwo(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlteamtwo("");
      }
    }
  };
  const handleResearchFileUploadabt = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlteamabt(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlteamabt("");
      }
    }
  };

  const handleResearchFileUploadabtone = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlteamabtone(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlteamabtone("");
      }
    }
  };

  const handleResearchFileUploadper = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlper(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlper("");
      }
    }
  };

  const handleResearchFileUploadOne = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlpertwo(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlpertwo("");
      }
    }
  };
  const handleResearchFileUploadTwo = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlperthree(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlperthree("");
      }
    }
  };
   const handleResearchFileUploadThree = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
         setImageUrlperfour(URL.createObjectURL(file));
      } else {
         // Reset image preview if non-image is uploaded
      setImageUrlperfour("");
      }
    }
   };

 
  const handleResearchFileUploadhome = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlhome(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlperfour("");
      }
    }
  };

  const handleResearchFileUploadhomeone = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlhomeone(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlhomeone("");
      }
    }
  };
  const handleResearchFileUploadhometwo = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlhometwo(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlhometwo("");
      }
    }
  };
  const handleResearchFileUploadhomethree = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlhomethree(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlhomethree("");
      }
    }
  };
  const handleResearchFileUploadhomefour = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlhomefour(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlhomefour("");
      }
    }
  };

  const handleResearchFileUploadservice = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlService(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlService("");
      }
    }
  };


  const handleResearchFileUploadserviceone = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlServiceone(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlServiceone("");
      }
    }
  };


  
  const handleResearchFileUploadservicetwo = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlServicetwo(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlServicetwo("");
      }
    }
  };

  const handleResearchFileUploadservicethree = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlServicethree(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlServicethree("");
      }
    }
  };
  const handleResearchFileUploadservicefour = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlServicefour(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlServicefour("");
      }
    }
  };

  const handleResearchFileUploadservicefive = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlServicefive(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlServicefive("");
      }
    }
  };


  const handleResearchFileUploadservicesix = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.type.startsWith("image/")) {
        // If the uploaded file is an image, create a preview imageUrlout
        setImageUrlServicesix(URL.createObjectURL(file));
      } else {
        // Reset image preview if non-image is uploaded
        setImageUrlServicewsix("");
      }
    }
  };

  

  // const handleResearchFileUpload = (e) => {
  //   const filesArray = Array.from(e.target.files);
  //   if (filesArray.length > 0) {
  //     setResearchFiles(filesArray);
  //   }
  // };

  // Check if all required fields are filled
  // const isSaveEnabled =
  //   name.trim() !== "" &&
  //   github.trim() !== "" &&
  //   email.trim() !== "" &&
  //   pdf !== null;

  return (
    <div className="flex w-full min-h-screen flex flex-col overflow-hidden p-0 m-0">
      {/* Customization Sidebar */}
      {!isPublished && showCustomize && (
        <div className="w-64 bg-gray-100 p-4 relative">
          <button
            onClick={() => setShowCustomize(false)}
            className="absolute top-2 right-2 texthover:text-gray-900"
          >
            ✖
          </button>
          <h2 className="text-lg font-bold text-white" >Profile Details</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full rounded mt-2"
          />







          <input
            type="text"
            placeholder="Enter your fullname"
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
            className="border p-2 w-full rounded mt-2"
          />

           <input
            type="text"
            placeholder="Enter your address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="border p-2 w-full rounded mt-2"
          />

            <input
            type="text"
            placeholder="street name"
            value={addressone}
            onChange={(e) => setAddressOne(e.target.value)}
            className="border p-2 w-full rounded mt-2"
          />

            <input
            type="text"
            placeholder="Enter your lane"
            value={addresstwo}
            onChange={(e) => setAddressTwo(e.target.value)}
            className="border p-2 w-full rounded mt-2"
          />




                      
            <input
            type="text"
            placeholder="Enter your contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="border p-2 w-full rounded mt-2"
          />
            <input
             type="tel"
             placeholder="enter your mobile nunmber"
             value={contactone}
            onChange={(e) => setContactOne(e.target.value)}
            className="border p-2 w-full rounded mt-2"
          />

            <input
             type="email"
             placeholder="enter your Email"
             value={contacttwo}
            onChange={(e) => setContactTwo(e.target.value)}
            className="border p-2 w-full rounded mt-2"
          />

            <input
            type="text"
            placeholder="follow"
            value={followus}
            onChange={(e) => setFollowus(e.target.value)}
            className="border p-2 w-full rounded mt-2"
          />
            
            <input
            type="text"
            placeholder="privacy"
            value={privacy}
            onChange={(e) => setPrivacy(e.target.value)}
            className="border p-2 w-full rounded mt-2"
          />

                <input
            type="text"
            placeholder=" terms"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="border p-2 w-full rounded mt-2"
          />
          <input
            type="text"
            placeholder="cookie"
            value={cookie}
            onChange={(e) => setCookie(e.target.value)}
            className="border p-2 w-full rounded mt-2"
          />

            <input
            type="text"
            placeholder="all rights"
            value={rights}
            onChange={(e) => setRights(e.target.value)}
            className="border p-2 w-full rounded mt-2"
          />

          
{/* 
          GitHub Link
          <input
            type="text"
            placeholder="Enter your GitHub link"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            className="w-full border p-2 mt-2 rounded"
          /> */}

          

<button 
    onClick={handleSaveProfileDetails} 
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
  >
    Save Profile Details
  </button>

          <h2 className="text-lg font-bold mt-4">Customize Menu</h2>

          <div className="flex items-center mt-2 text-white">
            <input
              type="text"
              placeholder="Add New Menu Item"
              value={newNavItem}
              onChange={handleNavChange}
              className="border p-2 w-full rounded"
            />
          </div>

          <button
            onClick={addNavItem}
            className="bg-blue-500 text-white px-4 py-2 mt-2 w-full rounded"
          >
            Add
          </button>

          <ul className="mt-4">
            {navItems.map((item) => (
              <li key={item} className="flex justify-between items-center mt-2 border-b pb-2">
                <span
                  className={`cursor-pointer ${selectedPage === item ? "font-bold text-blue-500" : ""}`}
                  onClick={() => setSelectedPage(item)}
                >
                  {item}
                </span>
                <button onClick={() => deleteNavItem(item)} className="text-red-500 ml-2">X</button>
              </li>
            ))}
          </ul>






          {selectedPage === "Home" && (
            <>

            <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadhome}
          className="w-full border p-2 mt-2 rounded"
        />
    <input
      type="text"
      placeholder="Name"
      value={homename}
      onChange={(e) => setHomename(e.target.value)}
      className="w-full border p-2 rounded"
    />
    <input
      type="text"
      placeholder="Title"
      value={hometitle}
      onChange={(e) => setHometitle(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />


<input
      type="text"
      placeholder="Heading"
      value={homeheading}
      onChange={(e) => setHomeHeading(e.target.value)}
      className="w-full border p-2 rounded"
    />
    <textarea
      type="text"
      placeholder="Paragraph"
      value={hometext}
      onChange={(e) => setHometext(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>
    <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadhomeone}
          className="w-full border p-2 mt-2 rounded"
        /><div className="flex gap-4 mt-2"></div>
 <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadhometwo}
          className="w-full border p-2 mt-2 rounded"
        /><div className="flex gap-4 mt-2"></div>
<input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadhomethree}
          className="w-full border p-2 mt-2 rounded"
        /><div className="flex gap-4 mt-2"></div>

<input
      type="text"
      placeholder="Title"
      value={homesh}
      onChange={(e) => setHomeSh(e.target.value)}
      className="w-full border p-2 rounded"
    />

    
<input
      type="text"
      placeholder="Title"
      value={homeshone}
      onChange={(e) => setHomeShone(e.target.value)}
      className="w-full border p-2 rounded"
    />
    
<input
      type="text"
      placeholder="Heading"
      value={homeh}
      onChange={(e) => setHomeH(e.target.value)}
      className="w-full border p-2 rounded"
    />
    <textarea
      type="text"
      placeholder="Paragraph"
      value={homehone}
      onChange={(e) => setHomeHone(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>

<input
      type="text"
      placeholder="index"
      value={index}
      onChange={(e) => setIndex(e.target.value)}
      className="w-full border p-2 rounded"
    />
    <input
      type="text"
      placeholder="scroll text"
      value={scrolltext}
      onChange={(e) => seScrollText(e.target.value)}
      className="w-full border p-2 rounded"
    />

    <textarea
      type="text"
      placeholder="Paragraph"
      value={scrollpara}
      onChange={(e) => setScrollPara(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>


    <input
      type="text"
      placeholder="scroll text one"
      value={scrolltextone}
      onChange={(e) => setScrollTextone(e.target.value)}
      className="w-full border p-2 rounded"
    />

    <textarea
      type="text"
      placeholder="Paragraph"
      value={scrollparaone}
      onChange={(e) => setScrollParaone(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>

    <input
      type="text"
      placeholder="scroll text two"
      value={scrolltexttwo}
      onChange={(e) => setScrollTexttwo(e.target.value)}
      className="w-full border p-2 rounded"
    />

    <textarea
      type="text"
      placeholder="Paragraph"
      value={scrollparatwo}
      onChange={(e) => setScrollParatwo(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>

    <input
      type="text"
      placeholder="scroll text three"
      value={scrolltextthree}
      onChange={(e) => setScrollTextthree(e.target.value)}
      className="w-full border p-2 rounded"
    />

    <textarea
      type="text"
      placeholder="Paragraph"
      value={scrollparathree}
      onChange={(e) => setScrollParathree(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>




    <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadhomefour}
          className="w-full border p-2 mt-2 rounded"
        />
    <input
      type="text"
      placeholder="heading"
      value={homesubheading}
      onChange={(e) => setHomesubheading(e.target.value)}
      className="w-full border p-2 rounded"
    />





 <textarea
      type="text"
      placeholder="image text"
      value={imagetxt}
      onChange={(e) => setImageTxt(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>

<textarea
      type="text"
      placeholder="image textone"
      value={imagetxtone}
      onChange={(e) => setImageTxtone(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>

<textarea
      type="text"
      placeholder="image texttwo"
      value={imagetxttwo}
      onChange={(e) => setImageTxttwo(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>


    
<textarea
      type="text"
      placeholder="hover text"
      value={hovertxt}
      onChange={(e) => setHoverTxt(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>

    
<textarea
      type="text"
      placeholder="hover textone"
      value={hovertxtone}
      onChange={(e) => setHoverTxtone(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>

    
<textarea
      type="text"
      placeholder="hover texttwo"
      value={hovertxttwo}
      onChange={(e) => setImageTxttwo(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>
  

              
                 
      <input
      type="text"
      placeholder="title"
      value={homesuccess}
      onChange={(e) => setHomeSuccess(e.target.value)}
      className="w-full border p-2 rounded"
    />
    <input
      type="text"
      placeholder="Heading"
      value={homesuccessone}
      onChange={(e) => setHomeSuccessOne(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />
    <textarea
      type="text"
      placeholder="client story"
      value={clientstory}
      onChange={(e) => setClientStory(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>
                
                <input
      type="text"
      placeholder="CLIENT NAME"
      value={clientname}
      onChange={(e) => setClientName(e.target.value)}
      className="w-full border p-2 rounded"
    />
    <input
      type="text"
      placeholder="client profession"
      value={clientprofession}
      onChange={(e) => setClientProfession(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />


<textarea
      type="text"
      placeholder="client story 1"
      value={clientstoryone}
      onChange={(e) => setClientStoryOne(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>
                
                <input
      type="text"
      placeholder="CLIENT NAME 1"
      value={clientnameone}
      onChange={(e) => setClientNameOne(e.target.value)}
      className="w-full border p-2 rounded"
    />
    <input
      type="text"
      placeholder="client profession 1"
      value={clientprofessionone}
      onChange={(e) => setClientProfessionOne(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />


<textarea
      type="text"
      placeholder="client story 2"
      value={clientstorytwo}
      onChange={(e) => setClientStoryTwo(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>
                
                <input
      type="text"
      placeholder="CLIENT NAME 2"
      value={clientnametwo}
      onChange={(e) => setClientNameTwo(e.target.value)}
      className="w-full border p-2 rounded"
    />
    <input
      type="text"
      placeholder="client profession 2"
      value={clientprofessiontwo}
      onChange={(e) => setClientProfessionTwo(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />


<textarea
      type="text"
      placeholder="client story 3"
      value={clientstorythree}
      onChange={(e) => setClientStoryThree(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>
                
                <input
      type="text"
      placeholder="CLIENT NAME 3"
      value={clientnamethree}
      onChange={(e) => setClientNameThree(e.target.value)}
      className="w-full border p-2 rounded"
    />
    <input
      type="text"
      placeholder="client profession 3"
      value={clientprofessionthree}
      onChange={(e) => setClientProfessionThree(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />


<textarea
      type="text"
      placeholder="client story 4"
      value={clientstoryfour}
      onChange={(e) => setClientStoryFour(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>
                
                <input
      type="text"
      placeholder="CLIENT NAME 4"
      value={clientnamefour}
      onChange={(e) => setClientNameFour(e.target.value)}
      className="w-full border p-2 rounded"
    />
    <input
      type="text"
      placeholder="client profession 4"
      value={clientprofessionfour}
      onChange={(e) => setClientProfessionFour(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />




<textarea
      type="text"
      placeholder="client story 5"
      value={clientstoryfive}
      onChange={(e) => setClientStoryFive(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>
                
                <input
      type="text"
      placeholder="CLIENT NAME 5"
      value={clientnamefive}
      onChange={(e) => setClientNameFive(e.target.value)}
      className="w-full border p-2 rounded"
    />
    <input
      type="text"
      placeholder="client profession 5"
      value={clientprofessionfive}
      onChange={(e) => setClientProfessionFive(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />






<textarea
      type="text"
      placeholder="client story 6 "
      value={clientstorysix}
      onChange={(e) => setClientStorySix(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>
                
                <input
      type="text"
      placeholder="CLIENT NAME 6"
      value={clientnamesix}
      onChange={(e) => setClientNameSix(e.target.value)}
      className="w-full border p-2 rounded"
    />
    <input
      type="text"
      placeholder="client profession 6"
      value={clientprofessionsix}
      onChange={(e) => setClientProfessionSix(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />




<textarea
      type="text"
      placeholder="client story 7"
      value={clientstoryseven}
      onChange={(e) => setClientStorySeven(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>

      <input
      type="text"
      placeholder="CLIENT NAME 7"
      value={clientnameseven}
      onChange={(e) => setClientNameSeven(e.target.value)}
      className="w-full border p-2 rounded"
    />
    <input
      type="text"
      placeholder="client profession 7"
      value={clientprofessionseven}
      onChange={(e) => setClientProfessionSeven(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />




<textarea
      type="text"
      placeholder="client story 8"
      value={clientstoryeight}
      onChange={(e) => setClientStoryEight(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>
                
                <input
      type="text"
      placeholder="CLIENT NAME 8"
      value={clientnameeight}
      onChange={(e) => setClientNameEight(e.target.value)}
      className="w-full border p-2 rounded"
    />
    <input
      type="text"
      placeholder="client profession 8"
      value={clientprofessioneight}
      onChange={(e) => setClientProfessionEight(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />
                            <button 
  onClick={handleSaveHome}
  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
>
  Save Home
</button>

            </>
          )}


{selectedPage === "Services" && (
            <>

<input
      type="text"
      placeholder="Title"
      value={servicetitle}
      onChange={(e) => setServiceTitle(e.target.value)}
      className="w-full border p-2 rounded"
    />
    
<input
      type="text"
      placeholder="Heading"
      value={serviceheading}
      onChange={(e) => setServiceHeading(e.target.value)}
      className="w-full border p-2 rounded"
    />
        
<input
      type="text"
      placeholder="main heading"
      value={servicepara}
      onChange={(e) => setServicePara(e.target.value)}
      className="w-full border p-2 rounded"
    />
            
    <input
      type="text"
      placeholder="sub heading"
      value={servicesub}
      onChange={(e) => setServiceSub(e.target.value)}
      className="w-full border p-2 rounded"
    />
    <input
      type="text"
      placeholder="text"
      value={servicet}
      onChange={(e) => setServiceT(e.target.value)}
      className="w-full border p-2 rounded"
    />

    <textarea
      type="text"
      placeholder="description"
      value={serviced}
      onChange={(e) => setServiceD(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>
    <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadservice}
          className="w-full border p-2 mt-2 rounded"
        /><div className="flex gap-4 mt-2"></div>


<input
      type="text"
      placeholder="text1"
      value={servicetone}
      onChange={(e) => setServiceTone(e.target.value)}
      className="w-full border p-2 rounded"
    />

    <textarea
      type="text"
      placeholder="description"
      value={servicedone}
      onChange={(e) => setServiceDone(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>
    <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadserviceone}
          className="w-full border p-2 mt-2 rounded"
        /><div className="flex gap-4 mt-2"></div>
 



 <input
      type="text"
      placeholder="text2"
      value={servicettwo}
      onChange={(e) => setServiceTtwo(e.target.value)}
      className="w-full border p-2 rounded"
    />

    <textarea
      type="text"
      placeholder="description"
      value={servicedtwo}
      onChange={(e) => setServiceDtwo(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>
    <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadservicetwo}
          className="w-full border p-2 mt-2 rounded"
        /><div className="flex gap-4 mt-2"></div>
 

 <input
      type="text"
      placeholder="text3"
      value={servicetthree}
      onChange={(e) => setServiceTthree(e.target.value)}
      className="w-full border p-2 rounded"
    />

    <textarea
      type="text"
      placeholder="description"
      value={servicedthree}
      onChange={(e) => setServiceDthree(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>
    <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadservicethree}
          className="w-full border p-2 mt-2 rounded"
        /><div className="flex gap-4 mt-2"></div>
 

 <input
      type="text"
      placeholder="text4"
      value={servicetfour}
      onChange={(e) => setServiceTfour(e.target.value)}
      className="w-full border p-2 rounded"
    />

    <textarea
      type="text"
      placeholder="description"
      value={servicedfour}
      onChange={(e) => setServiceDfour(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>
    <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadservicefour}
          className="w-full border p-2 mt-2 rounded"
        /><div className="flex gap-4 mt-2"></div>
 


 <input
      type="text"
      placeholder="text5"
      value={servicetfive}
      onChange={(e) => setServiceTfive(e.target.value)}
      className="w-full border p-2 rounded"
    />

    <textarea
      type="text"
      placeholder="description"
      value={servicedfive}
      onChange={(e) => setServiceDfive(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>
    <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadservicefive}
          className="w-full border p-2 mt-2 rounded"
        /><div className="flex gap-4 mt-2"></div>

        
 <input
      type="text"
      placeholder="text6"
      value={servicetsix}
      onChange={(e) => setServiceTsix(e.target.value)}
      className="w-full border p-2 rounded"
    />

    <textarea
      type="text"
      placeholder="description"
      value={servicedsix}
      onChange={(e) => setServiceDsix(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>
    <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadservicesix}
          className="w-full border p-2 mt-2 rounded"
        /><div className="flex gap-4 mt-2"></div>

        
    <textarea
      type="text"
      placeholder="heading"
      value={benefith}
      onChange={(e) => setBenefitH(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>

         
<textarea
      type="text"
      placeholder="heading"
      value={benefithone}
      onChange={(e) => setBenefitHone(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>

         
    <textarea
      type="text"
      placeholder="benefit"
      value={benefitone}
      onChange={(e) => setBenefitone(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>


        
<textarea
      type="text"
      placeholder="heading"
      value={benefithtwo}
      onChange={(e) => setBenefitHtwo(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>

         
    <textarea
      type="text"
      placeholder="benefit 2"
      value={benefittwo}
      onChange={(e) => setBenefittwo(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    ></textarea>
        
<button 
  onClick={handleSaveService} 
  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
>
  Save Service
</button>

</>
          )}

 





          {selectedPage === "Contact" && (
            <>
             <input
                    type="text"
                    placeholder="Heading"
                    value={contactheading}
                    onChange={(e) => setContactHeading(e.target.value)}
                    className="w-full border p-2 rounded"
                  />
              <input
                    type="text"
                    placeholder="text"
                    value={contacttext}
                    onChange={(e) => setContactText(e.target.value)}
                    className="w-full border p-2 rounded"
                  />
                    <input
                    type="text"
                    placeholder="name"
                    value={contactname}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full border p-2 rounded"
                  />
                   <input
                    type="text"
                    placeholder="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border p-2 rounded"
                  />
                   <input
                    type="text"
                    placeholder="phone number"
                    value={contactnum}
                    onChange={(e) => setContactNum(e.target.value)}
                    className="w-full border p-2 rounded"
                  />
                    <input
                    type="email"
                    placeholder="email"
                    value={contactmail}
                    onChange={(e) => setContactMail(e.target.value)}
                    className="w-full border p-2 rounded"
                  />
                    <input
                    type="text"
                    placeholder="address"
                    value={adr}
                    onChange={(e) => setAdr(e.target.value)}
                    className="w-full border p-2 rounded"
                  />
                   <input
                    type="text"
                    placeholder="full address"
                    value={contactaddress}
                    onChange={(e) => setContactAddress(e.target.value)}
                    className="w-full border p-2 rounded"
                  />
                    <input
                    type="text"
                    placeholder="street"
                    value={contactstreet}
                    onChange={(e) => setContactstreet(e.target.value)}
                    className="w-full border p-2 rounded"
                  />

<button 
  onClick={handleSaveContact} 
  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
>
  Save Contact
</button>

</>
          )}




          {/* Dynamic input fields based on selected page */}
          {selectedPage === "Work" && (
            <>
                  <input
                    type="text"
                    placeholder="Name"
                    value={homename}
                    onChange={(e) => setHomenameone(e.target.value)}
                    className="w-full border p-2 rounded"
                  />
                    <input
                type="text"
                placeholder="Title"
                value={hometitle}
                onChange={(e) => setHometitleone(e.target.value)}
                className="w-full border p-2 rounded bg-white"
              />
                        <input
                type="text"
                placeholder="Home Description"
                value={homedesc}
                onChange={(e) => setHomedescone(e.target.value)}
                className="w-full border p-2 mt-2 rounded"
              />


        <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadhomeone}
          className="w-full border p-2 mt-2 rounded"
        /><div className="flex gap-4 mt-2"></div>
        
            <h1 className="font-bold text-2xl">work Section 2</h1>
              <input
                type="text"
                placeholder="Work Name"
                value={workName}
                onChange={(e) => setWorkName(e.target.value)}
                className="w-full border p-2 mt-2 rounded"
              />
              <textarea
                placeholder="work Title"
                value={workTitle}
                onChange={(e) => setWorkTitle(e.target.value)}
                className="w-full h-32 border p-2 mt-2 rounded"
              ></textarea>
         <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadper}
          className="w-full border p-2 mt-2 rounded"
        />
        <label className="text-lg font-semibold mt-4 block">work Description</label>
      <textarea
        type="text"
      placeholder="work Description"
      value={workDescription}
      onChange={(e) => setWorkDescription(e.target.value)}
      className="w-full border border-gray-300 p-3 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
              {/* File upload for Research section */}
              {/* <input
                type="file"
                accept=".pdf,.doc,.docx,.ppt,.pptx,image/*" // Accept various file types for research documents and images
                multiple // Allow multiple file uploads
                onChange={handleResearchFileUpload}
                className="w-full border p-2 mt-2 rounded"
              /> */}
                     <h1 className="font-bold text-2xl">work Section 3</h1>
              <input
                type="text"
                placeholder="Work Name"
                value={workNameone}
                onChange={(e) => setWorkNameOne(e.target.value)}
                className="w-full border p-2 mt-2 rounded"
              />
              <textarea
                placeholder="work Title"
                value={workTitleone}
                onChange={(e) => setWorkTitleOne(e.target.value)}
                className="w-full h-32 border p-2 mt-2 rounded"
              ></textarea>
         <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadOne}
          className="w-full border p-2 mt-2 rounded"
        />
        <label className="text-lg font-semibold mt-4 block">work Description</label>
      <textarea
        type="text"
      placeholder="work Description"
      value={workDescriptionone}
      onChange={(e) => setWorkDescriptionOne(e.target.value)}
      className="w-full border border-gray-300 p-3 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>


<h1 className="font-bold text-2xl">work Section 4</h1>
              <input
                type="text"
                placeholder="Work Name"
                value={workNametwo}
                onChange={(e) => setWorkNameTwo(e.target.value)}
                className="w-full border p-2 mt-2 rounded"
              />
              <textarea
                placeholder="work Title"
                value={workTitletwo}
                onChange={(e) => setWorkTitleTwo(e.target.value)}
                className="w-full h-32 border p-2 mt-2 rounded"
              ></textarea>
         <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadTwo}
          className="w-full border p-2 mt-2 rounded"
        />
        <label className="text-lg font-semibold mt-4 block">Image Description</label>

        <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadThree}
          className="w-full border p-2 mt-2 rounded"
        />
        <label className="text-lg font-semibold mt-4 block">Image Description</label>
      <textarea
        type="text"
      placeholder="work Description"
      value={workDescriptiontwo}
      onChange={(e) => setWorkDescriptionTwo(e.target.value)}
      className="w-full border border-gray-300 p-3 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>



            <input
                    type="text"
                    placeholder="Heading"
                    value={workHeading}
                    onChange={(e) => setWorkHeading(e.target.value)}
                    className="w-full border p-2 rounded"
                  />


                      <input
                    type="text"
                    placeholder="Heading"
                    value={workservice}
                    onChange={(e) => setWorkService(e.target.value)}
                    className="w-full border p-2 rounded"
                  />



                      <input
                    type="text"
                    placeholder="Heading"
                    value={workserviceone}
                    onChange={(e) => setWorkServiceOne(e.target.value)}
                    className="w-full border p-2 rounded"
                  />

                  <input
                    type="text"
                    placeholder="Heading"
                    value={workservicetwo}
                    onChange={(e) => setWorkServiceTwo(e.target.value)}
                    className="w-full border p-2 rounded"
                  />



<button 
  onClick={handleSaveResearch} 
  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
>
  Save Research
</button>


              
{/* <label className="text-lg font-semibold mt-4 block">Recorded talks</label>

 <input
  type="text"
  placeholder="Recorded Talks Title"
  value={recorded}
  onChange={(e) => setRecorded(e.target.value)}
  className="w-full border p-2 mt-2 rounded"
/>

<textarea
  type="text"
  placeholder="Recorded Description"
  value={recordeddesc}
  onChange={(e) => setRecordeddesc(e.target.value)}
  className="w-full border p-2 mt-2 rounded"
></textarea>



<input
  type="text"
  placeholder="Video Title 1"
  value={videotitle}
  onChange={(e) => setVideotitle(e.target.value)}
  className="w-full border p-2 mt-2 rounded"
/>


<input
  type="text"
  placeholder="Year 1"
  value={year}
  onChange={(e) => setYear(e.target.value)}
  className="w-full border p-2 mt-2 rounded"
/>

<input
          type="text"
          placeholder="Enter video URL 1"
          className="border p-2 mt-2 w-full"
          value={yvideo}
          onChange={(e) => setYvideo(e.target.value)}
        />



<input
  type="text"
  placeholder="Video Title 2"
  value={videotitletwo}
  onChange={(e) => setVideotitletwo(e.target.value)}
  className="w-full border p-2 mt-2 rounded"
/>


<input
  type="text"
  placeholder="Year 2"
  value={yeartwo}
  onChange={(e) => setYeartwo(e.target.value)}
  className="w-full border p-2 mt-2 rounded"
/>

<input
          type="text"
          placeholder="Enter video URL 2"
          className="border p-2 mt-2 w-full"
          value={yvideotwo}
          onChange={(e) => setYvideotwo(e.target.value)}
        />
        



        <button 
  onClick={handleSaveResearch} 
  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
>
  Save Research
</button> */}




            </>
          )}

          {selectedPage === "About" && (
            <>
            <input
            type="text"
              placeholder="Title"
              value={abouttitle}
              onChange={(e) => setAboutTitle(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
            />

<input
  type="text"
  placeholder="Heading"
  value={aboutheading}
  onChange={(e) => setAboutHeading(e.target.value)}
  className="w-full border p-2 mt-2 rounded"
/>

<input
      type="text"
      placeholder="Headingone"
      value={aboutheadingone}
      onChange={(e) => setAboutHeadingOne(e.target.value)}
      className="w-full border p-2 rounded"
    />
    

            <textarea
                placeholder="description"
                value={aboutdescription}
                onChange={(e) => setAboutDescription(e.target.value)}
                className="w-full h-32 border p-2 mt-2 rounded"
              ></textarea>
 
      <input
      type="text"
      placeholder="About Team"
      value={aboutteam}
      onChange={(e) => setAboutteam(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />

    <input
      type="text"
      placeholder="mem name"
      value={teammemname}
      onChange={(e) => setTeammemname(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />
     <input
      type="text"
      placeholder="mem role"
      value={teammemrole}
      onChange={(e) => setTeammemrole(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />
    <input
      type="text"
      placeholder="memone name"
      value={teammemonename}
      onChange={(e) => setTeammemonename(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />
     <input
      type="text"
      placeholder="memone role"
      value={teammemonerole}
      onChange={(e) => setTeammemonerole(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />
    
    <input
      type="text"
      placeholder="memtwo name"
      value={teammemtwoname}
      onChange={(e) => setTeammemtwoname(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />
     <input
      type="text"
      placeholder="memone role"
      value={teammemtworole}
      onChange={(e) => setTeammemtworole(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />
     <input
      type="text"
      placeholder="expert"
      value={aboutexpert}
      onChange={(e) => setAboutexpert(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />
      <input
      type="text"
      placeholder="expert heading"
      value={abtheading}
      onChange={(e) => setAbtheading(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />
     <input
      type="text"
      placeholder="expert txt"
      value={abttxt}
      onChange={(e) => setAbttxt(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />
    <input
      type="text"
      placeholder="service"
      value={aboutservice}
      onChange={(e) => setAboutservice(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />
      <input
      type="text"
      placeholder="service heading"
      value={abtheadingone}
      onChange={(e) => setAbtheadingone(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />
     <input
      type="text"
      placeholder="service txt"
      value={abttxtone}
      onChange={(e) => setAbttxtone(e.target.value)}
      className="w-full border p-2 rounded bg-white"
    />
    

    




       <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadout}
          className="w-full border p-2 mt-2 rounded"
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadouttwo}
          className="w-full border p-2 mt-2 rounded"
        />
        

         <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadoutthree}
          className="w-full border p-2 mt-2 rounded"
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadoutfour}
          className="w-full border p-2 mt-2 rounded"
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadoutfive}
          className="w-full border p-2 mt-2 rounded"
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadoutsix}
          className="w-full border p-2 mt-2 rounded"
        />
         <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadoutseven}
          className="w-full border p-2 mt-2 rounded"
        />
          <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadouteight}
          className="w-full border p-2 mt-2 rounded"
        />
         <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadteam}
          className="w-full border p-2 mt-2 rounded"
        />
         <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadteamone}
          className="w-full border p-2 mt-2 rounded"
        />
          <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadteamtwo}
          className="w-full border p-2 mt-2 rounded"
        />
          <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadabt}
          className="w-full border p-2 mt-2 rounded"
        />
         <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadabtone}
          className="w-full border p-2 mt-2 rounded"
        />


<button 
  onClick={handleSaveAbout} 
  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300"
>
  Save About
</button>



</>
            
          )}






          {selectedPage === "Personal" && (

            <>
            <input
              placeholder="Personal Details"
              value={personalDetails}
              onChange={(e) => setPersonalDetails(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
           />

            <input
              placeholder="Personal Details Title"
              value={personalDetailsTitle}
              onChange={(e) => setPersonalDetailsTitle(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
           />


<textarea
              placeholder="Personal Details Description"
              value={personalDetailsDesc}
              onChange={(e) => setPersonalDetailsDesc(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
           ></textarea>
  <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadper }
          className="w-full border p-2 mt-2 rounded"
        />




          <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadpertwo }
          className="w-full border p-2 mt-2 rounded"
        />





            <input
              placeholder="Personal Details Title 2"
              value={personalDetailsTitletwo}
              onChange={(e) => setPersonalDetailsTitletwo(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
           />


<textarea
              placeholder="Personal Details Description 2"
              value={personalDetailsDesctwo}
              onChange={(e) => setPersonalDetailsDesctwo(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
           ></textarea>
  <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadperthree }
          className="w-full border p-2 mt-2 rounded"
        />


<input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadperfour }
          className="w-full border p-2 mt-2 rounded"
        />
 <button
          onClick={handleSavePersonal}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Save Personal Details
        </button>
        {!isPublished && (
          <button
            onClick={() => navigate("/published")}
            className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Submit & Publish
          </button>
        )}

</>
          )}

          {/* Resume PDF Upload */}
          {selectedPage === "Resume" && (
            <>
              <h3 className="text-lg font-bold mt-6">Upload Resume</h3>
              <input
                type="file"
                accept="application/pdf"
                onChange={handleFileUpload}
                className="w-full border p-2 mt-2 rounded"
              />
              {pdf && (
                <p className="mt-2 text-sm text-gray-600">Selected file: {pdf.name}</p>
                
              )}
              <button
  onClick={handleSaveResume}
  className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
>
  Save Resume
</button>

            </>
          )}

          {/* Save Button */}
          {/* <button
            className={`w-full mt-4 py-2 rounded text-white ${isSaveEnabled ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"}`}
            disabled={!isSaveEnabled}
          >
            Save
          </button> */}
        </div>
      ) }
      {!isPublished && !showCustomize && (
        <button
          onClick={() => setShowCustomize(true)}
          className="p-2 bg-gray-200 text-gray-700 fixed left-2 top-2 rounded z-50"
        >
          ✏️
        </button>
      )}
    

      {/* Template Preview */}
      <div className="flex-1 p-8 bg-white">
        <div className="absolute top-4 left-14 text-xl font-bold text-black">{name}</div>
        <nav className="flex justify-end space-x-4 border-b pb-2 text-black">
  {navItems.map((item, index) => (
    <span
      key={item}
      className={`cursor-pointer ${selectedPage === item ? " text-blue-500" : ""}
        ${index !== navItems.length - 1 ? "border-r border-black-500 pr-4" : ""} `}
      onClick={() => setSelectedPage(item)}
    >
      {item}
    </span>
  ))}
</nav>


        <div className="mt-[80px] text-center">
          {/* <h1 className="text-5xl font-bold">{selectedPage}</h1> */}

          
           {/* Display content based on selected page */}
           {selectedPage === "Resume" && pdfUrl ? (
             <>  
             <h1 className="text-4xl font-bold mb-6 block !visible">
      Resume
    </h1>
    <p className="text-lg text-gray-700">
      Full CV and publication list can be found{" "}
      <a href={pdfUrl || "#"} download className="text-blue-500 underline font-medium">
        here
      </a>.
    </p>
             </>

             
 ) 


 
 : selectedPage === "Work" ? (
             <>
             <h1 className="text-4xl font-bold text-left mt-38 pl-50">
  Work
</h1>
<div className="mt-12"></div>

<div className="w-full py-10 px-6 mt-30">
<div className="flex justify-between items-start">
{/* <div className="max-w-3xl">
      <h1 className="text-2xl font-medium text-white text-left">{homenameone }</h1>
      <h2 className="text-4xl font-bold text-white mt-2 text-left leading-tight">
      {hometitleone || "Your Title"}
      </h2>
      <p className="text-base text-white mt-4 text-left leading-relaxed max-w-3xl">
        {homedescone || "Your description goes here. Add details about yourself or your role."}
      </p>
      </div> */}
      {/* Right Column */}
    <div className="w-1/7 flex flex-col text-left space-y-3">
      <h1 className="text-xl font-medium text-white">{workservice}</h1>
      <h1 className="text-xl font-small text-white">{workserviceone}</h1>
      <h1 className="text-xl font-small text-white">{workservicetwo}</h1>
    </div>
   </div>
    </div>
  <div className="w-3/4 h-auto mx-auto overflow-hidden shadow-xl mt-10 rounded-3xl">
      <img
        src={imageUrlhomeone} 
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div> 

    <div className="w-full py-10 px-6 mt-30">
    <div className="flex justify-between items-start">
    <div className="max-w-3xl">
      <h1 className="text-2xl font-medium text-white text-left">{workName}</h1>
      <h2 className="text-5xl font-extrabold text-white mt-2 text-left leading-tight">
      {workTitle || "Your Title"}
      </h2>
      <p className="text-base text-white mt-4 text-left leading-relaxed max-w-3xl">
        {workDescription || "Your description goes here. Add details about yourself or your role."}
      </p>
    </div>
     {/* Right Column */}
     <div className="w-1/7 flex flex-col text-left space-y-3">
      <h1 className="text-xl font-medium text-white">{workservice}</h1>
      <h1 className="text-xl font-small text-white">{workserviceone}</h1>
      <h1 className="text-xl font-small text-white">{workservicetwo}</h1>
    </div>
    </div>
  <div className="w-3/4 h-auto mx-auto overflow-hidden shadow-xl mt-10 rounded-3xl">
      <img
        src={imageUrl} 
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
    </div>
   


    <div className="w-full py-10 px-6 mt-30">
    <div className="flex justify-between items-start">
    <div className="max-w-3xl">
      <h1 className="text-2xl font-medium text-white text-left">{workNameone }</h1>
      <h2 className="text-5xl font-extrabold text-white mt-2 text-left leading-tight">
      {workTitleone || "Your Title"}
      </h2>
      <p className="text-base text-white mt-4 text-left leading-relaxed max-w-3xl">
        {workDescriptionone || "Your description goes here. Add details about yourself or your role."}
      </p>
    </div>
   
    {/* Right Column */}
    <div className="w-1/7 flex flex-col text-left space-y-3">
      <h1 className="text-xl font-bold text-white">{designService}</h1>
      <h1 className="text-xl font-small text-white">{designServicehone}</h1>
      <h1 className="text-xl font-small text-white">{designServicehtwo}</h1>
      <h1 className="text-xl font-small text-white">{designServicehthree}</h1>
      <h1 className="text-xl font-small text-white">{designServicehfour}</h1>
      <h1 className="text-xl font-small text-white">{designServicehfive}</h1>
    </div>
    </div>
  <div className="w-3/4 h-auto mx-auto overflow-hidden shadow-xl mt-10 rounded-3xl">
      <img
        src={imageUrlone} 
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div> 
    </div>
    


    <div className="w-full py-10 px-6 mt-30">
    <div className="flex justify-between items-start">
    <div className="max-w-3xl">
      <h1 className="text-2xl font-medium text-white text-left">{workNametwo }</h1>
      <h2 className="text-5xl font-extrabold text-white mt-2 text-left leading-tight">
      {workTitletwo || "Your Title"}
      </h2>
      <p className="text-base text-white mt-4 text-left leading-relaxed max-w-3xl">
        {workDescriptiontwo || "Your description goes here. Add details about yourself or your role."}
      </p>
    </div>
     {/* Right Column */}
     <div className="w-1/7 flex flex-col text-left space-y-3">
      <h1 className="text-xl font-medium text-white">{workservice}</h1>
      <h1 className="text-xl font-small text-white">{workserviceone}</h1>
      <h1 className="text-xl font-small text-white">{workservicetwo}</h1>
    </div>
    </div>


  <div className="w-3/4 h-auto mx-auto overflow-hidden shadow-xl mt-10 rounded-3xl">
      <img
        src={imageUrltwo} 
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div> 
    <div className="w-3/4 h-auto mx-auto overflow-hidden shadow-xl mt-10 rounded-3xl">
      <img
        src={imageUrlthree} 
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div> 

  </div>
    
    <h1 className="text-5xl  font-bold text-white text-center mt-40">{workHeading }</h1>
    <div class="flex items-center justify-center mt-10">
  <button class="bg-sky-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-sky-600 transition">
    Get in touch
   </button>
   </div>

 {/* <div className="flex-grow w-full px-4 md:px-8 lg:px-16">
{/* 
{/* First Research Section - Responsive Layout 
<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-8">

  {/* Left - Text Section 
  <div className="lg:w-3/5 text-left">
    <h3 className="text-2xl md:text-3xl font-semibold mt-6 md:mt-12 ml-20 lg:ml-34">{workName}</h3>
    <div className="mt-7"></div>
    <p className="text-md text-black-2 mt-4 leading-relaxed max-w-xl text-justify break-words  ml-20 lg:ml-34">
      {workTitle}
    </p>
  </div> */

/* Right - Image Section 
  <div className="lg:w-2/5 flex flex-col items-center lg:items-start relative top-20">
    {imageUrl ? (
      <>
        <img
          src={imageUrl}
          alt="Uploaded Preview"
          className="shadow-xl border-1 w-[320px] h-[270px] object-cover"
          />
        {/* Justified text below the image *
        <p className="text-md text-black-10 mt-3 text-justify max-w-[320px] break-words">
        {workDescription || "No description provided."}
        </p>
      </>
    ) : (
      <p className="text-gray-500">No image uploaded yet</p>
    )}
  </div>

</div>


<div className="mt-60"></div>

<div className="flex-grow w-full px-4 md:px-8 lg:px-16">

  {/* Second Research Section - Responsive Layout 
  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-8">

    {/* Left - Text Section 
    <div className="lg:w-3/5 text-left">
      <h3 className="text-2xl md:text-3xl font-semibold mt-6 md:mt-12 ml-20 lg:ml-20">
        {researchTitletwo}
      </h3>
      <div className="mt-7"></div>
      <p className="text-md text-black-2 mt-4 leading-relaxed max-w-xl text-justify break-words ml-20 lg:ml-20">
        {researchDescriptiontwo}
      </p>
    </div>

    {/* Right - Image Section 
    <div className="lg:w-2/5 flex flex-col items-center lg:items-start relative top-20">
      {imageUrltwo ? (
        <>
          <img
            src={imageUrltwo}
            alt="Uploaded Preview"
            className="shadow-xl ml-3 w-[320px] h-[270px] object-cover"
          />
          {/* Justified text below the image 
          <p className="text-md text-black ml-4 mt-3 text-justify max-w-[320px] break-words">
          {imageDescriptiontwo || "No description provided."}
          </p>
        </>
      ) : (
        <p className="text-gray-500">No image uploaded yet</p>
      )}
    </div>

  </div>
</div>



<div className="mt-60"></div>



   {/* Third Research Section - Row Layout 
<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-8">
  {/* Left - Text 
  <div className="lg:w-3/5 text-left">
    <h3 className="text-3xl font-semibold mt-12 ml-20 lg:ml-34">{researchTitlethree}</h3>
    <p className="text-md text-black-700 mt-4 leading-relaxed max-w-xl text-justify break-words ml-20 lg:ml-34">
      {researchDescriptionthree}
    </p>
  </div>

  {/* Right - Image 
  <div className="lg:w-2/5 flex flex-col items-center lg:items-start mt-12 ml-3">
    {imageUrlthree ? (
      <>
        <img
          src={imageUrlthree}
          alt="Uploaded Preview"
          className="shadow-lg  border-1 w-[350px] h-[330px] object-cover"
        />
    <p className="text-md text-black mt-3 text-justify max-w-[350px] break-words">
    {imageDescriptionthree || "No description provided."}
        </p>
      </>
    ) : (
      <p className="text-gray-500">No image uploaded yet</p>
    )}
  </div>
</div>



<div className="mt-60"></div>

   
{/* Fourth Research Section - Row Layout 
<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-8">
  {/* Left - Text 
  <div className="lg:w-3/5 text-left">
    <h3 className="text-3xl font-semibold mt-12 ml-20 lg:ml-34">{researchTitlefour}</h3>
    <p className="text-sm text-black-700 mt-4 leading-relaxed max-w-xl text-justify break-words ml-20 lg:ml-34">
      {researchDescriptionfour}
    </p>
  </div>

  {/* Right - Image *
  <div className="lg:w-2/5 flex flex-col items-center lg:items-start ml-5">
    {imageUrlfour ? (
      <>
        <img
          src={imageUrlfour}
          alt="Uploaded Preview"
          className="shadow-lg  border-2  w-[406px] h-[270px] object-cover"
        />
      <p className="text-md text-black mt-3 text-justify w-full max-w-md break-words">
      {imageDescriptionfour || "No description provided."}
        </p>
      </>
    ) : (
      <p className="text-gray-500">No image uploaded yet</p>
    )}
  </div>
</div> 
<div className="flex flex-col gap-10">

<div className="lg:w-3/5 text-left ml-20 lg:ml-50">  {/* Moves slightly to the right */}
  {/* <h1 className="font-bold mt-20 text-4xl">{recorded}</h1>
  <p className="text-lg font-bold mt-7">{recordeddesc}</p>
</div>
</div>

<div className="mt-30"></div>
<div className="flex justify-between items-start gap-8">

<div className="text-left font-bold ml-20 lg:ml-50">
<h1 className="text-lg">{videotitle}</h1>
<div className="mt-7"></div>
<p className="text-md ">{year}</p>
</div>
<div className="w-full flex justify-center">
  {yvideo && getEmbedURL(yvideo) ? (
    <div className="w-[560px] md:w-[480px] sm:w-[360px] max-w-full">
      <iframe
        className="w-full h-[315px] md:h-[270px] sm:h-[200px]" // Adjust height proportionally
        src={getEmbedURL(yvideo) || null}
        title="Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  ) : (
    <p className="text-gray-500">Paste a valid YouTube URL to watch</p>
  )}
</div>

</div>

<div className="mt-30"></div>
<div className="flex justify-between items-start gap-8">

<div className="text-left  ml-20 lg:ml-50">
<h1 className="text-lg font-bold">{videotitletwo}</h1>
<div className="mt-10 "></div>
<p className="text-md ">{yeartwo}</p>
</div>
<div className="w-full flex justify-center">
{yvideotwo && getEmbedURL(yvideotwo) ? (
  <div className="w-[560px] md:w-[480px] sm:w-[360px] max-w-full">

          <iframe
                   className="w-full h-[315px] md:h-[270px] sm:h-[200px]" // Adjust height proportionally

            src={getEmbedURL(yvideotwo) || null}
            title="Video"
            frameBorder="0"
            allowFullScreen
          ></iframe>
          </div>
        ) : (
          <p className="text-gray-500">Paste a valid YouTube URL to watch</p>
        )}
      </div>
</div> */}
</>

  ) :  selectedPage === "Contact" ? (
             <>

<div className="mt-1">


  <div className="w-full mt-10">
    <h1 className="text-center font-bold text-black text-3xl">{contactheading}</h1>
    <h2 className="text-center font-lg text-black text-xl mt-5">{contacttext}</h2>
  </div>
  <div className="w-full">
    <div className="text-black font-bold text-left text-xl">{contactname}</div>
    <div className="text-blue font-bold text-left text-xl">{phone}</div>
    <h1 className="text-black text-left font-md">{contactnum}</h1>
    <h1 className="text-black text-left font-md">{contactmail}</h1>
    <div className="text-blue font-bold text-right text-xl">{adr}</div>
    <h1 className="text-black text-right font-md">{contactaddress}</h1>
    <h1 className="text-black text-right font-md">{contactstreet}</h1>



  </div>





  
</div>





</>
  


           ) : selectedPage === "About" ? (
            <>
           

<div className="mt-25">
        
<h2 className="text-3xl font-bold text-black  mb-2 mt-10 text-left">
      {abouttitle || "Your Title"}
      </h2>
      <p className="text-md text-black mt-4 leading-relaxed text-6xl text-left">
        {aboutheading} </p>
   {/* All 5 Images in one row */}
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10 px-6">
  <img src={imageUrlout} alt="Image 1" className="w-full h-120 rounded-xl object-cover shadow-lg" />
  <img src={imageUrlouttwo} alt="Image 2" className="w-full h-100 rounded-xl object-cover shadow-lg" />
  <img src={imageUrloutthree} alt="Image 3" className="w-full h-90 rounded-xl object-cover shadow-lg" />
  <img src={imageUrloutfour} alt="Image 4" className="w-full h-120 rounded-xl object-cover shadow-lg" />
  <img src={imageUrloutfive} alt="Image 5" className="w-full h-100 rounded-xl object-cover shadow-lg" />
  <img src={imageUrloutsix} alt="Image 6" className="w-full h-90 rounded-xl object-cover shadow-lg" />
  <img src={imageUrloutseven} alt="Image 7" className="w-full h-100 rounded-xl object-cover shadow-lg" />
  <img src={imageUrlouteight} alt="Image 8" className="w-full h-120 rounded-xl object-cover shadow-lg" />
</div>

  
<div className="w-full px-6 md:px-20 lg:px-40 py-16">
  <div className="max-w-5xl mx-auto">
    {/* Heading */}
    <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
      {aboutheadingone || "Your Big Heading"}
    </h1>

    {/* Description */}
    <p className="text-lg md:text-xl leading-8 text-gray-800">
      {aboutdescription || "Your description goes here. Add details about yourself or your role."}
    </p>
  </div>
</div>


<div className="company-facts bg-gray-50 py-16 px-6 rounded-2xl shadow-lg max-w-5xl mx-auto text-center">
  <h2 className="text-4xl font-bold text-gray-800 mb-12">Company Facts</h2>

  <div className="fact-item mb-12">
    <div className="fact-number text-6xl ">
      40 <span className="text-5xl">+</span>
    </div>
    <div className="fact-description mt-4 text-lg text-black max-w-3xl mx-auto leading-relaxed">
      40+ Full-stack developers, front-end developers, SCRUM masters, and product owners, QA manual testing engineers and automation engineers, data engineers, DevOps engineers.
    </div>
  </div>

  <hr className="divider w-1/2 h-1 rounded-full mx-auto mb-12" />

  <div className="fact-item mb-12">
    <div className="fact-number text-8xl ">
      7 <span className="text-6xl ">+</span>
    </div>
    <div className="fact-description mt-4 text-lg text-black max-w-3xl mx-auto leading-relaxed">
      Years of average software engineering experience between the team members.
    </div>
    </div>
  <hr className="divider w-1/2 h-1 rounded-full mx-auto mb-12" />
</div>




<div className="py-12 px-6 bg-white mb-30">
      <h2 className="text-2xl font-semibold text-left mb-12 ml-50">Realized Projects:</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {/* Row 1 */}
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2150/vpm.svg" alt="vpm" className="max-w-full mb-4" />
         
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2151/trafft_about_tms.svg" alt="trafft" className="max-w-full mb-4" />
         
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2152/advise.svg" alt="Advice" className="max-w-full mb-4" />
          
        </div>

        {/* Row 2 */}
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2153/ideabuddy.svg" alt="Ideabuddy" className="max-w-full mb-4" />
          
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2154/eserto.svg" alt="paypal" className="max-w-full mb-4" />
        </div>
       
      </div>
    </div>


    <div className="py-12 px-6 bg-white mb-30">
      <h2 className="text-2xl font-semibold text-left mb-12 ml-50">Technical integrations:</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {/* Row 1 */}
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2157/stripe.svg" alt="Stripe" className="max-w-full mb-4" />
         
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2158/facebook.svg" alt="facebook" className="max-w-full mb-4" />
         
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="	https://tms-outsource.com/site/assets/files/2159/google.svg" alt="Google" className="max-w-full mb-4" />
          
        </div>

        {/* Row 2 */}
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2160/zoho.svg" alt="zoho" className="max-w-full mb-4" />
          
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2161/paypal.svg" alt="paypal" className="max-w-full mb-4" />
         
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2162/zapier.svg" alt="Zapier" className="max-w-full mb-4" />
         
        </div>

        
      </div>
    </div>

<div className="w-full mt-20 px-4">
  <h1 className="text-4xl font-bold text-center mb-12">{aboutteam}</h1>

  <div className="flex flex-wrap justify-center gap-12">
    {/* Team Member 1 */}
    <div className="w-80">
      <div className="w-full h-96 overflow-hidden shadow-xl rounded-3xl">
        <img
          src={imageUrlteam}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-2xl font-bold text-black text-center mt-4">{teammemname}</h1>
      <h2 className="text-xl font-medium text-gray-600 text-center mt-2">{teammemrole}</h2>
    </div>

    {/* Team Member 2 */}
    <div className="w-80">
      <div className="w-full h-96 overflow-hidden shadow-xl rounded-3xl">
        <img
          src={imageUrlteamone}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-2xl font-bold text-black text-center mt-4">{teammemonename}</h1>
      <h2 className="text-xl font-medium text-gray-600 text-center mt-2">{teammemonerole}</h2>
    </div>

    {/* Team Member 3 */}
    <div className="w-80">
      <div className="w-full h-96 overflow-hidden shadow-xl rounded-3xl">
        <img
          src={imageUrlteamtwo}
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="text-2xl font-bold text-black text-center mt-4">{teammemtwoname}</h1>
      <h2 className="text-xl font-medium text-gray-600 text-center mt-2">{teammemtworole}</h2>
    </div>
  </div>
</div>
</div>


<div className="w-full h-auto mx-auto overflow-hidden shadow-xl mt-30 rounded-3xl">
      <img
        src={imageUrlhomefour} 
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div> 

    <div className="py-12 px-6 bg-white mb-30">
      <h2 className="text-5xl font-semibold text-center mb-12">Recognitions</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Row 1 */}
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2174/group_41-min.jpg" alt="Deloitte" className="max-w-full mb-4" />
          <p>Deloitte Technology Fast 50 Nominee 2020</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2175/group_46-min.jpg" alt="Central European Startup Awards" className="max-w-full mb-4" />
          <p>Central European Startup Awards nominee 2019, 2020</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2176/group_45-min.jpg" alt="Clutch" className="max-w-full mb-4" />
          <p>5.0 stars verified average customer rating at Clutch.co</p>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2177/group_47-min.jpg" alt="Envato Power Elite" className="max-w-full mb-4" />
          <p>Envato Power Elite</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2178/group_44-min.jpg" alt="GoodFirms" className="max-w-full mb-4" />
          <p>5.0 rating at GoodFirms.co</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2179/group_43-min.jpg" alt="Awwwards" className="max-w-full mb-4" />
          <p>3 Honorable Mentions @ Awwwards</p>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2180/group_42-min.jpg" alt="GHP Medical Awards" className="max-w-full mb-4" />
          <p>“Best Medical Software Development Specialists - Central Europe” by GHP Medical Awards 2020</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2181/group_106-min.jpg" alt="AAA Creditworthiness" className="max-w-full mb-4" />
          <p>AAA Creditworthiness</p>
        </div>
      </div>
    </div>


   
<div className="w-full h-auto mx-auto overflow-hidden shadow-xl mt-30 rounded-3xl">
      <img
        src={imageUrlhomefour} 
        alt="Profile"
        className="w-full h-full object-cover"
      />
  </div> 
    <div className="w-full px-6 md:px-20 lg:px-40 py-16">
  <div className="max-w-9xl text-left">{aboutexpert}
    {/* Heading */}
    <h1 className="text-2xl md:text-3xl font-lg text-gray-800 mb-6">
      {abtheading}
    </h1>

    {/* Description */}
    <p className="text-lg md:text-xl leading-8 text-gray-800 mt-10">
      {abttxt}
    </p>
  </div>
</div>

   
      <div className="w-full">{aboutservice}
      <h1 className="text-2xl font-bold text-black text-center mt-4">{abtheadingone}</h1>
      <h2 className="text-xl font-medium text-gray-600 text-center mt-2">{abttxtone}</h2>
      <div className="w-full h-auto mx-auto overflow-hidden shadow-xl mt-30 rounded-3xl">
      <img
        src={imageUrlhomefour} 
        alt="Profile"
        className="w-full h-full object-cover"
      />
  </div> 
    </div>











    
 

    <div className="bg-[#61c2cd] py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-light text-white mb-6">Technologies we use</h2>
        <p className="text-lg text-white max-w-4xl mx-auto mb-14">
          We develop web applications using up-to-date technology stack, which includes:
          <br />
          PHP, Symfony, Laravel, WordPress, AngularJS, Node.js, React, Vue, Slim, Silex
          and other tools - we keep learning and evolving together with the industry,
          adding new tools to our toolbox whenever we can.
        </p>

        {/* Second and Third row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-10 place-items-center">
        <img src="https://tms-outsource.com/site/assets/files/1019/logo-1-php-1.svg" alt="PHP" className="h-20object-contain" />
          <img src="https://tms-outsource.com/site/assets/files/1019/logo-2-symfony-1.svg" alt="Symfony" className="h-20object-contain" />
          <img src="https://tms-outsource.com/site/assets/files/1019/logo-3-laravel.svg" alt="Laravel" className="h-20 object-contain" />
          <img src="https://tms-outsource.com/site/assets/files/1019/logo-4-angular.svg" alt="AngularJS" className="h-20 object-contain" />
          <img src="https://tms-outsource.com/site/assets/files/1019/logo-5-node.svg" alt="Node.js" className="h-20 object-contain" />

          <img src="https://tms-outsource.com/site/assets/files/1019/logo-6-vue.svg" alt="Vue.js" className="h-20 object-contain" />
          <img src="https://tms-outsource.com/site/assets/files/1019/logo-7-react.svg" alt="React" className="h-20 object-contain" />
          <img src="https://tms-outsource.com/site/assets/files/1019/logo-8-jquery.svg" alt="jQuery" className="h-20 object-contain" />
          <img src="https://tms-outsource.com/site/assets/files/1019/logo-9-wordpress.svg" alt="WordPress" className="h-20 object-contain" />
          <img src="https://tms-outsource.com/site/assets/files/1019/logo-10-sql.svg" alt="MySQL" className="h-20 object-contain" />

          <img src="https://tms-outsource.com/site/assets/files/1019/logo-13-sass.svg" alt="Sass" className="h-20 object-contain" />
          <img src="https://tms-outsource.com/site/assets/files/1019/logo-11-html.svg" alt="HTML5" className="h-20 object-contain" />
          <img src="https://tms-outsource.com/site/assets/files/1019/logo-12-css-1.svg" alt="CSS3" className="h-20 object-contain" />
          <img src="https://tms-outsource.com/site/assets/files/1019/logo-14-swift.svg" alt="Swift" className="h-20 object-contain" />
          <img src="https://tms-outsource.com/site/assets/files/1019/logo-15-objc.svg" alt="C" className="h- object-contain" />
        </div>
      </div>
    </div>



</>


           ) : selectedPage === "Personal" ? (
             <>
             <div className="mt-40"></div>
             <h1 className="text-5xl font-bold text-center">Personal</h1>
             <div className="w-full px-6 lg:px-12">
  <div className="mt-5"></div>
  {/* Centered Heading (Full Width) */}
  <div className="w-full text-center ">
    <h1 className="text-xl font-bold">{personalDetails}</h1>
 </div>
 <div className="mt-15"></div>

  {/* Flex Container for Content */}
  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

{/* Left Section - Title & Description */}
<div className="lg:w-1/2 text-left flex flex-col items-center lg:items-start">
  <h2 className="text-2xl font-semibold text-center lg:text-left ml-20 lg:ml-46">{personalDetailsTitle}</h2>
  <p className="text-md text-balck-7 mt-4 leading-relaxed text-justify max-w-md ml-20 lg:ml-47">
    {personalDetailsDesc}
  </p>
</div>

{/* Right Section - Images */}
<div className="lg:w-1/2 flex justify-center lg:justify-center items-center gap-6">
  {imageUrlper && (
    <img
      src={imageUrlper}
      alt="Uploaded Preview 1"
      className="rounded-lg shadow-lg border border-gray-400"
      style={{ width: "200px", height: "300px", objectFit: "cover" }}
    />
  )}
  {imageUrlpertwo && (
    <img
      src={imageUrlpertwo}
      alt="Uploaded Preview 2"
      className="rounded-lg shadow-lg border border-gray-400"
      style={{ width: "200px", height: "300px", objectFit: "cover" }}
    />
  )}
</div>

</div>




<div className= "mt-100"></div>






  <div className="flex flex-col lg:flex-row items-start justify-between">

{/* Left Section - Title & Description */}
<div className="lg:w-1/2 text-left">
<h2 className="text-2xl font-semibold text-center lg:text-left ml-20 lg:ml-46">{personalDetailsTitletwo}</h2>
<p className="text-md text-balck-7 mt-4 leading-relaxed text-justify max-w-md ml-20 lg:ml-47">
{personalDetailsDesctwo}
  </p>
</div>

{/* Right Section - Images */}
<div className="lg:w-1/2 flex flex-col justify-start items-center gap-6 mt-6  relative right-30  lg:mt-0">
  {imageUrlperthree && (
    <img
      src={imageUrlperthree}
      alt="Uploaded Preview 1"
      className="rounded-lg shadow-lg border border-gray-400"
      style={{ width: "270px", height: "174px", objectFit: "cover" }}
    />
  )}
  {imageUrlperfour && (
    <img
      src={imageUrlperfour}
      alt="Uploaded Preview 2"
      className="rounded-lg shadow-xl border border-gray-400 relative left-30"
      style={{ width: "250px", height: "174px", objectFit: "cover"   }}
    />
  )}
</div>


</div>


</div>

 </>










            ) : selectedPage === "Home" ? (
              <>
  <div className="mt-16 px-20 py-16 bg-white text-left">
  {/* Title */}
  <h1 className="text-6xl font-bold text-black leading-tight">
    {homename} <span className="blinking-cursor">|</span>
  </h1>

  <h2 className="text-3xl font-semibold text-black leading-tight mt-2 ">
    {hometitle || "Your Title"}
  </h2>

  {/* Description */}
  {/* <p className="text-lg text-black mt-6 text-left max-w-2xl">
    {homeheading}
  </p> */}

  {/* Link with Arrow */}
  <a
    href="#"
    className="text-sky-500 text-base mt-6 inline-flex items-left group"
  >
    Request a free consultation
    <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
      &gt;
    </span>
  </a>
    </div>
    
  
  <div className="w-3/4 h-auto mx-auto overflow-hidden shadow-xl mt-10 rounded-3xl">
      <img
        src={imageUrlhome} 
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div> 
  <div className="w-full bg-black pt-20">
  <div className="text-center text-3xl text-white w-full font-md ">{homeheading}</div>
  <div className="text-center text-2xl text-white font-bold mt-10 ">{hometext}</div>
  <div className="text-center text-white font-semibold mt-16 tracking-wider text-sm">

  {/* Logos section */}
  <div className="grid grid-cols-6 gap-y-10 gap-x-8 justify-items-center items-center mt-12 px-10 pb-20">
    <img src="https://tms-outsource.com/site/assets/files/1/g12.png" alt="Advise" className="h-16 grayscale" />
    <img src="https://tms-outsource.com/site/assets/files/1/group_1.png" alt="MR Prepare" className="h-16 grayscale" />
    <img src="https://tms-outsource.com/site/assets/files/1/vpm.png" alt="Virtual Post Mail" className="h-16 grayscale" />
    <img src="https://tms-outsource.com/site/assets/files/1/alice.png" alt="Teapot" className="h-16 grayscale" />
    <img src="https://tms-outsource.com/site/assets/files/1/ideabuddy.png" alt="Idea Buddy" className="h-16 grayscale" />
    <img src="https://tms-outsource.com/site/assets/files/1/group.png" alt="Eserto" className="h-16 grayscale" />
    <img src="https://tms-outsource.com/site/assets/files/1/amelia.png" alt="Amelia" className="h-16 grayscale" />
    <img src="https://tms-outsource.com/site/assets/files/1/trafft_horizontal_lockup_6.svg" alt="Trafft" className="h-16 grayscale" />
    <img src="https://tms-outsource.com/site/assets/files/1/wpdt-1.png" alt="wpDataTables" className="h-16 grayscale" />
    <img src="https://tms-outsource.com/site/assets/files/1/geo1.png" alt="GEO1" className="h-16 grayscale" />
    <img src="https://tms-outsource.com/site/assets/files/1/report_builder.png" alt="App Icon 1" className="h-16 grayscale" />
    <img src="https://tms-outsource.com/site/assets/files/1/gravity_forms.png" alt="App Icon 2" className="h-16 grayscale" />
  </div>
</div>
</div>




  <div className="w-full py-10 px-6 mt-30">
      <h1 className="text-5xl font-lg text-black text-center mb-20">{homesh}</h1>
      <h2 className="text-3xl font-bold text-black mt-2 text-left leading-tight">
      {homeshone}
      </h2>
      <a
    href="#"
    className="text-sky-500 text-base mt-6 inline-flex items-right group"
  >
    View more projects 
    <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
      &gt;
    </span>
    </a>
    </div>

    <div className="relative w-full h-screen bg-orange-600 mt-20 flex flex-col lg:flex-row items-center justify-between px-10 py-16 rounded-3xl group">
  {/* Overlay on hover - covers full screen */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-orange-800/90 z-10 flex flex-col justify-between px-10 py-16 text-white">
    <div className="w-full lg:w-1/2 text-2xl font-light">{hovertxt}</div>
    <span className="text-xl font-semibold">View Project →</span>
  </div>

  {/* Content below the overlay */}
  <div className="w-full lg:w-1/2 text-white z-0 mb-10 lg:mb-0 font-5xl">
    {imagetxt}
  </div>

  <div className="relative w-full lg:w-1/2 h-[400px] z-0">
    <img
      src={imageUrlhomeone}
      alt="Project"
      className="w-full h-full object-cover"
    />
  </div>
</div>



<div className="relative w-full h-screen bg-blue-400 mt-20 flex flex-col lg:flex-row items-center justify-between px-10 py-16 rounded-3xl group">
  {/* Overlay on hover - covers full screen */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-blue-400/90 z-10 flex flex-col justify-between px-10 py-16 text-white">
    <div className="w-full lg:w-1/2 text-2xl font-light">{hovertxtone}</div>
    <span className="text-xl font-semibold">View Project →</span>
  </div>

  {/* Content below the overlay */}
  <div className="w-full lg:w-1/2 text-white z-0 mb-10 lg:mb-0 font-5xl">
    {imagetxtone}
  </div>

  <div className="relative w-full lg:w-1/2 h-[400px] z-0">
    <img
      src={imageUrlhometwo}
      alt="Project"
      className="w-full h-full object-cover"
    />
  </div>
</div>



<div className="relative w-full h-screen bg-black mt-20 flex flex-col lg:flex-row items-center justify-between px-10 py-16 rounded-3xl group">
  {/* Overlay on hover - covers full screen */}
  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black z-10 flex flex-col justify-between px-10 py-16 text-white">
    <div className="w-full lg:w-1/2 text-2xl font-light">{hovertxttwo}</div>
    <span className="text-xl font-semibold">View Project →</span>
  </div>

  {/* Content below the overlay */}
  <div className="w-full lg:w-1/2 text-white z-0 mb-10 lg:mb-0 font-5xl">
    {imagetxttwo}
  </div>

  <div className="relative w-full lg:w-1/2 h-[400px] z-0">
    <img
      src={imageUrlhomethree}
      alt="Project"
      className="w-full h-full object-cover"
    />
  </div>
</div>
    

    <div className="w-full text-4xl text-black mt-30 font-bold text-center mb-20">{homesubheading}</div>
    <button className="bg-[#5ec8d8] text-white font-semibold py-6 px-9 rounded-md hover:bg-[#4bbacb] transition-all duration-300 text-xl">
  Let’s start a project together
</button>
<div className="w-full h-auto mx-auto overflow-hidden shadow-xl mt-30 rounded-3xl">
      <img
        src={imageUrlhomefour} 
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div> 

    <div className="py-12 px-6 bg-white mb-30">
      <h2 className="text-5xl font-semibold text-center mb-12">Recognitions</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Row 1 */}
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2174/group_41-min.jpg" alt="Deloitte" className="max-w-full mb-4" />
          <p>Deloitte Technology Fast 50 Nominee 2020</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2175/group_46-min.jpg" alt="Central European Startup Awards" className="max-w-full mb-4" />
          <p>Central European Startup Awards nominee 2019, 2020</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2176/group_45-min.jpg" alt="Clutch" className="max-w-full mb-4" />
          <p>5.0 stars verified average customer rating at Clutch.co</p>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2177/group_47-min.jpg" alt="Envato Power Elite" className="max-w-full mb-4" />
          <p>Envato Power Elite</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2178/group_44-min.jpg" alt="GoodFirms" className="max-w-full mb-4" />
          <p>5.0 rating at GoodFirms.co</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2179/group_43-min.jpg" alt="Awwwards" className="max-w-full mb-4" />
          <p>3 Honorable Mentions @ Awwwards</p>
        </div>

        {/* Row 3 */}
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2180/group_42-min.jpg" alt="GHP Medical Awards" className="max-w-full mb-4" />
          <p>“Best Medical Software Development Specialists - Central Europe” by GHP Medical Awards 2020</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="https://tms-outsource.com/site/assets/files/2181/group_106-min.jpg" alt="AAA Creditworthiness" className="max-w-full mb-4" />
          <p>AAA Creditworthiness</p>
        </div>
      </div>
    </div>

    <div className="flex flex-col md:flex-row w-full mt-10 gap-10 mb-30">
  {/* Left Side */}
  <div className="md:w-1/3">
    <h2 className="text-4xl font-bold text-black">{homeh}</h2>
    <a
      href="#"
      className="text-sky-500 text-2xl mt-10 inline-flex items-left group pr-50"
    >
      Learn More
      <span className="ml-1 transform transition-transform duration-300 group-hover:translate-x-1">
        &gt;
      </span>
    </a>
  </div>

  {/* Divider */}
  <div className="hidden md:block border-l border-gray-300 h-auto"></div>

  {/* Right Side */}
  <div className="md:w-2/3 text-xl text-black space-y-4">
    <p>{homehone}</p>
  </div>
</div>

<div className="w-full bg-black text-white py-20 flex items-center justify-center mt-20">
        <div className="flex w-4/5">
          <div className="flex flex-col items-center justify-center w-1/6 text-6xl font-light">
            <button onClick={() => handleScroll('up')}>
              <FaChevronUp size={25} />
            </button>
            <span className="my-6">{String(index + 1).padStart(2, '0')}</span>
            <button onClick={() => handleScroll('down')}>
              <FaChevronDown size={25} />
            </button>
          </div>

          <div className="w-5/6 pl-10">
            <h1 className="text-5xl font-light leading-snug">
              {titles[index] || 'Enter a title above'}
            </h1>
            <hr className="my-6 border-gray-500" />
            <p className="text-xl font-medium leading-relaxed">
              {descriptions[index] || 'Enter a description above'}
            </p>
          </div>
        </div>
      </div>
  















  {/* <div className="text-center w-full py-10 px-4">
      <h1 className="text-2xl  font-semibold text-white text-center">{homesuccess} </h1>
      <h2 className="text-6xl font-bold text-white mt-2">
      {homesuccessone}
      </h2>
  </div> */}

  <div className="p-8 bg-[#020617] min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-[#0F172A] text-white p-6 rounded-2xl shadow-md h-auto flex flex-col justify-between">
          <p className="text-2xl mb-6">{clientstory}</p>
          <div className="flex items-center gap-3">
            <div>
              <p className="font-bold text-lg">{clientname}</p>
              <p className="text-gray-400 text-md font-bold">{clientprofession}</p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#0F172A] text-white p-6 rounded-2xl shadow-md h-auto flex flex-col justify-between">
          <p className="text-2xl mb-6">{clientstoryone}</p>
          <div className="flex items-center gap-3">
            <div>
              <p className="font-bold text-lg">{clientnameone}</p>
              <p className="text-gray-400 text-md font-bold">{clientprofessionone}</p>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#0F172A] text-white p-6 rounded-2xl shadow-md h-auto flex flex-col justify-between">
          <p className="text-2xl mb-6">{clientstorytwo}</p>
          <div className="flex items-center gap-3">
            <div>
              <p className="font-bold text-lg">{clientnametwo}</p>
              <p className="text-gray-400 text-md font-bold">{clientprofessiontwo}</p>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-[#0F172A] text-white p-6 rounded-2xl shadow-md h-auto flex flex-col justify-between">
          <p className="text-2xl mb-6">{clientstorythree}</p>
          <div className="flex items-center gap-3">
            <div>
              <p className="font-bold text-lg">{clientnamethree}</p>
              <p className="text-gray-400 text-md font-bold">{clientprofessionthree}</p>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-[#0F172A] text-white p-6 rounded-2xl shadow-md h-auto flex flex-col justify-between">
          <p className="text-2xl mb-6">{clientstoryfour}</p>
          <div className="flex items-center gap-3">
            <div>
              <p className="font-bold text-lg">{clientnamefour}</p>
              <p className="text-gray-400 text-md font-bold">{clientprofessionfour}</p>
            </div>
          </div>
        </div>

        {/* Card 6 */}
        <div className="bg-[#0F172A] text-white p-6 rounded-2xl shadow-md h-auto flex flex-col justify-between">
          <p className="text-2xl mb-6">{clientstoryfive}</p>
          <div className="flex items-center gap-3">
            <div>
              <p className="font-bold text-lg">{clientnamefive}</p>
              <p className="text-gray-400 text-md font-bold">{clientprofessionfive}</p>
              </div>
          </div>
        </div>

        {/* Card 7 */}
        <div className="bg-[#0F172A] text-white p-6 rounded-2xl shadow-md h-auto flex flex-col justify-between">
          <p className="text-2xl mb-6">{clientstorysix}</p>
          <div className="flex items-center gap-3">
            <div>
              <p className="font-bold text-lg">{clientnamesix}</p>
              <p className="text-gray-400 text-md font-bold">{clientprofessionsix}</p>
            </div>
          </div>
        </div>

        {/* Card 8 */}
        <div className="bg-[#0F172A] text-white p-6 rounded-2xl shadow-md h-auto flex flex-col justify-between">
          <p className="text-2xl mb-6">{clientstoryseven}</p>
          <div className="flex items-center gap-3">
            <div>
              <p className="font-bold text-lg">{clientnameseven}</p>
              <p className="text-gray-400 text-md font-bold">{clientprofessionseven}</p>
            </div>
          </div>
        </div>

        {/* Card 9 */}
        <div className="bg-[#0F172A] text-white p-6 rounded-2xl shadow-md h-auto flex flex-col justify-between">
          <p className="text-2xl mb-6">{clientstoryeight}</p>
          <div className="flex items-center gap-3">
            <div>
              <p className="font-semibold text-lg">{clientnameeight}</p>
              <p className="text-gray-400 text-md font-bold">{clientprofessioneight}</p>
            </div>
          </div>
        </div>
      </div>
    </div>


  <h1 className="text-5xl  font-bold text-white text-center mt-40">{workHeading }</h1>
    <div class="flex items-center justify-center mt-10">
  <button class="bg-sky-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-sky-600 transition">
    Get in touch
   </button>
   </div>

  
  

{/* 
  <div className="flex justify-end gap-3 mt-16  relative right-72">
    <div className="w-28 h-28 flex items-center justify-center text-white text-[1.371rem]   hover:bg-white hover:text-[#0F4C4C] font-semibold border-2 border-black-500  bg-[#0F4C4C] rounded-full"
                onClick={() => setSelectedPage("Resume")}

    >
      Resume
    </div>
    <div className="w-28 h-28 flex items-center justify-center text-black text-[1.369rem] hover:bg-white  font-semibold border-2 border-blue-500 bg-[#248080] rounded-full"
        onClick={() => setSelectedPage("Research")}

    >
    Research

    </div>
    <div className="w-28 h-28 flex items-center justify-center text-black text-[1.372rem] hover:bg-white  font-semibold border-2 border-blue-400 bg-[#7EDCDC] rounded-full"
            onClick={() => setSelectedPage("Outreach")}

    >
    Outreach
    </div>
    <div className="w-28 h-28 flex items-center justify-center text-black text-[1.372rem]  hover:bg-white font-semibold border-2 border-blue-500   bg-[#D3D3D3] rounded-full"
                onClick={() => setSelectedPage("Personal")}

    >
Personal    
</div>
  </div> */}
</>

) : selectedPage === "Services" ? (
  <>
  <div className="w-full mt-10">
    <h1 className="text-xl text-bold text-left">{servicetitle}</h1>
    <h2 className="text-5xl text-semibold text-left">{serviceheading}</h2>
  </div>
   
  <div className="w-full bg-black mt-10">
    <h1 className="text-white text-center font-semibold,text-4xl h-100">{servicepara}</h1>
  </div>

  <div className="w-full px-6 lg:px-24 py-10">
  <h1 className="text-center text-4xl font-bold mb-16">{servicesub}</h1>

  {/* Section 1 */}
  <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
    <div className="w-full lg:w-1/2 h-[400px]">
      <img src={imageUrlservice} alt="Project" className="w-full h-full object-cover rounded-xl shadow-lg" />
    </div>
    <div className="w-full lg:w-1/2 space-y-4">
      <h1 className="text-3xl font-bold">{servicet}</h1>
      <p className="text-xl">{serviced}</p>
      <a href="#" className="text-sky-500 text-2xl inline-flex items-center group">
        Learn More
        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
      </a>
    </div>
  </div>

  {/* Section 2 */}
  <div className="flex flex-col lg:flex-row-reverse items-center gap-10 mb-20">
    <div className="w-full lg:w-1/2 h-[400px]">
      <img src={imageUrlserviceone} alt="Project" className="w-full h-full object-cover rounded-xl shadow-lg" />
    </div>
    <div className="w-full lg:w-1/2 space-y-4">
      <h1 className="text-3xl font-bold">{servicetone}</h1>
      <p className="text-xl">{servicedone}</p>
      <a href="#" className="text-sky-500 text-2xl inline-flex items-center group">
        Learn More
        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
      </a>
    </div>
  </div>

  {/* Section 3 */}
  <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
    <div className="w-full lg:w-1/2 h-[400px]">
      <img src={imageUrlservicetwo} alt="Project" className="w-full h-full object-cover rounded-xl shadow-lg" />
    </div>
    <div className="w-full lg:w-1/2 space-y-4">
      <h1 className="text-3xl font-bold">{servicettwo}</h1>
      <p className="text-xl">{servicedtwo}</p>
      <a href="#" className="text-sky-500 text-2xl inline-flex items-center group">
        Learn More
        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
      </a>
    </div>
  </div>

  {/* Section 4 */}
  <div className="flex flex-col lg:flex-row-reverse items-center gap-10 mb-20">
    <div className="w-full lg:w-1/2 h-[400px]">
      <img src={imageUrlservicethree} alt="Project" className="w-full h-full object-cover rounded-xl shadow-lg" />
    </div>
    <div className="w-full lg:w-1/2 space-y-4">
      <h1 className="text-3xl font-bold">{servicetthree}</h1>
      <p className="text-xl">{servicedthree}</p>
      <a href="#" className="text-sky-500 text-2xl inline-flex items-center group">
        Learn More
        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
      </a>
    </div>
  </div>

  {/* Section 5 */}
  <div className="flex flex-col lg:flex-row items-center gap-10 mb-20">
    <div className="w-full lg:w-1/2 h-[400px]">
      <img src={imageUrlservicefour} alt="Project" className="w-full h-full object-cover rounded-xl shadow-lg" />
    </div>
    <div className="w-full lg:w-1/2 space-y-4">
      <h1 className="text-3xl font-bold">{servicetfour}</h1>
      <p className="text-xl">{servicedfour}</p>
      <a href="#" className="text-sky-500 text-2xl inline-flex items-center group">
        Learn More
        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
      </a>
    </div>
  </div>

  {/* Section 6 */}
  <div className="flex flex-col lg:flex-row-reverse items-center gap-10 mb-20">
    <div className="w-full lg:w-1/2 h-[400px]">
      <img src={imageUrlservicefive} alt="Project" className="w-full h-full object-cover rounded-xl shadow-lg" />
    </div>
    <div className="w-full lg:w-1/2 space-y-4">
      <h1 className="text-3xl font-bold">{servicetfive}</h1>
      <p className="text-xl">{servicedfive}</p>
      <a href="#" className="text-sky-500 text-2xl inline-flex items-center group">
        Learn More
        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
      </a>
    </div>
  </div>

  {/* Section 7 */}
  <div className="flex flex-col lg:flex-row items-center gap-10">
    <div className="w-full lg:w-1/2 h-[400px]">
      <img src={imageUrlservicesix} alt="Project" className="w-full h-full object-cover rounded-xl shadow-lg" />
    </div>
    <div className="w-full lg:w-1/2 space-y-4">
      <h1 className="text-3xl font-bold">{servicetsix}</h1>
      <p className="text-xl">{servicedsix}</p>
      <a href="#" className="text-sky-500 text-2xl inline-flex items-center group">
        Learn More
        <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">&gt;</span>
      </a>
    </div>
  </div>
</div>

<div className="w-full mt-20">
  <h1 className="text-3xl font-bold text-left">{benefith}</h1>
</div>

<div className="w-full mt-10 flex justify-between items-start gap-5">
  {/* Left Side */}
  <div className="w-1/2 text-left">
    <h1 className="text-2xl font-bold mb-2">{benefithone}</h1>
    <p className="text-xl">{benefitone}</p>
  </div>

  {/* Right Side */}
  <div className="w-1/2 text-left">
    <h1 className="text-2xl font-bold mb-2">{benefithtwo}</h1>
    <p className="text-xl">{benefittwo}</p>
  </div>
</div>

































           
  </>         

           ) : (
             content[selectedPage])}
        
           {/* <div className="flex flex-col min-h-screen"> */}
           <div className="mt-90"> </div>
<hr className="border-gray-800 opacity-50" />
<footer className="text-white px-6 md:px-20 py-12 font-sans">

      
      {/* Email Section - Left Aligned
      {email && (
        <div className="w-1/3 text-left">
          <p className="text-lg font-semibold">Email</p>
          <p className="text-md">{email}</p>
        </div>
      )}

      {/* Spacer to create some gap *
      <div className="flex-grow"></div>

      {/* GitHub Section - Towards the Right *
      {github && (
        <div className="w-1/3 text-left">
          <p className="text-lg font-semibold">GitHub</p>
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {github}
          </a>
        </div>
      )} */}
<div className="flex flex-col md:flex-row justify-between items-start gap-5 md:gap-16">
        {/* Logo and Name */}
        <div>
          <div className="flex items-center gap-2 font-bold text-lg text-white">
            {/* Logo icon placeholder */}
            <span>{fullname}</span>
          </div>
        </div>

        {/* Headquarters */}
        <div>
          <h4 className="font-semibold mb-1  text-white">{address}</h4>
        
          <p className="font-xl mb-1 text-white">{addressone}</p>
          <p className="font-xl mb-1 text-white">{addresstwo}</p>
         
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-1 text-white">{contact}</h4>
          
          <p className="font-xl mb-1 text-white">{contactone}</p>
          <p className="font-xl mb-1 text-white">{contacttwo}</p>
          
        </div>

        {/* Social Links */}
        <div>
        <h4 className="font-semibold mb-2 text-white text-lg">{followus}</h4>
          <div className="flex gap-4 text-[#8C94A3] text-lg">
        
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaDribbble className="hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="mt-10 flex flex-col md:flex-row justify-between items-center text-md text-[#8C94A3] gap-4">
        <div className="flex gap-6">
          <a href="#" className="hover:text-white">{privacy}</a>
          <a href="#" className="hover:text-white">{term}</a>
          <a href="#" className="hover:text-white">{cookie}</a>
        </div>
        <p>{rights}</p>
      </div>
    </footer>


</div>


      </div>
     </div>
  );
};

export default PortfolioTemplate;

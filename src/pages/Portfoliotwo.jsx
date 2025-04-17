import React, { useState,useEffect } from "react";

const Portfoliotwo = () => {
  const [navItems, setNavItems] = useState(["Home", "Contact","Media","Projects","Resume","Resources" ]);
  // const [selectedPage, setSelectedPage] = useState("Resume");
  const [selectedSection, setSelectedSection] = useState("Home");

  const [contents, setContent] = useState({

    Home: "",
    Resume: "Full CV and publication list can be found here.",
    Research: "",
    Outreach: "",
    Personal: ""
  });
  




  // Navbar items
  const [newNavItem, setNewNavItem] = useState("");
  const [showCustomize, setShowCustomize] = useState(true);
  const [email, setEmail] = useState("");
  const [github, setGithub] = useState("");
 
  const [name, setName] = useState("Your Name");
  const [pdf, setPdf] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);
  

  // Research details
  const [researchTitle, setResearchTitle] = useState("");
  const [researchDescription, setResearchDescription] = useState("");
  const [imageUrl, setImageUrl] = useState(""); // Stores image preview URL
  const [imageDescription, setImageDescription] = useState("");

  const [researchTitletwo, setResearchTitletwo] = useState("");
  const [researchDescriptiontwo, setResearchDescriptiontwo] = useState("");
  const [imageUrltwo, setImageUrltwo] = useState(""); // Stores image preview URL
  const [imageDescriptiontwo, setImageDescriptiontwo] = useState("");



  const [researchTitlethree, setResearchTitlethree] = useState("");
  const [researchDescriptionthree, setResearchDescriptionthree] = useState("");
  const [imageUrlthree, setImageUrlthree] = useState(""); // Stores image preview URL
  const [imageDescriptionthree, setImageDescriptionthree] = useState("");

  const [researchTitlefour, setResearchTitlefour] = useState("");
  const [researchDescriptionfour, setResearchDescriptionfour] = useState("");
  const [imageUrlfour, setImageUrlfour] = useState(""); // Stores image preview URL
  const [imageDescriptionfour, setImageDescriptionfour] = useState("");


  const [recorded, setRecorded] = useState("");
  const [recordeddesc, setRecordeddesc] = useState("");
  const [videotitle, setVideotitle] = useState("");
  const [year, setYear] = useState("");
  const [yvideo, setYvideo] = useState("");
  const [videotitletwo, setVideotitletwo] = useState("");
  const [yeartwo, setYeartwo] = useState("");

  const [yvideotwo, setYvideotwo] = useState("");

  const getEmbedURL = (url) => {
    if (!url) return null; // Prevents empty string issues
    const videoIdMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|.+?v=))([^&?]+)/);
    return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : null;
  };
  

//Home

  const [imageUrlhome, setImageUrlhome] = useState(""); // Stores image preview URL
  const [homename, setHomename] = useState("");
  const [hometitle, setHometitle] = useState("");
  const [homedesc, setHomedesc] = useState("");

  // const [researchFiles, setResearchFiles] = useState([]);

  // Outreach details

  const [outreachActivities, setOutreachActivities] = useState("");
  const [outvideotitle, setOutvideotitle] = useState("");
  const [outyear, setOutyear] = useState("");
  const [outdesc, setOutdesc] = useState("");
  const [outyvideo, setOutyvideo] = useState("");
  const [rechebrew, setRechebrew] = useState("");
  const [rechebrewtitle, setRechebrewtitle] = useState("");
  const [rechebrewvideo, setRechebrewvideo] = useState("");
  const [rechebrewtitletwo, setRechebrewtitletwo] = useState("");
  const [rechebrewvideotwo, setRechebrewvideotwo] = useState("");
  const [rechebrewtitleThree, setRechebrewtitleThree] = useState("");
  const [rechebrewvideoThree, setRechebrewvideoThree] = useState("");
  const [outact, setOutact] = useState("");
  const [outacttitle, setOutacttitle] = useState("");
  const [outactdesc, setOutactdesc] = useState("");
  const [imageUrlout, setImageUrlout] = useState(""); // Stores image preview URL
  const [imageUrlouttwo, setImageUrlouttwo] = useState(""); // Stores image preview URL
  const [outacttitletwo, setOutacttitletwo] = useState("");
  const [outactdesctwo, setOutactdesctwo] = useState("");
  const [imageUrloutthree, setImageUrloutthree] = useState(""); // Stores image preview URL
  const [imageUrloutfour, setImageUrloutfour] = useState(""); // Stores image preview URL
  const [imageUrloutfive, setImageUrloutfive] = useState(""); // Stores image preview URL
  const [imageUrloutsix, setImageUrloutsix] = useState(""); // Stores image preview URL
  const [outacttitlethree, setOutacttitlethree] = useState("");
  const [outactdescthree, setOutactdescthree] = useState("");
  const [imageUrloutseven, setImageUrloutseven] = useState(""); // Stores image preview URL

  // Personal details
  const [personalDetails, setPersonalDetails] = useState("");
  const [personalDetailsTitle, setPersonalDetailsTitle] = useState("");
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
      email,
      github
    };
  
    localStorage.setItem("profileDetails", JSON.stringify(profileData)); // Save in localStorage
    alert("Profile details saved successfully!");
  };
  

  useEffect(() => {
    const savedProfile = localStorage.getItem("profileDetails");
    if (savedProfile) {
      const parsedProfile = JSON.parse(savedProfile);
      setName(parsedProfile.name);
      setEmail(parsedProfile.email);
      setGithub(parsedProfile.github);
    }
  }, []);
  


  
  useEffect(() => {
    if (selectedSection) {
      document.getElementById(selectedSection.toLowerCase() + "-section")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedSection]);
  
// Save Home Section 
  const handleSaveHome = () => {
    const homeData = {
      name: homename,
      title: hometitle,
      description: homedesc,
      image: imageUrlhome
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
      setHomedesc(parsedHome.description);
      setImageUrlhome(parsedHome.image);
    }
  }, []);
  
  
  const savedImage = localStorage.getItem("homeImage");
  if (savedImage) {
    setImageUrl(savedImage);
  }

  const handleSaveResume = () => {
    if (pdfUrl) {
      localStorage.setItem("resumeSection", pdfUrl);
      alert("Resume saved successfully!");
    } else {
      alert("No resume uploaded to save!");
    }
  };
  
  // Load saved resume on refresh
  useEffect(() => {
    const savedPdfUrl = localStorage.getItem("resumeSection");
    if (savedPdfUrl) {
      setPdfUrl(savedPdfUrl);
    }
  }, []);
  
  // Save Research Section
  const handleSaveResearch = () => {
    const researchData = {
      researchTitle,
      researchDescription,
      imageUrl,
      imageDescription,
      researchTitletwo,
      researchDescriptiontwo,
      imageUrltwo,
      imageDescriptiontwo,
      researchTitlethree,
      researchDescriptionthree,
      imageUrlthree,
      imageDescriptionthree,
      researchTitlefour,
      researchDescriptionfour,
      imageUrlfour,
      imageDescriptionfour,
      recorded,
    recordeddesc,
    videotitle,
    year,
    yvideo,
    videotitletwo,
    yeartwo,
    yvideotwo
      
    };
  
    localStorage.setItem("researchSection", JSON.stringify(researchData));
    alert("Research section saved!");
  };
  
  // Load saved research data on refresh
  useEffect(() => {
    const savedResearch = localStorage.getItem("researchSection");
    if (savedResearch) {
      const parsedResearch = JSON.parse(savedResearch);
      setResearchTitle(parsedResearch.researchTitle);
      setResearchDescription(parsedResearch.researchDescription);
      setImageUrl(parsedResearch.imageUrl);
      setImageDescription(parsedResearch.imageDescription);
      setResearchTitletwo(parsedResearch.researchTitletwo);
      setResearchDescriptiontwo(parsedResearch.researchDescriptiontwo);
      setImageUrltwo(parsedResearch.imageUrltwo);
      setImageDescriptiontwo(parsedResearch.imageDescriptiontwo);
      setResearchTitlethree(parsedResearch.researchTitlethree);
      setResearchDescriptionthree(parsedResearch.researchDescriptionthree);
      setImageUrlthree(parsedResearch.imageUrlthree);
      setImageDescriptionthree(parsedResearch.imageDescriptionthree);
      setResearchTitlefour(parsedResearch.researchTitlefour);
      setResearchDescriptionfour(parsedResearch.researchDescriptionfour);
      setImageUrlfour(parsedResearch.imageUrlfour);
      setImageDescriptionfour(parsedResearch.imageDescriptionfour);
      setRecorded(parsedResearch.recorded);
    setRecordeddesc(parsedResearch.recordeddesc);
    setVideotitle(parsedResearch.videotitle);
    setYear(parsedResearch.year);
    setYvideo(parsedResearch.yvideo);
    setVideotitletwo(parsedResearch.videotitletwo);
    setYeartwo(parsedResearch.yeartwo);
    setYvideotwo(parsedResearch.yvideotwo);
    }
  }, []);
  

  // Save Outreach Section
const handleSaveOutreach = () => {
  const outreachData = {
    outreachActivities,
    outvideotitle,
    outyear,
    outdesc,
    outyvideo,
    rechebrew,
    rechebrewtitle,
    rechebrewvideo,
    rechebrewtitletwo,
    rechebrewvideotwo,
    rechebrewtitleThree,
    rechebrewvideoThree,
    outact,
    outacttitle,
    outactdesc,
    imageUrlout,
    imageUrlouttwo,
    outacttitletwo,
    outactdesctwo,
    imageUrloutthree,
    imageUrloutfour,
    imageUrloutfive,
    imageUrloutsix,
    outacttitlethree,
    outactdescthree,
    imageUrloutseven,
  };

  localStorage.setItem("outreachSection", JSON.stringify(outreachData));
  alert("Outreach section saved!");
};

// Load saved outreach data on refresh
useEffect(() => {
  const savedOutreach = localStorage.getItem("outreachSection");
  if (savedOutreach) {
    const parsedOutreach = JSON.parse(savedOutreach);
    setOutreachActivities(parsedOutreach.outreachActivities);
    setOutvideotitle(parsedOutreach.outvideotitle);
    setOutyear(parsedOutreach.outyear);
    setOutdesc(parsedOutreach.outdesc);
    setOutyvideo(parsedOutreach.outyvideo);
    setRechebrew(parsedOutreach.rechebrew);
    setRechebrewtitle(parsedOutreach.rechebrewtitle);
    setRechebrewvideo(parsedOutreach.rechebrewvideo);
    setRechebrewtitletwo(parsedOutreach.rechebrewtitletwo);
    setRechebrewvideotwo(parsedOutreach.rechebrewvideotwo);
    setRechebrewtitleThree(parsedOutreach.rechebrewtitleThree);
    setRechebrewvideoThree(parsedOutreach.rechebrewvideoThree);
    setOutact(parsedOutreach.outact);
    setOutacttitle(parsedOutreach.outacttitle);
    setOutactdesc(parsedOutreach.outactdesc);
    setImageUrlout(parsedOutreach.imageUrlout);
    setImageUrlouttwo(parsedOutreach.imageUrlouttwo);
    setOutacttitletwo(parsedOutreach.outacttitletwo);
    setOutactdesctwo(parsedOutreach.outactdesctwo);
    setImageUrloutthree(parsedOutreach.imageUrloutthree);
    setImageUrloutfour(parsedOutreach.imageUrloutfour);
    setImageUrloutfive(parsedOutreach.imageUrloutfive);
    setImageUrloutsix(parsedOutreach.imageUrloutsix);
    setOutacttitlethree(parsedOutreach.outacttitlethree);
    setOutactdescthree(parsedOutreach.outactdescthree);
    setImageUrloutseven(parsedOutreach.imageUrloutseven);
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
      setContent({ ...contents, [newNavItem]: "New section content." });
      setNewNavItem("");
    }
  };

  // Delete a navigation menu item
  const deleteNavItem = (item) => {
    const updatedNav = navItems.filter((nav) => nav !== item);
    setNavItems(updatedNav);
    setSelectedSection(updatedNav[0] || ""); // Fallback to first available tab
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
        const reader = new FileReader();
        reader.onload = () => {
          const base64Image = reader.result;
          setImageUrl(base64Image);
          localStorage.setItem("homeImage", base64Image); // Save image to localStorage
        };
        reader.readAsDataURL(file); // Convert to Base64
      } else {
        setImageUrl("");
        localStorage.removeItem("homeImage"); // Remove if not an image
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

  const handleResearchFileUploadpertwo = (e) => {
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
  const handleResearchFileUploadperthree = (e) => {
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
  const handleResearchFileUploadperfour = (e) => {
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

  // Handle file upload for Research section imageUrlpertwo
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
    <div className="w-full min-h-screen bg-blue-600 flex flex-col p-8">

  <section className="bg-inherit"> 

    <div className="flex h-screen ">
      {/* Customization Sidebar */}
      {showCustomize ? (
        <div className="w-64 bg-gray-100 p-4 relative">
          <button
            onClick={() => setShowCustomize(false)}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
          >
            ✖
          </button>
          <h2 className="text-lg font-bold">Profile Details</h2>

          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 w-full rounded mt-2"
          />

          {/* GitHub Link */}
          <input
            type="text"
            placeholder="Enter your GitHub link"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            className="w-full border p-2 mt-2 rounded"
          />

          {/* Email Input */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-2 mt-2 rounded"
          />

<button 
    onClick={handleSaveProfileDetails} 
    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
  >
    Save Profile Details
  </button>

          <h2 className="text-lg font-bold mt-4">Customize Menu</h2>

          <div className="flex items-center mt-2">
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
                  className={`cursor-pointer ${selectedSection === item ? "font-bold text-blue-500" : ""}`}
                  onClick={() => setSelectedSection(item)}
                >
                  {item}
                </span>
                <button onClick={() => deleteNavItem(item)} className="text-red-500 ml-2">X</button>
              </li>
            ))}
          </ul>






          {selectedSection === "Home" && (
            <>

          
    <input
      type="text"
      placeholder="Name"
      value={homename}
      onChange={(e) => setHomename(e.target.value)}
      className="w-1/2 border p-2 rounded"
    />
    <input
      type="text"
      placeholder="Title"
      value={hometitle}
      onChange={(e) => setHometitle(e.target.value)}
      className="w-1/2 border p-2 rounded bg-white"
    />
  

              <textarea
                type="text"
                placeholder="Home Description"
                value={homedesc}
                onChange={(e) => setHomedesc(e.target.value)}
                className="w-full border p-2 mt-2 rounded"
              > </textarea>
                <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadhome}
          className="w-full border p-2 mt-2 rounded"
        />
                      <button onClick={handleSaveHome}>Save</button>

            </>
          )}











          {/* Dynamic input fields based on selected page */}
          {selectedSection === "Research" && (
            <>
            <h1 className="font-bold text-2xl">Research Section 1</h1>
              <input
                type="text"
                placeholder="Research Title"
                value={researchTitle}
                onChange={(e) => setResearchTitle(e.target.value)}
                className="w-full border p-2 mt-2 rounded"
              />
              <textarea
                placeholder="Research Description"
                value={researchDescription}
                onChange={(e) => setResearchDescription(e.target.value)}
                className="w-full h-32 border p-2 mt-2 rounded"
              ></textarea>
         <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUpload}
          className="w-full border p-2 mt-2 rounded"
        />
        <label className="text-lg font-semibold mt-4 block">Image Description</label>
      <textarea
        type="text"
      placeholder="Enter Image Description"
      value={imageDescription}
      onChange={(e) => setImageDescription(e.target.value)}
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
              <h1 className="font-bold text-2xl">Research Section 2</h1>

              <input
                type="text"
                placeholder="Research Title"
                value={researchTitletwo}
                onChange={(e) => setResearchTitletwo(e.target.value)}
                className="w-full border p-2 mt-2 rounded"
              />
              <textarea
                placeholder="Research Description"
                value={researchDescriptiontwo}
                onChange={(e) => setResearchDescriptiontwo(e.target.value)}
                className="w-full h-32 border p-2 mt-2 rounded"
              ></textarea>
         <input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadtwo}
          className="w-full border p-2 mt-2 rounded"
        />
        <label className="text-lg font-semibold mt-4 block">Image Description</label>
    <textarea
      placeholder="Enter Image Description"
      value={imageDescriptiontwo}
      onChange={(e) => setImageDescriptiontwo(e.target.value)}
      className="w-full border border-gray-300 p-3 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    > </textarea>
        


        <h1 className="font-bold text-2xl">Research Section 3</h1>

<input
  type="text"
  placeholder="Research Title"
  value={researchTitlethree}
  onChange={(e) => setResearchTitlethree(e.target.value)}
  className="w-full border p-2 mt-2 rounded"
/>
<textarea
  placeholder="Research Description"
  value={researchDescriptionthree}
  onChange={(e) => setResearchDescriptionthree(e.target.value)}
  className="w-full h-32 border p-2 mt-2 rounded"
></textarea>

<input
type="file"
accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
multiple
onChange={handleResearchFileUploadthree}
className="w-full border p-2 mt-2 rounded"
/>
<label className="text-lg font-semibold mt-4 block">Image Description</label>
<textarea
placeholder="Enter Image Description"
value={imageDescriptionthree}
onChange={(e) => setImageDescriptionthree(e.target.value)}
className="w-full border border-gray-300 p-3 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
> </textarea>



<h1 className="font-bold text-2xl">Research Section 4</h1>

<input
  type="text"
  placeholder="Research Title"
  value={researchTitlefour}
  onChange={(e) => setResearchTitlefour(e.target.value)}
  className="w-full border p-2 mt-2 rounded"
/>
<textarea
  placeholder="Research Description"
  value={researchDescriptionfour}
  onChange={(e) => setResearchDescriptionfour(e.target.value)}
  className="w-full h-32 border p-2 mt-2 rounded"
></textarea>

<input
type="file"
accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
multiple
onChange={handleResearchFileUploadfour}
className="w-full border p-2 mt-2 rounded"
/>
<label className="text-lg font-semibold mt-4 block">Image Description</label>
<textarea
placeholder="Enter Image Description"
value={imageDescriptionfour}
onChange={(e) => setImageDescriptionfour(e.target.value)}
className="w-full border border-gray-300 p-3 mt-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
> </textarea>


<label className="text-lg font-semibold mt-4 block">Recorded talks</label>

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
</button>




            </>
          )}

          {selectedSection === "Outreach" && (
            <>
            <input
              placeholder="Recorded Lectures"
              value={outreachActivities}
              onChange={(e) => setOutreachActivities(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
            />

<input
  type="text"
  placeholder="Video Title 1"
  value={outvideotitle}
  onChange={(e) => setOutvideotitle(e.target.value)}
  className="w-full border p-2 mt-2 rounded"
/>


<input
  type="text"
  placeholder="Year 2"
  value={outyear}
  onChange={(e) => setOutyear(e.target.value)}
  className="w-full border p-2 mt-2 rounded"
/>
<input
              placeholder="Recorded Lectures"
              value={outdesc}
              onChange={(e) => setOutdesc(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
            />
<input
          type="text"
          placeholder="Enter video URL 2"
          className="border p-2 mt-2 w-full"
          value={outyvideo}
          onChange={(e) => setOutyvideo(e.target.value)}
        />
        <input
              placeholder="Recorded Lectures(Hebrew)"
              value={rechebrew}
              onChange={(e) => setRechebrew(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
            />
<input
              placeholder="Recorded Lectures Title"
              value={rechebrewtitle}
              onChange={(e) => setRechebrewtitle(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
            />
            
            <input
          type="text"
          placeholder="Enter video URL "
          className="border p-2 mt-2 w-full"
          value={rechebrewvideo}
          onChange={(e) => setRechebrewvideo(e.target.value)}
        />
        <input
              placeholder="Recorded Lectures Title"
              value={rechebrewtitletwo}
              onChange={(e) => setRechebrewtitletwo(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
            />
            
            <input
          type="text"
          placeholder="Enter video URL "
          className="border p-2 mt-2 w-full"
          value={rechebrewvideotwo}
          onChange={(e) => setRechebrewvideotwo(e.target.value)}
        />
<input
              placeholder="Recorded Lectures Title"
              value={rechebrewtitleThree}
              onChange={(e) => setRechebrewtitleThree(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
            />
            
            <input
          type="text"
          placeholder="Enter video URL "
          className="border p-2 mt-2 w-full"
          value={rechebrewvideoThree}
          onChange={(e) => setRechebrewvideoThree(e.target.value)}
        />
<input
              placeholder="Outreach activities"
              value={outact}
              onChange={(e) => setOutact(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
            />
      <input
              placeholder="Outreach activities title"
              value={outacttitle}
              onChange={(e) => setOutacttitle(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
            />
            <input
              placeholder="Outreach activities description"
              value={outactdesc}
              onChange={(e) => setOutactdesc(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
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
              placeholder="Outreach activities title 2"
              value={outacttitletwo}
              onChange={(e) => setOutacttitletwo(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
            />
            <input
              placeholder="Outreach activities description 2"
              value={outactdesctwo}
              onChange={(e) => setOutactdesctwo(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
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
              placeholder="Outreach activities title 3"
              value={outacttitlethree}
              onChange={(e) => setOutacttitlethree(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
            />
            <input
              placeholder="Outreach activities description 3"
              value={outactdescthree}
              onChange={(e) => setOutactdescthree(e.target.value)}
              className="w-full h-32 border p-2 mt-2 rounded"
            />

<input
          type="file"
          accept=".pdf,.doc,.docx,.ppt,.pptx,image/*"
          multiple
          onChange={handleResearchFileUploadoutseven}
          className="w-full border p-2 mt-2 rounded"
        />
        <button onClick={handleSaveOutreach} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
  Save Outreach
</button>

</>
            
          )}






          {selectedSection === "Personal" && (

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


</>
          )}

          {/* Resume PDF Upload */}
          {selectedSection === "Resume" && (
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

         
        </div>
      ) : (
        <button
          onClick={() => setShowCustomize(true)}
          className="p-2 bg-gray-200 text-gray-700 fixed left-2 top-2 rounded z-50"
        >
          ✏️
        </button>
      )}




      {/* Template Preview */}
      <div className="flex-1 p-8 bg-blue-600 relative min-h-screen sm:p-6 md:p-8 lg:p-12">

      <div className="flex items-center justify-between p-4 bg-blue-600">
  <div className="text-4xl font-bold text-gray-100 relative left-4 top-1">{name}</div>  

  <nav className="flex space-x-4 text-md">
    {navItems.map((item) => (
      <span
        key={item}
        className={`cursor-pointer text-white ${
          selectedSection === item ? "font-bold" : "opacity-75"
        }`}
        onClick={() => setSelectedSection(item)}
      >
        {item}
      </span>
    ))}
  </nav>
</div>


        <div className="mt-[80px] text-center">
          {/* <h1 className="text-5xl font-bold">{selectedPage}</h1> */}

          
           {/* Display content based on selected page */}
           {selectedSection === "Resume" && pdfUrl ? (
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


 
 : selectedSection === "Research" ? (
             <>
             <h1 className="text-4xl font-bold text-left mt-38 pl-50">
  Research
</h1>
<div className="mt-12"></div>

 <div className="flex-grow w-full px-4 md:px-8 lg:px-16">

{/* First Research Section - Responsive Layout */}
<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-8">

  {/* Left - Text Section */}
  <div className="lg:w-3/5 text-left">
    <h3 className="text-2xl md:text-3xl font-semibold mt-6 md:mt-12 ml-20 lg:ml-34">{researchTitle}</h3>
    <div className="mt-7"></div>
    <p className="text-md text-black-2 mt-4 leading-relaxed max-w-xl text-justify break-words  ml-20 lg:ml-34">
      {researchDescription}
    </p>
  </div>

  {/* Right - Image Section */}
  <div className="lg:w-2/5 flex flex-col items-center lg:items-start relative top-20">
    {imageUrl ? (
      <>
        <img
          src={imageUrl}
          alt="Uploaded Preview"
          className="shadow-xl border-1 w-[320px] h-[270px] object-cover"
          />
        {/* Justified text below the image */}
        <p className="text-md text-black-10 mt-3 text-justify max-w-[320px] break-words">
        {imageDescription || "No description provided."}
        </p>
      </>
    ) : (
      <p className="text-gray-500">No image uploaded yet</p>
    )}
  </div>

</div>


<div className="mt-60"></div>

<div className="flex-grow w-full px-4 md:px-8 lg:px-16">

  {/* Second Research Section - Responsive Layout */}
  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-8">

    {/* Left - Text Section */}
    <div className="lg:w-3/5 text-left">
      <h3 className="text-2xl md:text-3xl font-semibold mt-6 md:mt-12 ml-20 lg:ml-20">
        {researchTitletwo}
      </h3>
      <div className="mt-7"></div>
      <p className="text-md text-black-2 mt-4 leading-relaxed max-w-xl text-justify break-words ml-20 lg:ml-20">
        {researchDescriptiontwo}
      </p>
    </div>

    {/* Right - Image Section */}
    <div className="lg:w-2/5 flex flex-col items-center lg:items-start relative top-20">
      {imageUrltwo ? (
        <>
          <img
            src={imageUrltwo}
            alt="Uploaded Preview"
            className="shadow-xl ml-3 w-[320px] h-[270px] object-cover"
          />
          {/* Justified text below the image */}
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



   {/* Third Research Section - Row Layout */}
<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-8">
  {/* Left - Text */}
  <div className="lg:w-3/5 text-left">
    <h3 className="text-3xl font-semibold mt-12 ml-20 lg:ml-34">{researchTitlethree}</h3>
    <p className="text-md text-black-700 mt-4 leading-relaxed max-w-xl text-justify break-words ml-20 lg:ml-34">
      {researchDescriptionthree}
    </p>
  </div>

  {/* Right - Image */}
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

   
{/* Fourth Research Section - Row Layout */}
<div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-8">
  {/* Left - Text */}
  <div className="lg:w-3/5 text-left">
    <h3 className="text-3xl font-semibold mt-12 ml-20 lg:ml-34">{researchTitlefour}</h3>
    <p className="text-sm text-black-700 mt-4 leading-relaxed max-w-xl text-justify break-words ml-20 lg:ml-34">
      {researchDescriptionfour}
    </p>
  </div>

  {/* Right - Image */}
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
  <h1 className="font-bold mt-20 text-4xl">{recorded}</h1>
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
</div>





</div>

         </>


           ) : selectedSection === "Outreach" ? (
            <>
            <div className="mt-40"></div>
<h1 className="text-5xl font-bold text-center">Outreach</h1>
<div className="mt-25"></div>
<div className="w-full flex flex-col mt-6 px-4 sm:px-6 lg:px-12">
  {/* Outreach Heading */}
  <hr className="mb-4 border-gray-300" />
  <div className="mt-6"></div>
  <h3 className="text-4xl md:text-5xl font-semibold mb-6 text-center ml-20 lg:ml-20">{outreachActivities}</h3>

  {/* Flexbox for Title, Year, Description (Left) & Video (Right) */}
  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between w-full gap-10">
    {/* Left Side - Text */}
    <div className="lg:w-3/4 text-left">
    <h1 className="text-2xl font-semibold mt-4 md:mt-6 lg:mt-10 text-center lg:text-left ml-20 lg:ml-50 break-words">
    {outvideotitle}
      </h1>
      <p className="text-md text-black-600 mt-2 text-center lg:text-left ml-20 lg:ml-50">{outyear}</p>
      <p
        className="text-sm text-black-7 mt-4 leading-relaxed text-center lg:text-left ml-20 lg:ml-50"
        style={{ textAlign: "justify" }}
      >
        {outdesc}
      </p>
    </div>

    {/* Right Side - Video */}
    <div className="w-full flex justify-center mr-16 mt-10">
    {outyvideo && getEmbedURL(outyvideo) ? (
      <div className="w-[560px] md:w-[480px] sm:w-[360px] max-w-full">

        <iframe
          width="100%"
          height="255"
          src={getEmbedURL(outyvideo) || null}
          title="Video"
          frameBorder="0"
          allowFullScreen
          className="rounded-lg shadow-lg max-w-[400px] md:max-w-[500px]"
        ></iframe>
        </div>
      ) : (
        <p className="text-gray-500 text-center">Paste a valid YouTube URL to watch</p>
      )}
    </div>
  </div>

    
<div className="mt-20"></div>
    {/* Research Hebrew Section */}
    <h3 className="text-5xl font-semibold mb-4 text-center">  
  {rechebrew}  
</h3>

{/* Responsive Flex Container */}
<div className="flex flex-col lg:flex-row items-center justify-center w-full gap-6 px-4 sm:px-6 lg:px-12">

  {/* Left Side - Title (Centered on small screens, left-aligned on large screens) */}
  <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
    <p className="text-2xl  ml-20 lg:ml-40">{rechebrewtitle}</p>
  </div>

  {/* Right Side - Video (Always Centered) */}
  <div className="w-full lg:w-1/2 flex justify-center mt-48 mr-16">
    {rechebrewvideo && getEmbedURL(rechebrewvideo) ? (
      <iframe
      className="rounded-lg shadow-xl w-full max-w-[320px] md:max-w-[360px] lg:max-w-[400px] h-[220px] md:h-[240px] lg:h-[255px]"
      src={getEmbedURL(rechebrewvideo)}
        title="Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    ) : (
      <p className="text-gray-500 text-center">Paste a valid YouTube URL to watch</p>
    )}
  </div>
</div>

    <div className="mt-20"></div>
    <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-6 mt-6">
      {/* Left Side - Title */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
      <p className="text-2xl  mb-2  ml-20 lg:ml-52">{rechebrewtitletwo}</p>
      </div>

      {/* Right Side - Video */}
      <div className="w-full lg:w-1/2 flex justify-center mt-3 mr-24">
      {rechebrewvideotwo && getEmbedURL(rechebrewvideotwo) ? (
          <iframe
         className="rounded-lg shadow-xl w-full max-w-[320px] md:max-w-[360px] lg:max-w-[400px] h-[220px] md:h-[240px] lg:h-[255px]"

            src={getEmbedURL(rechebrewvideotwo)}
            title="Video 2"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-gray-500">Paste a valid YouTube URL to watch</p>
        )}
      </div>
    </div>
    <div className="mt-20"></div>

    {/* Third Section */}
    <div className="flex flex-col lg:flex-row items-start justify-between w-full gap-6 mt-6">
      {/* Left Side - Title */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
      <p className="text-2xl  mb-2 ml-20 lg:ml-52">{rechebrewtitleThree}</p>
      </div>

      {/* Right Side - Video */}
      <div className="w-full lg:w-1/2 flex justify-center mt-6 mr-25">
      {rechebrewvideoThree && getEmbedURL(rechebrewvideoThree) ? (
          <iframe
                  className="rounded-lg shadow-xl w-full max-w-[320px] md:max-w-[360px] lg:max-w-[400px] h-[220px] md:h-[240px] lg:h-[255px]"

            src={getEmbedURL(rechebrewvideoThree)}
            title="Video 3"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ) : (
          <p className="text-gray-500">Paste a valid YouTube URL to watch</p>
        )}
      </div>
    </div>

{/* Outreach Activities Section */}
<div className="w-full flex flex-col mt-6">
  {/* Heading */}
  <h3 className="text-5xl font-semibold mb-10 text-center">{outact}</h3>

  {/* Flexbox for Layout - Centering Everything */}
  <div className="flex flex-col lg:flex-row items-center justify-center w-full gap-12">
    
    {/* Left Side - Title & Description */}
    <div className="lg:w-1/2 text-center lg:text-left">
      <h1 className="text-2xl font-bold">{outacttitle}</h1>
      <p className="text-md text-gray-700 mt-4 leading-relaxed mx-auto lg:mx-0" style={{ textAlign: "justify" }}>
        {outactdesc}
      </p>
    </div>
    {/* Right Side - Images Stacked Vertically */}
     <div className="relative flex justify-start items-center mt-6 ml-30">
      {/* First Image - Positioned Higher */}
      <img
        src={imageUrlout}
        alt="First Image"
        className="w-100 h-50 border-4 border-black shadow-lg absolute -top-6 -left-40"
      />

      {/* Second Image - Dragged Further Down */}
      <img
        src={imageUrlouttwo}
        alt="Second Image"
        className="w-55 h-50 border-4 border-black shadow-lg relative top-35"
      />
    </div>

  </div>

<div className="mt-80"></div>

{/* Outer Container for Centered Layout */}
<div className="flex flex-col justify-center items-center text-center w-full px-6 lg:px-0">
  
  {/* Title & Description Section */}
  <div className="flex flex-col lg:flex-row justify-between items-center w-full px-6 lg:px-16">
  
  {/* Left Side - Title & Description */}
  <div className="lg:w-1/2 text-left">
    <h1 className="text-2xl font-bold">{outacttitletwo}</h1>
    <p className="text-md text-black-7 mt-4 leading-relaxed text-justify">
      {outactdesctwo}
    </p>
  </div>

  {/* Right Side - Image Grid */}
  <div className="grid grid-cols-2 gap-6 lg:w-1/2 lg:ml-10">
    <img
      src={imageUrloutthree}
      alt="First Image"
      className="w-40 h-40 border-4 border-black shadow-lg"
    />
    <img
      src={imageUrloutfour}
      alt="Second Image"
      className="w-60 h-40 border-4 border-black shadow-lg"
    />
    <img
      src={imageUrloutfive}
      alt="Third Image"
      className="w-40 h-40 border-4 border-black shadow-lg"
    />
    <img
      src={imageUrloutsix}
      alt="Fourth Image"
      className="w-40 h-40 border-4 border-black shadow-lg"
    />
  </div>

</div>

</div>
</div>

<div className="mt-60"></div>



{/* Outer Container for Centered Layout */}
<div className="flex flex-col justify-center items-center text-center w-full px-6 lg:px-0">
  
  {/* Title & Description Section */}
  <div className="flex flex-col lg:flex-row justify-between items-center w-full px-6 lg:px-16">
  
  {/* Left Side - Title & Description */}
  <div className="lg:w-1/2 text-left">
    <h1 className="text-2xl font-bold">{outacttitlethree}</h1>
    <p className="text-md text-black-7 mt-4 leading-relaxed text-justify">
      {outactdescthree}
    </p>
  </div>

  {/* Right Side - Image Grid */}
  <div className="grid grid-cols-2 gap-6 lg:w-1/2 lg:ml-10">
    <img
      src={imageUrloutseven}
      alt="First Image"
      className="w-[600px] h-40 border-4 border-black shadow-lg"
      />
  
  </div>

</div>

</div>



</div>
  
</>


           ) : selectedSection === "Personal" ? (
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









            ) : selectedSection === "Home" ? (
              <>
  <div className="mt-24"></div> {/* Adjust spacing from top */}

  <div className="flex justify-between items-center px-20 max-w-6xl mx-auto relative">
    {/* Profile Image - Circular */}
    <div className="w-[210px] h-[330px] border-2 rounded-t-[150px] overflow-hidden shadow-xl relative bottom-7 right-6">
    <img
        src={imageUrlhome} 
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Home Name, Title, and Description */}
    <div className="text-left max-w-lg relative  top-[-80px] right-[-16px]">
      <h1 className="text-6xl font-bold">{homename || "Your Name"}</h1>
      <h2 className="text-2xl font-semibold text-black-600 relative top-13">
      {hometitle || "Your Title"}
      </h2>
      <p className="text-md text-gray  mt-4 leading-relaxed relative top-17">
        {homedesc || "Your description goes here. Add details about yourself or your role."}
      </p>
    </div>
  </div>
{/* 
  <div className="flex justify-end gap-3 mt-16  relative right-72">
    <div className="w-28 h-28 flex items-center justify-center text-white text-[1.371rem]   hover:bg-white hover:text-[#0F4C4C] font-semibold border-2 border-black-500  bg-[#0F4C4C] rounded-full"
                onClick={() =>  setSelectedSection("Resume")}

    >
      Resume
    </div>
    <div className="w-28 h-28 flex items-center justify-center text-black text-[1.369rem] hover:bg-white  font-semibold border-2 border-blue-500 bg-[#248080] rounded-full"
        onClick={() =>  setSelectedSection("Research")}

    >
    Research
    
    </div>
    <div className="w-28 h-28 flex items-center justify-center text-black text-[1.372rem] hover:bg-white  font-semibold border-2 border-blue-400 bg-[#7EDCDC] rounded-full"
            onClick={() => setSelectedSection("Outreach")}

    >
    Outreach
    </div>
    <div className="w-28 h-28 flex items-center justify-center text-black text-[1.372rem]  hover:bg-white font-semibold border-2 border-blue-500   bg-[#D3D3D3] rounded-full"
                onClick={() => setSelectedSection("Personal")}

    >
Personal    
</div>
  </div> */}
</>

           
           

           ) : (
             contents[selectedSection])}
        
           {/* <div className="flex flex-col min-h-screen"> */}
<hr className="border-gray-800 opacity-50" />
<footer className=" text-black py-6 w-full mt-auto">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col md:flex-row justify-between items-start w-full">
      
      {/* Email Section - Left Aligned */}
      {email && (
        <div className="w-1/3 text-left">
          <p className="text-lg font-semibold">Email</p>
          <p className="text-md">{email}</p>
        </div>
      )}

      {/* Spacer to create some gap */}
      <div className="flex-grow"></div>

      {/* GitHub Section - Towards the Right */}
      {github && (
        <div className="w-1/3 text-left">
          <p className="text-lg font-semibold">GitHub</p>
          <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {github}
          </a>
        </div>
      )}

    </div>
  </div>
</footer>

</div>


      </div>
   </div>
</section>
   </div>
  );
};

export default Portfoliotwo;

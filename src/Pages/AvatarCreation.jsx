import React, { useState } from "react";
import { AvatarCreator } from "@readyplayerme/react-avatar-creator";
import { useNavigate } from "react-router-dom"; // Assuming you are using react-router

const config = {
  clearCache: true,
  bodyType: "fullbody",
  quickStart: false,
  language: "en",
};

const style = { width: "100%", height: "100vh", border: "none" };

export default function AvatarCreatorComponent() {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const navigate = useNavigate();

  const handleOnAvatarExported = (event) => {
    const url = event.data.url;
    console.log(`Avatar URL is: ${url}`);
    setAvatarUrl(url);
  };

  const handleFinish = () => {
    if (avatarUrl) {
      localStorage.setItem("userAvatar", avatarUrl);
      console.log("Avatar URL saved:", avatarUrl); // Verify it's correct
      navigate("/avatar-display");
    } else {
      alert("Please create an avatar first.");
    }
  };

  return (
    <div className="mt-16" style={{ position: "relative", height: "100vh" }}>
      <AvatarCreator
        subdomain="Zori"
        config={config}
        style={style}
        onAvatarExported={handleOnAvatarExported}
      />
      {/* Add a Finish button */}
      <button
        onClick={handleFinish}
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        Finish
      </button>
    </div>
  );
}

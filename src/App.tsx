import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import LinGO from "./components/LinGO";
import ChooseALanguage from "components/ChooseALanguage";
import Map from "components/Map";
import MapArrivedAtLocation from "components/MapArrivedAtLocation";
import SelectDuration from "components/SelectDuration";
import ARFindItem from "components/ARFindItem";
import ARListen from "components/ARListen"; 
import ARFindText from "components/ARFindText";
import ARSpeak from "components/ARSpeak";
import MapNearOtherUser from "./components/MapNearOtherUser";
import UserPopup from "./components/UserPopup";
import Chat from "./components/Chat";
import ChatHint from "./components/ChatHint";

function App() {

  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LinGO/>}/>
          <Route path="/choose-a-language" element={<ChooseALanguage/>}/>
          <Route path="/map" element={<Map/>}/>
          <Route path="/map-arrived-at-location" element={<MapArrivedAtLocation/>}/>
          <Route path="/select-duration" element={<SelectDuration/>}/>
          <Route path="/ar-find-item" element={<ARFindItem/>}/>
          <Route path="/ar-listen" element={<ARListen/>}/>
          <Route path="/ar-find-text" element={<ARFindText/>}/>
          <Route path="/ar-speak" element={<ARSpeak/>}/>
          <Route path="/map-near-other-user" element={<MapNearOtherUser/>}/>
          <Route path="/user-popup" element={<UserPopup/>}/>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/chat-hint" element={<ChatHint/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

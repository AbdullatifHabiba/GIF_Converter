import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { Button } from "./components/Button";
import { Inputfile } from "./components/Inputfile";
import { Header } from "./components/Header";
import { Resultimg } from "./components/Resultimg";
import { Inputvideo } from "./components/Inputvideo";
import { Dbutton } from "./components/Dbutton";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./components/About";
import Footer from "./components/Footer"; // Import Footer component
import SamplePage from "./components/SamplePage";

// Create the FFmpeg instance and load it
const ffmpeg = new FFmpeg({ log: true });

function App() {
  const [ready, setReady] = useState(false);
  const [video, setVideo] = useState();
  const [gif, setGif] = useState();
  const [fps, setFps] = useState(15);
  const [scale, setScale] = useState(1000);
  const [isLoading, setIsLoading] = useState(false);

  const load = async () => {
    await ffmpeg.load();
    setReady(true);
  };

  useEffect(() => {
    load();
  }, []);

  const fetchFile = async (file) => {
    const response = await fetch(URL.createObjectURL(file));
    const buffer = await response.arrayBuffer();
    return new Uint8Array(buffer);
  };

  const convertToGif = async () => {
    if (!ffmpeg || !video) return;
    await ffmpeg.load();

    // Write the .mp4 to the FFmpeg file system
    await ffmpeg.writeFile('input.mp4', await fetchFile(video));

    try {
      setIsLoading(true);
      await ffmpeg.exec([
        "-i", "input.mp4", 
        "-vf", `fps=${fps},scale=${scale}:-1:flags=lanczos,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse`, 
        "-f", "gif", 
        "output.gif"
      ]);

      // Read the output file
      const data = await ffmpeg.readFile('output.gif');

      const url = URL.createObjectURL(new Blob([data.buffer], { type: "image/gif" }));
      setGif(url);
      toast.success("Conversion Successful!");
    } catch (e) {
      console.error(e);
      toast.error("Conversion Failed.");
    } finally {
      setIsLoading(false);
    }
  };

  const download = (e) => {
    console.log(e.target.href);
    fetch(e.target.href, {
      method: "GET",
      headers: {},
    })
    .then((response) => {
      response.arrayBuffer().then(function (buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.gif");
        document.body.appendChild(link);
        link.click();
      });
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const Home = () => (
    <div className="App">
      {video && <Inputvideo video={video} />}
      <Inputfile setVideo={setVideo} />

      <div className="input-container">
        <div className="input-bar">
          <label>FPS:</label>
          <input
            type="number"
            value={fps}
            onChange={(e) => setFps(e.target.value)}
          />
        </div>
        <div className="input-bar">
          <label>Scale:</label>
          <input
            type="number"
            value={scale}
            onChange={(e) => setScale(e.target.value)}
          />
        </div>
      </div>

      <Button convertToGif={convertToGif} />
      {isLoading && <div className="loading">Converting...</div>}
      <h1> </h1>
	  <ToastContainer
        
      />
      {gif && <Resultimg gif={gif} />}
      {gif && <Dbutton gif={gif} download={download} />}
    </div>
  );

  return ready ? (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
		<Route path="/samples" element={<SamplePage/>}/>
      </Routes>
      <Footer /> {/* Include Footer component */}
    </Router>
  ) : (
    <p>Loading...</p>
  );
}

export default App;

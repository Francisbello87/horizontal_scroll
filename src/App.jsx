import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { imageData } from "./data";
import GalleryItem from "./components/GalleryItem";
import "./styles/style.scss";
import LocomotiveScroll from 'locomotive-scroll'
import '../node_modules/locomotive-scroll/src/styles/_base.scss'
import '../node_modules/locomotive-scroll/src/styles/_scrollbar.scss'
import { useEffect, useRef } from "react";

function App() {
  const ref = useRef(null)
  useEffect(() => {
    if(ref){
      new LocomotiveScroll({
        el:ref.current,
        smooth:true,
        direction: "horizontal"
      })
    }
  })
  const images = imageData.map((tupples, index) =>
    tupples.map((url, elementIndex) => (
      <GalleryItem
        key={url}
        index={elementIndex}
        src={url}
        columnOffset={index * 14}
      />
    ))
  );

  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="scroll-container" data-scroll-container ref={ref}>
          <div className="content">
            <div className="gallery">
              {images}
              <div className="gallery-helper">Scroll to Discover More</div>
              <div className="behind-text fill" data-scroll >
                Everybody Loves a Good Story
              </div>
              <div className="behind-text fill" data-scroll >
                Everybody Loves a Good Story
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

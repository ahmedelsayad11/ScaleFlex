import Carousal from "components/Carousal/Carousal";
import Gallery from "components/Gallery/Gallery";
import Modal from "components/Modal/Modal";
import { useEffect, useState } from "react";
import { getAllImagesApi } from "./api/server";
import "./App.scss";

function App() {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState();
  useEffect(() => {
    async function fetchData() {
      const data = await getAllImagesApi();
      setData(data);
    }
    fetchData();
  }, []);

  const handleGalleryImageClick = (e) => {
    const { id } = e?.target || {};
    setCurrentSlide(parseInt(id));
    setShowModal(true);
  };

  const handleNextClick = () => {
    setCurrentSlide((p) => parseInt(p) + 1);
  };
  const handlePreviousClick = () => {
    setCurrentSlide((p) => parseInt(p) - 1);
  };

  const handleCloseButtonModalClick = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Modal
        showModal={showModal}
        handleCloseButtonModalClick={handleCloseButtonModalClick}
      >
        <Carousal
          data={data}
          currentSlide={currentSlide}
          handleNextClick={handleNextClick}
          handlePreviousClick={handlePreviousClick}
        />
      </Modal>
      <Gallery data={data} handleGalleryImageClick={handleGalleryImageClick} />
    </div>
  );
}

export default App;

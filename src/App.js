import React, { useState } from "react";
import AppHeader from "./layout/header";
import Banner from "./components/Banner";
import MusicSection from "./components/MusicSection";
import BodySection from "./components/BodySection";
import Modal from "./components/modal";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div>
      <AppHeader />
      <BodySection>
        <Banner onOpenModal={handleOpenModal} />
        <MusicSection />
      </BodySection>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <p>DIRECCION : AVENIDA DEL AIRE 1250</p>
        <p>HORA: apartir de las 9pm</p>
        <p>DIA 27/09</p>
        <p>que vengan los que quieran</p>
        <p>SOLO ACEPTAMOS RONES</p>
      </Modal>
    </div>
  );
};

export default App;

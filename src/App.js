import React, { useState } from "react";
import AddMeeting from "./components/AddMeeting";
import Dialog from "@material-ui/core/Dialog";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!showModal && <button onClick={handleShowModal}>Show Popup</button>}
      <Dialog open={showModal} onClose={closeModal} fullScreen>
        <AddMeeting onCloseModal={closeModal} />
      </Dialog>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useDarkMode from "use-dark-mode";

const CallNowAction = ({ number }: { number: string }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const darkMode = useDarkMode();

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor;
      if (/android/i.test(userAgent) || /iPhone|iPad|iPod/i.test(userAgent)) {
        return true;
      }
      return false;
    };

    const mobileDetected = checkIfMobile();
    setIsMobile(mobileDetected);
  }, []);

  const initiateCall = () => {
    if (isMobile) {
      window.location.href = `tel:${number}`;
    } else {
      setModalOpen(true);
    }
  };

  const handleCall = () => {
    setModalOpen(true);
  };

  return (
    <div>
      {isMobile ? (
        <p>Calling now...</p>
      ) : (
        <button onClick={handleCall} className="text-blue-500 hover:text-blue-700">
          Call us at {number}
        </button>
      )}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} aria-labelledby="modal-title" aria-describedby="modal-description">
        <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 300, bgcolor: darkMode.value ? "rgba(0, 0, 0, 0.8)" : "white", color: darkMode.value ? "white" : "black", boxShadow: 24, p: 4, borderRadius: 2 }}>
          <Typography id="modal-title" variant="h6" component="h2">Avail amazing Offers!</Typography>
          <Typography id="modal-description" sx={{ mt: 2 }}>Call now for better deals: {number}</Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default CallNowAction;

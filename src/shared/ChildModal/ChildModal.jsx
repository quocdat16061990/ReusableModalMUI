import { useState } from "react";
import ReusableModal from "../Modal/Modal";
import { Button } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function ChildModal({ parentClose }) {
  const [childOpen, setChildOpen] = useState(false);

  const handleChildOpen = () => setChildOpen(true);
  const handleChildClose = () => {
    setChildOpen(false);
  };

  return (
    <div>
      <Button onClick={handleChildOpen}>Open Child Modal</Button>
      <ReusableModal
        open={childOpen}
        onClose={handleChildClose}
        heading="Child Modal Heading"
        footerContent={
          <Button variant="outlined" color="error" onClick={handleChildClose}>
            Close Child Modal
          </Button>
        }
      >
        <p>This is the child modal content.</p>
      </ReusableModal>
    </div>
  );
}

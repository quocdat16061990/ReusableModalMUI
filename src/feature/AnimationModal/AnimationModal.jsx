import { useState } from "react";
import { Button } from "@mui/material";
import ReusableModal from "../../shared/Modal/Modal";
import ChildModal from "../../shared/ChildModal/ChildModal";
import "./Animation.css";
import styled from "styled-components";
export default function AnimationModal() {
  const [open, setOpen] = useState(false);

  const StyledButton = styled(Button)`
    background-color: #007bff;

    color: white;
    border-radius: 4px;
    padding: 10px 20px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0056b3;
    }
  `;
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        Animation Modal
      </Button>
      <ReusableModal
        open={open}
        onClose={handleClose}
        heading="Picture shared"
        isAnimate
        footerContent={
          <>
            <StyledButton color="primary" onClick={handleClose}>
              Parent Close
            </StyledButton>
            <ChildModal parentClose={handleClose} />
          </>
        }
      >
        <div className="content">
          <img
            className="img"
            src="https://s3-alpha-sig.figma.com/img/cffe/75af/a4c5f9d8ccb219c90705aa61d3472bb1?Expires=1699228800&Signature=UcefY3qO8F5TC6vtBftNYWRBo9EpDXcNih4WD2GXC2F8udVRcGl43dbiOZOpqAWsaouhcf4viT36juSb7VG92u49911dMvG1DrgKykiugZWfExFt71ANp626pEMPb2Y22V8ZyK9rR408zba08MneA2m3iycnQGaQPCZ6VO9lY61-vRzvw6S26rsrXhtwfwQNE6O01Oh6npyXZDcNHtQ9T83NtmtG83T6~gKMAHeT5y7oaeLmsGoWkGZAsIiZDyKU-P-GHcVm2B03nsMOTy2rBTVH09Tm1bB79VumVddRmTDcOAmN8DrEaBTX8XIDzLeAWdr886wwIbYPhR6mnxNUwA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </div>
      </ReusableModal>
    </div>
  );
}

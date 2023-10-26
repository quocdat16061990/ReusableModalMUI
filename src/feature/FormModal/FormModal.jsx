import { Button } from "@mui/material";
import { useState } from "react";
import "./FormModal.css";
import ReusableModal from "../../shared/Modal/Modal";
import TextField from "@mui/material/TextField";
export default function FormModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        FormModal
      </Button>
      <ReusableModal
        open={open}
        onClose={handleClose}
        isAnimate={false}
        heading={
          <>
            <div className="modal-top">
              <div className="modal-top-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M14.0914 6.72222H20.0451C20.5173 6.72222 20.7534 6.72222 20.8914 6.82149C21.0119 6.9081 21.0903 7.04141 21.1075 7.18877C21.1272 7.35767 21.0126 7.56403 20.7833 7.97677L19.3624 10.5343C19.2793 10.684 19.2377 10.7589 19.2214 10.8381C19.207 10.9083 19.207 10.9806 19.2214 11.0508C19.2377 11.13 19.2793 11.2049 19.3624 11.3545L20.7833 13.9121C21.0126 14.3248 21.1272 14.5312 21.1075 14.7001C21.0903 14.8475 21.0119 14.9808 20.8914 15.0674C20.7534 15.1667 20.5173 15.1667 20.0451 15.1667H12.6136C12.0224 15.1667 11.7269 15.1667 11.5011 15.0516C11.3024 14.9504 11.141 14.7889 11.0398 14.5903C10.9247 14.3645 10.9247 14.0689 10.9247 13.4778V10.9444M7.23027 21.5L3.00805 4.61111M4.59143 10.9444H12.4025C12.9937 10.9444 13.2892 10.9444 13.515 10.8294C13.7137 10.7282 13.8751 10.5667 13.9763 10.3681C14.0914 10.1423 14.0914 9.84672 14.0914 9.25556V4.18889C14.0914 3.59772 14.0914 3.30214 13.9763 3.07634C13.8751 2.87773 13.7137 2.71625 13.515 2.61505C13.2892 2.5 12.9937 2.5 12.4025 2.5H4.64335C3.90602 2.5 3.53735 2.5 3.2852 2.65278C3.0642 2.78668 2.89999 2.99699 2.82369 3.24387C2.73663 3.52555 2.82605 3.88321 3.00489 4.59852L4.59143 10.9444Z"
                    stroke="#344054"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <di className="modal-top-icon" onClick={handleClose}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="#667085"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </di>
            </div>
            <h3 className="heading">Add experience</h3>
            <p className="desc">Share where you’ve worked on your profile.</p>
          </>
        }
        footerContent={
          <>
            <Button
              variant="contained"
              sx={{
                borderRadius: "8px",
                border: "1px solid var(--gray-300, #D0D5DD)",
                background: "var(--base-white, #FFF)",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                color: "var(--gray-700, #344054)",
                fontFamily: "Inter",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "24px",
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "8px",
                border: "1px solid var(--primary-600, #7F56D9)",
                background: "var(--primary-600, #7F56D9)",
                boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                color: "var(--base-white, #FFF)",
                fontFamily: "Inter",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "24px",
              }}
            >
              Confirm
            </Button>
          </>
        }
      >
        <label className="label">Company</label>
        <TextField
          placeholder="What is your company?"
          sx={{
            width: "100%",
            marginBottom: "16px",
          }}
        />

        <label className="label">Job</label>
        <TextField
          placeholder="What is your Job?"
          sx={{
            width: "100%",
            marginBottom: "16px",
          }}
        />
        <label className="label">Website</label>
        <TextField
          placeholder="What is your website?"
          sx={{
            width: "100%",
            marginBottom: "16px",
          }}
        />
        <label className="label">Description</label>
        <TextField
          placeholder="What is your description?"
          sx={{
            width: "100%",
            marginBottom: "16px",
          }}
        />
      </ReusableModal>
    </div>
  );
}

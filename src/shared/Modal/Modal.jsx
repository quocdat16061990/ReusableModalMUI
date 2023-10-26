import PropTypes from "prop-types";
import Modal from "@mui/material/Modal";
import "./Modal.css";

import { motion } from "framer-motion";

export default function ReusableModal({
  open,
  onClose,
  heading,
  children,
  footerContent,
  className,
  isAnimate = true,
  ...rest
}) {
  const fadeInOut = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 2 },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 2 },
    },
  };

  return (
    <Modal
      className={`${className} modal-background`}
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      {...rest}
    >
      {isAnimate ? (
        <motion.div
          className="modal-wrapper"
          initial="hidden"
          animate={open ? "visible" : "hidden"}
          exit="exit"
          variants={fadeInOut}
        >
          {heading && (
            <div className="modal-header" id="modal-title">
              {heading}
            </div>
          )}
          <div className="modal-content">{children}</div>
          {footerContent && <div className="modal-footer">{footerContent}</div>}
        </motion.div>
      ) : (
        <div className="modal-wrapper">
          {heading && (
            <div className="modal-header" id="modal-title">
              {heading}
            </div>
          )}
          <div className="modal-content">{children}</div>
          {footerContent && <div className="modal-footer">{footerContent}</div>}
        </div>
      )}
    </Modal>
  );
}

ReusableModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  heading: PropTypes.string,
  children: PropTypes.node.isRequired,
  footerContent: PropTypes.node,
  className: PropTypes.string,
  isAnimate: PropTypes.bool,
};

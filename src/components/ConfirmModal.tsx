import { createPortal } from "react-dom";
import SuccessCheck from "../assets/icon-success.svg";

export interface Props {
  onClose: () => void;
}

const ConfirmModal = (props: Props) => {
  return createPortal(
    <>
      <div
        className="background-overlay"
        // ref={props.backgroundRef}
        onClick={props.onClose}
      ></div>
      <div className="modal">
        <img src={SuccessCheck} alt="Success Icon" />
        <h2 className="modal__header">Thanks for subscribing!</h2>
        <p className="modal__message">
          A confirmation email has been sent to{" "}
          <span className="modal__span">ash@loremcompany.com</span>. Please open
          it and click the button inside to confirm your subscription.
        </p>
        <button className="modal__button" onClick={props.onClose}>
          Dismiss message
        </button>
      </div>
    </>,
    document.getElementById("modal")!
  );
};

export default ConfirmModal;

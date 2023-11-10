import CheckMark from "./assets/icon-list.svg";
import ConfirmModal from "./components/ConfirmModal.tsx";
import "./App.scss";
import { FormEvent, useRef, useState } from "react";

function App() {
  const [emailError, setEmailError] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);

  const validate = (value: string) => {
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
  };

  const onEmailFocus = (): void => {
    if (validate(emailRef.current!.value)) {
      setEmailError(false);
    } else setEmailError(true);
  };

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!emailError) setModalOpen(true);
  };

  const onCloseHandler = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && <ConfirmModal onClose={onCloseHandler} />}
      <section className="form">
        <form className="form-input" onSubmit={onSubmitHandler}>
          <h2 className="form-input__header">Stay updated!</h2>
          <p className="form-input__text">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <ul className="form-input-feature-list">
            <li className="form-input-feature-list__item">
              <img
                className="form-input-feature-list__item__check"
                src={CheckMark}
                alt="Check Mark"
              ></img>
              <p className="form-input-feature-list__item__text">
                Product discovery and building what matters
              </p>
            </li>
            <li className="form-input-feature-list__item">
              <img
                className="form-input-feature-list__item__check"
                src={CheckMark}
                alt="Check Mark"
              ></img>

              <p className="form-input-feature-list__item__text">
                Measuring to ensure updates are a success
              </p>
            </li>
            <li className="form-input-feature-list__item">
              <img
                className="form-input-feature-list__item__check"
                src={CheckMark}
                alt="Check Mark"
              ></img>

              <p className="form-input-feature-list__item__text">
                And much more!
              </p>
            </li>
          </ul>

          <label className="form-input__label" ref={labelRef}>
            Email address
          </label>
          {emailError && (
            <label className=" form-input__label error-text">
              validate email address
            </label>
          )}
          {emailError ? (
            <input
              className="error-input"
              type="email"
              id="email"
              required
              placeholder={"email@company.com"}
              ref={emailRef}
              onChange={onEmailFocus}
            />
          ) : (
            <input
              type="email"
              id="email"
              required
              placeholder={"email@company.com"}
              ref={emailRef}
              onChange={onEmailFocus}
            />
          )}
          <input
            type="submit"
            id="submit"
            value={"Submit to monthly newsletter"}
          />
        </form>
        <div className="form-illustration">{""}</div>
      </section>
    </>
  );
}

export default App;

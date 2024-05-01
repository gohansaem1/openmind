import "../styles/Modal.css";
import messageIconBlack from "../assets/icons/Messages.svg";
import closeIcon from "../assets/icons/Close.svg";
import profile from "../assets/images/Photo.svg";

const Modal = ({ setIsModalOpen, modalBackgroundRef }) => {
  const onClickModal = (e) => {
    if (e.target === modalBackgroundRef.current) {
      setIsModalOpen(false);
    }
  };

  return (
    <>
      <div
        className="modal-background"
        ref={modalBackgroundRef}
        onClick={onClickModal}
      >
        <div className="modal-container">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-notice">
                <img
                  className="modal-icon"
                  src={messageIconBlack}
                  alt="messageIconBlack"
                />{" "}
                질문을 작성하세요
              </span>
              <img
                className="modal-icon close"
                src={closeIcon}
                alt="closeIcon"
                onClick={() => setIsModalOpen(false)}
              />
            </div>
            <p className="modal-addressee">
              To.
              <img className="modal-icon" src={profile} alt="profile" />
              마루는 고양이
            </p>
            <input
              className="modal-input"
              type="text"
              placeholder="질문을 입력해주세요"
            ></input>
            <button className="modal-btn">질문 보내기</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;

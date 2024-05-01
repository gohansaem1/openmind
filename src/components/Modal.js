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
    <div>
      <div
        className="modal-container"
        ref={modalBackgroundRef}
        onClick={onClickModal}
      >
        <div className="modal-content">
          <div>
            <span className="modal-notice">
              <img src={messageIconBlack} alt="messageIconBlack" /> 질문을
              작성하세요
            </span>
            <img
              src={closeIcon}
              alt="closeIcon"
              onClick={() => setIsModalOpen(false)}
            />
          </div>
          <p>
            To.
            <img src={profile} alt="profile" />
            마루는 고양이
          </p>
          <input type="text"></input>
          <button>질문 보내기</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;

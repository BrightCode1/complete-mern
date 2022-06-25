import React from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { AiOutlineArrowLeft, AiFillCloseCircle } from "react-icons/ai";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border: "none",
    maxWidth: "500px",
    width: "100%",
  },
};

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 15px;
  box-shadow: 11px 11px 43px -14px rgba(0, 0, 0, 0.45);

  .searchInput {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 2px 5px;

    svg {
      width: 10%;
      font-size: 1.2rem;
      cursor: pointer;
    }

    input {
      width: 90%;
      padding: 10px;
      border: none;
      outline: none;
      font-size: 14px;
      font-weight: 300;
    }
  }
  .modalContent {
    padding: 10px;
  }
`;

const SearchModal = ({ isModalOpen, setIsModalOpen }) => {
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeValue = (e) => {
    setSearchValue(e.target.value);
  };

  const clearValue = () => {
    setSearchValue("");
  };
  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Example Modal"
        style={customStyles}
      >
        <SearchContainer>
          <div className="searchInput">
            <AiOutlineArrowLeft onClick={() => setIsModalOpen(false)} />
            <input
              type="text"
              placeholder="Search"
              value={searchValue}
              onChange={onChangeValue}
            />
            {searchValue && <AiFillCloseCircle onClick={clearValue} />}
          </div>
          <hr
            style={{
              width: "100%",
              border: "0.6px solid #ccc",
            }}
          />
          <div className="modalContent">
            <p>
              Enim irure quis occaecat deserunt consectetur aliqua occaecat nisi
              aliquip irure amet. Amet quis velit dolore mollit est dolor aute
              quis labore non anim Lorem cupidatat qui. Incididunt labore eu
              dolore pariatur fugiat. Ad dolore non excepteur Lorem. Do Lorem
              nostrud proident Lorem excepteur Lorem elit exercitation cupidatat
              ea.
            </p>
          </div>
        </SearchContainer>
      </Modal>
    </div>
  );
};

export default SearchModal;

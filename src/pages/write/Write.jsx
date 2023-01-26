import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import JK from "../../shared/JKHeader";

const Add = () => {
  const navigate = useNavigate();
  const [lists, setLists] = useState({
    title: "",
    content: "",
    image: "",
    // visit: 0,
  });

  // 토큰 값 로컬스토리지에서 지정가져오기
  const token = localStorage.getItem("Authorizationtest");

  //이미지 미리보기와 파일첨부 기능
  const [imgBase64, setImgBase64] = useState([]); // 파일 base64
  const [imgFile, setImgFile] = useState(null); //파일
  //미리보기
  const handleChangeFile = (event) => {
    setImgFile(event.target.files);
    setImgBase64([]);
    for (var i = 0; i < event.target.files.length; i++) {
      if (event.target.files[i]) {
        let reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onloadend = () => {
          const base64 = reader.result;
          if (base64) {
            var base64Sub = base64.toString();
            setImgBase64((imgBase64) => [...imgBase64, base64Sub]);
          }
        };
      }
    }
  };
  //그림파일 폼데이터로 보내기
  const onWriteHandler = async (lists) => {
    const fd = new FormData();
    Object.values(imgFile).forEach((file) => fd.append("file", file));
    fd.append("title", lists.title);
    fd.append("content", lists.content);
    await axios
      .post(`${process.env.REACT_APP_LIST}/posts`, fd, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.data) {
        }
      })
      .catch((error) => {});
    navigate("/List");
  };

  return (
    <>
      <JK>
        <div
          className="
        box-decoration-clone 
        bg-gradient-to-r 
        from-indigo-600 
        to-pink-500 
        text-white px-2 
        box-content h-450 w-320 p-4 
        border-4
        rounded-3xl
        flex 
        flex-col 
        justify-center
        "
        >
          <StAddCard>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onWriteHandler(lists);
              }}
            >
              <StInputBox>
                <br />
                <StInput
                  fullwidth
                  type="text"
                  onChange={(event) => {
                    const { value } = event.target;
                    setLists({
                      ...lists,
                      listName: value,
                    });
                  }}
                  placeholder="제목 : "
                  value={lists.listName}
                  name="listName"
                  required
                />
                <StInputJpg
                  type="file"
                  accept="image/jpg,image/png,image/jpeg,image/gif"
                  onChange={handleChangeFile}
                  multiple="multiple"
                />
                {imgBase64.map((item) => {
                  return (
                    <img
                      className="
                      m-auto
                      "
                      key={Date.now()}
                      src={item}
                      alt="First slide"
                      style={{ width: "80%", height: "80%" }}
                    />
                  );
                })}
                <Textarea
                  name="text"
                  onChange={(event) => {
                    const { value } = event.target;
                    setLists({
                      ...lists,
                      text: value,
                    });
                  }}
                  value={lists.text}
                  rows="10"
                  maxLength={200}
                  placeholder="게시글 설명 : "
                  required
                />
              </StInputBox>
              <StButtons>
                <StButton type="submit">저장하기</StButton>
                <StButton
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  뒤로가기
                </StButton>
              </StButtons>{" "}
            </form>
          </StAddCard>
        </div>
      </JK>
    </>
  );
};

export default Add;

// 전체중앙정렬

// textarea 크기고정(width 100%)및 css
const Textarea = styled.textarea`
  margin-top: 10px;
  width: 200px;
  border: 1px solid #eee;
  padding: 5px;
  font-size: 14px;
  border-radius: 20px;
  width: 300px;
`;
const StAddCard = styled.div`
  padding: 50px 0 30px 0;
  display: flex;
  justify-content: center;
  flex-direction: row;
  background-color: #dadada;
  width: 400px;
  height: fit-content;
  border-radius: 60px;
`;

const StButton = styled.button`
  margin: 10px auto auto auto;
  background-color: black;
  text-align: center;
  width: 90px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 1px solid black;
  font-weight: bold;
  font-size: 13px;
  color: white;
  cursor: pointer;
`;
const StButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

const StInputBox = styled.div`
  margin-top: -50px;
  width: 400px;
  text-align: center;
`;
const StInput = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 15px;
  border: none;
  padding: 5px;
  margin-top: 5px;
`;

const StInputJpg = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 15px;
  border: none;
  padding: 5px;
  margin-top: 5px;
`;

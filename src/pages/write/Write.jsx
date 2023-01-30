import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import JK from "../../shared/JKHeader";

const Add = () => {
  const navigate = useNavigate();
  /*  const [imageUrl, setimageUrl] = useState({
    imageUrl: "",
  });
 */
  const [lists, setLists] = useState({
    title: "",
    content: "",
    imageUrl: "",
  });
  const postRequestDto = {
    title: lists.title,
    content: lists.content,
  };

  // 토큰 값 로컬스토리지에서 지정가져오기
  const token = localStorage.getItem("accessToken");

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
    const formData = new FormData();
    const json = JSON.stringify(postRequestDto);
    const blob = new Blob([json], { type: "application/json" });
    formData.append("postRequestDto", blob);
    Object.values(imgFile).forEach((file) => formData.append("imageUrl", file));
    await axios
      .post(`${process.env.REACT_APP_LIST}/posts`, formData, {
        headers: {
          Authorization: token,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        if (response.data) {
        }
      })
      .catch((error) => {});
    // navigate("/List");
  };
  console.log(lists);
  return (
    <StDiv>
      <JK>
        <div>
          <StAddCard>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                onWriteHandler(lists);
              }}
            >
              <StInputBox>
                <h1 className="py-4 mb-2">글쓰기</h1>
                <StInput
                  fullwidth
                  type="text"
                  onChange={(event) => {
                    const { value } = event.target;
                    setLists({
                      ...lists,
                      title: value,
                    });
                  }}
                  placeholder="제목 : "
                  value={lists.title}
                  name="title"
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
                      style={{ width: "40%", height: "40%" }}
                    />
                  );
                })}
                <Textarea
                  name="text"
                  onChange={(event) => {
                    const { value } = event.target;
                    setLists({
                      ...lists,
                      content: value,
                    });
                  }}
                  value={lists.content}
                  rows="10"
                  maxLength={200}
                  placeholder="게시글 설명 : "
                  required
                />
              </StInputBox>
              <StButtons>
                <StButton
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  뒤로가기
                </StButton>
                <StButton type="submit">저장하기</StButton>
              </StButtons>
            </form>
          </StAddCard>
        </div>
      </JK>
    </StDiv>
  );
};

export default Add;

// 전체중앙정렬

// textarea 크기고정(width 100%)및 css
const Textarea = styled.textarea`
  margin-top: 10px;
  border: 1px solid gray;
  height: 400px;
  padding: 8px;
  font-size: 14px;
`;
const StDiv = styled.div`
  background-color: #ebeef1;
  height: 100vw;
`;
const StAddCard = styled.div`
  padding: 20px 0 30px 0;
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: row;
  background-color: white;
  width: 700px;
  height: 800px;
  margin-top: -15%;
`;

const StButton = styled.button`
  margin: 40px auto auto auto;
  background-color: #46cfa7;
  text-align: center;
  width: 90px;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
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
  width: 600px;
  display: flex;
  flex-direction: column;
`;
const StInput = styled.input`
  height: 40px;
  border: 3px;
  padding: 8px;
  border: 1px solid gray;
`;

const StInputJpg = styled.input`
  background-color: white;
  height: 40px;
  padding: 8px;
  border: 1px solid gray;
  margin-bottom: 20px;
  margin-top: 30px;
`;

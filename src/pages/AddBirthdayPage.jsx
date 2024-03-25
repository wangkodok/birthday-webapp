import { useState } from "react";
import Wrapper from "../components/Wrapper";
import { date } from "../date";
import Profile from "../components/Profile";
import Name from "../components/Name";
import Phone from "../components/Phone";
import BirthdayDate from "../components/BirthdayDate";
import SectionTitle from "../components/SectionTitle";

export default function AddBirthdayPage() {
  const [inputValue, setInputValue] = useState({
    name: "",
    phone: "",
    month: "",
    day: "",
    profile: "",
  });
  const [uploadedImage, setUploadedImage] = useState(null);
  const [inputRequired, setInputRequired] = useState(false);

  console.log(inputValue);

  function handleChange(event) {
    if (event.target.name === "profile") {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      console.log(imageUrl);
      setUploadedImage(imageUrl);
    }

    setInputValue({
      ...inputValue,
      [event.target.name]:
        event.target.name === "profile"
          ? URL.createObjectURL(event.target.files[0])
          : event.target.value,
    });

    // setInputValue({
    //   ...inputValue,
    //   [event.target.name]: event.target.value,
    // });
  }

  return (
    <Wrapper>
      <main className="main-container">
        <section className="sec-add-birthday">
          <SectionTitle>생일 추가</SectionTitle>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <Profile
              uploadedImage={uploadedImage}
              onHandleChange={handleChange}
            />
            <p className="profile-desc">프로필 사진 추가해보세요.</p>
            <Name onHandleChange={handleChange} />
            <Phone onHandleChange={handleChange} />
            <BirthdayDate onHandleChange={handleChange} />
            <button
              className="save-btn"
              onClick={() => {
                if (
                  inputValue.name === "" ||
                  inputValue.phone === "" ||
                  inputValue.month === "" ||
                  inputValue.day === ""
                ) {
                  setInputRequired(true);
                  return;
                } else {
                  date.push(inputValue);
                }
              }}
            >
              저장
            </button>
          </form>
          {inputRequired === true ? (
            <div className="required-desc">
              <div className="popup">
                <div className="popup-area">
                  <p>작성하지 않는 빈칸이 있습니다.</p>
                  <button
                    onClick={() => {
                      setInputRequired(false);
                    }}
                  >
                    확인
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </section>
      </main>
    </Wrapper>
  );
}

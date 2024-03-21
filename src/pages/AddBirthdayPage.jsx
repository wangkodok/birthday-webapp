import { useState } from "react";
import Wrapper from "../components/Wrapper";
import { date } from "../date";
import Profile from "../components/Profile";
import Name from "../components/Name";
import Phone from "../components/Phone";
import BirthdayDate from "../components/BirthdayDate";

export default function AddBirthdayPage() {
  const [inputValue, setInputValue] = useState({
    name: "",
    phone: "",
    month: "",
    day: "",
    profile: "",
  });
  const [uploadedImage, setUploadedImage] = useState(null);

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
          <h2>생일 추가</h2>
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
                console.log(inputValue);
                date.push(inputValue);
              }}
            >
              저장
            </button>
          </form>
        </section>
      </main>
    </Wrapper>
  );
}

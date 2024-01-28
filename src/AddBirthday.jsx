import { useState } from "react";
import Wrapper from "./components/Wrapper";

export default function AddBirthday() {
  const [inputValue, setInputValue] = useState({
    name: "",
    phone: "",
    month: "",
    day: "",
  });

  console.log(inputValue);

  function handleChange(event) {
    setInputValue({
      ...inputValue,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <Wrapper>
      <main className="main-container">
        <section className="sec-add-birthday">
          <h2>생일 추가</h2>
          <div className="birthday-list">
            <div className="profile"></div>
            <p>프로필 상태 메시지</p>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label htmlFor="name">
              <input
                id="name"
                type="text"
                placeholder="이름"
                onChange={handleChange}
                name="name"
              />
            </label>
            <label htmlFor="phone">
              <input
                id="phone"
                type="text"
                placeholder="전화번호"
                onChange={handleChange}
                name="phone"
              />
            </label>
            <label htmlFor="month-day">
              <select
                name="month"
                id="month"
                defaultValue={"월"}
                onChange={handleChange}
              >
                <option value="월" disabled>
                  월
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select
                name="day"
                id="day"
                defaultValue={"일"}
                onChange={handleChange}
              >
                <option value="일" disabled>
                  일
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </label>
            <button
              className="save-btn"
              onClick={() => {
                console.log(inputValue);
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

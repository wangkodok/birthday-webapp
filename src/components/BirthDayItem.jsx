/* eslint-disable */
import profileImg from "../assets/profile.png";

export default function BirthDayItem({ dates }) {
  return (
    <li>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div className="profile">
          {dates.profile === "" ? (
            <img src={profileImg} alt="" />
          ) : (
            <img src={dates.profile} alt="" />
          )}
        </div>
        <div className="text">
          <h3>{dates.name}</h3>
          <p>
            {dates.month}월 {dates.day}일
          </p>
        </div>
      </div>
      <div className="d-day">
        <span className="number">0</span>
        <span>D-day</span>
      </div>
    </li>
  );
}

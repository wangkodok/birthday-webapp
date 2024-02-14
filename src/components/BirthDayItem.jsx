/* eslint-disable */
export default function BirthDayItem({ dates }) {
  return (
    <li>
      <div className="profile">
        <img src={dates.profile} alt="" />
      </div>
      <div className="text">
        <h3>{dates.name}</h3>
        <p>
          {dates.month}월 {dates.day}일
        </p>
      </div>
      <div className="d-day">
        <span className="number">0</span>
        <span>D-day</span>
      </div>
    </li>
  );
}

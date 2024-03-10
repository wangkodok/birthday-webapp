/* eslint-disable */
import "./Calendar.css";

export default function Calendar({
  dayOfTheWeek,
  year,
  month,
  day,
  curMonthStartDate,
  arr,
  dayDateNext,
  prevMonth,
  nextMonth,
  BirthdayList,
}) {
  return (
    <>
      <div className="year-month">
        <p>{`${year}년 ${month}월`}</p>
        <div>
          <button className="arrow-btn prev" onClick={prevMonth} />
          <button className="arrow-btn next" onClick={nextMonth} />
        </div>
      </div>
      <ul className="day-of-the-week">
        {dayOfTheWeek.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <ul className="few-days">
        {arr.map((item, index) => {
          for (let i = 0; i < arr.length; i++) {
            if (curMonthStartDate + day - 1 === index) {
              return (
                <li className="current-month day" key={index}>
                  <button onClick={BirthdayList}>{item}</button>
                </li>
              );
            }
            if (
              index >= curMonthStartDate &&
              index < arr.length - dayDateNext.length
            ) {
              return (
                <li className="current-month" key={index}>
                  <button onClick={BirthdayList}>{item}</button>
                </li>
              );
            }
          }
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}

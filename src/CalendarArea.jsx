/* eslint-disable */
import { useState } from "react";
import "./CalendarArea.css";
import { date } from "./date";

export default function CalendarArea({ setBirthdayListDate }) {
  const dayOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const [currentMonth, setCurrentMonth] = useState(new Date());
  // const [date, setDate] = useState([]);

  // 현재 몇 년, 몇 월
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth() + 1;

  // 현재 월의 시작하는 요일
  const curMonthStartDate = new Date(
    currentMonth.getFullYear(), // 년도
    currentMonth.getMonth() + 0, // 0는 1월, 1는 2월, 2는 3월 ··· 10는 11월, 11는 12월
    1 // 현재 월 시작하는 날짜를 반환
  ).getDay();

  // 현재 월의 마지막 날짜
  const curMonthEndDate = new Date(
    currentMonth.getFullYear(), // 년도
    currentMonth.getMonth() + 1,
    0 // 전날 월의 마지막 날짜를 반환
  ).getDate();

  // 현재 월의 모든 날짜
  const arr = Array.from(Array(curMonthEndDate), (_, index) => index + 1);

  // 이전 월의 마지막 날짜
  const prev = new Date(
    currentMonth.getFullYear(), // 년도
    currentMonth.getMonth(),
    0 // 전날 월의 마지막 날짜를 반환
  ).getDate();

  // 월의 첫째 주 없는 날짜
  const dayDatePrev = [];
  for (let index = prev; index > prev - curMonthStartDate; index--) {
    dayDatePrev.push(index);
  }
  arr.unshift(...dayDatePrev.reverse());

  // 다음 월의 시작하는 요일
  const next = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    1
  ).getDay();

  // 월의 마지막 주 없는 날짜
  const dayDateNext = [];
  for (let index = 0; index < 7 - next; index++) {
    dayDateNext.push(index + 1);
  }
  arr.push(...dayDateNext);

  // 이전 달
  function prevMonth() {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        currentMonth.getDate()
      )
    );
  }

  // 다음 달
  function nextMonth() {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        currentMonth.getDate()
      )
    );
  }

  // 해당하는 날짜의 생일 목록
  function BirthdayList(e) {
    // console.dir(e.target.innerText);
    console.log(date, "해당하는 날짜");
    const dateResult = date.filter((item) => {
      if (parseInt(item.month) === month && item.day === e.target.innerText) {
        return true;
      }
    });

    setBirthdayListDate(dateResult);
  }

  return (
    <>
      <div className="year-month">
        <p>{`${year}년 ${month}월`}</p>
        <div>
          <button onClick={prevMonth}>&#60;</button>
          <button onClick={nextMonth}>&#62;</button>
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

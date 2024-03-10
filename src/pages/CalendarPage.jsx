import { useState } from "react";
import { date } from "../date";

import Wrapper from "../components/Wrapper";
import Calendar from "../components/calendar/Calendar";

export default function CalendarPage() {
  const [dates, setDates] = useState({
    birthdayListDate: [],
    currentMonth: new Date(),
  });

  const dayOfTheWeek = ["일", "월", "화", "수", "목", "금", "토"];

  // 현재 몇 년, 몇 월
  const yyyy = dates.currentMonth.getFullYear();
  const mm = dates.currentMonth.getMonth() + 1;
  const dd = dates.currentMonth.getDate();

  // 현재 월의 시작하는 요일
  const curMonthStartDate = new Date(
    dates.currentMonth.getFullYear(), // 년도
    dates.currentMonth.getMonth() + 0, // 0는 1월, 1는 2월, 2는 3월 ··· 10는 11월, 11는 12월
    1 // 현재 월 시작하는 날짜를 반환
  ).getDay();

  // 현재 월의 마지막 날짜
  const curMonthEndDate = new Date(
    dates.currentMonth.getFullYear(), // 년도
    dates.currentMonth.getMonth() + 1,
    0 // 전날 월의 마지막 날짜를 반환
  ).getDate();

  // 현재 월의 모든 날짜
  const arr = Array.from(Array(curMonthEndDate), (_, index) => index + 1);

  // 이전 월의 마지막 날짜
  const prev = new Date(
    dates.currentMonth.getFullYear(), // 년도
    dates.currentMonth.getMonth(),
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
    dates.currentMonth.getFullYear(),
    dates.currentMonth.getMonth() + 1,
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
    setDates((prevState) => {
      return {
        ...prevState,
        currentMonth: new Date(
          prevState.currentMonth.getFullYear(),
          prevState.currentMonth.getMonth() - 1,
          prevState.currentMonth.getDate()
        ),
      };
    });
  }

  // 다음 달
  function nextMonth() {
    setDates((prevState) => {
      return {
        ...prevState,
        currentMonth: new Date(
          prevState.currentMonth.getFullYear(),
          prevState.currentMonth.getMonth() + 1,
          prevState.currentMonth.getDate()
        ),
      };
    });
  }

  // 해당하는 날짜의 생일 목록
  function BirthdayList(e) {
    const dateResult = date.filter((item) => {
      if (parseInt(item.month) === mm && item.day === e.target.innerText) {
        return true;
      }
    });

    setDates((prevState) => {
      return {
        ...prevState,
        birthdayListDate: dateResult,
        resultDefault: true,
        datePicker: e.target.innerText,
      };
    });
  }

  return (
    <Wrapper>
      <main className="main-container">
        <section className="sec-calendar">
          <div className="calendar-area">
            <Calendar
              dayOfTheWeek={dayOfTheWeek}
              year={yyyy}
              month={mm}
              day={dd}
              curMonthStartDate={curMonthStartDate}
              arr={arr}
              dayDateNext={dayDateNext}
              prevMonth={prevMonth}
              nextMonth={nextMonth}
              BirthdayList={BirthdayList}
            />
          </div>
          <div className="calendar-list">
            {/* <p>2024년 12월 31일</p> */}
            {dates.birthdayListDate.length === 0 ? (
              <p>생일자가 없습니다.</p>
            ) : null}
            <ul className="birthday-list">
              {date.map((item, key) => {
                if (dates.resultDefault === undefined) {
                  if (
                    item.month == dates.currentMonth.getMonth() + 1 &&
                    item.day == dates.currentMonth.getDate()
                  ) {
                    return (
                      <li key={key}>
                        <div className="profile">
                          <img src={item.profile} alt="" />
                        </div>
                        <div className="text">
                          <h3>{item.name}님</h3>
                          <p>
                            {item.month}월 {item.day}일
                          </p>
                        </div>
                      </li>
                    );
                  }
                }
              })}
            </ul>
            <ul className="birthday-list">
              {dates.birthdayListDate.map((item, key) => {
                if (
                  item.month == dates.currentMonth.getMonth() + 1 &&
                  item.day == dates.datePicker
                ) {
                  return (
                    <li key={key}>
                      <div className="profile">
                        <img src={item.profile} alt="" />
                      </div>
                      <div className="text">
                        <h3>{item.name}님</h3>
                        <p>
                          {item.month}월 {item.day}일
                        </p>
                      </div>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        </section>
      </main>
    </Wrapper>
  );
}

import Wrapper from "../components/Wrapper";
import Calendar from "../components/calendar/Calendar";
import BirthDayList from "../components/BirthDayList";
import { useState } from "react";

export default function CalendarPage() {
  const [birthdayListDate, setBirthdayListDate] = useState([]);

  return (
    <Wrapper>
      <main className="main-container">
        <section className="sec-calendar">
          <div className="calendar-area">
            <Calendar setBirthdayListDate={setBirthdayListDate} />
          </div>
          <div className="calendar-list">
            <p>2024년 12월 31일</p>
            {birthdayListDate.length === 0 ? null : (
              <BirthDayList birthdayListDate={birthdayListDate} />
            )}
            {/* {birthdayListDate.length === 0
              ? null
              : birthdayListDate.map((item, index) => {
                  return (
                    <BirthDayList
                      key={index}
                      birthdayListDate={birthdayListDate}
                    />
                  );
                  // return (
                  //   <div key={index}>
                  //     {item.name}님, 생일은{item.month}월 {item.day}일
                  //   </div>
                  // );
                })} */}
          </div>
        </section>
      </main>
    </Wrapper>
  );
}

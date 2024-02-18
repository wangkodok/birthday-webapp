import Wrapper from "../components/Wrapper";
import Calendar from "../components/calendar/Calendar";
// import BirthDayList from "../components/BirthDayList";
import { useState } from "react";
import { date } from "../date";

export default function CalendarPage() {
  const [birthdayListDate, setBirthdayListDate] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [resultDefault, setResultDefault] = useState();
  const [datePicker, setDatePicker] = useState();

  return (
    <Wrapper>
      <main className="main-container">
        <section className="sec-calendar">
          <div className="calendar-area">
            <Calendar
              setBirthdayListDate={setBirthdayListDate}
              currentMonth={currentMonth}
              setCurrentMonth={setCurrentMonth}
              date={date}
              setResultDefault={setResultDefault}
              setDatePicker={setDatePicker}
            />
          </div>
          <div className="calendar-list">
            <p>2024년 12월 31일</p>
            <ul className="birthday-list">
              {date.map((item, key) => {
                if (resultDefault === undefined) {
                  if (
                    item.month == currentMonth.getMonth() + 1 &&
                    item.day == currentMonth.getDate()
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
              {birthdayListDate.map((item, key) => {
                if (
                  item.month == currentMonth.getMonth() + 1 &&
                  item.day == datePicker
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
            <div>
              {/* {birthdayListDate.map((item, key) => {
                return (
                  <div key={key}>{item.name} "클릭하면 나오는 목록들"</div>
                );
              })} */}
            </div>
            {/* {birthdayListDate.length === 0 ? null : (
              <BirthDayList birthdayListDate={birthdayListDate} />
            )} */}
          </div>
        </section>
      </main>
    </Wrapper>
  );
}

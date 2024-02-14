/* eslint-disable */
import BirthDayItem from "./BirthDayItem";
import NoItemsMessage from "./NoItemsMessage.jsx";
import { date } from "../date.js";

export default function BirthDayList({ ...props }) {
  console.log(props.birthdayListDate);

  let itemResultGet = <NoItemsMessage innerText="생일을 추가하세요." />;

  if (date.length !== 0) {
    itemResultGet = date.map((dates, index) => {
      return <BirthDayItem key={index} dates={dates} />;
    });
  }

  if (props.birthdayListDate !== undefined) {
    itemResultGet = props.birthdayListDate.map((item, index) => {
      return (
        <li key={index}>
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
    });
  }

  return <ul className="birthday-list">{itemResultGet}</ul>;
}

import BirthDayItem from "./BirthDayItem";
import NoItemsMessage from "./NoItemsMessage.jsx";
import { date } from "../date.js";

export default function BirthDayList() {
  let itemResultGet = <NoItemsMessage innerText="생일을 추가하세요." />;

  if (date.length !== 0) {
    itemResultGet = date.map((dates, index) => {
      return <BirthDayItem key={index} dates={dates} />;
    });
  }

  return <ul className="birthday-list">{itemResultGet}</ul>;
}

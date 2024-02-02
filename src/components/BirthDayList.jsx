import BirthDayItem from "./BirthDayItem";
import NoItemsMessage from "./NoItemsMessage.jsx";
import { date } from "../date.js";

export default function BirthDayList() {
  return (
    <ul className="birthday-list">
      {date.length === 0 ? (
        <NoItemsMessage innerText="생일을 추가하세요." />
      ) : (
        date.map((dates, index) => {
          return <BirthDayItem key={index} dates={dates} />;
        })
      )}
    </ul>
  );
}

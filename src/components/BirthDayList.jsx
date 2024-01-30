import BirthDayItem from "./BirthDayItem";
import { date } from "../date.js";

export default function BirthDayList() {
  return (
    <ul className="birthday-list">
      {date.length === 0
        ? null
        : date.map((dates, index) => {
            return <BirthDayItem key={index} dates={dates} />;
          })}
    </ul>
  );
}

import ClockTitle from "./assets/Componant/ClockTitle";
import HeadingOne from "./assets/Componant/SloganHeading";
import TimeRandring from "./assets/Componant/TimeRandring";
import DateRandring from "./assets/Componant/DateCom";
import "./App.css";
function App() {
  return (
    <div className="Form">
      <ClockTitle />
      <HeadingOne />
      <h2 className="Time0rDate">
        This is the Currrent time : <DateRandring /> - <TimeRandring />{" "}
      </h2>
    </div>
  );
}

export default App;

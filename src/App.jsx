import { useState } from "react";
import "./App.css";

function App() {
  const weeks = Array(52).fill(0);
  const years = Array(90).fill(0);

  const [yearCount, setYearCount] = useState(20);
  const [weekCount, setWeekCount] = useState(0);

  const isWeekPainted = (year, week) =>
    +yearCount * 52 + +weekCount >= +year * 52 + +week;

  const onWeekClick = (year, week) => {
    setYearCount(year);
    setWeekCount(week);
  };

  const renderWeeksNumber = (year, week) =>
    Number(week) % 5 == 0 && year == 0 ? week : null;

  return (
    <div className="app">
      <div className="header">
        <div className="header__item">
          <span>Введите количество лет</span>
          <input
            value={yearCount}
            type="number"
            onChange={(e) => setYearCount(e.target.value)}
            min={0}
            max={100}
          />
        </div>
        <div className="header__item">
          <span>Введите количество недель</span>
          <input
            value={weekCount}
            type="number"
            onChange={(e) => setWeekCount(e.target.value)}
            min={0}
            max={100}
          />
        </div>
        <div className="header__item">
          <span>Вы уже прожили недель</span>
          <span>
            <b>{+yearCount * 52 + +weekCount}</b>
          </span>
        </div>
      </div>
      <div className="main">
        {years.map((_, yearIndex) => (
          <div
            className="row"
            key={yearIndex}>
            <span className="year__number">
              {(+yearIndex + 1) % 5 == 0 ? yearIndex + 1 : " "}
            </span>
            {weeks.map((_, weekIndex) => (
              <div
                onClick={() => onWeekClick(yearIndex, weekIndex + 1)}
                className={`week ${
                  isWeekPainted(yearIndex, weekIndex + 1) ? "week_active" : " "
                }`}
                key={weekIndex}>
                <span className="week__number">
                  {renderWeeksNumber(yearIndex, weekIndex + 1)}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

import moment from "moment";
import styles from "./current-week.module.scss";
import classNames from "classnames";
const CurrentWeek: React.FC = () => {
  const currentDay = moment();
  const currentMonth = moment().month();
  const daysInMonth = moment().daysInMonth();
  const daysArray = Array.from({ length: daysInMonth }, (_, dayIndex) =>
    moment()
      .month(currentMonth)
      .date(dayIndex + 1)
  );
  console.log(daysArray);
  return (
    <div className={styles.root}>
      <h4>Current month</h4>
      <div className={styles.wrapper}>
        {daysArray.map((dayInfo, index) => {
          const day = dayInfo.format("dd");
          const dayNumber = dayInfo.format("D");
          const isCurrent =
            day === currentDay.format("dd") &&
            dayNumber === currentDay.format("D");
          return (
            <div
              key={index}
              className={classNames(styles.day, {
                [styles.currentDay]: isCurrent,
              })}
            >
              <span>{day}</span>
              <div className={styles.followUpWrapper}>
                <span>{dayNumber}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentWeek;

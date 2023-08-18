import moment, { Moment } from "moment";
import styles from "./current-week.module.scss";
import classNames from "classnames";
import { HabitFollowUpSchemaType, HabitSchemaType } from "types/schemas/habit";
// import FollowUpItem from "components/learning/courses-tracking/courses/FollowUpItem";

interface CurrentWeekProps {
  monthFollowUps?: HabitFollowUpSchemaType[];
  onAddFollowUp?: (info: {
    date: string;
    followUp?: HabitFollowUpSchemaType;
    habit: HabitSchemaType;
  }) => void;
  habit: HabitSchemaType;
}

const CurrentWeek: React.FC<CurrentWeekProps> = ({
  monthFollowUps,
  onAddFollowUp,
  habit,
}) => {
  const currentDay = moment();
  const currentMonth = moment().month();
  const daysInMonth = moment().daysInMonth();
  const daysArray = Array.from({ length: daysInMonth }, (_, dayIndex) =>
    moment()
      .month(currentMonth)
      .date(dayIndex + 1)
  );

  const handleClickDay = (
    dateInfo: Moment,
    currentFollowUp?: HabitFollowUpSchemaType
  ) => {
    onAddFollowUp?.({
      date: dateInfo.format("YYYY-MM-DD"),
      followUp: currentFollowUp,
      habit,
    });
  };
  const { measure } = habit || {};
  return (
    <div className={styles.root}>
      <h4>Current month</h4>
      <div className={styles.wrapper}>
        {daysArray.map((dayInfo, index) => {
          const day = dayInfo.format("dd");
          const dayNumber = dayInfo.format("D");
          const currentDate = dayInfo.format("YYYY-MM-DD");
          const isCurrent =
            day === currentDay.format("dd") &&
            dayNumber === currentDay.format("D");
          const currentFollowUp = monthFollowUps?.find(
            (item) => item.date === currentDate
          );
          const { is_accomplished, is_failed, daily_goal, daily_counter } =
            currentFollowUp || {};

          return (
            <div
              key={index}
              className={classNames(styles.day, {
                [styles.currentDay]: isCurrent,
              })}
            >
              <span>{day}</span>
              <div
                className={classNames(styles.followUpWrapper, {
                  [styles.accomplished]: is_accomplished,
                  [styles.failed]: is_failed,
                })}
                onClick={() => handleClickDay(dayInfo, currentFollowUp)}
              >
                <span className={styles.numberText}>{dayNumber}</span>
                {Boolean(currentFollowUp) && Boolean(measure) && (
                  <span className={styles.dailyDetail}>
                    {daily_counter} / {daily_goal} {measure?.abbreviation}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CurrentWeek;

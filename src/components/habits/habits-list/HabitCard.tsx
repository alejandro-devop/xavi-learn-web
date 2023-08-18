import { HabitSchemaType } from "types/schemas/habit";
import styles from "./habit-card.module.scss";
import Icon, { IconType } from "core/components/icon";
import Grid, { Col, Row } from "core/grid";
import CurrentWeek from "./CurrentWeek";
import IconButton from "core/components/buttons/icon-button";

interface HabitCardProps {
  habit: HabitSchemaType;
}

const RenderBadge: React.FC<{
  icon: IconType;
  label: string;
}> = ({ icon, label }) => {
  return (
    <div className={styles.badge}>
      <i>
        <Icon icon={icon} />
      </i>
      <span>{label}</span>
    </div>
  );
};

const HabitCard: React.FC<HabitCardProps> = ({ habit }) => {
  return (
    <div className={styles.habitCard}>
      <Grid>
        <Row>
          <Col size={4}>
            <div className={styles.headWrapper}>
              <div className={styles.iconWrapper}>
                <Icon icon={habit?.category?.icon} />
              </div>
              <div className={styles.habitInfo}>
                <h4>{habit.name}</h4>
                <div className={styles.badgesWrapper}>
                  <RenderBadge
                    icon="bullseye"
                    label={`target: ${habit.days}`}
                  />
                  <RenderBadge
                    icon="fire-flame-curved"
                    label={`streak: ${habit.days}`}
                  />
                  {/* <RenderBadge icon="calendar" label={`days: ${habit.days}`} /> */}
                  {/* <p className={styles.categoryName}>{habit?.category.name}</p> */}
                </div>
                {Boolean(habit?.should_avoid) && (
                  <div className={styles.avoid} data-label="Avoid">
                    <Icon icon="thumbs-down" />
                  </div>
                )}
                {Boolean(habit?.should_keep) && (
                  <div className={styles.keep} data-label="Keep">
                    <Icon icon="thumbs-up" />
                  </div>
                )}
                <div>
                  <IconButton icon="eye" />
                  <IconButton icon="edit" />
                  <IconButton icon="trash" />
                </div>
              </div>
            </div>
          </Col>
          <Col size={8}>
            <CurrentWeek />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default HabitCard;

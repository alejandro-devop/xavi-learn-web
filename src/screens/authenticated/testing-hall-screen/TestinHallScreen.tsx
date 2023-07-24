import { Button } from "components/buttons";
import styles from "./testing-hall.module.scss";

const TestingHallScreen: React.FC = () => {
  return (
    <div className={styles.testingHallRoot}>
      <Button>Default</Button>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button rounded>Default (Rounded)</Button>
      <Button variant="primary" rounded>
        Primary (Rounded)
      </Button>
      <Button variant="secondary" rounded>
        Secondary (Rounded)
      </Button>
    </div>
  );
};

export default TestingHallScreen;

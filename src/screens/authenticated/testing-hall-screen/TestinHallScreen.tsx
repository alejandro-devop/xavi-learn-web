import { Button } from "components/buttons";
import styles from "./testing-hall.module.scss";

const TestingHallScreen: React.FC = () => {
  return (
    <div className={styles.testingHallRoot}>
      <div className={styles.row}>
        <Button icon="flask" rounded>
          With icon
        </Button>
        <Button icon="flask" rounded variant="primary">
          With icon
        </Button>
        <Button icon="flask">With icon</Button>
        <Button icon="flask" rounded variant="secondary">
          With icon
        </Button>
      </div>
      <div className={styles.row}>
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
    </div>
  );
};

export default TestingHallScreen;

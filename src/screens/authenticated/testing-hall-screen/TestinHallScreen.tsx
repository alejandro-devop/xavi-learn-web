import { Button } from "core/components/buttons";
import styles from "./testing-hall.module.scss";
import Table from "core/components/table/Table";
import { InsidesLayout } from "layouts";
import {
  CheckboxField,
  EmailField,
  NumberField,
  PasswordField,
  TextAreaField,
  TextField,
} from "core/components/form";

const TestingHallScreen: React.FC = () => {
  return (
    <InsidesLayout
      crumbs={[
        { label: "Home", path: "dashboard" },
        { label: "Testing Hall", path: "testingHall" },
      ]}
      title="Testing Hall"
      subtitle="all components "
    >
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
        <div className={styles.row}>
          <div className="w-full md:w-1/4 px-2">
            <TextField
              id="field-1"
              label="Text field"
              placeholder="Some place holder"
              value={""}
            />
            <EmailField
              id="field-2"
              label="Email field"
              placeholder="Enter an e-mail"
              value={""}
            />
            <PasswordField
              id="Password"
              label="Password"
              placeholder="Enter a password"
              value={"jkrules"}
            />
            <NumberField
              id="number"
              label="Number"
              placeholder="Enter a number"
              value={0}
            />
            <CheckboxField label="Some check" />
            <CheckboxField label="Another check" />
          </div>
          <div className="w-full md:w-1/4 px-2">
            <TextAreaField
              label="Text area"
              onChange={() => null}
              placeholder="somegood description"
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.col}>
            <Table
              columns={[
                "id",
                "firstName",
                "phonenumber",
                "address",
                "age",
                "email",
              ]}
              actions={[
                { action: "view", icon: "eye" },
                { action: "update", icon: "edit" },
                { action: "remove", icon: "trash" },
              ]}
              data={[
                {
                  id: 1,
                  firstName: "Alejandro",
                  phonenumber: "1212312131",
                  address: "Cra 34 #33-1",
                  age: "22",
                  email: "alejandro.devop",
                },
                {
                  id: 2,
                  firstName: "John",
                  phonenumber: "5551234567",
                  address: "123 Main St",
                  age: "30",
                  email: "john@example.com",
                },
                {
                  id: 3,
                  firstName: "Alice",
                  phonenumber: "9999876543",
                  address: "456 Park Ave",
                  age: "25",
                  email: "alice@example.com",
                },
                {
                  id: 4,
                  firstName: "Bob",
                  phonenumber: "1112223333",
                  address: "789 Elm St",
                  age: "28",
                  email: "bob@example.com",
                },
                {
                  id: 5,
                  firstName: "Emma",
                  phonenumber: "4445556666",
                  address: "101 Oak St",
                  age: "35",
                  email: "emma@example.com",
                },
                {
                  id: 6,
                  firstName: "Michael",
                  phonenumber: "7778889999",
                  address: "222 Pine St",
                  age: "40",
                  email: "michael@example.com",
                },
                {
                  id: 7,
                  firstName: "Sophia",
                  phonenumber: "8887775555",
                  address: "777 Cedar Ave",
                  age: "29",
                  email: "sophia@example.com",
                },
                // {
                //   id: 8,
                //   firstName: "William",
                //   phonenumber: "3332221111",
                //   address: "444 Birch Rd",
                //   age: "32",
                //   email: "william@example.com",
                // },
                // {
                //   id: 9,
                //   firstName: "Olivia",
                //   phonenumber: "6667778888",
                //   address: "555 Maple Ave",
                //   age: "27",
                //   email: "olivia@example.com",
                // },
                // {
                //   id: 10,
                //   firstName: "James",
                //   phonenumber: "1212121212",
                //   address: "666 Pine Rd",
                //   age: "31",
                //   email: "james@example.com",
                // },
              ]}
            />
          </div>
        </div>
      </div>
    </InsidesLayout>
  );
};

export default TestingHallScreen;

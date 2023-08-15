import { InputBaseProps } from "../input-base/types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from "../text-field/TextField";
import styles from "./date.module.scss";
import moment from "moment";
import { useRef, useState } from "react";

interface DateFieldProps extends InputBaseProps {
  format?: string;
}

const DateField: React.FC<DateFieldProps> = ({
  label,
  onChange,
  name,
  value,
  format = "YYYY-MM-DD",
  ...props
}) => {
  const initialDate = useRef(
    value ? moment(value as string, format) : moment()
  ).current;
  const [currentDate, setCurrentDate] = useState(initialDate.toDate());
  const handleChange = (date: any) => {
    const parseDate = moment(date);
    setCurrentDate(parseDate.toDate());
    onChange?.({
      target: {
        name: name || "",
        value: parseDate.format("YYYY-MM-DD"),
      },
    } as any);
  };

  return (
    <DatePicker
      wrapperClassName={styles.wrapper}
      selected={currentDate}
      onChange={handleChange}
      dateFormat="yyyy-MM-dd"
      customInput={
        <TextField
          className={styles.dateInput}
          icon="calendar"
          hideMax
          label={label}
          {...props}
        />
      }
    />
  );
};

export default DateField;

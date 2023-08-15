import Stepper, { Step } from "core/components/stepper";
import Form, {
  Fieldset,
  Label,
  TextAreaField,
  TextField,
} from "core/components/form";
import { useForm } from "core/hooks";
import config from "./form.config";
import { Button } from "core/components/buttons";
import StepperActions from "core/components/stepper/StepperActions";
import StepperNext from "core/components/stepper/StepperNext";
import StepperBack from "core/components/stepper/StepperBack";
import DateField from "core/components/form/date-field/DateField";

interface HabitFormProps {
  onCancel?: () => void;
  onSaved?: () => void;
}

const HabitForm: React.FC<HabitFormProps> = ({ onCancel }) => {
  const [fields, form, { isValidForm }] = useForm(config);
  //   return <div className="flex-1"></div>;
  return (
    <Form className="flex-1 flex flex-col">
      <div className="flex-1">
        <Stepper>
          <Step title="Give it a name">
            <TextField {...fields.name} autoFocus />
            <TextAreaField {...fields.description} />
          </Step>
          <Step title="Give it a date">
            <DateField {...fields.start_date} />
            <DateField {...fields.end_date} />
          </Step>
          <Step title="Positive or negative"></Step>
          <Step title="Need to measure the habit?"></Step>
          <Step title="Let's set some goals"></Step>
          <StepperActions>
            <Button rounded onClick={onCancel}>
              Cancel
            </Button>
            <StepperBack />
            <StepperNext />
          </StepperActions>
        </Stepper>
      </div>
      {isValidForm && (
        <Fieldset>
          <Button>Cancel</Button>
          <Button variant="primary">Save</Button>
        </Fieldset>
      )}
    </Form>
  );
};

export default HabitForm;

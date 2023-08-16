import Stepper, { Step } from "core/components/stepper";
import Form, {
  Fieldset,
  Label,
  NumberField,
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
import OptionsButton from "core/components/form/options-field/OptionsField";
import { useCallback, useMemo, useState } from "react";
import { HabitFormType } from "types/forms/habit.types";
import moment from "moment";
import SelectField from "core/components/form/select-field";
import { useGet } from "core/contexts/api-context/hooks";
import { HabitCategorySchemaType } from "types/schemas/habit";
import { MeasureSchemaType } from "types/schemas/general";

interface HabitFormProps {
  onCancel?: () => void;
  onSubmit?: (f: HabitFormType) => void;
  loading?: boolean;
}

const HabitForm: React.FC<HabitFormProps> = ({
  onCancel,
  onSubmit,
  loading,
}) => {
  const initialStartDate = moment();
  const [reachLast, setReachLast] = useState<boolean>(false);
  const [data] = useGet<HabitCategorySchemaType[]>("habits.categories.list");
  const [measures] = useGet<MeasureSchemaType[]>("general.measures.list");
  const initialEndDate = moment().add(90, "day");
  const initialDays = initialEndDate.diff(initialStartDate, "days");
  const [fields, form, { isValidForm, changeForm }] = useForm<HabitFormType>({
    ...config,
    defaultValues: {
      should_keep: true,
      should_avoid: false,
      timer_goal: 0,
      times_goal: 0,
      days: initialDays,
      start_date: initialStartDate.format("YYYY-MM-DD"),
      end_date: initialEndDate.format("YYYY-MM-DD"),
    } as any,
  });

  const defaultHabitType = form.should_keep ? "do" : "avoid";
  const defaultMeasureType = useMemo(() => {
    if (form.is_timer) {
      return "timer";
    } else if (form.is_counter) {
      return "counter";
    }
    return "done";
  }, [form.is_timer, form.is_counter]);

  const targetDays = useMemo(() => {
    const start = moment(form.start_date, "YYYY-MM-DD");
    const end = moment(form.end_date, "YYYY-MM-DD");
    return end.diff(start, "days");
  }, [form.start_date, form.end_date]);
  /**
   * Controls the change if the habit is to avoid or keep
   * @param param0
   */
  const handleChangeHabitType = ({ target: { value } }: any) => {
    const should_keep = value === "do";
    const should_avoid = value === "avoid";
    changeForm({
      ...form,
      should_keep,
      should_avoid,
    });
  };

  const handleChangeHabitMeasure = ({ target: { value } }: any) => {
    const is_timer = value === "timer";
    const is_counter = value === "counter";
    changeForm({
      ...form,
      is_timer,
      is_counter,
    });
  };

  const handleSubmit = useCallback(() => {
    const newForm = {
      ...form,
      days: targetDays,
    };
    onSubmit?.(newForm);
  }, [form, targetDays, onSubmit]);

  const categoriesData = useMemo(() => {
    return data?.map((item) => ({
      label: item.name,
      value: item.id,
    }));
  }, [data]);

  const measuresData = useMemo(() => {
    return measures?.map((item) => ({
      label: `${item.name} (${item.abbreviation})`,
      value: item.id,
    }));
  }, [measures]);

  return (
    <Form className="flex-1 flex flex-col">
      <div className="flex-1">
        <Stepper onCompleted={() => setReachLast(true)}>
          <Step
            title="Give it a name"
            description="It can be like working out daily, reading a book, drinking water, etc"
          >
            <TextField {...fields.name} autoFocus />
            <SelectField {...fields.category} options={categoriesData} />
            <TextAreaField {...fields.description} />
          </Step>
          <Step
            title="Give it a date"
            description="When do you want to start tracking your habit and your target date"
          >
            <DateField {...fields.start_date} />
            <DateField {...fields.end_date} />
            <p className="text-gray-400 text-sm text-right">
              Days to complete the habit: {targetDays}
            </p>
            {/* Add category */}
            {/* is  */}
          </Step>
          <Step
            title="Keep or avoid this habit?"
            description="Is this habit something that will make you better or damage you?"
          >
            <div className="flex justify-center">
              <OptionsButton
                options={[
                  { label: "I need to avoid this", value: "avoid" },
                  { label: "I must keep this in my life", value: "do" },
                ]}
                onChange={handleChangeHabitType}
                value={defaultHabitType}
              />
            </div>
          </Step>
          <Step
            title="Need to measure the habit?"
            description="Which action will be required to complete this habit at the end of the day?"
          >
            <div className="flex justify-center">
              <OptionsButton
                options={[
                  {
                    label: "Just mark as done to complete",
                    value: "done",
                  },
                  { label: "Need to count to complete", value: "counter" },
                  {
                    label: "Need to achieve time goal to complete",
                    value: "timer",
                  },
                ]}
                onChange={handleChangeHabitMeasure}
                value={defaultMeasureType}
              />
            </div>
          </Step>
          {(form.is_timer || form.is_counter) && (
            <Step title="Let's set some goals">
              {/* <NumberField {...fields.days} /> */}
              {form.is_counter && <NumberField {...fields.times_goal} />}
              {form.is_timer && <NumberField {...fields.timer_goal} />}
              <SelectField {...fields.measure} options={measuresData} />
            </Step>
          )}
          <StepperActions>
            <StepperBack />
            <StepperNext />
          </StepperActions>
        </Stepper>
      </div>

      <hr className="mb-5 mt-5" />
      {!reachLast && (
        <p className="text-red-500 text-right mb-2">
          * Complete all the steps before save
        </p>
      )}
      {!isValidForm && (
        <p className="text-red-500 text-right mb-5">
          * Complete all the required fields to Save
        </p>
      )}
      <Fieldset className="flex justify-end">
        <Button onClick={onCancel}>Cancel</Button>
        <Button
          disabled={!isValidForm || !reachLast || loading}
          variant="primary"
          onClick={handleSubmit}
        >
          {loading ? "Saving..." : "Save"}
        </Button>
      </Fieldset>
    </Form>
  );
};

export default HabitForm;

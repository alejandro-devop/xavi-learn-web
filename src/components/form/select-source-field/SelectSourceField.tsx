import { useGet } from "contexts/api-context/hooks";
import Fieldset from "../fieldset";
import { EndpointPathType } from "contexts/api-context/types";
import React, { useMemo } from "react";

interface SelectSourceFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  source: EndpointPathType;
  label?: string;
  mapTo?: { label: string; value: string };
  error?: string | null;
}

const SelectSourceField: React.FC<SelectSourceFieldProps> = ({
  label: inputLabel,
  source,
  mapTo,
  error,
  ...props
}) => {
  const [data, loading] = useGet<any[]>(source);

  const dataToRender: { label: any; value: any }[] = useMemo(() => {
    const { label = "", value = "" } = mapTo || {};
    return data?.map((item) => ({ label: item[label], value: item[value] }));
  }, [data, mapTo]);

  return (
    <Fieldset>
      {inputLabel && <label htmlFor="source">{inputLabel}</label>}
      {loading && <p>loading...</p>}
      <select name="source" id="source" {...props}>
        <option>Select an option</option>
        {dataToRender?.map(({ label, value }) => (
          <option key={`option-${value}]`} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <span className="form-error-msg">{error}</span>}
    </Fieldset>
  );
};

SelectSourceField.defaultProps = {
  mapTo: {
    label: "name",
    value: "id",
  },
};

export default SelectSourceField;

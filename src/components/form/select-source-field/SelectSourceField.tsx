import { useGet } from "contexts/api-context/hooks";
import Fieldset from "../fieldset";
import { EndpointPathType } from "contexts/api-context/types";
import React, { useMemo } from "react";

interface SelectSourceFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  source: EndpointPathType;
  label?: string;
  mapTo?: { label: string; value: string };
}

const SelectSourceField: React.FC<SelectSourceFieldProps> = ({
  source,
  mapTo,
  ...props
}) => {
  const [data, loading] = useGet<any[]>(source);

  const dataToRender: { label: any; value: any }[] = useMemo(() => {
    const { label = "", value = "" } = mapTo || {};
    return data?.map((item) => ({ label: item[label], value: item[value] }));
  }, [data, mapTo]);

  return (
    <Fieldset>
      <label htmlFor="source">Source</label>
      {loading && <p>loading...</p>}
      <select name="source" id="source" {...props}>
        <option>Select an option</option>
        {dataToRender?.map(({ label, value }) => (
          <option key={`option-${value}]`} value={value}>
            {label}
          </option>
        ))}
      </select>
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

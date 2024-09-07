import { produce } from "immer";

interface ISelect extends React.HTMLAttributes<HTMLSelectElement> {
  defaultOption?: {
    attributes: React.HTMLAttributes<HTMLOptionElement>;
    label: string;
    value?: string | number | readonly string[];
  };
  options?: {
    attributes: React.HTMLAttributes<HTMLOptionElement>;
    label: string;
    value?: string | number | readonly string[];
  }[];
}
export default function Select(props: ISelect) {
  const { options, defaultOption } = props;
  const selectAttributes = produce(props, (draft) => {
    delete draft.options;
  });
  return (
    <select
      {...selectAttributes}
      className="border border-ha-dirty-green rounded p-2"
    >
      {defaultOption && (
        <option {...defaultOption?.attributes}>{defaultOption.label}</option>
      )}
      {options &&
        options.map((option) => (
          <option
            key={option.label}
            {...option.attributes}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
    </select>
  );
}

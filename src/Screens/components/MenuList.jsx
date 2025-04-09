import { components } from "react-select";

// Custom MenuList with "+ Add" button
const MenuList = (props) => {
  const {
    children,
    selectProps,
    getValue,
    setValue,
    options,
    inputValue,
  } = props;

  const isExisting = options.some(
    (opt) => opt.label.toLowerCase() === inputValue.toLowerCase()
  );

  const handleAdd = () => {
    const newOption = { value: inputValue, label: inputValue };
    selectProps.onChange(newOption); // select the new value
    selectProps.setOptions((prev) => [...prev, newOption]); // update options
  };

  return (
    <components.MenuList {...props}>
      {children}
      {!isExisting && inputValue.trim() !== "" && (
        <div
          className="px-3 py-2 text-blue-600 cursor-pointer hover:bg-gray-100"
          onMouseDown={handleAdd}
        >
          ➕ Add "{inputValue}"
        </div>
      )}
    </components.MenuList>
  );
};

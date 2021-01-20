import Checkbox from "@material-ui/core/Checkbox";

import { useContext } from "react";
import { FilterContext } from "../../Molecules/Filters/filterContext";
import { useEffect, useState } from "react";

const CheckBoxAtom = ({ color, check, handleFilter, selectValue }) => {
  const { options, setOptions } = useContext(FilterContext);
  const [value, setValue] = useState("");
  
  if (selectValue !== value) {
    setValue(selectValue);
  }

  const setNewOption = () => {
    const optionsValue = Object.values(options);
    const indexOfValue = optionsValue.findIndex((project) => project === selectValue);

    if (indexOfValue === 0) {
      setOptions({...options, qualifications: ""});
    }
    if (indexOfValue === 1) {
      setOptions({...options, type: ""});
    }
    if (indexOfValue === 2) {
      setOptions({...options, nivel: ""});
    }
    if (indexOfValue === 3) {
      setOptions({...options, time: ""});
    }
  };

  useEffect(() => {
    return handleFilter()
  },[value])

  return (
    <>
      <Checkbox
        checked={check}
        onChange={() => setNewOption()}
        color={color}
        inputProps={{ "aria-label": "uncontrolled-checkbox" }}
      />
    </>
  );
};

export default CheckBoxAtom;

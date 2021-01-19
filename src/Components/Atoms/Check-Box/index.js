import Checkbox from "@material-ui/core/Checkbox";

import { useContext } from "react";
import { FilterContext } from "../../Molecules/Filters/filterContext";

const CheckBoxAtom = ({ color, check, handleFilter, selectValue }) => {
  const { options, setOptions } = useContext(FilterContext);

  const setNewOption = () => {
    const optionsValue = Object.values(options);
    const indexOfValue = optionsValue.findIndex((project) => project === selectValue);

    if (indexOfValue === 0) {
      setOptions({...options, title: ""});
      console.log(options)
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

  if ( check ) {
    handleFilter();
  }

  return (
    <>
      <Checkbox
        checked={check}
        onClick={() => setNewOption()}
        color={color}
        inputProps={{ "aria-label": "uncontrolled-checkbox" }}
      />
    </>
  );
};

export default CheckBoxAtom;

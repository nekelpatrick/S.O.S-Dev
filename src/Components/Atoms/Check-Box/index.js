import Checkbox from "@material-ui/core/Checkbox";

import { useContext } from "react";
import { FilterContext } from "../../Molecules/Filters/filterContext";

const CheckBoxAtom = ({ color, check, handleFilter, selectValue, projectsList, setProjectsList }) => {
  const { options, setOptions } = useContext(FilterContext);

  const removeSelectedFilter = (propToFilter) => {
    const newProjectsList = projectsList.filter((project) => project[propToFilter] !== selectValue);
    setProjectsList(newProjectsList);
  }

  const setNewOption = () => {
    const optionsValue = Object.values(options);
    const indexOfValue = optionsValue.findIndex((project) => project === selectValue);

    if (indexOfValue === 0) {
      setOptions({...options, techs: ""});
      removeSelectedFilter("techs");
    }
    if (indexOfValue === 1) {
      setOptions({...options, area: ""});
      removeSelectedFilter("area");
    }
    if (indexOfValue === 2) {
      setOptions({...options, nivel: ""});
      removeSelectedFilter("nivel");
    }
    if (indexOfValue === 3) {
      setOptions({...options, time: ""});
      removeSelectedFilter("time");
    }
    
  };

  if ( check ) {
    handleFilter();
  }

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

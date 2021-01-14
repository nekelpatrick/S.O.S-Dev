import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";

const CheckBoxAtom = ({ color }) => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <Checkbox
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
        color={color}
        inputProps={{ "aria-label": "uncontrolled-checkbox" }}
      />
    </>
  );
};

export default CheckBoxAtom;

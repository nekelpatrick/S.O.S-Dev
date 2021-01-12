import Checkbox from "@material-ui/core/Checkbox";
import { useState } from "react";

export const CheckBoxAtom = ({ color }) => {
  const [checked, setChecked] = useState(true);

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

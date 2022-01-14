import { useState, useEffect } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 250,
      width: 200,
    },
  },
};

export default function MultipleSelectCheckmarks({
  columns,
  arrangeColumnNames,
}) {
  // const [checked, setChecked] = useState(false);

  const [columnList, setColumnList] = useState(columns);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setColumnList(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  useEffect(() => {
    arrangeColumnNames(columnList);
  }, [columnList]);

  return (
    <div>
      <FormControl sx={{ width: 200 }}>
        <InputLabel id="demo-multiple-checkbox-label">Columns</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={columnList}
          onChange={handleChange}
          input={<OutlinedInput label="Column" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          >
          {columns.map((column) => (
            <MenuItem key={column} value={column}>
              <Checkbox checked={columnList.indexOf(column) > -1} />
              <ListItemText primary={column} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

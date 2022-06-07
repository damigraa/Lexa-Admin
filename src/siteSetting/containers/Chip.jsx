import * as React from 'react';
import { useTheme } from '@mui/material/styles';

import ContainerSiteSetting from './../ContainerSiteSetting';
import { FormControl, InputLabel, Select, OutlinedInput, Box, Chip, MenuItem } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from './../../actions/product.action';

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 100;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleSelectChip = (props) => {

  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);


  const productTest = props.items.map((prod) => prod)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProducts())
  }, [])


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">{props.title}</InputLabel>
        <Select
          style={{ padding: "10px" }}
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {productTest.map((item) => (
            <MenuItem
              key={item}
              value={item.size}
              style={getStyles(item, personName, theme)}
            >
              {item.size}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* </ContainerSiteSetting> */}
    </div>
  );
}

export default MultipleSelectChip
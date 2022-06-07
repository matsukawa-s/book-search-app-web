import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function CategorySelect() {
  const [category, setCategory] = React.useState('');

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl>
        <Select
          value={category}
          label="カテゴリー"
          onChange={handleCategoryChange}
        >
          <MenuItem value="1">Java</MenuItem>
          <MenuItem value="2">PHP</MenuItem>
          <MenuItem value="3">Javascript</MenuItem>
          <MenuItem value="4">C#</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

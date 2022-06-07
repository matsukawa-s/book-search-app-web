import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import { SelectType } from '../type';

type Props = {
  value: string;
  label: string;
  InputLabelName: string;
  genresName: SelectType[];
  onChange: (event: SelectChangeEvent) => void;
};

const SelectBox: React.FC<Props> = ({
  value,
  onChange,
  label,
  InputLabelName,
  genresName,
}) => (
  <>
    <FormControl sx={{ m: 1, minWidth: 130 }}>
      <InputLabel>{InputLabelName}</InputLabel>
      <Select value={value} label={label} onChange={onChange}>
        {genresName?.map((genre) => (
          <MenuItem value={genre.id} key={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
    ;
  </>
);
export default SelectBox;

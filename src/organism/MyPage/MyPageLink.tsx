import { Box, Tabs, Tab } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MyPageLink: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ borderBottom: 5, borderColor: 'white' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Link to="/books/lending">
            <Tab label="貸出中" value={0} />
          </Link>
          <Link to="/books/history">
            <Tab label="貸出履歴" value={1} />
          </Link>
          <Tab label="新規書籍申請中" value={2} />
        </Tabs>
      </Box>
    </>
  );
};
export default MyPageLink;

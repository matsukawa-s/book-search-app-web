import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationRounded: React.FC = () => (
  <div
    style={{
      margin: 'auto',
      width: '40%',
    }}
  >
    <Stack spacing={2}>
      <Pagination count={10} shape="rounded" />
    </Stack>
  </div>
);
export default PaginationRounded;

/** @jsxImportSource @emotion/react */
import { Button } from '@mui/material';
import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
};

const BlueButton: React.FC<Props> = ({ text, onClick }) => (
  <Button
    size="large"
    variant="contained"
    onClick={onClick}
    sx={{ m: 2, minWidth: 120 }}
  >
    {text}
  </Button>
);

export default BlueButton;

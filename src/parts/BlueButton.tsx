/** @jsxImportSource @emotion/react */
import { Button } from '@mui/material';
import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
};

const BlueButton: React.FC<Props> = ({ text, onClick }) => (
  <Button size="large" variant="contained" onClick={onClick}>
    {text}
  </Button>
);

export default BlueButton;

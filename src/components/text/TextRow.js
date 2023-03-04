import { Box } from '@mui/material';
import React from 'react';

const TextRow = ({ children }) => {
  return (
    <Box
      className="text-row"
      mt={2}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}
    >
      {children}
    </Box>
  );
};

export default TextRow;

// DarkModeToggle.js
import React from 'react';
import { Button, Icon } from '@mui/material';
import { useDarkMode } from './theme';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const DarkModeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <Icon  variant="" onClick={toggleDarkMode}>
      {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    </Icon>
  );
};

export default DarkModeToggle;
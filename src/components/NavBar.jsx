import React from 'react';
import { Link } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const NavBar = () => (
    <BottomNavigation>
      <BottomNavigationAction component={Link} to="/" label="Home" icon={<HomeIcon />} />
    </BottomNavigation>
);

export default NavBar;

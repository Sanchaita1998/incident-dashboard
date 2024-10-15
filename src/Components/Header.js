import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HomeIcon from '@mui/icons-material/Home';
import Headphones from '@mui/icons-material/Headphones';
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  // Detect screen sizes
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:1200px)');

  return (
    <>
      {/* Main AppBar for Search and Icons */}
      <AppBar position="static" className='header-one'>
        <Toolbar>
          {/* Conditional rendering for search icon */}
          {isMobile && (
            <IconButton color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='header-one-title'>
          <IconButton color="inherit">
                <SearchIcon />
              </IconButton> {isTablet ? 'Search' : 'Search'}
          </Typography>
          
          {/* Conditionally show icons based on screen size */}
          {!isMobile && (
            <>
              
              <IconButton color="inherit">
                <LocationOnIcon />
              </IconButton>
              <IconButton color="inherit">
                <Headphones />
              </IconButton>
              <IconButton color="inherit">
                <CalendarTodayIcon />
              </IconButton>
            </>
          )}
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Second AppBar for Title and Home icon */}
      <AppBar position="static" className='header-two'>
        <Toolbar>
          <IconButton aria-label="Home" style={{ color: "#7B809A" }}>
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className='header-title'>
            NETZERO
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;

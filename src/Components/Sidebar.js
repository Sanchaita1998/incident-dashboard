import React, { useState } from 'react';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography, Drawer, IconButton, Divider } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Assessment';
import PeopleIcon from '@mui/icons-material/People';
import HelpIcon from '@mui/icons-material/HelpOutline';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../Asset/images/logo2.png';

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Detect screen size
  const isMobile = useMediaQuery('(max-width:600px)');
  const isTablet = useMediaQuery('(max-width:960px)');

  // Toggle drawer for mobile
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Incident Management', icon: <CalendarTodayIcon /> },
    { text: 'Loss Control', icon: <CalendarTodayIcon /> },
    { text: 'Approved Actions', icon: <CalendarTodayIcon /> },
  ];

  const configItems = [
    { text: 'Configuration', icon: <SettingsIcon /> },
    { text: 'Report', icon: <ReportIcon /> },
    { text: 'User Management', icon: <PeopleIcon /> },
    { text: 'Help Manual', icon: <HelpIcon /> },
  ];

  const drawerContent = (
    <Box sx={{ width: 250, bgcolor: '#F7F8FA', height: '100%', padding: '20px 10px' }}>
      <img src={logo} alt="logo" width={150} />
      <Box sx={{ display: 'flex', justifyContent: 'left', marginBottom: '30px' }}>
        <Typography variant="h6" color="primary">HSD</Typography>
      </Box>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {configItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      {/* Hamburger Menu Button for Mobile */}
      {isMobile && (
        <IconButton
          color="inherit"
          edge="start"
          aria-label="menu"
          onClick={handleDrawerToggle}
          sx={{ position: 'absolute', top: 10, left: 10 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      {/* Sidebar for desktop, tablet */}
      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Sidebar;

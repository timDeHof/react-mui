import {
  Box,
  List,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material"
import {
  Home,
  People,
  Article,
  Storefront,
  Person,
  Settings,
  AccountBox,
  DarkMode,
} from "@mui/icons-material"
import React from "react"

export const Sidebar = ({ setMode, mode }) => {
  const handleChange = (e) => {
    return setMode(mode === "dark" ? "light" : "dark")
  }
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position='fixed'>
        <nav aria-label='main mailbox folders'>
          <List>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#home'>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#pages'>
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary='Pages' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#groups'>
                <ListItemIcon>
                  <People />
                </ListItemIcon>
                <ListItemText primary='Groups' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#marketplace'>
                <ListItemIcon>
                  <Storefront />
                </ListItemIcon>
                <ListItemText primary='Marketplace' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#friends'>
                <ListItemIcon>
                  <Person />
                </ListItemIcon>
                <ListItemText primary='Friends' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#settings'>
                <ListItemIcon>
                  <Settings />
                </ListItemIcon>
                <ListItemText primary='Settings' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#profile'>
                <ListItemIcon>
                  <AccountBox />
                </ListItemIcon>
                <ListItemText primary='Profile' />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component='a' href='#profile'>
                <ListItemIcon>
                  <DarkMode />
                </ListItemIcon>
                <Switch onChange={handleChange} inputProps={{ "aria-label": "controlled" }} />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>
    </Box>
  )
}

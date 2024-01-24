'use client'
import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { Box, Button, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import {InboxIcon, MailIcon} from '@mui/icons-material'

export default function Sidebar({state, toggleDrawer}) {


  return (
    <Box>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(false)}
          >
             <Box
              sx={{width: 250}}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List>
                {['Клубга катталуу', 'Клубтан баш тартуу', 'Расписание көрүү', 'Клубтун тизмеси'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        icon
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                  <ListItem key={text} disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        icon
                       </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </Box>
  );
}



// 'use client'
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Divider from '@mui/material/Divider';
// import InboxIcon from '@mui/icons-material/Inbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import style from './SideBar.module.css'
// import menuIcon from '../../../public/menu.png'
// export default function BasicList() {
//   return (
//     <aside className={style.aside} style={{marginBottom:'15px'}}>
//   <img src={menuIcon} alt='menu' />
//   <a href="javascript:void(0)">
//     <i className={"fa fa-user-o"} aria-hidden="true"></i>
//     Клубка катталуу
//   </a>
//   <a href="javascript:void(0)">
//     <i className={"fa fa-laptop"} aria-hidden="true"></i>
//     Клубтан баш тартуу
//   </a>
//   <a href="javascript:void(0)">
//     <i className={"fa fa-clone"} aria-hidden="true"></i>
//     Расписание
//   </a>
//   <a href="javascript:void(0)">
//     <i className={"fa fa-star-o"} aria-hidden="true"></i>
//     Клубтун тизмеси
//   </a>
// </aside>
//   );
// }

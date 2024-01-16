'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import style from './SideBar.module.css'
import menuIcon from '../../../public/menu.png'
export default function BasicList() {
  return (
    <aside className={style.aside} style={{marginBottom:'15px'}}>
  <img src={menuIcon} alt='menu' />
  <a href="javascript:void(0)">
    <i className={"fa fa-user-o"} aria-hidden="true"></i>
    Клубка катталуу
  </a>
  <a href="javascript:void(0)">
    <i className={"fa fa-laptop"} aria-hidden="true"></i>
    Клубтан баш тартуу
  </a>
  <a href="javascript:void(0)">
    <i className={"fa fa-clone"} aria-hidden="true"></i>
    Расписание
  </a>
  <a href="javascript:void(0)">
    <i className={"fa fa-star-o"} aria-hidden="true"></i>
    Клубтун тизмеси
  </a>
</aside>
  );
}
//<Box sx={{ width: '100%', bgcolor: 'background.paper', backgroundColor: 'aqua' }}>
    //   <nav aria-label="main mailbox folders">
    //     <List>
    //       <ListItem disablePadding>
    //         <ListItemButton>
              
    //           <ListItemText primary="Клубка катталуу" />
    //         </ListItemButton>
    //       </ListItem>
    //       <ListItem disablePadding>
    //         <ListItemButton>
              
    //           <ListItemText primary="Клубтан баш тартуу" />
    //         </ListItemButton>
    //       </ListItem>
    //       <ListItem disablePadding>
    //         <ListItemButton>
              
    //           <ListItemText primary="Расписание көрүү" />
    //         </ListItemButton>
    //       </ListItem>
    //       <ListItem disablePadding>
    //         <ListItemButton>
              
    //           <ListItemText primary="Клубтун тизмеси" />
    //         </ListItemButton>
    //       </ListItem>
    //     </List>
    //   </nav>
    //   <Divider />
    //   <nav aria-label="secondary mailbox folders">
    //     <List>
    //       <ListItem disablePadding>
    //         <ListItemButton>
    //           <ListItemText primary="Trash" />
    //         </ListItemButton>
    //       </ListItem>
    //       <ListItem disablePadding>
    //         <ListItemButton component="a" href="#simple-list">
    //           <ListItemText primary="Spam" />
    //         </ListItemButton>
    //       </ListItem>
    //     </List>
    //   </nav>
    // </Box>

    // return (
    //     <Grid container spacing={2} width={400}>
    //         <Grid item xs={12} md={6}>
    //             <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
    //                 Avatar with text
    //             </Typography>
    //             <List dense={true}>

    //                 <ListItem>
    //                     <ListItemAvatar>
    //                         <Avatar>
    //                             <FolderIcon />
    //                         </Avatar>
    //                     </ListItemAvatar>
    //                     <ListItemText
    //                         primary="Single-line item"
    //                         secondary={'Secondary text'}
    //                     />
    //                 </ListItem>
    //                 <ListItem>
    //                     <ListItemAvatar>
    //                         <Avatar>
    //                             <FolderIcon />
    //                         </Avatar>
    //                     </ListItemAvatar>
    //                     <ListItemText
    //                         primary="Single-line item"
    //                         secondary={'Secondary text'}
    //                     />
    //                 </ListItem>
    //                 <ListItem>
    //                     <ListItemAvatar>
    //                         <Avatar>
    //                             <FolderIcon />
    //                         </Avatar>
    //                     </ListItemAvatar>
    //                     <ListItemText
    //                         primary="Single-line item"
    //                         secondary={'Secondary text'}
    //                     />
    //                 </ListItem>

    //             </List>
    //         </Grid>
    //     </Grid>
    // )
//}

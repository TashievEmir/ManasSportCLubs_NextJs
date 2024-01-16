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
    <aside className={style.aside}>
  <img src={menuIcon} alt='menu' />
  <a href="javascript:void(0)">
    <i className={"fa fa-user-o"} aria-hidden="true"></i>
    Тандап алуу
  </a>
  <a href="javascript:void(0)">
    <i className={"fa fa-laptop"} aria-hidden="true"></i>
    Жаңылык жаратуу
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

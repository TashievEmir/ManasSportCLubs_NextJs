import { CalendarMonth, PersonAdd, PersonRemove } from '@mui/icons-material';
import  Links from './links';
import { Box, Tooltip } from '@mui/material';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import AddIcon from '@mui/icons-material/Add';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import { useLocalStorage } from '../../store/localStorage/useLocalStorage';

const userSidebar = [
    {
        id: 1,
        path: "/user/clubRegistration",
        icon: <PersonAdd/>,
        title: 'Клубга катталуу'
    },
    {
        id: 2,
        path: "/user/schedule",
        icon: <CalendarMonth/>,
        title: 'Расписание'
    },
    {
        id: 3,
        path: "/user/clubCanceling",
        icon: <PersonRemove/>,
        title: 'Клубтан баш тартуу'
    },
    {
        id: 4,
        path: "/user/memberList",
        icon: <FormatListNumberedIcon/>,
        title: 'Клубтун тизмеси'
    },
]

const adminSidebar = [
    {
        id: 1,
        path: "/admin/clubApprove",
        icon: <PersonAdd/>,
        title: 'Клубга кабыл алуу'
    },
    {
        id: 2,
        path: "/admin/schedule",
        icon: <CalendarMonth/>,
        title: 'Расписание'
    },
    {
        id: 3,
        path: "/admin/clubMembers",
        icon: <FormatListNumberedIcon/>,
        title: 'Клубтун тизмеси'
    },
    
    
]


const Sidebar = ({ open, setOpened }) => {
    const { getItem } = useLocalStorage('account');
    const account = getItem()

    const links = account.role == "student" ? userSidebar?.map((item) => (
            <Links 
                onClick={setOpened} 
                key={item.id}
                path={item.path} 
                icon={item.icon} 
                title={item.title} 
                open={open} />
    ))
    : adminSidebar?.map((item)=>(
            <Links 
            key={item.id}
                onClick={setOpened} 
                path={item.path} 
                icon={item.icon} 
                title={item.title} 
                open={open} />
    ))

    return (
        <Box
            sx={{
                width: '100%',
                display: "flex",
                justifyContent: "center",
                alignItems: "start",
                px: "10px",
                height: "100%",
                bgcolor: "#8855ED",
                py: "20px",
                borderRadius: "0 20px 20px 0"
            }}
        >
            <Box
                sx={{display: "flex", flexDirection: 'column', gap: '15', py: "10px"}}>
                    {links}
            </Box>
        </Box>
    );
};

export default Sidebar;
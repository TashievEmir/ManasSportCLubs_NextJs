import { CalendarMonth, PersonAdd, PersonRemove } from '@mui/icons-material';
import  Links from './links';
import { Box } from '@mui/material';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';

const sidebar = [
    {
        id: 1,
        path: "/clubRegistration",
        icon: <PersonAdd/>,
        title: 'Клубга катталуу'
    },
    {
        id: 2,
        path: "/",
        icon: <CalendarMonth/>,
        title: 'Расписание көрүү'
    },
    {
        id: 3,
        path: "/",
        icon: <PersonRemove/>,
        title: 'Клубтан баш тартуу'
    },
    {
        id: 4,
        path: "/",
        icon: <FormatListNumberedIcon/>,
        title: 'Клубтун тизмеси'
    },
]


const Sidebar = ({ open, setOpened }) => {

    const links = sidebar?.map((item) => (
        <Links 
            onClick={setOpened} 
            key={item.id} 
            path={item.path} 
            icon={item.icon} 
            title={item.title} 
            open={open} />
    ));

    return (
        <Box
            sx={{
                width: '100%',
                display: "flex",
                justifyContent: "start",
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
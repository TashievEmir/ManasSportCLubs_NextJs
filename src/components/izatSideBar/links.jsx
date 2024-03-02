import { Box, Tooltip, Typography } from "@mui/material";
import Link from "next/link";
import './style.css'
const Links = ({icon, path, title, open, onClick }) => {
    // const isMobile = useMediaQuery('(max-width: 768px)');

    return ( 
        <Link className="link_item"
            href={path}
            onClick={() => onClick(false)}
            style={{
                height: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent:"start",
                color: "white",
                textDecoration: "none",
                gap: "10px"
            }}
        >
            <Tooltip title={title}>
                {icon}
            </Tooltip>
            {open && (
                <Typography sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} style={{color: "white", fontWeight: "normal",  }}>
                    {title.toLowerCase()}
                </Typography>
            )}
        </Link>
    );
};
export default Links
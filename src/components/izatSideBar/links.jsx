import { Box } from "@mui/material";
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
            {icon}
            {open && (
                <h3 style={{color: "white", fontWeight: "normal",  }}>
                    {title.toLowerCase()}
                </h3>
            )}
        </Link>
    );
};
export default Links
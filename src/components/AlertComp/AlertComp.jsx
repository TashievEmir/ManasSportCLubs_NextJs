"use client"
import Alert from "@mui/material/Alert"
import { useEffect, useState } from "react"

function AlertComp({isSuccess, message}) {
  const [timeout, setTimeOut] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTimeOut(true)
    }, 2000)
  }, [])
  return (
    <Alert
      sx={{
        transform: timeout ?  "translateX(200%)" : "translate(0%)",
        transition: "350ms",
        position: "absolute",
        bottom:"25px",
        right: "25px"
      }}
      
        variant="filled" severity={isSuccess ? "success" : "error"}>
           {`${message}`}
    </Alert>
  )
}

export default AlertComp
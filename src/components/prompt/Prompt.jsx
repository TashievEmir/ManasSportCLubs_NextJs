"use client"
import React, {useState} from 'react'
import {Box, Grid, Modal } from '@mui/material'

function Prompt({handleVerify, opened, onClose}) {
  const [value, setValue] = useState("")
  return (
        <Modal
          open={opened}
          onClose={onClose}
          sx={{top: "40%", left: "40%", }}
        >
          <Box sx={{
              padding: "32px", 
              background: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "300px"
            }}>
          <form onSubmit={(value) => handleVerify(value)}>
            <Grid sx={{
               display: "flex",
                flexDirection: "none",
                justifyContent: "center",
                 alignItems: "start"}}>
              <Grid item sx={12}>
                <input
                  style={{
                    width: "300",
                    padding: "8px 16px",
                    boxShadow: "0 0 10px 5px rgba(0,0,0,0.2)",
                    border: "none",
                    outline: "none"
                  }}
                  placeholder='Почтаңызга жөнөтүлгөн кодду жазыңыз'
                  value={value}
                  onChange={(event) => setValue(event.target.value)}
                />
              </Grid>
              <Grid item sx={12} style={{marginLeft:"20px"}}>
              <button
                style={{
                  padding: "8px 10px",
                  background: "black",
                  boxShadow: "0 0 10px 5px rgba(0,0,0,0.2)",
                  color: "white",
                  border: "none",
                  cursor: "pointer"
                }}
                type="submit">
                submit
              </button>
              </Grid>
            </Grid>
          </form>
          </Box>
        </Modal>
  )
}

export default Prompt
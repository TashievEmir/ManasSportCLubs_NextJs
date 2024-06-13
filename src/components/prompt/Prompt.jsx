"use client"

import React, { useState } from 'react';
import { Box, Button, Grid, Modal } from '@mui/material';
import AlertComp from '../AlertComp/AlertComp';
import $api from '../../utils/api';
import { useRouter } from 'next/navigation';

function Prompt({ email, setIsVerify }) {
  const [value, setValue] = useState("");
  const [showAlert, setShowAlert] = useState({ isSuccess: null });
  const router = useRouter();

  const handleVerify = async (code) => {
    try {
      await $api.post('/Account/VerifyEmail', { Email: email, Code: code });
      setShowAlert({ isSuccess: true });
      router.push("/signin");
    } catch (error) {
      console.error(error);
      setShowAlert({ isSuccess: false });
    }
  };

  return (
    <>
      <Modal open={true} sx={{ top: "40%", left: "40%" }}>
        <Box sx={{
          padding: "40px 16px",
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "370px"
        }}>
          <Grid container direction="column" spacing={2} alignItems="flex-end">
            <Grid item xs={12} sx={{ width: "100%" }}>
              <input
                style={{
                  width: "100%",
                  padding: "16px",
                  boxShadow: "0 0 10px 5px rgba(0,0,0,0.2)",
                  border: "none",
                  outline: "none"
                }}
                placeholder="Почтаңызга жөнөтүлгөн кодду жазыңыз"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            </Grid>
            <Grid item>
              <Box display="flex" gap={3}>
                <Button
                  onClick={() => setIsVerify(false)}
                  variant="contained"
                  sx={{ backgroundColor: "#370E8A",
                    ':hover': { backgroundColor: "#8855ED"}
                   }}>
                  Артка кайтуу
                </Button>
                <Button
                  onClick={() => handleVerify(value)}
                  variant="contained"
                  sx={{ backgroundColor: "#370E8A", ':hover': { backgroundColor: "#8855ED" } }}>
                  Жөнөтүү
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
      {showAlert.isSuccess !== null && (
        <AlertComp
          isSuccess={showAlert.isSuccess}
          message={showAlert.isSuccess ? "Каттоо ийгиликтүү аяктады" : "Каттоо учурунда ката чыгып калды"}
        />
      )}
    </>
  );
}

export default Prompt;

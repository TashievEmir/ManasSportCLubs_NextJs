'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from 'next/link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import $api from '../../utils/api'
import { useRouter } from 'next/navigation';
import { observer } from 'mobx-react-lite';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDepartament } from '../../store/actions/fetchDepartament';
import { fetchFaculties } from '../../store/actions/fetchFaculties';
import manasLogo from '../../../public/manas_logo.png'
import { Input } from '@mui/material';
import AlertComp from '../../components/AlertComp/AlertComp';
import Prompt from '../../components/prompt/Prompt';
import {convertToBase64} from "../../utils/convertToBase64"
import { validateEmail, validatePhoneNumber } from '../../utils/validations';
const defaultTheme = createTheme();


const SignUp = observer(() => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [state, setState] = useState({
    faculty: 777,
    departament: 777
  })
  const [selectedFile, setSelectedFile] = useState();
  const [showAlert, setShowAlert] = useState({isSuccess: null});
  const [currentEmail, setCurrentEmail] = useState("")
  const [isVerify, setIsVerify] = useState(true);
  const [phone, setPhone] = useState("+996")
  const [errors, setErrors] = useState({
    LastName: false,
    FirstName: false,
    Email: false,
    Password: false,
    RepeatedPassword: false,
    Phone: false,
    Faculty: false,
    Department: false,
    Photo: false,
  })
  useEffect(() => {
    dispatch(fetchDepartament())
    dispatch(fetchFaculties())
  }, [])
  
  const {faculties, departaments} = useSelector(s => s.facDeps)

  const filterDepartments = (facultyId) => {
    if (facultyId === 777) {
      return [{ id: 777, name: "Бөлүм тандаңыз" }];
    }
    return departaments.filter((dep) => dep.facultyId === facultyId);
  };

  const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const pass = data.get("password")
        const pass2 = data.get("repeatPassword")
        const converted = await convertToBase64(selectedFile)
        const email = data.get('email')
        const isValidEmail = validateEmail(email)
        setErrors(prev => ({...prev, Email: isValidEmail}))
        setCurrentEmail(email)
        if(pass !== "" && pass === pass2 && phone.length === 16)
        {
          try
          {
            data.append('Photo', selectedFile)
            const response = await $api({
              method: 'post',
              url: '/Account/Register',
              data: {
                LastName: data.get('lastName'),
                FirstName: data.get('firstName'),
                Email: email,
                Password: data.get('password'),
                RepeatedPassword: data.get('repeatPassword'),
                Phone: data.get('telefon'),
                Faculty: data.get('faculty'),
                Department: data.get('department'),
                Photo: converted
              },
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            setIsVerify(true)
          }
          catch
          {
            setShowAlert({isSuccess: false})
          }
        }
        if(phone.length !== 16){
          setErrors({ Phone: "Туура эмес телефон номери" });
        }
        else if(pass !== pass2)
        {
          setErrors(prev => ({...prev, RepeatedPassword: true, }))
        }
      };

      const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
      };
      const handleChangePhone = (event) => {
        let value = event.target.value.replace(/\D/g, '');
        if (!value.startsWith('996')) {
            value = '996' + value;
        }
    
        value = '+' + value;
        let formattedValue = value.slice(0, 4);
    
        for (let i = 4; i < value.length; i += 3) {
            formattedValue += ' ' + value.slice(i, i + 3);
        }
        if (formattedValue.length <= 16) { 
            setPhone(formattedValue);
        } else if(phone.length !== 16) {
            setErrors({ Phone: "Туура эмес телефон номери" });
        }else{
          setErrors({ Phone: null });
        }
    };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {isVerify && <Prompt setIsVerify={setIsVerify} email={currentEmail}/>}
          <Image
            width={80}
            src={manasLogo} 
            alt='manas logo' 
            style={{ margin: 1, background: 'secondary.main' }} />

          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form noValidate onSubmit={handleSubmit} style={{ marginTop: 3 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Атыныз"
                    autoFocus
                    helperText={"Сөзсүз толтурулуучу талаа"}
                    error={errors.FirstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Фамилияныз"
                    name="lastName"
                    autoComplete="family-name"
                    error={errors.LastName}
            
                    helperText={"Сөзсүз толтурулуучу талаа"}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Select
                    value={state.faculty}
                    onChange={(value) => {
                      const facultyId = value.target.value;
                      const filteredDepartments = filterDepartments(facultyId);
                      setState({
                        ...state,
                        faculty: facultyId,
                        department: filteredDepartments[0]?.id || 777,
                      });
                    }}
                    required
                    fullWidth
                    id="faculty"
                    name="faculty"
                    autoComplete="faculty-name"
                    error={errors.Faculty}
                    helperText={"Сөзсүз толтурулуучу талаа"}
                    
                  >
                    {[{id: 777, name: "Факультет тандаңыз"}, ...faculties].map(option => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12} >
                <Select
                    value={state.departament}
                    onChange={(value) => setState({...state, departament: value.target.value})}
                    required
                    fullWidth
                    id="department"
                    name="department"
                    autoComplete="department-name"
                    error={errors.Department}
                    
                    helperText={"Сөзсүз толтурулуучу талаа"}
                  >
                    {filterDepartments(state.faculty).map(option => (
                      <MenuItem key={option.id} value={option.id}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="telefon"
                    label="Телефон"
                    name="telefon"
                    autoComplete="telefon-name"
                    error={errors.Phone}
                    value={phone}
                    onChange={handleChangePhone}
                    helperText={errors.Phone}
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Манас почта"
                    name="email"
                    autoComplete="email"
                    error={errors.Email}
                    helperText={errors.Email}
                  />
                </Grid>
                {errors.RepeatedPassword && 
                  <p style={{color: "red", marginLeft: "20px", marginTop: "20px"}}>
                    Сыр сөздөр окшош болуш керек
                  </p>}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Пароль"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    error={errors.Password}
                    
                    helperText={"Сөзсүз толтурулуучу талаа"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="repeatPassword"
                    label="Парольду кайталаныз"
                    type="password"
                    id="repeatPassword"
                    autoComplete="repeatPassword"
                    error={errors.RepeatedPassword}
                    
                    helperText={"Сөзсүз толтурулуучу талаа"}
                  />
                </Grid>
              </Grid>
              <div>
                      <Typography variant="h6">Өз сүрөтүңүздү жүктөңүз:</Typography>
                      <Input
                        type="file"
                        inputProps={{ accept: 'image/*' }}
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        id="photoInput"
                        name='photoInput'
                        error={errors.Photo}
                        helperText={"Сөзсүз толтурулуучу талаа"}
                      />
                      <label htmlFor="photoInput">
                        <Button component="span" fullWidth variant="contained" sx={{backgroundColor:"#370E8A", ':hover':{backgroundColor:"#8855ED"}}}>
                          Файл тандоо
                        </Button>
                      </label>
                    </div>
                    <div>
                      {selectedFile && (
                        <div>
                          <Typography>Тандалган сүрөт:</Typography>
                          <img src={URL.createObjectURL(selectedFile)} alt="Selected" style={{ maxWidth: '50%' }} />
                        </div>
                      )}
                    </div>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor:"#370E8A", ':hover':{backgroundColor:"#8855ED"} }}
            >
              Катталуу
            </Button>
          </form>
          <Link href="/signin" >
            Аккаунт бар
          </Link>
        </Box>
        {showAlert.isSuccess !== null 
        && <AlertComp 
            isSuccess={showAlert.isSuccess}
            message={ showAlert.isSuccess === true ?
         `Каттоо ийгиликтүү аяктады`: "Каттоо учурунда ката чыгып калды"}/>}         
      </Container>
    </ThemeProvider>
  )
})
export default SignUp



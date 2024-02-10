import { Button, Typography } from "@mui/material";
import { useLocalStorage } from '../../store/localStorage/useLocalStorage';
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import $api from '../../utils/api'

export default function Confirmation (props) {
  const router = useRouter()
  const {getItem, setItem} = useLocalStorage('account');
  const selectedClub = useSelector((state) => state.selectedClub.value)

  async function Confirm(){
    const account = getItem()

    const response = await $api.post('/Club/Apply', {
      User: account.user,
      Club: selectedClub
    });

    if(response.status==200){
      router.push('/user');
    }
  }

  function Reject(){
    router.push("/user")
  }


  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItmes:"center", backgroundColor:"white", borderRadius:"10px", padding:'50px' }}>
        <Typography sx={{ textAlign: "center", fontSize:"30px" }}>
              { 
                props.action ? `${props.club} клубуна каталууга макулсузбу?` : `${props.club} клубунан баш тартууга макулсузбу?`
              } 
        </Typography>
        <div style={{display:"flex", justifyContent: "center", alignItmes:"center", marginTop:'20px', gap:'4%'}}>
          <Button
            type='submit'           
            variant='contained'
            sx={{color:'white', backgroundColor:"#370E8A"}}
            onClick={Confirm}>
              Ооба
          </Button>
          <Button
            type='submit'           
            variant='contained'
            sx={{color:'white', backgroundColor:"#370E8A"}}
            onClick={Reject}>
              Жок
          </Button>
        </div>
    </div>
  )
}
"use client"
import React, { useEffect, useState } from 'react'
import AppShell from '../../../components/app-shell'
import CardApprove from '../../../components/card/CardApprove'
import { fetchCandidates } from '../../../store/actions/fetchCandidates'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Grid } from '@mui/material'
import CardNoData from '../../../components/card/CardNoData'

const ClubApprove = () => {
    const selectedClub = useSelector((state) => state.selectedClub.value.id)
    const {data} = useSelector((state)=> state.candidate)
    const [renderState, setRenderState] = useState(false)

    const dispatch = useDispatch()
    useEffect( () => {
    dispatch(fetchCandidates(selectedClub))
    }, [renderState])
    const dataCount = Array.isArray(data) ? data.length : 0;
    
  return (
    <AppShell showSidebar={true}>
        <Grid container justifyContent="start" alignItems="start" gap={2}>
        {
          
          dataCount > 0 ?
          data?.map((element) =>
            <Grid key={element.id} item>
              <CardApprove setRenderState={setRenderState} element={element} selectedClub={selectedClub} />
            </Grid>
          ) :
          <CardNoData></CardNoData>        
        }
      </Grid>
    </AppShell>
  )
}

export default ClubApprove
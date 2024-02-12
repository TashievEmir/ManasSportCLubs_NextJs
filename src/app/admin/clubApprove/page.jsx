"use client"
import React, { useEffect } from 'react'
import AppShell from '../../../components/app-shell'
import CardApprove from '../../../components/card/CardApprove'
import { fetchCandidates } from '../../../store/actions/fetchCandidates'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from '@mui/material'

const ClubApprove = () => {
    const selectedClub = useSelector((state) => state.selectedClub.value.id)
    const {data} = useSelector((state)=> state.member)

    const dispatch = useDispatch()
    useEffect( () => {
    dispatch(fetchCandidates(selectedClub))
    }, [])

    console.log(data, "sdf")
  return (
    <AppShell >
        <Grid container justifyContent="start" alignItems="start" gap={2}>
        {
          data.map((element) =>
            <Grid key={element.id} item>
              <CardApprove element={element} />
            </Grid>
          )         
        }
      </Grid>
    </AppShell>
  )
}

export default ClubApprove
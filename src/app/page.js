"use client"
import * as React from 'react';
import { redirect, useRouter } from 'next/navigation'
import Image from 'next/image'
import Header from '../components/header/Header'
import SideBar from '../components/sidebar/SideBar'
export default function Home() {
  const [component, setComponent] = React.useState(true)
  const router = useRouter()
  
  if (!component) {
   router.replace('/signin')
  }

  return (
    <div>
      MAIN PAGE
    </div>
  )
}

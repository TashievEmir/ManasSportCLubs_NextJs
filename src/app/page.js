"use client"
import * as React from 'react';
import { redirect, useRouter } from 'next/navigation'
import Image from 'next/image'

export default function Home() {
  const [component, setComponent] = React.useState(false)
  const router = useRouter()
  
  if (!component) {
   router.replace('/signin')
  }

  return (
    <main>
      manas sport main
    </main>
  )
}

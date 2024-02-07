import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function SignUp() {
  return (
    <div>
      <p className="ml-10 mt-10 text-red-700 text-bolder">Welcome to SignUp Page</p>
      <Button className='ml-10 mt-10'><Link href = "/sign-in">SignIn</Link></Button>
      <Button className='ml-10'><Link href = "/dashboard">Dashboard</Link></Button>
    </div>
  )
}

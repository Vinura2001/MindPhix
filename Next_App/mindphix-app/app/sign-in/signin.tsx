import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function SignIn() {
  return (
    <div>
      <p className="ml-10 mt-10 mb-30 text-blue-700 text-bolder">Welcome to SignIn Page</p>
      <Button className='ml-10 mt-10'><Link href = "/sign-up">SignUp</Link></Button>
      <Button className='ml-10'><Link href = "/dashboard/Dashboard">Dashboard</Link></Button>
    </div>
  )
}

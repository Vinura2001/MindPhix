import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

export default function SignIn() {
  return (
    <div>
      <p className="ml-10 mt-10 mb-30 text-blue-700 text-bolder">Welcome to SignIn Page</p>
      <Link href = "/sign-up"><Button className='ml-10 mt-10'>SignUp</Button></Link>
      <Link href = "/dashboard"><Button className='ml-10'>Dashboard</Button></Link>
    </div>
  )
}

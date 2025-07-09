import LoginForm from '@/components/auth/LoginForm'
import Image from 'next/image'
import React from 'react'

const LoginPage = () => {
  return (
  <div className='flex justify-between md:px-20 px-5'>
        <div className='flex flex-col gap-4 md:w-7xl mt-10'>
        <h1 className='md:text-4xl text-2xl font-semibold'>M-PESA Acquisation Portal</h1>
        <p className='text-sm md:text-'>Wellcome to M-PESA world of conveinience! This portal provides an efficient way to access and manage your sales.</p>
        <LoginForm />
        </div>

        <div className='md:flex items-start justify-center w-full hidden'>
          <Image
            src='/images/hero_image.png'
            alt='Hero'
            width={400}
            height={300}
            className='object-cover'
            />
        </div>
      </div>
  )
}

export default LoginPage

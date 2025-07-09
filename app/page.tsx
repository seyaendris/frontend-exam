import Navbar from '@/components/shared/Navbar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <div className='flex flex-col gap-5 items-center justify-center font-semibold h-screen'>
      <Navbar />
      <h1 className='text-7xl'>Wellcome to Safaricom Ethiopia</h1>
    </div>
  );
};

export default page;

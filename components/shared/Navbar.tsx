'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

const Navbar = () => {
  return (
    <div className='bg-green-500 p-5 px-7 max-h-15 flex items-center justify-between fixed top-0 left-0 w-full z-50 shadow-lg'>
      <div>
        <Link href='/'>
          <h1 className='text-3xl text-white font-bold'>Safaricom</h1>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center justify-between gap-3 text-white font-semibold'>
        <div className='flex items-center gap-3'>
          <Link className='hover:bg-green-600/40 p-2 rounded-sm' href='#'>
            Apply
          </Link>
          <Link className='hover:bg-green-600/40 p-2 rounded-sm' href='#'>
            Recommend
          </Link>
        </div>
        <Button className='bg-white font-semibold hover:bg-white/90 text-green-700 rounded-sm px-5 cursor-pointer'>
          <Link href='/login'>Login</Link>
        </Button>
      </div>

      {/* Mobile Navigation with Sheet */}
      <div className='md:hidden flex items-center gap-3'>
        <Button className='bg-white font-semibold hover:bg-white/90 text-green-700 rounded-sm px-5 cursor-pointer'>
          <Link href='/login'>Login</Link>
        </Button>
        
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className='text-white hover:bg-green-600/40'>
              <Menu className='h-6 w-6' />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className='text-black'>
            <SheetHeader className='text-left bg-green-500'>
              <SheetTitle className='text-xl font-bold text-white'>Menu</SheetTitle>
            </SheetHeader>
            <div className='flex flex-col space-y-4 mt-6 px-2'>
              <Link
                href='#'
                className='p-2 rounded-sm text-black font-semibold border-1'
              >
                Apply
              </Link>
              <Link
                href='#'
                className='hover:bg-green-500 p-2 rounded-sm text-black font-semibold border-1'
              >
                Recommend
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
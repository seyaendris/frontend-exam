import { AppSidebar } from '@/components/dashboard/app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { PercentSquareIcon, UserRound } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className='bg-gray-100'>
        <div className='flex items-center justify-betwee p-3 md:w-5xl w-screen shadow-md'>
          <SidebarTrigger className='md:hidden' />
          <div className='flex-1' />
          <div className='ml-auto bg-green-500 text-white p-2 rounded-full'>
            <UserRound className='h-6 w-6' />
          </div>
        </div>
        <div className='w-full'>{children}</div>
      </main>
    </SidebarProvider>
  );
}

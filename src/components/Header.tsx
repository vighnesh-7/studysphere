'use client'

import { useRouter } from 'next/navigation';
import UserProfile from './UserProfile';
import Image from 'next/image';

export default function Header({ currentUser }: { currentUser: any }) {

  const access = currentUser?.role === 'admin' || currentUser?.role === 'owner'
  const router = useRouter()


  return (
    <div className=' px-2 z-10 sticky top-0 header'>
      <div className='flex items-center justify-between p-1  '>
        <div className='text-2xl font-bold flex gap-1.5 items-center'>
          <Image onClick={() => router.push('/')} src={'https://i.postimg.cc/j5Sw7w7B/Your-paragraph-text-removebg-preview-1.png'} width={100} className='ml-2 cursor-pointer p-0' height={100} alt='Logo' />
        </div>
          <UserProfile currentUser={currentUser} access={access} />
      </div>
    </div>
  );
}

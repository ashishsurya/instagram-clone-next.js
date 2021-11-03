import {
  HeartIcon,
  PaperAirplaneIcon,
  PlusCircleIcon,
  SearchIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { HomeIcon, MenuIcon } from '@heroicons/react/solid';
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';

function Header() {
  const [open, setOpen] = useRecoilState(modalState);

  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className='shadow-sm sticky top-0 z-[100] bg-gray-50'>
      <div className='flex justify-between max-w-6xl mx-5 xl:mx-auto'>
        {/* left */}
        <div
          onClick={() => {
            router.push('/');
          }}
          className='relative w-24 hidden lg:inline-grid cursor-pointer'
        >
          <Image
            src='https://links.papareact.com/ocw'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div
          onClick={() => {
            router.push('/');
          }}
          className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'
        >
          <Image
            src='https://links.papareact.com/jjm'
            layout='fill'
            objectFit='contain'
          />
        </div>

        {/* middle */}
        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rouded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
            </div>
            <input
              placeholder='Search'
              className='bg-gray-50 block w-full pl-10 sm:text-sm rounded-md border-gray-300  focus:ring-black focus:border-black outline-none'
              type='text'
            />
          </div>
        </div>

        {/* right */}
        <div className='flex justify-end space-x-4 p-3 items-center'>
          <span title='Home'>
            <HomeIcon
              className='navBtn'
              onClick={() => {
                router.push('/');
              }}
            />
          </span>

          <MenuIcon className='navBtn inline-flex md:hidden' />
          {session ? (
            <>
              <div className='relative navBtn' title='Chats'>
                <PaperAirplaneIcon className='navBtn rotate-45' />
                <div className='absolute -top-2 -right-1 text-sm w-5 bg-red-500 rounded-full flex items-center justify-center text-white'>
                  3
                </div>
              </div>
              <span title='Add Post'>
                <PlusCircleIcon onClick={() => {
                  setOpen(true)
                }} className='navBtn' />
              </span>
              <span title='Explore'>
                <UserGroupIcon className='navBtn' />
              </span>
              <span title='Liked Posts'>
                <HeartIcon className='navBtn' />
              </span>
              <img
                onClick={signOut}
                src={session.user.image}
                className='rounded-full cursor-pointer h-10 w-10 bg-white p-[1px] border-2 border-red-500'
                alt='Profile Photo'
                title={session.user.username}
              />
            </>
          ) : (
            <button onClick={signIn}>SignIn</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;

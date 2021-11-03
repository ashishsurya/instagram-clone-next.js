import { addDoc, collection, serverTimestamp } from '@firebase/firestore';
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline';
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { db } from '../firebase';

function Post({ id, username, userImg, img, caption }) {
  const { data: session } = useSession();

  return (
    <div className='bg-white my-7 border rounded-sm'>
      {/* Header */}
      <div className='flex items-center p-3'>
        <img
          src={userImg}
          className='rounded-full h-12 w-12 object-contain border p-1 mr-3'
        />
        <p className='flex-1 font-bold'>{username}</p>
        <span title='Actions'>
          <DotsHorizontalIcon className='h-5 cursor-pointer' />
        </span>
      </div>

      {/* img */}
      <img src={img} className='w-full' />

      {/* buttons */}
      {session && (
        <div className='flex justify-between items-center px-4 pt-4'>
          <div className='flex space-x-4 items-center'>
            <HeartIcon className='btn' />
            <ChatIcon className='btn' />
            <PaperAirplaneIcon className='btn rotate-45' />
          </div>
          <div className=''>
            <BookmarkIcon className='btn' />
          </div>
        </div>
      )}

      {/* caption */}
      <p className='p-5 truncate'>
        <span className='font-bold cursor-pointer mr-1'>{username}</span>
        {caption}
      </p>

      {/* comments */}

      {/* input box */}
      {session && (
        <form
          onSubmit={(e) => e.preventDefault()}
          className='flex items-center p-4'
        >
          <EmojiHappyIcon className='h-7' />
          <input
            type='text'
            className='border-none flex-1 focus:ring-0'
            placeholder='Add a comment...'
          />
          <button
            type='submit'
            className='font-semibold text-blue-400 hover:text-blue-500'
          >
            Post
          </button>
        </form>
      )}
    </div>
  );
}

export default Post;

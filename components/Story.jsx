function Story({ img, username }) {
  return (
    <div className="cursor-pointer">
      <img
        src={img}
        className='h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 hover:scale-110 transform transition duration-200 ease-out'
      />
      <p className='text-sm w-14 truncate text-center'>{username}</p>
    </div>
  );
}

export default Story;
 
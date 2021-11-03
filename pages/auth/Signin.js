import { getProviders, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import Header from '../../components/Header';
import Head from "next/head"

function Signin({ providers }) {
  const router = useRouter();
  console.log(providers);
  return (
    <>
      <Head>
        <title>SignIn-Instagram</title>
      </Head>
      <div className='flex flex-col items-center -mt-20 min-h-screen justify-center'>
        <div className='cursor-pointer'>
          <img
            src='https://links.papareact.com/ocw'
            alt='insta-logo'
            className='w-80'
            onClick={() => {
              router.push('/');
            }}
          />
        </div>
        <p className='text-sm text-center'>
          This is not a real app, for Educational Purposes.
        </p>
        <div className='mt-40'>
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                className='p-3 bg-blue-500 text-white rounded-lg'
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default Signin;

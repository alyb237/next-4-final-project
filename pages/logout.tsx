import cookie from 'cookie';
// import cookie from 'cookie';
import { GetServerSidePropsContext } from 'next';
import { deleteSessionByToken } from '../util/database';

export default function Logout() {
  return null;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const token = context.req.cookies.sessionToken;

  // if there is a token, delete the session and set cookie for destruction
  if (token) {
    await deleteSessionByToken(token);
    // used to delete cookie from frontend by using th e library.
    context.res.setHeader(
      'Set-Cookie',
      cookie.serialize('sessionToken', '', {
        maxAge: -1,
        path: '/',
      }),
    );
  }

  return {
    redirect: {
      destination: `/`,
      permanent: false,
    },
  };
}

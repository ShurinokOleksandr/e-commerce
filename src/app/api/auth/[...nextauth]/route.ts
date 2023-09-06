// import CredentialsProvider from 'next-auth/providers/credentials';
// import NextAuth, { NextAuthOptions } from 'next-auth';
// import axios from 'axios';
//
// const authOptions: NextAuthOptions = {
//     providers: [
//         CredentialsProvider({
//             authorize(credentials, req) {
//                 if (credentials) {
//                     const res = axios.post('http://localhost:4000/auth-by-jwt/login', {
//                         username: 'aa5aaa',
//                         email: 'sasa@ss',
//                         password: '1',
//                     })
//                         .then((response) => {
//                             console.log(response.data);
//                         })
//                         .catch((error) => {
//                             console.log(error);
//                         });
//                     console.log(res);
//                     return res;
//                 }
//
//                 return null;
//             },
//             type: 'credentials',
//             credentials: {},
//         }),
//     ],
//     pages: {
//         signIn: '/',
//         // error: '/auth/error',
//         // signOut: '/auth/signout'
//     },
//     callbacks: {
//         jwt(params) {
//             return params.token;
//         },
//     },
//     session: {
//         strategy: 'jwt',
//     },
// };
//
// export default NextAuth(authOptions);

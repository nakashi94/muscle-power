/** @type {import('next').NextConfig} */

// import Cookies from 'js-cookie';
// import { useRecoilValue } from 'recoil';

// import { rememberTokenState } from "./src/stores/rememberToken";

// const nextConfig = {
//   reactStrictMode: true,
//   async redirects() {
//     const tokenInState = useRecoilValue(rememberTokenState);
//     const tokenInCokkie = Cookies.get("rememberToken");
//     return [
//       {
//         source: '/mypage/food-register',
//         destination: '/',
//         permanent: tokenInState === tokenInCokkie,
//       }
//     ]
//   }
// }

// const nextConfig = {
//   reactStrictMode: true,
//   async redirects() {
//     // const tokenInState = useRecoilValue(rememberTokenState);
//     return [
//       {
//         source: '/mypage/food-register',
//         destination: '/',
//         has: [
//           {
//             type: "cookie",
//             key: "rememberToken",
//             value: "",
//           }
//         ],
//         permanent: false,
//       }
//     ]
//   }
// }

const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig

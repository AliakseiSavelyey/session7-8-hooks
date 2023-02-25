// import { useContext } from 'react';

// // import UserMenu from '../UserMenu/UserMenu';
// import authContext from '../../contexts/auth/context.js';

// export default function Appbar() {
//   const { isLoggedIn, user, onLogOut, onLogIn } = useContext(authContext);
//   return (
//     <header>
//       {isLoggedIn ? (
//         <UserMenu onLogOut={onLogOut} user={user} />
//       ) : (
//         <button type="button" onClick={onLogIn}>
//           войти
//         </button>
//       )}
//     </header>
//   );
// }

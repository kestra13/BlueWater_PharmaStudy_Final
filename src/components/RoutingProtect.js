import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../firebase-config";
import firebase from 'firebase/app';
import 'firebase/auth';
import { Route, Navigate } from 'react-router-dom';
import {} from './LoginModal'

// const organizations = {
//     fda: ['fda.com'],
//     janehopkins: ['janehopkins.com'],
//     bavaria: ['bavaria.com'],
// };

// const RouteProtect = (allowedDomains, Component) => {
//   const GuardedComponent = ({ ...props }) => {
//     const [user] = useAuthState(auth);

//     if (!user) {
//       return <Navigate to="/" />;
//     }

//     const domain = user.email.split("@")[1];

//     if (!allowedDomains.includes(domain)) {
//       return <Navigate to="/" />;
//     }

//     return <Component {...props} />;
//   };

//   return GuardedComponent;
// };

// export default RouteProtect;


// const RouteProtect = (allowedDomains, WrappedComponent, userEmail) => {
//     const AuthorizedComponent = ({...props}) => {
//         const [user] = useAuthState(auth);
//         // const domain = userEmail.split("@")[1];

//         if (!user) {
//             return <Navigate to="/" />;
//         }

        
//         if (!allowedDomains.includes(userEmail)) {
//             return <Navigate to="/" />;
            
//         }
//         console.log(allowedDomains);
//         console.log(userEmail);

//         return <WrappedComponent {...props} />
//     };

//     return AuthorizedComponent;
// }

// const RouteProtect = (allowedDomains, WrappedComponent) => {
//     const AuthorizedComponent = (props) => {
//         const [user] = useAuthState(auth);

//         if (!user) {
//             return <Navigate to="/" />;
//         }

//         const domain = user.email.split("@")[1];

//         if (!allowedDomains.includes(domain)) {
//             return <Navigate to="/" />;
//         }

//         return <WrappedComponent {...props} />;
//     };

//     return AuthorizedComponent;
// }

// const user = firebase.auth().currentUser;

// function RouteProtect ({ component: Component, organization,
//     user, ...rest }) {
//         const allowedDomains = organizations[organization];
//         const userDomain = user?.split('@')[1];

//         if (allowedDomains.includes(userDomain)) {
//             return <Route {...rest} render={(props) => <Component 
//                 {...props} />} />;
//         } else {
//             return <Navigate to="/" />;
//         }
//     }



// function RouteProtect ({ component: Component, organization,
//     user, ...rest }) {
//         const allowedDomains = organizations[organization];
//         const userDomain = user?.split('@')[1];

//         if (allowedDomains.includes(userDomain)) {
//             return <Route {...rest} render={(props) => <Component 
//                 {...props} />} />;
//         } else {
//             return <Navigate to="/" />;
//         }
//     }
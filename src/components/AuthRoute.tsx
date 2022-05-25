import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';




export interface IAuthRouteProps {}

 
const AuthRoute: React.FunctionComponent<IAuthRouteProps> = (props) => {
    const {} = props;
    const auth = getAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        AuthCheck();
    },[auth]);

    const AuthCheck = onAuthStateChanged(auth, (user) => {
        if (user){
            setLoading(false);
        }
        else {
            console.log('user not found');
            navigate('/register');
        }
    });

    if(loading) return <p>loading...</p>;

    return <> {}</>;
};
 
export default AuthRoute;
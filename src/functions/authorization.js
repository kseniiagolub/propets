import {useDispatch} from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {useHistory} from "react-router-dom";

const Authorization = (email, password) => {
    const dispatch = useDispatch();
    const {push} = useHistory()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user)
            dispatch({
                type: 'SET_USER', payload: {
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken
                }
            })
            push('/home')
        })
        .catch(() => alert('Invalid user!'))
};

export default Authorization
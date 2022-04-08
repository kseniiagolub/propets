import './App.css';
import StartPage from "./pages/StartPage";
import HomePage from "./pages/HomePage";
import {Route, Switch, useHistory} from "react-router-dom";
import Modal from "./utils/modal";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {db} from "./utils/firebase";
import {useEffect, useState} from "react";

function App() {

    const {push} = useHistory()
    const auth = getAuth()
    const [userAbout, setUserAbout] = useState()
    let userInfo = localStorage.getItem('user')
    let initial = JSON.parse(userInfo)

    useEffect(() => {
        getUserInfo()
    },[])

    const getUserInfo = async () => {
        const userInfoRef = doc(db, initial.uid, "userInfo");
        const userInfoSnap = await getDoc(userInfoRef);
        if(userInfoSnap.data() === undefined) {
            const docRef = setDoc(doc(db, initial.uid, 'userInfo'), {
                email: '',
                phone: '',
                facebook: '',
                uid: initial.uid
            });
            setUserAbout({email: '', phone: '', facebook: '', uid: initial.uid})
        } else {
            setUserAbout(userInfoSnap.data())
        }
    }

    onAuthStateChanged(auth,(user) => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user))
            localStorage.setItem('userInfo', JSON.stringify(userAbout))
            push('/home')
        }
    })

    return (
        <>
            <Switch>
                <Route exact path={'/'} component={StartPage}/>
                <Route exact path={['/home', '/:nav']} component={HomePage}/>
            </Switch>
            <Modal/>
        </>
    );
}

export default App;

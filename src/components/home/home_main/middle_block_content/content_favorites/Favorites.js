import React, {useEffect, useState} from 'react';
import style from "../../../../../css_moduls/home_css/home.module.css";
import {useDispatch} from "react-redux";
import {collection, getDocs, query, getDoc, doc} from "firebase/firestore";
import {db} from "../../../../../utils/firebase";
import {getAuth} from "firebase/auth";
import PostCard from "../content_home/PostCard";

const Favorites = () => {

    const auth = getAuth()
    const dispatch = useDispatch()
    const [base, setBase] = useState([])
    const [posts, setPosts] = useState([])
    const baseCollectionIdRef = query(collection(db, auth.currentUser.uid));

    const getIdPost = async () => {
        const data = await getDocs(baseCollectionIdRef)
        setBase(data.docs.map(doc => ({...doc.data()}).posts));
    }

    const getPosts = async () => {
        for (let i = 0; i < base.length; i++) {
            const getOnePostRef = doc(db, "post", base[i]);
            const docSnap = await getDoc(getOnePostRef);
            setPosts(post => post.concat(docSnap.data()))
        }
    }

    useEffect(() => {
        dispatch({type: "SET_MAP_ACTIVE", payload: {map: false, header: false}})
        getIdPost()
        getPosts()
    }, [])

    return (
        <div className={`${style.mainWhiteBack} d-flex flex-column col-6 align-items-center overflow-auto`}>
            {posts.map((user, index) => <PostCard user={user} key={index}/>)}
        </div>
    );
};

export default Favorites;
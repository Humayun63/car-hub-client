import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [isReset, setIsReset] = useState(false)
    const [title, setTitle] = useState('');


    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name, photo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName:name,
            photoURL:photo
        })
    }

    const emailSignIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    
    const resetPassword = (email) =>{
        setLoading(true)
        return sendPasswordResetEmail(auth, email)
    }
    
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    }, [])

    useEffect(()=>{
        document.title = `CarHub ${title}`
    },[title])
    
    const authInfo = {
        user,
        loading,
        isReset,
        setUser,
        setLoading,
        createUser,
        updateUser,
        emailSignIn,
        googleSignIn,
        logOut,
        resetPassword,
        setIsReset,
        setTitle
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
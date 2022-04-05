import { createContext, useContext, useEffect, useState } from 'react';
import { Auth, browserLocalPersistence, getAuth, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { Firestore, getFirestore } from '@firebase/firestore';
import('firebase/firestore');

let Context = createContext<{ db: ReturnType<typeof getFirestore>; user?: User; login: () => Promise<boolean>; isLogged: boolean }>(null);

const UserProvider = props => {
  const [user, setUser] = useState<User>(null);
  const [providerGoogleAuth] = useState(new GoogleAuthProvider());
  const [auth, setAuth] = useState<Auth>();
  const [isLogged, setIsLogged] = useState(false);
  const [app] = useState(
    initializeApp({
      apiKey: 'AIzaSyBgOUhjUYAWyeO_YC_vcWZNRB8G7mc15o0',
      authDomain: 'unga-unga-ae884.firebaseapp.com',
      projectId: 'unga-unga-ae884',
      storageBucket: 'unga-unga-ae884.appspot.com',
      messagingSenderId: '246676538016',
      appId: '1:246676538016:web:7852cfca86d20ac76bbfc5',
      measurementId: 'G-GL81VNRKMJ',
    }),
  );

  const [db, setDB] = useState(getFirestore(app));

  const login = async () => {
    await auth.setPersistence(browserLocalPersistence);

    try {
      const result = await signInWithPopup(auth, providerGoogleAuth);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // TODO - save token to local storage or cookie or something
      const user = result.user;

      setUser(user);
      setIsLogged(true);

      return true;
    } catch (error) {
      return false;
    }
  };

  useEffect(() => {
    getAnalytics(app);
    setAuth(getAuth(app));
    setDB(getFirestore(app));
  }, [app]);

  useEffect(() => {
    if (app && auth?.currentUser) {
      setUser(auth?.currentUser);
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [auth, app]);

  return (
    <Context.Provider
      value={{
        user,
        login,
        isLogged,
        db,
      }}>
      {props.children}
    </Context.Provider>
  );
};

const useUser = () => {
  return useContext(Context);
};

export { UserProvider, useUser };

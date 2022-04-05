import { createContext, useContext, useEffect, useState } from 'react';
import { Auth, browserLocalPersistence, getAuth, GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from '@firebase/firestore';
import { useRouter } from 'next/router';
import('firebase/firestore');

let Context = createContext<{ db: ReturnType<typeof getFirestore>; user?: User; login: () => Promise<boolean>; isLogged: boolean }>(null);

const UserProvider = props => {
  const [user, setUser] = useState<User>(null);
  const [providerGoogleAuth] = useState(new GoogleAuthProvider());
  const [auth, setAuth] = useState<Auth>();
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();

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
      await signInWithPopup(auth, providerGoogleAuth);

      return true;
    } catch (error) {
      return false;
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkUser = (user: User) => {
    if (user) {
      setUser(user);
      setIsLogged(true);
    } else {
      setUser(null);
      setIsLogged(false);
      if (router.pathname !== '/login') {
        router.push('/login');
      }
    }
  };

  useEffect(() => {
    getAnalytics(app);
    setAuth(getAuth(app));
    setDB(getFirestore(app));
  }, [app]);

  useEffect(() => {
    if (auth) {
      auth.onAuthStateChanged(user => checkUser(user));
    }
  }, [auth, checkUser]);

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

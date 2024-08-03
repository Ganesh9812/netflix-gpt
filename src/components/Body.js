import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        //once user signins redirect him to browse page as below by usenavigate hook
        //navigate can be used only child component of the appRouter code where present, so this is not right place, so moving navigate to the other child component
        // ...
      } else {
        // User is signed out
        //if user sign out
        // ...
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

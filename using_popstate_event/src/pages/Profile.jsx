import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigation, useBeforeUnload } from "react-router-dom";

import "../../style.css";
import Nav from "../component/Nav";
import Form from "../component/Form";
function Profile() {
    const [dirty, setDirty] = useState(false);
    // const beforeunloadHandler = useCallback(
    //     function (e) {
    //         if (dirty) {
    //             e.preventDefault();
    //             e.returnValue = "";
    //         }
    //     },
    //     [dirty]
    // );

    // useEffect(() => {
    //     console.log("useEffect fired.", dirty);
    //     window.addEventListener("beforeunload", beforeunloadHandler);
    //     return () => {
    //         console.log("return function has been fired.");
    //         window.removeEventListener("beforeunload", beforeunloadHandler);
    //     };
    // }, [beforeunloadHandler]);

    // useEffect(() => {
    //     const beforeunloadHandler = function (e) {
    //         e.preventDefault();
    //         e.returnValue = "";
    //     };
    //     if (dirty) {
    //         window.addEventListener("beforeunload", beforeunloadHandler);
    //     }
    //     return () => {
    //         window.removeEventListener("beforeunload", beforeunloadHandler);
    //     };
    // }, [dirty]);

    // useBeforeUnload(
    //     useCallback(
    //         (e) => {
    //             if (dirty) {
    //                 e.preventDefault();
    //                 // Prompt a confirmation message when the user tries to leave the route
    //                 e.returnValue = "Are you sure you want to leave this page?";
    //             }
    //         },
    //         [dirty]
    //     )
    // );

    return (
        <>
            <Nav />
            <main>
                <h1>Welcome to Profile Page</h1>
                <Form setDirty={setDirty} />
            </main>
        </>
    );
}

export default Profile;



// https://subwaymatch.medium.com/disabling-back-button-in-react-with-react-router-v5-34bb316c99d7
import auth from '@react-native-firebase/auth'

const SignUp = (email, password) => {
    return auth().createUserWithEmailAndPassword(email, password)
        .then((cred) => {
            // Update user profile
            auth().currentUser.updateProfile({
                displayName: email
            });

            // Access user details
            const user = auth().currentUser;
            const uid = user.uid;
            const displayName = user.displayName;
            const email = user.email;

            // Log user details
            console.log('User details:', { uid, displayName, email });
            console.log('Credentials:', cred);

            return cred;
        })
        .catch((err) => {
            console.log(err);
        });
};


const SignIn = (email, password) => {
    return auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log(auth().currentUser.uid);
            const uid = auth().currentUser.uid;
            return uid;
        })
        .catch((err) => {
            console.log(err);
        });
};

const SignOut = () => {
    return auth().signOut()
        .then(() => {
            console.log('signed out');
        })
        .catch((err) => {
            console.log(err);
        });
};

const Auth = {
    SignUp,
    SignIn,
    SignOut,
}

export default Auth;
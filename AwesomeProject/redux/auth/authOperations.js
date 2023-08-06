import {auth} from "../../firebase/config";


export const authSignUpUser = ({ login, email, password }) => async (dispatch, getState) => {
  try {
    const user = await auth.createUserWithEmailAndPassword(auth, email, password);
    console.log("user", user);
  } catch (error) {
    console.log("error", error.message);
  }
};

export const authSignInUser = () => async (dispatch, getState) => {
  try {
  } catch (error) {
    console.log("error.message", error.message);
  }
};

export const authSignOutUser = () => async (dispatch, getState) => {
  try {
  } catch (error) {
    console.log("error.message", error.message);
  }
};


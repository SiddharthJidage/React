import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
//import ErrorBoundary from "../../components/errohandler/ErrorBoundary";

const GithubContext = createContext();

const GITHUB_URL = process.env.RACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.RACT_APP_GITHUB_TOKEN;

// we need to export a provider func.
export const GithubProvider = ({children}) => {
  const intialState = {
    users: [],
    loading: true,
  };

  //hook for ruducer
  const [state, dispatch] = useReducer(githubReducer, intialState);

  //fetching users data from git API (.env file for token)
  const fetchUsers = async () => {
    setLoading();

    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });

    const data = await response.json();

    // dispatching the type as a case to the githubreducer
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  return (
    
      <GithubContext.Provider
        value={{
          users: state.users,
          loading: state.loading,
          fetchUsers,
        }}
      >
        {children}
      </GithubContext.Provider>
    
  );
};

export default GithubContext;

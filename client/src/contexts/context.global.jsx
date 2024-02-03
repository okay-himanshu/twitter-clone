import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import URL_CONFIG from "../config/url_config";
import { useAuth } from "./auth";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [newTweet, setNewTweet] = useState("");
  const { auth } = useAuth();
  const [login, setLogin] = useState();

  useEffect(() => {
    const parse = JSON?.parse(localStorage.getItem("auth"));
    setLogin(parse?.success);
  }, [auth]);

  const handleTweetPost = async () => {
    try {
      const { data } = await axios.post(
        `${URL_CONFIG.API_ENDPOINTS}/tweet/new-tweet`,
        { tweet: newTweet },
        { headers: { Authorization: `Bearer ${auth?.token}` } }
      );

      if (data.success) {
        toast.success("tweet successfully");
        setNewTweet("");
      } else if (!data.success) {
        console.error("something went wrong", data.message);
      } else {
        toast.error("something went wrong");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <GlobalContext.Provider
      value={{ newTweet, setNewTweet, handleTweetPost, login, setLogin }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobal = () => useContext(GlobalContext);

export { useGlobal, GlobalProvider };

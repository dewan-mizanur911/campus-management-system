import { useContext } from "react"
import { CampusContext } from "../Context/AuthProvider"

const useAuth = () => {
    return useContext(CampusContext);
};

export default useAuth;

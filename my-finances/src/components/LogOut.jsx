import supabase from "../services/supabase.js";
import {useNavigate} from "react-router-dom";

export default function LogOut() {

    const navigate = useNavigate();

    const logoutUser = async () => {
        let {error} = await supabase.auth.signOut();
        navigate("signin");
    return;
};

return(
    <>
        <button
            label="Logout" onClick={(e) => logoutUser(e)}
        >
        </button>
    </>
);
}

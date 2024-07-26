import {useAppDispatch} from "@/store/hooks.ts";
import {useLogoutMutation} from "@/services/api/controllers/authApi";
import {clearCredentials} from "@moduleAuth/store";
import {useNavigate} from "react-router-dom";

const useAuth = () => {
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const logoutProfile = async () => {
    try {
      await logout().unwrap();
      dispatch(clearCredentials());
      localStorage.removeItem('token')
      navigate('/login');

    } catch (error) {
      console.error("Logout failed: ", error);
    }
  }

  return {
    logoutProfile
  }
}

export default useAuth;
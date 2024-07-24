import {useGetUserQuery} from "@/services/api/controllers/authApi";
import {Navigate} from "react-router-dom";
import {ReactNode, useEffect} from "react";
import {UiProgressCircular} from "@/shared/components/UiProgressCircular";
import {useDispatch} from "react-redux";
import {setUser} from "@moduleAuth/store";
import {isUserAuthorized} from "@/utils/isUserAuthorized/isUserAuthorized.ts";

interface PrivateRouteProps {
  children: ReactNode;
  permissions: string[]
}

function hasAccess(roles: string[], permissions: string[]): boolean {
  return roles.some(role => permissions.includes(role));
}

const PrivateRoute = ({children, permissions}: PrivateRouteProps) => {
  const {data, isLoading} = useGetUserQuery();
  const dispatch = useDispatch();


  useEffect(() => {
    if (data) {
      dispatch(setUser({user: data}));
    }
  }, [data, dispatch, permissions]);


  if (isLoading) {
    return (<div className="flex justify-center items-center">
      <UiProgressCircular/>
    </div>);
  }

  if (!isUserAuthorized() || !data || !hasAccess(data.roles, permissions)) {
    console.log('Доступ к странице запрещен')
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;

import { Redirect, Route } from "react-router-dom";
import useAuth from '../../hooks/Auth'

function PrivateRoute({ children, ...rest }) {
  let { isLogin } = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;

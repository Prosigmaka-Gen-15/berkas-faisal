import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoutes() {
  const isNotAdmin = useSelector((state) => state.auth.user.role != "admin");

  if (isNotAdmin) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
}

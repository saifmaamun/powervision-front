import { ReactNode } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

interface IProps {
  children: ReactNode;
}

export default function PrivateRoute({ children }: IProps) {
  const { user } = useAppSelector((state) => state.user);

  const { pathname } = useLocation();

  //   if (isLoading) {
  //     return <p>Loading...</p>;
  //   }

  if (!user.email) {
    return <Navigate to="/login" state={{ state: pathname }} />;
  }

  return children;
}

import MainLayout from "./layout/MainLayout";
import { setUser } from "./redux/features/users/usersSlice";
import { useAppDispatch } from "./redux/hooks";
function App() {
  const dispatch = useAppDispatch();
  dispatch(setUser(localStorage.getItem("email")));
  // const { email } = useAppSelector((state) => state.user.user);
  // localStorage.setItem("email", email);
  // localStorage.setItem("id", id);
  return (
    <>
      <MainLayout />
    </>
  );
}

export default App;

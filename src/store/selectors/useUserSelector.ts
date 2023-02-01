import { useAppSelector } from "../store";

const useUserSelector = () => {
  const user = useAppSelector((state) => state.user);
  return { user };
};
export { useUserSelector };

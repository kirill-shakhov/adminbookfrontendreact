import { useAppSelector} from "@/store/hooks.ts";


const useHeaderProfile = () => {
  const user = useAppSelector((state) => state.auth.user);


  const pages = [
    {
      name: "Settings",
      link: "/settings"
    }
  ]

  return {
    user,
    pages,
  }
}

export default useHeaderProfile;

import ProfileDetailsPage from "./ProfileDetailsPage";

import fetchUser from "../utils/fetchUser";
import { useCallback, useEffect, useState } from "react";

const URL = 'https://randomuser.me/api/';

const ProfilePage = () => {

   const [userData, setUserData] = useState(null)

   const getData = useCallback(async () => {
      setUserData(await fetchUser(URL));
   }, [])

   useEffect(() => {
      getData();
      console.log(userData)
   }, [])

   useEffect(() => {
      console.log('Component re-rendered...')
   })

   return (
      <>
         <ProfileDetailsPage user={userData} getData={getData} />
      </>
   )
}

export default ProfilePage;
import { useEffect, useState } from "react"
import { User } from "../types"
import axios from "axios";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";

export default function LandingPage() {
    const [userDetails, setUserDetails] = useState<User[]>([]);
    const [loadingData, setLoadingData] = useState<boolean>(true);
    
    // Fetch user data using useEffect hook
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUserDetails(response.data);
        setLoadingData(false);
      }).catch(() => {
        console.error('Failed to fetch user data');
        setUserDetails([]);
        setLoadingData(false);
      });
    }, []);
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-5">
        {!loadingData && userDetails.map(user => (
            <UserCard id={user.id as number} name={user.name as string} email={user.email as string} />
        ))}
        {loadingData && <Loader/>}
    </div>
  )
}

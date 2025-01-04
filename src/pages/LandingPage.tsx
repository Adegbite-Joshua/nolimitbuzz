import { useEffect, useState } from "react"
import { User } from "../types"
import axios from "axios";
import UserCard from "../components/UserCard";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

export default function LandingPage() {
  const [userDetails, setUserDetails] = useState<User[]>([]);
  const [isLoadingData, setIsLoadingData] = useState<boolean>(true);

  // Fetch user data using useEffect hook
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUserDetails(response.data);
      }).catch(() => {
        console.error('Failed to fetch user data');
        setUserDetails([]);
        toast.error('Something went wrong');
      }).finally(() => {
        setIsLoadingData(false);
      });
  }, []);

  if (isLoadingData) {
    return <Loader />;
  }

  return (
    <section className="py-5">
      <h1 className="text-5xl text-center text-blue-600 font-bold">User details</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-5">
        {userDetails.map(user => (
          <UserCard id={user.id as number} name={user.name as string} email={user.email as string} />
        ))}
      </div>
    </section>
  )
}

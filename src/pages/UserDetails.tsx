import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { User } from "../types";
import axios from "axios";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

const UserDetail: React.FC = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState<User>({});
  const [isLoadingData, setIsLoadingData] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setUserDetails(response.data);
      })
      .catch(err => {
        if (err?.response?.status === 404) {
          toast.error('User not found');
        } else {
          toast.error('Something went wrong');
        }
        navigate('/');
      })
      .finally(() => {
        setIsLoadingData(false);
      });
  }, [])

  if (isLoadingData) {
    return <Loader />;
  }

  return (
    <section className="max-w-4xl mx-auto p-6">
      <div>
        <Link to="/" className="mb-4 text-blue-600 hover:text-blue-800 text-sm" >
          &larr; Back
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly items-center my-5">
        <div className="flex me-auto items-center justify-center">
          <p className="text-4xl font-bold h-32 w-32 bg-gray-400 flex justify-center items-center rounded-full">{userDetails.name && userDetails.name[0].toUpperCase()}</p>
        </div>
        <div className="me-auto">
          <h1 className="text-4xl font-bold mb-4">{userDetails.name}</h1>
          <p className="text-gray-600 mb-2">
            <strong>Username:</strong> {userDetails.username}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-2">
            <strong>Email:</strong> <a href={`mailto:${userDetails.email}`} className="text-blue-600 hover:text-blue-800">{userDetails.email}</a>
          </p>
          <p className="text-sm text-gray-500 mb-2">
            <strong>Phone:</strong> <a href={`tel:+${userDetails.phone}`} className="text-blue-600 hover:text-blue-800">{userDetails.phone}</a>
          </p>
          <p className="text-sm text-gray-500 mb-6">
            <strong>Website:</strong>{" "}
            <a href={`http://${userDetails.website}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800" >
              {userDetails.website}
            </a>
          </p>

          <h2 className="text-lg font-semibold mb-2">Address</h2>
          <p className="text-sm text-gray-500">
            {userDetails.address && userDetails.address.street as string}, {userDetails.address && userDetails.address.suite as string}
          </p>
          <p className="text-sm text-gray-500">
            {userDetails.address && userDetails.address.city as string}, {userDetails.address && userDetails.address.zipcode as string}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Geo:</strong> {userDetails.address && userDetails.address.geo.lat as string}, {userDetails.address && userDetails.address.geo.lng as string}
          </p>
          <p className="p-3">
            <a href={`https://www.google.com/maps?q=${userDetails.address && userDetails.address.geo.lat as string},${userDetails.address && userDetails.address.geo.lng as string}`} className="bg-blue-600 hover:bg-blue-700 flex items-center w-36 text-white rounded-md p-2" target="_blank" rel="noopener noreferrer">
              <span>View On</span>
              <img src="/googlemaps.png" className="h-8 w-8 inline" alt="" />
            </a>
          </p>
        </div>

        <div className="mb-auto">
          <h2 className="text-lg font-semibold mb-2">Company</h2>
          <p className="text-sm text-gray-500">
            <strong>Name:</strong> {userDetails.company && userDetails.company.name}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Catchphrase:</strong> {userDetails.company && userDetails.company.catchPhrase}
          </p>
          <p className="text-sm text-gray-500">
            <strong>Business:</strong> {userDetails.company && userDetails.company.bs}
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserDetail;

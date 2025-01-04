import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { User } from "../types";
import axios from "axios";

const UserDetail: React.FC = () => {
  const { id } = useParams();
const [userDetails, setUserDetails] = useState<User>({});

useEffect(() => {
  axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  .then( response => {
    setUserDetails(response.data);
  })
  .catch(err => {
    alert(err.message);
  });
}, [])


  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        to="/"
        className="block mb-4 text-blue-600 hover:text-blue-800 text-sm"
      >
        &larr; Back to User List
      </Link>
      <h1 className="text-2xl font-bold mb-4">{userDetails.name}</h1>
      <p className="text-sm text-gray-500 mb-2">
        <strong>Username:</strong> {userDetails.username}
      </p>
      <p className="text-sm text-gray-500 mb-2">
        <strong>Email:</strong> {userDetails.email}
      </p>
      <p className="text-sm text-gray-500 mb-2">
        <strong>Phone:</strong> {userDetails.phone}
      </p>
      <p className="text-sm text-gray-500 mb-6">
        <strong>Website:</strong>{" "}
        <a
          href={`http://${userDetails.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          {userDetails.website}
        </a>
      </p>

      <div className="mb-6">
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
      </div>

      <div>
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
  );
};

export default UserDetail;

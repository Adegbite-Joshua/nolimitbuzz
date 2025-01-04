import React from "react";
import { useParams, Link } from "react-router-dom";

const UserDetail: React.FC = () => {
  const { id } = useParams();

  const user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  };

  if (user.id.toString() !== id) {
    return <p className="text-center text-red-500">User not found!</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link
        to="/"
        className="block mb-4 text-blue-600 hover:text-blue-800 text-sm"
      >
        &larr; Back to User List
      </Link>
      <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
      <p className="text-sm text-gray-500 mb-2">
        <strong>Username:</strong> {user.username}
      </p>
      <p className="text-sm text-gray-500 mb-2">
        <strong>Email:</strong> {user.email}
      </p>
      <p className="text-sm text-gray-500 mb-2">
        <strong>Phone:</strong> {user.phone}
      </p>
      <p className="text-sm text-gray-500 mb-6">
        <strong>Website:</strong>{" "}
        <a
          href={`http://${user.website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          {user.website}
        </a>
      </p>

      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Address</h2>
        <p className="text-sm text-gray-500">
          {user.address.street}, {user.address.suite}
        </p>
        <p className="text-sm text-gray-500">
          {user.address.city}, {user.address.zipcode}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Company</h2>
        <p className="text-sm text-gray-500">
          <strong>Name:</strong> {user.company.name}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Catchphrase:</strong> {user.company.catchPhrase}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Business:</strong> {user.company.bs}
        </p>
      </div>
    </div>
  );
};

export default UserDetail;

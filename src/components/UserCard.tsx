import React from "react";
import { Link } from "react-router-dom";

type UserCardProps = {
    id: number;
    name: string;
    email: string;
};

const UserCard: React.FC<UserCardProps> = ({ id, name, email }) => {
    return (
        <div className="flex gap-2 border border-gray-300 rounded-lg p-2 shadow hover:shadow-md transition duration-300">
            <div className="basis-2/6 flex items-center justify-center">
                <p className="text-4xl font-bold h-16 w-16 bg-gray-400 flex justify-center items-center rounded-full">{name[0].toUpperCase()}</p>
            </div>
            <div className="basis-4/6">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-600">{email}</p>
                <div className="flex mt-5 ">
                    <Link to={`/user/${id}`} className="ms-auto inline-block bg-blue-600 hover:bg-blue-700 text-sm text-white rounded-md p-2" >
                        View Details →
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UserCard;

import React from "react";

const participants = [
  {
    name: "Hilaire Sh",
    role: "Product Designer",
    image: "https://via.placeholder.com/40",
    online: false,
  },
  {
    name: "Christian Manzi",
    role: "UI/UX Designer",
    online: true,
  },
  {
    name: "Jolly Mutesi",
    role: "Content Creator",
    online: true,
  },
  {
    name: "Dr. Samuel Smith",
    role: "Mental Health Professional",
    online: true,
  },
  {
    name: "Dr. Lily Chen",
    role: "Dermatologist",
    online: true,
  },
];

const ParticipantsList = () => {
  return (
    <div className="max-w-sm mt-12 bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Participants</h2>
        <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
          250
        </span>
      </div>
      <ul>
        {participants.map((participant, index) => (
          <li
            key={index}
            className="flex items-center gap-3 py-2 border-b-200 last:border-b-0"
          >
            {participant.online && (
              <span className="w-3 h-3 bg-green-500 rounded-full"></span>
            )}
            <div className="flex-1">
              <p className="font-medium text-gray-900">{participant.name}</p>
              <p className="text-sm text-gray-500">{participant.role}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700">
        View All
      </button>
    </div>
  );
};

export default ParticipantsList;

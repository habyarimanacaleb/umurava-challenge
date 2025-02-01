import {
  faStickyNote,
  faUsers,
  faTasks,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

const challengeCountData = [
  {
    label: "All Challenges",
    count: 10,
    icon: faStickyNote,
    bgColor: "bg-gray-200",
  },
  {
    label: "Completed Challenges",
    count: 2,
    icon: faCheckCircle,
    bgColor: "bg-gray-100",
  },
  {
    label: "Ongoing Challenges",
    count: 2,
    icon: faTasks,
    bgColor: "bg-gray-300",
  },
  {
    label: "Participants",
    count: 12,
    icon: faUsers,
    bgColor: "bg-gray-50",
  },
];

export default challengeCountData;

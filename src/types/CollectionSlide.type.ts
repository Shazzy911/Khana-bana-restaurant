import { StaticImageData } from "next/image";

export interface CollectionDataType {
  id: number;
  title: string;
  image: StaticImageData | HTMLImageElement | string;
  date: string;
  time: string;
  location: string;
  button: string;
}

export const CollectionData: CollectionDataType[] = [
  {
    id: 1,
    title: "Lunch Outdoor",
    image:
      "https://i.pinimg.com/236x/b0/60/6a/b0606a6aedccbe23ffee28e5a270bd97.jpg",
    date: "December 15, 2024",
    time: "8:00 pm",
    location: "NY 10001",
    button: "Buy Ticket",
  },
  {
    id: 2,
    title: "Dinner Indoor",
    image:
      "https://i.pinimg.com/236x/0f/0f/0e/0f0f0e575256ebbe5e600018ae83be2f.jpg",
    date: "January 20, 2025",
    time: "7:30 pm",
    location: "CA 91103",
    button: "Buy Ticket",
  },
  {
    id: 3,
    title: "Break Fast",
    image:
      "https://i.pinimg.com/236x/bd/52/97/bd5297f4ed77d0e3de2228b3ae0cb508.jpg",
    date: "February 22, 2025",
    time: "8:00 pm",
    location: " CL 60612",
    button: "Buy Ticket",
  },
  {
    id: 4,
    title: "Foodies",
    image:
      "https://i.pinimg.com/236x/67/02/3a/67023a416c036894828331b92eb559c3.jpg",
    date: "March 17, 2025",
    time: "8:00 pm",
    location: "AT&T",
    button: "Buy Ticket",
  },
  {
    id: 5,
    title: "Country Bar",
    image:
      "https://i.pinimg.com/236x/db/4e/d9/db4ed9e296cb978fa441172bfa495a33.jpg",
    date: "April 10, 2025",
    time: "8:00 pm",
    location: "Inglewood 90305",
    button: "Buy Ticket",
  },
  {
    id: 6,
    title: "Lunch Outdoor",
    image:
      "https://i.pinimg.com/236x/2f/c1/3f/2fc13ff674292a265eb49ea824cfa95e.jpg",
    date: "December 15, 2024",
    time: "8:00 pm",
    location: "NY 10001",
    button: "Buy Ticket",
  },
  {
    id: 7,
    title: "Dinner Indoor",
    image:
      "https://i.pinimg.com/236x/02/69/44/026944ec391186ce8a5e507c93e2ae71.jpg",
    date: "January 20, 2025",
    time: "7:30 pm",
    location: "CA 91103",
    button: "Buy Ticket",
  },
  {
    id: 8,
    title: "Break Fast",
    image:
      "https://i.pinimg.com/236x/80/5b/b2/805bb2976b8c6ec758fab8b9ae27e2a4.jpg",
    date: "February 22, 2025",
    time: "8:00 pm",
    location: " CL 60612",
    button: "Buy Ticket",
  },
  {
    id: 9,
    title: "Foodies",
    image:
      "https://i.pinimg.com/236x/51/52/9c/51529c6765474c4765754f9dd6b11a25.jpg",
    date: "March 17, 2025",
    time: "8:00 pm",
    location: "AT&T",
    button: "Buy Ticket",
  },
  {
    id: 10,
    title: "Country Bar",
    image:
      "https://i.pinimg.com/236x/c8/57/74/c857744b0ef63ff888460a65e46b7e77.jpg",
    date: "April 10, 2025",
    time: "8:00 pm",
    location: "Inglewood 90305",
    button: "Buy Ticket",
  },
];

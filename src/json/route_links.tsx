import { route_link_types } from "@/types/route_link_types";


export const topbar_route_links: route_link_types[] = [
    {
      id: 1,
      link: "Home",
      route: "/",
    },
    {
      id: 2,
      link: "Reservation",
      route: "/reservation",
    },
    {
        id: 3,
        link: "Stories",
        route: "/stories",
      },
      {
        id: 4,
        link: "Careeers",
        route: "/careers",
      },
    {
      id: 5,
      link: "Contacts",
      route: "/contact",
    },
  ];

  export const footer_route_links = [
        {
          title: "Company",
          links: [
            { "label": "About", "href": "/about" },
            { "label": "Careers", "href": "/careers" }
          ]
        },
        {
          title: "Contact Us",
          links: [
            { "label": "Help & Support", "href": "/contact" },
            { "label": "Partner with us", "href": "/partners" }
          ]
        },
        {
          title: "Legal",
          links: [
            { "label": "Terms & Conditions", "href": "/about" },
            { "label": "Cookies Policy", "href": "/policy" },
            { "label": "Privacy Policy", "href": "/policy" }
          ]
        }
      ]
    
// Sidebar imports
import{
    UilEstate,
    UilClipboardAlt,
    UilPackage,
    UilChart,
    UilUsdSquare,
    UilUser,
} from "@iconscout/react-unicons";

import img1 from '../imgs/andrew.jpg'
import img3 from '../imgs/ann.jpg'
import img2 from '../imgs/hans.jpg'
import img4 from '../imgs/jhon.jpg'

// Sidebar Data

export const SidebarData = (navigate) => [
    {
        icon: UilEstate,
        heading: "Home",
        onClick: () => navigate('/')
    },
    {
        icon: UilClipboardAlt,
        heading: "My Cart",
        onClick: () => navigate('/cart')
    },
    {
        icon: UilPackage,
        heading: "My Wallet",
    },
    {
        icon: UilChart,
        heading: "My Stock",
    },
    {
        icon: UilUser,
        heading: "My Profile",
    }
];

export const CardsData = [
    {
        title: "Budget",
        color: {
            backGround: "linear-gradient(180deg, #BB67FF 0%,rgba(188, 123, 235, 0.63) 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5",
        },
        barValue: 70,
        value: "$10,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Budget",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },

    {
        title: "Stock",
        color: {
            backGround: "linear-gradient(180deg,rgb(254, 175, 58) 0%,rgb(243, 202, 132) 100%)",
            boxShadow: "0px 10px 20px 0px rgb(248, 229, 174)",
        },
        barValue: 50,
        value: "50%",
        png: UilChart,
        series: [
            {
                name: "Stock",
                data: [10, 100, 58, 70, 80, 30, 40],
            },
        ],
    },
];

export const UpdatesData = [
    {
        img: img1,
        name: "Andrew Thomas",
        noti: "I want strawberries",
        time: "20 seconds ago",
    },

    {
        img: img2,
        name: "Hans Thomas",
        noti: "Add more eggs",
        time: "10 minutes ago",
    },

    {
        img: img3,
        name: "Ann Thomas",
        noti: "I want cupcakes and a starbuck",
        time: "25 minutes ago",
    },

    {
        img: img4,
        name: "Jhon Thomas",
        noti: "Add a toothbrush",
        time: "2 hours ago",
    },
];

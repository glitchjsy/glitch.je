import { FaFacebook } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "Basket.je",
    category: "Website",
    status: "Inactive",
    summary: "Basket.je is a price comparison website that I built from the ground up. This was my first major project.",
    created: "April 2023",
    openSource: false,
    technologies: [
        "typescript",
        "nextjs",
        "mysql",
        "redis",
        "nginx",
        "react",
        "react-native",
        "chakra-ui"
    ],
    links: [
        { text: "Website", icon: FiGlobe, href: "https://basket.je" },
        { text: "Facebook Page", icon: FaFacebook, href: "https://facebook.com/basket.je" }
    ]
} as Project;
import { FiGithub } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "Nightclub TV Advert System",
    category: "Website & Android App",
    status: "Active",
    summary: "",
    created: "December 2024",
    type: "Client Work",
    openSource: true,
    live: true,
    technologies: [
        "java",
        "websocket",
        "javascript",
        "react",
        "chakra-ui"
    ],
    links: [
        { text: "Admin Site Source Code", icon: FiGithub, href: "https://github.com/stjamesjsy/AdminSite" },
        { text: "Backend API Source Code", icon: FiGithub, href: "https://github.com/stjamesjsy/ApiService" },
        { text: "Android App Source Code", icon: FiGithub, href: "https://github.com/stjamesjsy/AndroidReceiver" }
    ]
} as Project;
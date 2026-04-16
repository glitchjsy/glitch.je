import { FiGithub, FiGlobe } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "Clip",
    category: "Website",
    status: "Inactive",
    summary: "Effortlessly copy & paste between multiple devices.",
    created: "December 2024",
    openSource: true,
    live: true,
    technologies: [
        "java",
        "react",
        "javascript",
        "chakra-ui",
        "html",
        "css"
    ],
    links: [
        { text: "Website", icon: FiGlobe, href: "https://clip.gltch.je" },
        { text: "Source Code on GitHub", icon: FiGithub, href: "https://github.com/glitchjsy/clip" }
    ]
} as Project;
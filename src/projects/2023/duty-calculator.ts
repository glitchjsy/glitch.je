import { FiGithub } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "Excise Duty Calculator",
    category: "Chrome Extension",
    status: "Abandoned",
    summary: "A simple chrome extension to calculate excise duty on cigarettes, tobacco and alcohol products.",
    created: "April 2023",
    openSource: true,
    live: false,
    technologies: [
        "javascript",
        "html",
        "css"
    ],
    links: [
        { text: "Source Code on GitHub", icon: FiGithub, href: "https://github.com/glitchjsy/duty-calculator" }
    ]
} as Project;
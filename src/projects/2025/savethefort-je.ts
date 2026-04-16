import { FiGithub } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "SaveTheFort.je",
    category: "Website",
    status: "Abandoned",
    summary: "I created a simple website to support a group dedicated to improving Fort Regent and making it a valuable space for everyone.",
    created: "March 2025",
    openSource: true,
    live: true,
    technologies: [
        "javascript",
        "html",
        "css"
    ],
    links: [
        { text: "GitHub Repository", icon: FiGithub, href: "https://github.com/lukeeey/savethefort" }
    ]
} as Project;
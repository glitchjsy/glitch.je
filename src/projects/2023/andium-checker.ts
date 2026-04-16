import { FiGithub } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "Andium Properties Checker",
    category: "Console Application",
    status: "Abandoned",
    summary: "A simple console application that checks the Andium Homes website for homes available to rent and sends an email summary of changes.",
    created: "December 2023",
    openSource: true,
    technologies: [
        "mailtrap",
        "javascript",
        "nodejs"
    ],
    links: [
        { text: "Source Code on GitHub", icon: FiGithub, href: "https://github.com/glitchjsy/andium-checker" }
    ]
} as Project;
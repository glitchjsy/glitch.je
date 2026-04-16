import { FiGithub } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "Jersey Vehicle Search",
    category: "Website",
    status: "Abandoned",
    summary: "Web app to scan number plates and lookup the car info on gov.je",
    created: "November 2023",
    openSource: true,
    technologies: [
        "java",
        "react",
        "typescript",
        "html",
        "css"
    ],
    links: [
        { text: "Source Code on GitHub", icon: FiGithub, href: "https://github.com/glitchjsy/vehicle-search" }
    ]
} as Project;
import { LuGithub, LuGlobe } from "react-icons/lu";
import { Project } from "../../models/Project";

export default {
    name: "The Mary Rose Website",
    category: "Website",
    status: "Active",
    summary: "Website for a local pub & night club",
    created: "March 2026",
    type: "Client Work",
    openSource: true,
    live: true,
    technologies: [
        "javascript",
        "react",
        "html",
        "css"
    ],
    links: [
        { text: "Website", href: "https://themaryrose.je", icon: LuGlobe },
        { text: "Source Code on GitHub", href: "https://github.com/stjamesjsy/maryrose-website", icon: LuGithub }
    ]
} as Project;
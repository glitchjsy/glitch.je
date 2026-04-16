import { LuGithub, LuGlobe } from "react-icons/lu";
import { Project } from "../../models/Project";

export default {
    name: "St James Website",
    category: "Website",
    status: "Active",
    summary: "Website for a local night club",
    created: "January 2026",
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
        { text: "Website", href: "https://stjamesjersey.com", icon: LuGlobe },
        { text: "Source Code on GitHub", href: "https://github.com/stjamesjsy/website", icon: LuGithub }
    ]
} as Project;
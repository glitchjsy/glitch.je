import { LuGithub, LuGlobe } from "react-icons/lu";
import { Project } from "../../models/Project";

export default {
    name: "ThreatHub",
    category: "Website",
    status: "Active",
    summary: "A vulnerability management platform built on top of Microsoft Defender.",
    created: "January 2026",
    openSource: true,
    live: true,
    technologies: [
        "javascript",
        "react",
        "java",
        "mysql",
        "redis",
        "html",
        "css"
    ],
    links: [
        { text: "Documentation", href: "https://threathub.co", icon: LuGlobe },
        { text: "Frontend Source Code", href: "https://github.com/ThreatHubCo/ThreatHub", icon: LuGithub },
        { text: "Ingestor Source Code", href: "https://github.com/ThreatHubCo/Ingestor", icon: LuGithub }
    ]
} as Project;
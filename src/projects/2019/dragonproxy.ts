import { FiGithub } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "DragonProxy",
    category: "Java Program",
    status: "Abandoned",
    summary: "A proxy to allow Minecraft: Bedrock clients to connect to Minecraft: Java Edition servers.",
    openSource: true,
    technologies: [
        "java",
        "typescript",
        "html",
        "css",
        "websocket",
        "maven"
    ],
    links: [
        { text: "GitHub Repository", icon: FiGithub, href: "https://github.com/DragonetMC/DragonProxy" }
    ]
} as Project;
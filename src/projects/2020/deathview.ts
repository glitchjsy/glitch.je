import { FiDownload, FiGithub } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "DeathView",
    category: "Minecraft Server Plugin",
    status: "Abandoned",
    summary: "A Minecraft server plugin that puts you into spectator made when you die, bypassing the death screen.",
    created: "February 2020",
    openSource: true,
    technologies: [
        "java",
        "maven"
    ],
    links: [
        { text: "Source Code on GitHub", icon: FiGithub, href: "https://github.com/lukeeey/DeathView" },
        { text: "Bedrock Edition Download", icon: FiDownload, href: "https://cloudburstmc.org/resources/deathview.396" },
        { text: "Java Edition Download", icon: FiDownload, href: "https://www.spigotmc.org/resources/deathview.95823" }
    ]
} as Project;
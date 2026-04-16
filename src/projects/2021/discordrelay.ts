import { FiDownload, FiGithub } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "DiscordRelay",
    category: "Minecraft Server Plugin",
    status: "Inactive",
    summary: "A Minecraft server plugin for relaying chat between Discord and Minecraft.",
    created: "March 2021",
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
        { text: "Source Code on GitHub", icon: FiGithub, href: "https://github.com/lukeeey/DiscordRelay" },
        { text: "Download on CloudburstMC ", icon: FiDownload, href: "https://cloudburstmc.org/resources/discordrelay.667" },
        { text: "Download on SpigotMC", icon: FiDownload, href: "https://www.spigotmc.org/resources/discordrelay.90263" }
    ]
} as Project;
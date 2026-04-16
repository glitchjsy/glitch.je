import { FiDownload, FiGithub } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "Factions MongoDB Storage Extension",
    category: "Minecraft Server Plugin",
    status: "Abandoned",
    summary: "A Minecraft server plugin that integrates with the Factions plugin to store data in a MongoDB database rather than on disk.",
    created: "August 2021",
    openSource: true,
    technologies: [
        "java",
        "mongo",
        "maven"
    ],
    links: [
        { text: "Source Code on GitHub", icon: FiGithub, href: "https://github.com/lukeeey/FactionsMongo" },
        { text: "Download on SpigotMC", icon: FiDownload, href: "https://www.spigotmc.org/resources/%E2%9A%94%EF%B8%8F-factions-%E2%9A%94%EF%B8%8F-mongodb-storage-extension.97333" }
    ]
} as Project;
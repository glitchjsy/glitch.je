import { FiDownload, FiGithub } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "PerWorldInventory",
    category: "Minecraft Server Plugin",
    status: "Abandoned",
    summary: "A Nukkit plugin that lets you have separate or shared inventories between worlds.",
    created: "February 2021",
    openSource: true,
    technologies: [
        "java",
        "maven"
    ],
    links: [
        { text: "Source Code on GitHub", icon: FiGithub, href: "https://github.com/lukeeey/PerWorldInventory" },
        { text: "Download on CloudburstMC", icon: FiDownload, href: "https://cloudburstmc.org/resources/perworldinventory.659" }
    ]
} as Project;
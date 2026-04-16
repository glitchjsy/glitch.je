import { AiFillDiscord } from "react-icons/ai";
import { FiGithub, FiGlobe } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "Geyser",
    category: "Java Program",
    status: "Active",
    summary: "Geyser is a bridge between Minecraft: Bedrock Edition and Minecraft: Java Edition, closing the gap from those wanting to play true cross-platform.",
    openSource: true,
    technologies: [
        "java",
        "maven"
    ],
    links: [
        { text: "GitHub Repository", icon: FiGithub, href: "https://github.com/GeyserMC/Geyser" },
        { text: "Website", icon: FiGlobe, href: "https://geysermc.org" },
        { text: "Discord Server", icon: AiFillDiscord, href: "https://discord.gg/GeyserMC" }
    ]
} as Project;
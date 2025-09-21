import ProjectPage from "@/components/ProjectPage";
import { FiDownload, FiGithub, FiGlobe } from "react-icons/fi";

export default function ProjectDeathView() {
    return (
        <ProjectPage
            name="DeathView"
            category="Minecraft Server Plugin"
            status="Discontinued"
            summary="A Minecraft server plugin that puts you into spectator made when you die, bypassing the death screen."
            created="February 2020"
            openSource
            technologies={[
                "java",
                "maven"
            ]}
            links={[
                { text: "GitHub Repository", icon: <FiGithub />, href: "https://github.com/lukeeey/DeathView" },
                { text: "Bedrock Edition Download", icon: <FiDownload />, href: "https://cloudburstmc.org/resources/deathview.396" },
                { text: "Java Edition Download", icon: <FiDownload />, href: "https://www.spigotmc.org/resources/deathview.95823" }
            ]}
        >
            <p>A simple plugin I based off of a feature from the Mineplex Minecraft server. Versions are available for both Minecraft: Java Editon and Minecraft: Bedrock Edition.</p>
            <p><strong>Downloads:</strong> 3500+ (<a href="https://cloudburstmc.org/resources/deathview.396" target="_blank">source</a>)</p>
        </ProjectPage>
    )
}
import ProjectPage from "@/components/ProjectPage";
import { FiDownload, FiGithub } from "react-icons/fi";

export default function ProjectJellyLegs() {
    return (
        <ProjectPage
            name="JellyLegs"
            category="Minecraft Server Plugin"
            status="Discontinued"
            summary="A very simple plugin for Nukkit server software to bypass fall damage."
            created="March 2021"
            openSource
            technologies={[
                "java",
                "maven"
            ]}
            links={[
                { text: "GitHub Repository", icon: <FiGithub />, href: "https://github.com/lukeeey/JellyLegs" },
                { text: "Download on CloudburstMC", icon: <FiDownload />, href: "https://cloudburstmc.org/resources/jellylegs.663" }
            ]}
        >
            <p>This plugin is a stupidly simple recreation of the Jelly Legs feature that was seen on Minecraft Faction servers.</p>
            <p>It allows you to disable fall damage for yourself or others with a simple command, making it a great donator perk in-game.</p>

            <p><strong>Downloads:</strong> 1200+ (<a href="https://cloudburstmc.org/resources/jellylegs.663" target="_blank">source</a>)</p>
        </ProjectPage>
    )
}
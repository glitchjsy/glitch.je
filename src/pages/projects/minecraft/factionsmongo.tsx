import ProjectPage from "@/components/ProjectPage";
import { FiDownload, FiGithub } from "react-icons/fi";

export default function ProjectFactionsMongo() {
    return (
        <ProjectPage
            name="Factions MongoDB Storage Extension"
            category="Minecraft Server Plugin"
            status="Discontinued"
            summary="A Minecraft server plugin that integrates with the Factions plugin to store data in a MongoDB database rather than on disk."
            created="August 2021"
            openSource
            technologies={[
                "java",
                "mongo",
                "maven"
            ]}
            links={[
                { text: "GitHub Repository", icon: <FiGithub />, href: "https://github.com/lukeeey/FactionsMongo" },
                { text: "Download on SpigotMC", icon: <FiDownload />, href: "https://www.spigotmc.org/resources/%E2%9A%94%EF%B8%8F-factions-%E2%9A%94%EF%B8%8F-mongodb-storage-extension.97333" }
            ]}
        >
            <p>The Factions plugin only supported saving data to disk when I created this, so I added support for MongoDB.</p>
        </ProjectPage>
    )
}
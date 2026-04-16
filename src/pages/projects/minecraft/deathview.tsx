import { DownloadCount } from "@/components/DownloadCount";
import ProjectPage from "@/components/ProjectPage";
import deathview from "@/projects/2020/deathview";

export default function ProjectDeathView() {
    return (
        <ProjectPage {...deathview}>
            <p>A simple plugin I based off of a feature from the Mineplex Minecraft server. Versions are available for both Minecraft: Java Editon and Minecraft: Bedrock Edition.</p>

            <DownloadCount
                count="4400+"
                lastChecked="April 2026"
                source="https://cloudburstmc.org/resources/deathview.396"
            />
        </ProjectPage>
    )
}
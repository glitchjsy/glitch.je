import { DownloadCount } from "@/components/DownloadCount";
import ProjectPage from "@/components/ProjectPage";
import jellylegs from "@/projects/2021/jellylegs";

export default function ProjectJellyLegs() {
    return (
        <ProjectPage {...jellylegs}>
            <p>This plugin is a stupidly simple recreation of the Jelly Legs feature that was seen on Minecraft Faction servers.</p>
            <p>It allows you to disable fall damage for yourself or others with a simple command, making it a great donator perk in-game.</p>

            <DownloadCount
                count="1600+"
                lastChecked="April 2026"
                source="https://cloudburstmc.org/resources/jellylegs.663"
            />
        </ProjectPage>
    )
}
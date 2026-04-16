import ProjectPage from "@/components/ProjectPage";
import factionsmongo from "@/projects/2021/factionsmongo";

export default function ProjectFactionsMongo() {
    return (
        <ProjectPage {...factionsmongo}>
            <p>The Factions plugin only supported saving data to disk when I created this, so I added support for MongoDB.</p>
        </ProjectPage>
    )
}
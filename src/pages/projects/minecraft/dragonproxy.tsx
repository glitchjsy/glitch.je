import ProjectPage from "@/components/ProjectPage";
import dragonproxy from "@/projects/2019/dragonproxy";

export default function ProjectDragonProxy() {
    return (
        <ProjectPage {...dragonproxy}>
            <p>I took over development of DragonProxy in 2019 and rewrote it from scratch. I wasn't the best at Java back then but managed to make it work with support from the community.</p>
            <p>I developed it until April 2020, at which point the project was discontinued and I joined the <a href="https://geysermc.org" target="_blank">GeyserMC team</a> as a Project Lead.</p>
            
            <div><strong>GitHub Stargazers:</strong> 950+</div>
            <div><strong>Repo Forks:</strong> 120+</div>
            <div><strong>Pull Requests:</strong> 166</div>
            <div><strong>Discord Members:</strong> 900+ (over 1k at peak)</div>
        </ProjectPage>
    )
}
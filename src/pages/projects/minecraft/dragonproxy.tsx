import ProjectPage from "@/components/ProjectPage";
import { FiDownload, FiGithub } from "react-icons/fi";

export default function ProjectDragonProxy() {
    return (
        <ProjectPage
            name="DragonProxy"
            category="Java Program"
            status="Discontinued"
            summary="A proxy to allow Minecraft: Bedrock clients to connect to Minecraft: Java Edition servers."
            created="March 2019"
            openSource
            technologies={[
                "java",
                "maven"
            ]}
            links={[
                { text: "GitHub Repository", icon: <FiGithub />, href: "https://github.com/DragonetMC/DragonProxy" }
            ]}
        >
            <p>I took over development of DragonProxy in 2019 and rewrote it from scratch. I wasn't the best at Java back then but managed to make it work with support from the community.</p>
            <p>I developed it until April 2020, at which point the project was discontinued and I joined the <a href="https://geysermc.org" target="_blank">GeyserMC team</a> as a Project Lead.</p>
            
            <div><strong>GitHub Stargazers:</strong> 950+</div>
            <div><strong>Repo Forks:</strong> 120+</div>
            <div><strong>Pull Requests:</strong> 166</div>
            <div><strong>Discord Members:</strong> 900+ (over 1k at peak)</div>
        </ProjectPage>
    )
}
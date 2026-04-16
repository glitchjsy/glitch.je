import ProjectPage from "@/components/ProjectPage";
import threathub from "@/projects/2026/threathub";

export default function ProjectThreatHub() {
    return (
        <ProjectPage {...threathub}>
            <p>
                ThreatHub was born after my experiences dealing with Microsoft Defender vulnerabilities while working at C5 Alliance in the Operations team.
            </p>
            <p>
                The process we used was tedious and I sought to develop a solution - one which was free & open source.
            </p>
            <a href="https://imgur.com/a/threathub-screenshots-RQORD7t" target="_blank">View Screenshots on Imgur</a>
        </ProjectPage>
    )
}
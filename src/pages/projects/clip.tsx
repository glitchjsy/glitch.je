import ProjectPage from "@/components/ProjectPage";
import clip from "@/projects/2024/clip";

export default function ProjectClip() {
    return (
        <ProjectPage {...clip}>
            <p>I originally built Clip for use at work, where we often connect to remote systems that don’t support direct copy-paste between them.</p>
            <p>The backend is a simple <a href="https://javalin.io/" target="_blank">Javalin</a> server while the frontend is a React app.</p>
        </ProjectPage>
    )
}
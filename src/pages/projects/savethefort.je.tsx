import ProjectPage from "@/components/ProjectPage";
import savethefortJe from "@/projects/2025/savethefort-je";

export default function ProjectSaveTheFort() {
    return (
        <ProjectPage {...savethefortJe}>
            <p>
                SaveTheFort.je was a simple, one-page website for spreading the word about the Save Fort Regent movement that was started by journalist Oliver Kidman.
            </p>
            <p>
                The site was developed by hand. AI was used for rewording the text content.
            </p>
            <img src="/images/projects/savethefort/preview.png" style={{ maxWidth: "100%" }} />
        </ProjectPage>
    )
}
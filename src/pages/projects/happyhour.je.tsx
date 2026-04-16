import ProjectPage from "@/components/ProjectPage";
import happyhourJe from "@/projects/2025/happyhour-je";

export default function ProjectHappyHour() {
    return (
        <ProjectPage {...happyhourJe}>
            <p>I created HappyHour.je following the ubrupt news that drink deals in pubs would now be legal in Jersey. It was thrown together quite quickly and could do with some improvements, but ultimately I decided not to launch it.</p>
            <p>AI was not used in the making of this project (although if I had used it back then, I probably would've released it!)</p>
            <img src="/images/projects/happyhour/preview.png" style={{ maxWidth: "100%" }} />
            <br /><br/><br/>
            <p>It is a simple website on the face of it but does have full authentication & an admin panel. This was quick to create by re-using code from another project.</p>
             <img src="/images/projects/happyhour/admin.png" style={{ maxWidth: "100%" }} />
        </ProjectPage>
    )
}
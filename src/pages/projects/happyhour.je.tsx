import ProjectPage from "@/components/ProjectPage";

export default function ProjectHappyHour() {
    return (
        <ProjectPage
            name="HappyHour.je"
            category="Website"
            status="Abandoned"
            summary="Find the best drink deals and happy hours across the island."
            created="June 2025"
            technologies={[
                "typescript",
                "nextjs",
                "mysql",
                "nginx",
                "react",
                "chakra-ui"
            ]}
        >
            <p>I created HappyHour.je following the ubrupt news that drink deals in pubs would now be legal in Jersey.</p>
            <p>It was thrown together quite quickly and could do with some improvements, but ultimately I decided not to launch it.</p>
            <img src="/images/projects/happyhour/preview.png" style={{ maxWidth: "100%" }} />
            <br /><br/><br/>
            <p>It is a simple website on the face of it but does have full authentication & an admin panel.</p>
             <img src="/images/projects/happyhour/admin.png" style={{ maxWidth: "100%" }} />
        </ProjectPage>
    )
}
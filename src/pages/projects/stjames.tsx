import ProjectPage from "@/components/ProjectPage";
import stjamesWebsite from "@/projects/2026/stjames-website";

export default function ProjectStJamesWebsite() {
    return (
        <ProjectPage {...stjamesWebsite}>
            <p>I built a website for local night club <a href="https://facebook.com/StJamesJsy" target="_blank">St James</a> to support and faciliate bookings for the new Steak on the Stone, Sunday Lunch & Disco Bingo.  </p>
            <p>It includes a contact form for general enquiries and a form used for booking different events.</p>

            <p>The design could do with some improvements and this will come in the future, but this was a quick job as I was also creating <a href="https://stjamesjersey.com/files/FoodMenu.pdf" target="_blank">the menus</a> and other resources.</p>

            <p>The website is hosted for free on GitHub pages.</p>

            <h3>Images</h3>
            <img src="/images/projects/stjames-website/home.png" className="project-demo-image-limit" style={{ marginBottom: "20px" }} />
            <img src="/images/projects/stjames-website/disco-bingo.png" className="project-demo-image-limit" style={{ marginBottom: "20px" }} />
            <img src="/images/projects/stjames-website/venue-hire.png" className="project-demo-image-limit" style={{ marginBottom: "20px" }} />
        </ProjectPage>
    )
}
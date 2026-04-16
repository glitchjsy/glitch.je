import ProjectPage from "@/components/ProjectPage";
import dutyCalculator from "@/projects/2023/duty-calculator";

export default function ProjectDutyCalc() {
    return (
        <ProjectPage {...dutyCalculator}>
            <p>This project was created simply as practice with creating Chrome extensions.</p>

            <img src="/images/projects/dutycalc/preview.png" style={{ maxWidth: "100%" }} />

            <p>Initially I had planned to add features such as scraping sites which you are on to automatically calculate the price with the duty added, but ultimately decided against it as it is not that useful.</p>
        </ProjectPage>
    )
}
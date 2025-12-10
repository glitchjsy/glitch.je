import ProjectPage from "@/components/ProjectPage";
import { FiGithub, FiGlobe } from "react-icons/fi";

export default function ProjectOpenData() {
    return (
        <ProjectPage
            name="OpenData.je"
            category="Website"
            status="Active"
            summary="OpenData.je is a project dedicated to making open data from Jersey, Channel Islands, easily accessible and developer-friendly."
            created="February 2023"
            openSource
            technologies={[
                "docusaurus",
                "mapbox",
                "expressjs",
                "chartjs",
                "react",
                "redis",
                "mysql",
                "chatgpt"
            ]}
            links={[
                { text: "Website", icon: <FiGlobe />, href: "https://opendata.je" },
                { text: "Frontend Source Code", icon: <FiGithub />, href: "https://github.com/glitchjsy/data-frontend" },
                { text: "API Source Code", icon: <FiGithub />, href: "https://github.com/glitchjsy/data-api" },
                { text: "Data Fetcher Source Code", icon: <FiGithub />, href: "https://github.com/glitchjsy/data-fetcher" }
            ]}
        >
            <p>The inspiration for this project comes from the challenges I’ve faced when working with government data in Jersey. The existing APIs often lack uniformity, offer little to no documentation, and aren’t very developer-friendly. I’ve also been motivated by platforms like data.gg, which showed me the potential of making data more accessible and useful.</p>
            <p>We provide data in JSON format, with plans to support XML in the future. The data we offer comes from various sources:</p>

            <div style={{ border: "1px solid #c7c2c2ff", borderRadius: "10px", padding: "10px 20px" }}>
                <strong>Government APIs</strong>
                <p>Live data directly remapped from API endpoints run by the Government of Jersey</p>

                <strong>Government Websites</strong>
                <p>Live data that is scraped from Government of Jersey websites when an API is not available</p>

                <strong>Static Data</strong>
                <p>Manually collected data, may be from FOI requests or other non Government sources</p>
            </div>

            <br />
            <a href="https://opendata.je/about" target="_blank">Learn more</a>
        </ProjectPage>
    )
}
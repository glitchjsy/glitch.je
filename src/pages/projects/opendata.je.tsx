import ProjectPage from "@/components/ProjectPage";
import opendataJe from "@/projects/2023/opendata-je";

export default function ProjectOpenData() {
    return (
        <ProjectPage {...opendataJe}>
            <p>The inspiration for this project comes from the challenges I’ve faced when working with government data in Jersey. The existing APIs often lack uniformity, offer little to no documentation, and aren’t very developer-friendly. I’ve also been motivated by platforms like data.gg, which showed me the potential of making data more accessible and useful.</p>
            <p>We provide data in JSON format, with plans to support XML in the future. The data we offer comes from various sources:</p>

            <Box
                title="Government APIs"
                text="Live data directly remapped from API endpoints run by the Government of Jersey"
            />
            <Box
                title="Government Websites"
                text="Live data that is scraped from Government of Jersey websites when an API is not available"
            />
            <Box
                title="Static Data"
                text="Manually collected data, may be from FOI requests or other non Government sources"
            />

            <br />
            <p style={{ marginBottom: "10px" }}>Here is an example of the map:</p>
            <img src="/images/projects/open-data/map.png" style={{ maxWidth: "100%" }} />

            <br /><br/>
            <p style={{ marginBottom: "10px" }}>Here is an example of a chart:</p>
            <img src="/images/projects/open-data/charts.png" style={{ maxWidth: "100%" }} />

            <br />
            <br />
            <a href="https://opendata.je/about" target="_blank">Learn more</a>
        </ProjectPage>
    )
}

function Box({ title, text }: any) {
    return (
        <div
            style={{
                padding: "10px 0",
                paddingLeft: "30px"
            }}
        >
            <strong>{title}</strong>
            <p>{text}</p>
        </div>
    )
}
import { FiGithub, FiGlobe } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "OpenData.je",
    category: "Website",
    status: "Active",
    summary: "OpenData.je is a project dedicated to making open data from Jersey, Channel Islands, easily accessible and developer-friendly.",
    created: "February 2023",
    openSource: true,
    technologies: [
        "docusaurus",
        "mapbox",
        "expressjs",
        "chartjs",
        "react",
        "redis",
        "mysql",
        "chatgpt"
    ],
    links: [
        { text: "Website", icon: FiGlobe, href: "https://opendata.je" },
        { text: "Frontend Source Code", icon: FiGithub, href: "https://github.com/glitchjsy/opendata.je" },
        { text: "API Source Code", icon: FiGithub, href: "https://github.com/glitchjsy/opendata-api" },
        { text: "Data Fetcher Source Code", icon: FiGithub, href: "https://github.com/glitchjsy/opendata-fetcher" }
    ]
} as Project;
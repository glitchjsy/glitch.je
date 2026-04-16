import { FiGithub, FiGlobe } from "react-icons/fi";
import { Project } from "../../models/Project";

export default {
    name: "HitCount.dev",
    category: "Website",
    status: "Inactive",
    summary: "A website that enables developers to track the number of people viewing their projects on GitHub.",
    created: "February 2025",
    openSource: true,
    live: true,
    technologies: [
        "java",
        "javascript",
        "html",
        "css"
    ],
    links: [
        { text: "Website", icon: FiGlobe, href: "https://hitcount.dev" },
        { text: "GitHub Repository", icon: FiGithub, href: "https://github.com/lukeeey/hitcount" }
    ]
} as Project;
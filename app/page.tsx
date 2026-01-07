import { ArrowUpRight, Github, Mail, MapPin } from "lucide-react";

// Personal info
const personalInfo = {
    name: "Mirza",
    location: "tangsel, indonesia",
    bio: "i'm a 22 y/o computer engineering student.",
};

const workExperience = [
    {
        company: "software engineer intern",
        role: "winnicode garuda teknologi",
        url: "https://winni-project.vercel.app/",
        period: "march 2025 - august 2025",
        description:
            "built a prototype news website as part of the internship program.",
    },
];

const projects = [
    {
        name: "money drain",
        url: "https://moneydrain.vercel.app/",
        description: "track and visualize your spending habits",
    },
    {
        name: "newsroom",
        url: "https://newsroom-webnewsagain.vercel.app/",
        description: "modern news aggregator platform",
    },
    {
        name: "gacha simulator",
        url: null,
        description: "fun gacha game simulation",
    },
];

export default function Page() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <div className="mx-auto max-w-3xl px-8 py-16">
                {/* Hero / Title */}
                <section className="mb-8">
                    <div className="flex items-center gap-4">
                        <h1 className="text-3xl font-semibold text-foreground">
                            {personalInfo.name}
                        </h1>
                        <div className="flex gap-3">
                            <a
                                href="https://mail.google.com/mail/u/0/?to=mirzafarisy@gmail.com&fs=1&tf=cm"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground transition-colors hover:text-primary"
                            >
                                <Mail className="size-5" />
                            </a>
                            <a
                                href="https://github.com/Mirza42069"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground transition-colors hover:text-primary"
                            >
                                <Github className="size-5" />
                            </a>
                        </div>
                    </div>
                    <p className="text-muted-foreground flex items-center gap-1.5 mt-1">
                        <MapPin className="size-4" />
                        {personalInfo.location}
                    </p>
                </section>

                {/* Bio */}
                <section className="mb-16">
                    <p className="text-muted-foreground leading-relaxed">
                        {personalInfo.bio}
                    </p>
                </section>

                {/* Work Experience */}
                <section className="mb-16">
                    <h2 className="mb-8 text-lg font-semibold flex items-center gap-2">
                        <span className="text-primary">|</span> work
                    </h2>
                    <div className="space-y-4">
                        {workExperience.map((job, index) => (
                            <a
                                key={index}
                                href={job.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="font-medium text-foreground transition-colors group-hover:text-primary inline-flex items-center gap-2">
                                            {job.role}
                                            <ArrowUpRight className="size-4 text-muted-foreground" />
                                        </h3>
                                        <p className="text-sm text-muted-foreground">{job.company}</p>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {job.description}
                                        </p>
                                    </div>
                                    <p className="text-sm text-muted-foreground whitespace-nowrap">
                                        {job.period}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section id="projects" className="scroll-mt-16">
                    <h2 className="mb-8 text-lg font-semibold flex items-center gap-2">
                        <span className="text-primary">|</span> projects
                    </h2>
                    <div className="space-y-4">
                        {projects.map((project, index) =>
                            project.url ? (
                                <a
                                    key={index}
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block py-3"
                                >
                                    <div className="flex-1">
                                        <h3 className="font-medium text-foreground transition-colors group-hover:text-primary inline-flex items-center gap-2">
                                            {project.name}
                                            <ArrowUpRight className="size-4 text-muted-foreground" />
                                        </h3>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {project.description}
                                        </p>
                                    </div>
                                </a>
                            ) : (
                                <div key={index} className="py-3 group cursor-default">
                                    <div className="flex-1">
                                        <h3 className="font-medium text-foreground transition-colors group-hover:text-primary">
                                            {project.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </section>
            </div>
        </main>
    );
}
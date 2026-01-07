"use client";

import { ArrowUpRight, Github, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

// Personal info
const personalInfo = {
    name: "Mirza",
    location: "tangsel, indonesia",
    bio: "i'm a 22 y/o computer engineering student. passionate about making websites. when i'm not sleeping, i'm probably rebuilding pcs or editing videos.",
};

const workExperience = [
    {
        company: "software engineer intern",
        role: "winnicode garuda teknologi",
        url: "https://winni-project.vercel.app/",
        period: "march 2025 - august 2025",
        description: "built a prototype news website.",
    },
];

const projects = [
    {
        name: "thesis",
        url: null,
        tag: "in progress",
        description: "currently working on...",
    },
    {
        name: "money drain",
        url: "https://moneydrain.vercel.app/",
        tag: "prototype",
        description: "simple money management website",
    },
    {
        name: "newsroom",
        url: "https://newsroom-webnewsagain.vercel.app/",
        tag: "prototype",
        description: "better version of winnicode",
    },
    {
        name: "gacha simulator",
        url: null,
        tag: "lost media",
        description: "its gone",
    },
];

function BlurReveal({ name }: { name: string }) {
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setRevealed(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <span
            className={`transition-all duration-1000 ease-out ${revealed ? "opacity-100 blur-0" : "opacity-0 blur-lg"
                }`}
        >
            {name}
        </span>
    );
}

export default function Page() {
    return (
        <main className="min-h-screen bg-background text-foreground tracking-tight">
            <div className="mx-auto max-w-3xl px-8 py-16">
                {/* Hero */}
                <section className="mb-6">
                    <h1 className="text-4xl font-semibold text-foreground">
                        <BlurReveal name={personalInfo.name} />
                    </h1>
                    <p className="text-muted-foreground flex items-center gap-2 mt-1 text-base">
                        <MapPin className="size-4" aria-hidden="true" />
                        {personalInfo.location}
                    </p>
                </section>

                {/* Bio */}
                <section className="mb-8">
                    <p className="text-muted-foreground leading-relaxed text-base">
                        {personalInfo.bio}
                    </p>
                </section>

                <hr className="border-border my-8" />

                {/* Work */}
                <section className="mb-8">
                    <h2 className="mb-6 text-lg font-semibold flex items-center gap-2">
                        <span className="text-primary" aria-hidden="true">|</span> work
                    </h2>
                    <div className="space-y-4">
                        {workExperience.map((job) => (
                            <a
                                key={job.role}
                                href={job.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-base font-medium text-foreground transition-colors group-hover:text-primary inline-flex items-center gap-2">
                                            {job.role}
                                            <ArrowUpRight className="size-4 text-muted-foreground" aria-hidden="true" />
                                        </h3>
                                        <p className="text-sm text-muted-foreground">{job.company}</p>
                                        <p className="mt-1 text-sm text-foreground/80">{job.description}</p>
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
                <section className="mb-16">
                    <h2 className="mb-6 text-lg font-semibold flex items-center gap-2">
                        <span className="text-primary" aria-hidden="true">|</span> projects
                    </h2>
                    <div className="space-y-4">
                        {projects.map((project) =>
                            project.url ? (
                                <a
                                    key={project.name}
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block"
                                >
                                    <h3 className="text-base font-medium text-foreground transition-colors group-hover:text-primary inline-flex items-center gap-2">
                                        {project.name}
                                        <ArrowUpRight className="size-4 text-muted-foreground" aria-hidden="true" />
                                    </h3>
                                    <p className="text-sm text-muted-foreground">{project.tag}</p>
                                    <p className="mt-1 text-sm text-foreground/80">{project.description}</p>
                                </a>
                            ) : (
                                <div key={project.name} className="group cursor-default">
                                    <h3 className="text-base font-medium text-foreground transition-colors group-hover:text-primary">
                                        {project.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">{project.tag}</p>
                                    <p className="mt-1 text-sm text-foreground/80">{project.description}</p>
                                </div>
                            )
                        )}
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-8">
                    <div className="flex gap-4">
                        <a
                            href="https://mail.google.com/mail/u/0/?to=mirzafarisy@gmail.com&fs=1&tf=cm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-primary"
                            aria-label="Email"
                        >
                            <Mail className="size-5" />
                        </a>
                        <a
                            href="https://github.com/Mirza42069"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground transition-colors hover:text-primary"
                            aria-label="GitHub"
                        >
                            <Github className="size-5" />
                        </a>
                    </div>
                </footer>
            </div>
        </main>
    );
}
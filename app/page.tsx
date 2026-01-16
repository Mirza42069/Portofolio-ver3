"use client";

import { IconArrowUpRight, IconBrandGithub, IconBriefcase, IconMail, IconMapPin, IconSun, IconMoon } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { motion } from "motion/react";

function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return <div className="size-5" />;

    const isDark = resolvedTheme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            className="relative size-5 text-muted-foreground"
        >
            <motion.div
                key={isDark ? "sun" : "moon"}
                animate={{ rotate: 0 }}
                initial={{ rotate: isDark ? -90 : 90 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="flex items-center justify-center"
            >
                {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
            </motion.div>
        </button>
    );
}
// Personal info
const personalInfo = {
    name: "Mirza",
    location: "tangsel, indonesia",
};

const workExperience = [
    {
        company: "winnicode garuda teknologi",
        role: "fullstack developer intern",
        url: "https://winni-project.vercel.app/",
        period: "march 2025 - august 2025",
    },
];
const currentProject = {
    name: "thesis",
    url: "https://benchmark-db-result.vercel.app/",
};

const projects = [
    {
        name: "money drain",
        url: "https://moneydrain.vercel.app/",
        description: "simple money management website",
        year: "2025",
    },
    {
        name: "newsroom",
        url: "https://newsroom-webnewsagain.vercel.app/",
        description: "better version of winnicode",
        year: "2025",
    },
    {
        name: "gacha simulator",
        url: null,
        description: "1st time making website",
        year: "2024",
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
            className={`transition-all duration-2000 ease-out ${revealed ? "opacity-100 blur-0" : "opacity-0 blur-lg"
                }`}
        >
            {name}
        </span>
    );
}

function AnimatedDots() {
    const [dots, setDots] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return <span className="inline-block w-4">{dots}</span>;
}

function ThemedStarsBackground() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    // Amber accent for light mode: #f59e0b (amber-500)
    const starColor = resolvedTheme === "dark" 
        ? "rgba(255,255,255,0.5)" 
        : "rgba(245,158,11,0.4)"; // amber with transparency

    return (
        <div className="fixed inset-0 -z-10 dark:bg-[radial-gradient(ellipse_at_bottom,_#1a1a1a_0%,_#0a0a0a_100%)] bg-[radial-gradient(ellipse_at_bottom,_#f5f5f5_0%,_#ffffff_100%)]">
            <StarsBackground 
                starColor={starColor} 
                speed={100} 
                factor={0.03}
                className="absolute inset-0"
            />
        </div>
    );
}

export default function Page() {
    return (
        <main className="min-h-screen text-foreground tracking-tight relative">
            <ThemedStarsBackground />
            <div className="mx-auto max-w-2xl px-6 py-12 sm:px-12 sm:py-20 relative z-10">
                {/* Hero */}
                <section className="mb-8">
                    <div className="flex items-center justify-between mb-3">
                        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground">
                            <BlurReveal name={personalInfo.name} />
                        </h1>
                        <ThemeToggle />
                    </div>
                    <p className="text-foreground/50 flex items-center gap-2 text-sm sm:text-base">
                        <IconMapPin size={16} aria-hidden="true" />
                        {personalInfo.location}
                    </p>
                    <p className="text-foreground/50 flex items-center gap-2 text-sm sm:text-base">
                        <IconBriefcase size={16} aria-hidden="true" />
                        open to opportunities
                    </p>
                    <p className="text-foreground/50 leading-relaxed text-sm sm:text-base mt-3">
                        i'm a 22 y/o computer engineering student. passionate about <span className="text-foreground">making websites</span>. when i'm not sleeping, i'm probably rebuilding pc or editing videos.
                    </p>
                </section>

                <hr className="border-border my-6" />

                {/* Currently */}
                <section className="mb-12">
                    <h2 className="mb-4 text-xl font-semibold text-foreground/50 flex items-center gap-2">
                        <span className="text-primary" aria-hidden="true">^</span> currently<AnimatedDots />
                    </h2>
                    <a
                        href={currentProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                    >
                        <h3 className="text-sm sm:text-base font-medium text-foreground transition-colors group-hover:text-primary inline-flex items-center gap-2">
                            {currentProject.name}
                            <IconArrowUpRight
                                size={16}
                                className="text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                                aria-hidden="true"
                            />
                        </h3>
                    </a>
                </section>

                {/* Work */}
                <section className="mb-12">
                    <h2 className="mb-4 text-xl font-semibold text-foreground/50 flex items-center gap-2">
                        <span className="text-primary" aria-hidden="true">^</span> work
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
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-sm sm:text-base font-medium text-foreground transition-colors group-hover:text-primary inline-flex items-center gap-2">
                                            {job.company}
                                            <IconArrowUpRight
                                                size={16}
                                                className="text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                                                aria-hidden="true"
                                            />
                                        </h3>
                                        <p className="text-sm sm:text-base text-foreground/50">{job.role}</p>
                                    </div>
                                    <p className="text-xs sm:text-base text-gray-500 whitespace-nowrap">
                                        {job.period}
                                    </p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* Projects */}
                <section className="mb-12">
                    <h2 className="mb-6 text-xl font-semibold text-foreground/50 flex items-center gap-2">
                        <span className="text-primary" aria-hidden="true">^</span> projects
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
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-sm sm:text-base font-medium text-foreground transition-colors group-hover:text-primary inline-flex items-center gap-2">
                                                {project.name}
                                                <IconArrowUpRight
                                                    size={16}
                                                    className="text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                                                    aria-hidden="true"
                                                />
                                            </h3>
                                            <p className="mt-1 text-sm sm:text-base text-foreground/50">
                                                {project.description}
                                            </p>
                                        </div>
                                        <p className="text-xs sm:text-base text-gray-500 whitespace-nowrap">{project.year}</p>
                                    </div>
                                </a>
                            ) : (
                                <div key={project.name} className="group cursor-default">
                                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 sm:gap-4">
                                        <div className="flex-1">
                                            <h3 className="text-sm sm:text-base font-medium text-foreground transition-colors group-hover:text-primary">
                                                {project.name}
                                            </h3>
                                            <p className="mt-1 text-sm sm:text-base text-foreground/50">{project.description}</p>
                                        </div>
                                        <p className="text-xs sm:text-base text-gray-500 whitespace-nowrap">{project.year}</p>
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </section>

                {/* Footer */}
                <footer className="mt-8">
                    <div className="flex gap-3 justify-end">
                        <a
                            href="https://mail.google.com/mail/u/0/?to=mirzafarisy@gmail.com&fs=1&tf=cm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 transition-colors hover:text-primary"
                            aria-label="Email"
                        >
                            <IconMail size={20} />
                        </a>
                        <a
                            href="https://github.com/Mirza42069"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 transition-colors hover:text-primary"
                            aria-label="GitHub"
                        >
                            <IconBrandGithub size={20} />
                        </a>
                    </div>
                </footer>
            </div>
        </main>
    );
}
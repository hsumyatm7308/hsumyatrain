import type { Metadata } from "next";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: "Projects",
  description: "A collection of projects I've worked on.",
};

export default function ProjectsPage() {
  return (
    <section>
      <BlurFade delay={0.04}>
        <h1 className="mb-2 text-2xl font-semibold tracking-tight">Projects</h1>
        <p className="mb-8 text-sm text-muted-foreground">
          A collection of projects I&apos;ve worked on. Select a project to learn more.
        </p>
      </BlurFade>
      {DATA.projects.length ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {DATA.projects.map((project, index) => (
            <BlurFade key={project.slug} delay={0.08 + index * 0.05} className="h-full">
              <ProjectCard
                href={`/projects/${project.slug}`}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image ? `/${project.image.replace(/^\//, "")}` : ""}
                imageFit={"imageFit" in project && project.imageFit === "contain" ? "contain" : undefined}
                video={project.video ? `/${project.video.replace(/^\//, "")}` : ""}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-border p-8 text-center text-muted-foreground">
          No projects to show yet.
        </p>
      )}
    </section>
  );
}

import { MDXContent } from "@content-collections/mdx/react";
import { allProjectDetails } from "content-collections";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import { mdxComponents } from "@/mdx-components";

type Project = Omit<(typeof DATA.projects)[number], "detailTitle" | "category" | "role" | "status" | "mediaCaption"> &
  Partial<Pick<(typeof DATA.projects)[number], "detailTitle" | "category" | "role" | "status" | "mediaCaption">>;

function linkLabel(type: string) {
  return type === "Website" ? "Visit website" : type === "Source" ? "View source" : type;
}

export function generateStaticParams() {
  return DATA.projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project: Project | undefined = DATA.projects.find((item) => item.slug === slug);
  return project ? { title: project.detailTitle || project.title, description: project.description } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project: Project | undefined = DATA.projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const details = allProjectDetails.find((item) => item._meta.path.replace(/\.mdx$/, "") === slug);
  const mediaPath = (path: string) => `/${path.replace(/^\//, "")}`;
  const title = project.detailTitle || project.title;

  return (
    <section>
      <Link href="/projects" className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <ArrowLeft className="size-4" aria-hidden /> All projects
      </Link>

      <header>
        <div className="flex flex-wrap items-center gap-2 text-[13px] font-medium text-muted-foreground">
          {project.category && <><span>{project.category}</span><span aria-hidden>·</span></>}
          <span>{project.dates}</span>
        </div>
        <h1 className="mt-3 text-[2.625rem] font-bold leading-[1.05] tracking-[-0.055em] sm:text-[3.5rem]">{title}</h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">{project.description}</p>
        {project.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.links.map((link, index) => (
              <a key={`${link.type}-${link.href}`} href={link.href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${index === 0 ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>
                {linkLabel(link.type)}
                <ArrowUpRight className="size-3.5" aria-hidden />
              </a>
            ))}
          </div>
        )}
      </header>

      {(project.video || project.image) && (
        <figure className="mt-9">
          <div className="overflow-hidden rounded-xl border border-border bg-muted">
            <div className="flex items-center gap-1.5 border-b border-border px-3.5 py-2.5 text-xs text-muted-foreground">
              <span className="size-1.5 rounded-full bg-muted-foreground/40" />
              <span className="size-1.5 rounded-full bg-muted-foreground/40" />
              <span className="size-1.5 rounded-full bg-muted-foreground/40" />
              <span className="ml-auto">{project.title} preview</span>
            </div>
            {project.video ? (
              <video src={mediaPath(project.video)} controls playsInline preload="metadata" aria-label={`${title} project preview`} className="aspect-video w-full bg-muted object-cover" />
            ) : (
              <img src={mediaPath(project.image)} alt={`${title} project preview`} className={`aspect-video w-full ${"imageFit" in project && project.imageFit === "contain" ? "bg-[#111b25] object-contain" : "object-cover"}`} />
            )}
          </div>
          {project.mediaCaption && <figcaption className="mt-2 text-xs text-muted-foreground">{project.mediaCaption}</figcaption>}
        </figure>
      )}

      {(project.role || project.status) && (
        <div className="my-9 grid grid-cols-2 gap-6 border-y border-border py-7">
          {project.role && <div><p className="mb-2 text-xs text-muted-foreground">My role</p><p className="text-sm font-semibold">{project.role}</p></div>}
          {project.status && (
            <div>
              <p className="mb-2 text-xs text-muted-foreground">Status</p>
              <p className={`inline-flex items-center gap-2 text-sm font-semibold ${/ongoing|in progress/i.test(project.status) ? "text-emerald-700 dark:text-emerald-400" : /completed/i.test(project.status) ? "text-blue-700 dark:text-blue-400" : "text-muted-foreground"}`}>
                <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-current" />
                {project.status}
              </p>
            </div>
          )}
        </div>
      )}

      <article className="prose mt-9 max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert">
        {details ? <MDXContent code={details.mdx} components={mdxComponents} /> : <><h2>About the project</h2><p>{project.description}</p></>}
      </article>
      {project.technologies.length > 0 && (
        <section className="mt-9" aria-label="Technologies used">
          <h2 className="text-xl font-semibold tracking-tight">Built with</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((technology) => <Badge key={technology} variant="outline">{technology}</Badge>)}
          </div>
        </section>
      )}
      <div className="mt-12 border-t border-border pt-6">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <ArrowLeft className="size-4" aria-hidden /> Back to all projects
        </Link>
      </div>
    </section>
  );
}

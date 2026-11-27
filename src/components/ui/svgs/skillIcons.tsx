import type { SVGProps } from "react";

// Simple Icons SVGs are stored locally in public/skills.
function skillIcon(file: string, invertInDark = false) {
  return function SkillIcon({ className }: SVGProps<SVGSVGElement>) {
    return (
      <img
        src={`/skills/${file}.svg`}
        alt=""
        aria-hidden="true"
        className={`${className ?? ""}${invertInDark ? " dark:invert" : ""}`}
      />
    );
  };
}

export const HTMLIcon = skillIcon("html5");
export const CSSIcon = skillIcon("css");
export const JavascriptIcon = skillIcon("javascript");
export const TailwindIcon = skillIcon("tailwindcss");
export const BootstrapIcon = skillIcon("bootstrap");
export const PHPIcon = skillIcon("php");
export const LaravelIcon = skillIcon("laravel");
export const JsonIcon = skillIcon("json", true);
export const Mysql = skillIcon("mysql");
export const UbuntuIcon = skillIcon("ubuntu");
export const FirebaseIcon = skillIcon("firebase");
export const SupabaseIcon = skillIcon("supabase");
export const PrismaIcon = skillIcon("prisma");
export function AWSIcon({ className }: SVGProps<SVGSVGElement>) {
  return <img src="/skills/aws.svg" alt="" aria-hidden="true" className={`${className ?? ""} bg-white`} />;
}

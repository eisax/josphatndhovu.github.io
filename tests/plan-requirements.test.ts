import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";

import nextConfig from "../next.config";
import { education } from "../data/education";
import { experience } from "../data/experience";
import { hero } from "../data/hero";
import { proficiency } from "../data/proficiency";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";
import { socialLinks } from "../data/social";
import { testimonials } from "../data/testimonials";

describe("Plan.md portfolio requirements", () => {
  it("uses static export settings required by Next.js deployment", () => {
    expect(nextConfig.output).toBe("export");
    expect(nextConfig.trailingSlash).toBe(true);
    expect(nextConfig.images?.unoptimized).toBe(true);
  });

  it("centralizes all portfolio content in data files", () => {
    expect(hero.name).toBe("JOSPHAT K NDHLOVU");
    expect(hero.stats).toEqual([
      { value: 5, suffix: "+", label: "Published Play Store Apps" },
      { value: 250, suffix: "+", label: "Package Integrations" },
      { value: 3, suffix: "+", label: "Years Mobile Experience" },
    ]);
    expect(socialLinks.email).toBe("mailto:josphatkndhlovu@gmail.com");
    expect(skillGroups.map((group) => group.title)).toEqual([
      "Mobile Engineering",
      "Payments & Financial Systems",
      "Application Security & Networking",
      "Data Persistence & Backend Services",
      "DevOps, Testing & Quality Assurance",
    ]);
    expect(
      skillGroups.flatMap((group) =>
        group.softwareSkills.map((skill) => skill.skillName),
      ),
    ).toEqual(
      expect.arrayContaining([
        "Flutter",
        "Dart",
        "Android",
        "Kotlin",
        "Jetpack Compose",
        "Riverpod",
        "BLoC",
        "SQLite",
        "Firebase",
      ]),
    );
    expect(proficiency).toHaveLength(5);
    expect(education[0]).toMatchObject({
      schoolName: expect.any(String),
      subHeader: expect.any(String),
      duration: expect.any(String),
    });
    expect(experience.length).toBeGreaterThanOrEqual(3);
    expect(Array.isArray(testimonials)).toBe(true);
    expect(projects.length).toBeGreaterThanOrEqual(8);
  });

  it("keeps visual defaults brutalist and unrounded", async () => {
    const css = await import("node:fs/promises").then((fs) =>
      fs.readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    );

    expect(css).toContain("--terminal-signal: #FF3D00");
    expect(css).toContain("--radius: 0px");
    expect(css).toContain(".grid-overlay::before");
    expect(css).toContain(".glitch:hover::before");
    expect(css).toContain(".progress-brutalist");
  });

  it("uses consistent vertical rhythm between skill groups", async () => {
    const source = await import("node:fs/promises").then((fs) =>
      fs.readFile(
        new URL("../components/sections/SkillsSection.tsx", import.meta.url),
        "utf8",
      ),
    );

    expect(source).toContain("space-y-12 md:space-y-16");
  });

  it("stacks proficiency bars below the section heading in two columns", async () => {
    const source = await import("node:fs/promises").then((fs) =>
      fs.readFile(
        new URL("../components/sections/ProficiencySection.tsx", import.meta.url),
        "utf8",
      ),
    );

    expect(source).toContain('className="space-y-12"');
    expect(source).toContain('className="grid gap-8 md:grid-cols-2"');
    expect(source).not.toContain("md:grid-cols-[0.8fr_1.2fr]");
  });

  it("stretches project cards to consistent row heights", async () => {
    const [sectionSource, cardSource] = await Promise.all([
      import("node:fs/promises").then((fs) =>
        fs.readFile(
          new URL("../components/sections/ProjectsSection.tsx", import.meta.url),
          "utf8",
        ),
      ),
      import("node:fs/promises").then((fs) =>
        fs.readFile(
          new URL("../components/cards/ProjectCard.tsx", import.meta.url),
          "utf8",
        ),
      ),
    ]);

    expect(sectionSource).toContain('className="h-full"');
    expect(cardSource).toContain('className="flex h-full flex-col"');
  });

  it("keeps the contact avatar aligned responsively", async () => {
    const source = await import("node:fs/promises").then((fs) =>
      fs.readFile(
        new URL("../components/sections/ContactSection.tsx", import.meta.url),
        "utf8",
      ),
    );

    expect(source).toContain("md:items-center");
    expect(source).toContain("mx-auto");
    expect(source).toContain("md:ml-auto");
    expect(source).toContain("aspect-square");
    expect(source).toContain("sm:w-48");
    expect(source).toContain("md:w-56");
    expect(source).toContain("lg:w-64");
  });

  it("centers mobile hero text vertically without changing desktop alignment", async () => {
    const source = await import("node:fs/promises").then((fs) =>
      fs.readFile(
        new URL("../components/sections/HeroSection.tsx", import.meta.url),
        "utf8",
      ),
    );

    expect(source).toContain("justify-start");
    expect(source).toContain("my-auto");
    expect(source).toContain("pt-20");
    expect(source).toContain("md:min-h-screen");
    expect(source).toContain("md:justify-end");
    expect(source).toContain("md:my-0");
    expect(source).toContain("md:pt-24");
  });

  it("keeps decorative section wrapper numbers out of the content start area", async () => {
    const source = await import("node:fs/promises").then((fs) =>
      fs.readFile(
        new URL("../components/layout/SectionWrapper.tsx", import.meta.url),
        "utf8",
      ),
    );

    expect(source).toContain("top-3");
    expect(source).toContain("text-[48px]");
    expect(source).toContain("md:top-2");
    expect(source).toContain("md:text-[80px]");
    expect(source).toContain("aria-hidden");
  });

  it("keeps software skill badges focused and readable", () => {
    expect(
      skillGroups.every((group) => group.softwareSkills.length <= 7),
    ).toBe(true);
    expect(skillGroups.length).toBe(5);
  });

  it("uses matching company-specific logos for experience cards", () => {
    const expectedLogos = {
      "Showline Solutions": "/img/icons/common/havano.svg",
      "Tumela Systems": "/img/icons/common/tumela.svg",
      "Zimbabwe Women's Microfinance Bank": "/img/icons/common/clarityinai.svg",
    };

    for (const item of experience) {
      expect(item.companyLogo).toBe(
        expectedLogos[item.company as keyof typeof expectedLogos],
      );
      expect(
        existsSync(
          new URL(`../public${item.companyLogo}`, import.meta.url),
        ),
      ).toBe(true);
    }
  });
});

import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import ActionLink from "@/components/home/ActionLink";
import Section, { SectionBody } from "@/components/home/Section";
import EntryList from "@/components/home/EntryList";

type LatestThought = { title: string };

function getLatestThought(): LatestThought | null {
  try {
    const dir = path.join(process.cwd(), "public", "thoughts");
    const files = fs
      .readdirSync(dir)
      .filter((file) => file.endsWith(".md"))
      .sort()
      .reverse();
    if (files.length === 0) return null;
    const content = fs.readFileSync(path.join(dir, files[0]), "utf8");
    const title = content.split("\n")[0].replace(/^#\s*/, "").trim();
    return title ? { title } : null;
  } catch {
    return null;
  }
}

export default function Home() {
  const latestThought = getLatestThought();

  return (
    <main className={styles.main}>
      <section className={styles.hero} id="home">
        <div className={styles.heroContent}>
          <h1 className={styles.statement}>
            I write software for a living. This page is about{" "}
            <em>everything else</em>.
          </h1>
          <p className={styles.lede}>
            Breaking my own software before anyone else gets to, small tools I
            actually use, and a render queue that hums overnight — this is the
            personal half of my internet. The professional half lives at{" "}
            <Link href="https://juliandevelops.com">juliandevelops.com</Link>.
          </p>
        </div>
        <aside className={styles.heroAside}>
          <figure className={styles.portraitFigure}>
            <Image
              className={styles.portrait}
              src="/me.jpg"
              alt="Portrait of Julian"
              width={220}
              height={310}
              priority
            />
            <figcaption className={styles.portraitCaption}>
              That&apos;s me — somewhere between a terminal and a render
              queue.
            </figcaption>
          </figure>
          <dl className={styles.meta}>
            <div>
              <dt>Where</dt>
              <dd>Germany</dd>
            </div>
            <div>
              <dt>Mail</dt>
              <dd>
                <a href="mailto:support@julianschumacher.dev">
                  support@julianschumacher.dev
                </a>
              </dd>
            </div>
            <div>
              <dt>Elsewhere</dt>
              <dd>
                <a href="https://github.com/juliandevelops">GitHub</a>
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <Section id="now" number="01" title="What I'm up to">
        <EntryList
          items={[
            {
              term: "New",
              description:
                "This week I started at an automotive manufacturer — the practical side of my DHBW engineering studies. Too early for war stories. Ask me again in three months.",
            },
            {
              term: "Shipping",
              description:
                "Small, focused apps I actually use myself. I'd rather finish three small things than plan one big one.",
            },
            {
              term: "Learning",
              description:
                "Whatever pulled me down this month's rabbit hole — lately most of them start with a security question. I keep a list. The list always wins.",
            },
            {
              term: "Otherwise",
              description:
                "Headphones on, long walks, early nights. My best ideas arrive when I'm nowhere near a keyboard.",
            },
          ]}
        />
      </Section>

      <Section id="interests" number="02" title="What I'm into">
        <EntryList
          items={[
            {
              term: "Cybersecurity & AI",
              description:
                "I read software through a security lens: how would this fail, and who benefits when it does. AI made those questions louder, not easier. Most of my rabbit holes start somewhere in there.",
            },
            {
              term: "Software",
              description:
                "The craft itself. Small tools, sharp scripts, interfaces that don't make you think. A script that saves ten minutes a day beats a portfolio project nobody runs.",
            },
            {
              term: "Rendering & simulation",
              description:
                "Blender, physics, light — making a computer pretend the real world. The interesting part is when the simulation is almost right: almost is where you learn what the real world actually does.",
            },
            {
              term: "Hardware",
              description:
                "The layer under the software. I like knowing what the machine I talk to all day actually is — and what I can plug into it.",
            },
            {
              term: "Music",
              description:
                "Theory, production, sound design. Still on the shelf — just further down than it used to be.",
            },
          ]}
        />
      </Section>

      <Section id="off-screen" number="03" title="Off screen">
        <EntryList
          items={[
            {
              term: "Gym",
              description:
                "Strength basics, no app for it. Progress is slow and boring, which is probably the point.",
            },
            {
              term: "Running",
              description:
                "Not training for anything. Routes over tracks — I run to think, not to race.",
            },
            {
              term: "Parkour",
              description:
                "Moving through the city the way it wasn't designed for. It's mostly mental: the wall looks impossible until you break it into moves.",
            },
            {
              term: "Martial arts",
              description:
                "Not yet — but it's on the list. And the list always wins.",
            },
          ]}
        />
      </Section>

      <div className={styles.panel}>
        <div>
          <h3 className={styles.panelTitle}>The professional half</h3>
          <p className={styles.panelText}>
            Projects, code and everything with a deadline live at{" "}
            <a href="https://juliandevelops.com">juliandevelops.com</a>.
          </p>
        </div>
        <ActionLink href="https://juliandevelops.com" variant="inverse">
          Visit juliandevelops
        </ActionLink>
      </div>

      <Section id="thoughts" number="04" title="Thoughts">
        <SectionBody>
          <p>
            Every once in a while I write something down and publish it before
            it&apos;s perfect. It&apos;s not a newsletter — it&apos;s a shelf.
            Take what&apos;s useful.
          </p>
          <p className={styles.latestNote}>
            {latestThought ? (
              <>
                Latest entry:{" "}
                <Link href="/thoughts">{latestThought.title}</Link>
              </>
            ) : (
              <>
                Nothing published yet — the shelf is being built. It will fill
                up over time.
              </>
            )}
          </p>
          <ActionLink href="/thoughts" variant="ghost">
            Read the thoughts →
          </ActionLink>
        </SectionBody>
      </Section>
    </main>
  );
}

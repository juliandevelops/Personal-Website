import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.scss";
import ActionLink from "@/components/home/ActionLink";
import Section, { SectionBody } from "@/components/home/Section";
import InfoCard, { InfoCardGrid } from "@/components/home/InfoCard";
import Timeline from "@/components/home/Timeline";

export default function Home() {

  return (
    <main className={styles.main}>
      <section className={styles.hero} id="home">
        <div className={styles.heroContent}>
          <p className={styles.eyebrow}>Personal space</p>
          <h1>Julian Schumacher</h1>
          <p className={styles.lede}>
            I am a developer and product-minded builder. This page shares the
            personal side behind the professional work: the habits, curiosities,
            and projects that keep me energized.
          </p>
          <div className={styles.actions}>
            <ActionLink href="https://juliandevelops.com" variant="primary">
              Professional website
            </ActionLink>
            <ActionLink href="#story" variant="secondary">
              About me
            </ActionLink>
            <ActionLink href="#connect" variant="ghost">
              Get in touch
            </ActionLink>
          </div>
          <div className={styles.pillGroup}>
            <span className={styles.pill}>Based in Germany</span>
            <span className={styles.pill}>Security focused</span>
            <span className={styles.pill}>Calm, clear, dependable</span>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.portraitWrap}>
            <Image
              className={styles.portrait}
              src="/me.jpg"
              alt="Portrait of Julian"
              width={260}
              height={260}
              priority
            />
          </div>
          <div className={styles.noteCard}>
            <p>
              I like simple user interfaces with minimalistic design.
              If something is complicated, I try to make it feel simple.
            </p>
          </div>
        </div>
      </section>

      <Section id="story" label="Story" title="How I work">
        <SectionBody>
          <p>
            I enjoy building products that feel simple and effective.
            Products shouldn't call attention to themselves — they should work without thinking about it.
          </p>
          <p>
            Next to my main projects I find new stuff to work on every once in a while to learn new technologies and approaches.
            This keeps me sharp and allows me to bring fresh ideas into my main work.
          </p>
        </SectionBody>
      </Section>

      <Section id="values" label="Values" title="What matters to me">
        <InfoCardGrid>
          <InfoCard
            title="Clarity"
            description="Design that explains itself without extra noise."
          />
          <InfoCard
            title="Minimalism"
            description="Keep it simple, focus on what matters."
          />
          <InfoCard
            title="Trust"
            description="Transparent process, clean engineering, security first."
          />
        </InfoCardGrid>
      </Section>

      <Section id="now" label="Now" title="What I am working on">
        <Timeline
          items={[
            {
              label: "Product",
              description:
                "Refining a calm, focused workflow for upcoming apps.",
            },
            {
              label: "Learning",
              description:
                "Explore new technolgies and experiment with fresh ideas.",
            },
            {
              label: "Everyday",
              description: "Gym, music and 3D work to stay balanced.",
            },
          ]}
        />
      </Section>

      <Section id="interests" label="Interests" title="What fascinates me off screen">
        <InfoCardGrid>
          <InfoCard
            title="3D modeling"
            description="Modeling, texturing and rendering with Blender and 3D engines."
          />
          <InfoCard
            title="Music"
            description="Music theory, production and sound design."
          />
          <InfoCard
            title="Movement"
            description="Walks, short routes, fresh air, clearer head."
          />
        </InfoCardGrid>
      </Section>

      <Section id="story" label="Story" title="What moves me">
        <SectionBody>
          <p>
            I believe in privacy and security as a fundamental right.
            In a world where data is often exploited, I am committed to building products that respect and protect user information.
          </p>
          <p>
            I also believe, that technology should be used intentionally and mindfully.
            I believe that protecting users is a shared responsibility of developers, companies, and users alike.
          </p>
        </SectionBody>
      </Section>

      <Section id="connect" label="Connect" title="Stay in touch">
        <SectionBody>
          <p>
            For professional topics you can find all details on my{" "}
            <Link href="https://juliandevelops.com">professional website</Link>.
          </p>
          <div className={styles.actions}>
            <ActionLink
              href="mailto:support@julianschumacher.dev"
              variant="primary"
            >
              Send an email
            </ActionLink>
            <ActionLink href="#home" variant="secondary">
              Back to top
            </ActionLink>
          </div>
        </SectionBody>
      </Section>
    </main>
  );
}

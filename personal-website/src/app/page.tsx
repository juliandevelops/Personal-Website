import Image from "next/image";
import Link from "next/link";
import QuickInfoBanner from "@/components/QuickInfoBanner";
import { setBannerCookie, getBannerCookie } from "@/app/objects/cookieStore";
import styles from "./page.module.scss";
import ActionLink from "@/components/home/ActionLink";
import Section, { SectionBody } from "@/components/home/Section";
import InfoCard, { InfoCardGrid } from "@/components/home/InfoCard";
import Timeline from "@/components/home/Timeline";

export default async function Home() {
  const bannerActive = await getBannerCookie();

  const handleBannerCallback = async (val: boolean) => {
    "use server";
    await setBannerCookie(val);
  };

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
            <span className={styles.pill}>Web + App</span>
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
              I like honest interfaces, clear language, and things that outlive
              a trend. If something feels effortless, I probably refined it for
              a while.
            </p>
          </div>
        </div>
      </section>

      <Section id="story" label="Story" title="How I work">
        <SectionBody>
          <p>
            I enjoy building products that feel quiet but precise. I start with
            the experience, sketch quickly, prototype, and then refine until the
            details feel cohesive.
          </p>
          <p>
            Outside of client work I keep small side quests running: tiny tools,
            automations, and experiments that let me try new ideas.
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
            title="Calm speed"
            description="Move fast, but never feel frantic."
          />
          <InfoCard
            title="Trust"
            description="Transparent process, clean engineering."
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
                "Exploring motion ideas that stay subtle but noticeable.",
            },
            {
              label: "Everyday",
              description: "Morning coffee, evening music, lots of code between.",
            },
          ]}
        />
      </Section>

      <Section id="interests" label="Interests" title="What fascinates me off screen">
        <InfoCardGrid>
          <InfoCard
            title="Photography"
            description="Quiet scenes, strong contrasts, patient framing."
          />
          <InfoCard
            title="Audio"
            description="Good sound, calm playlists, clean vocals."
          />
          <InfoCard
            title="Movement"
            description="Walks, short routes, fresh air, clearer head."
          />
        </InfoCardGrid>
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

      <QuickInfoBanner
        currentValue={bannerActive}
        setCallback={handleBannerCallback}
      />
    </main>
  );
}

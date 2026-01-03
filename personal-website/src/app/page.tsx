import styles from "./page.module.scss";
import Image from "next/image";
import Link from "next/link";
import QuickInfoBanner from "@/components/QuickInfoBanner";
import { setBannerCookie, getBannerCookie } from "@/app/objects/cookieStore";

export default async function Home() {
  const bannerActive = await getBannerCookie();
  console.log(`Home page rendered with bannerActive: ${bannerActive}`);

  const handleBannerCallback = async (val: boolean) => {
    "use server";
    await setBannerCookie(val);
  };

  return (
    <main>
      <div>
        <div>
          <Image
            src="/me.jpg"
            alt="A Portrait of myself"
            width={150}
            height={150}
            className={styles.avatar}
          />
          <h1>Julian Schumacher</h1>
          <p>
            Hi!
            <br />
            I'm Julian, a passionate developer and tech enthusiast.
            Welcome to my personal website, where you can get to know me better.
            As already mentioned in the info banner, for professional inquiries, please visit my {" "} { /* {" "} implies a space */}
            <Link href="https://juliandevelops.com">professional website</Link>.
            <br />
          </p>
        </div>
      </div>
      <QuickInfoBanner
        currentValue={bannerActive}
        setCallback={handleBannerCallback}
      />
    </main >
  );
}

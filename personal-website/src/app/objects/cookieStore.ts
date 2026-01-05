import { cookies } from "next/headers";

const bannerCookieName = "quickInfoBannerDismissed";

export async function setBannerCookie(value: boolean) {
    const cookieStore = await cookies();
    cookieStore.set("quickInfoBannerDismissed", value ? 'true' : 'false', { maxAge: 60 * 60 * 24 * 30 }); // Expires in 30 days
}

export async function getBannerCookie() {
    const cookieStore = await cookies();
    const bannerCookie = cookieStore.get(bannerCookieName);
    return bannerCookie ? bannerCookie.value === 'true' : false;
}

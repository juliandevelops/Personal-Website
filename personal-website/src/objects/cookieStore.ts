import { cookies } from "next/headers";

export type ConsentValue = "essential" | "all";

const consentCookieName = "cookieConsent";
// Legacy cookie of the old quick-info banner; treated as "essential" on read.
const legacyBannerCookieName = "quickInfoBannerDismissed";

// 180 days, the usual retention for a consent choice.
const consentMaxAge = 60 * 60 * 24 * 180;

const cookieOptions = {
    maxAge: consentMaxAge,
    httpOnly: true,
    // Secure cookies are accepted on localhost by modern browsers, but only
    // enforce them in production to keep local dev over plain http working.
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    path: "/",
};

export async function setConsent(value: ConsentValue) {
    const cookieStore = await cookies();
    cookieStore.set(consentCookieName, value, cookieOptions);
    cookieStore.delete(legacyBannerCookieName);
}

export async function getConsent(): Promise<ConsentValue | null> {
    const cookieStore = await cookies();
    const consent = cookieStore.get(consentCookieName);
    if (consent?.value === "essential" || consent?.value === "all") {
        return consent.value;
    }
    // Visitors who dismissed the old banner keep their choice: essential only.
    const legacy = cookieStore.get(legacyBannerCookieName);
    if (legacy?.value === "true") {
        return "essential";
    }
    return null;
}

export async function resetConsent() {
    const cookieStore = await cookies();
    cookieStore.delete(consentCookieName);
    cookieStore.delete(legacyBannerCookieName);
}

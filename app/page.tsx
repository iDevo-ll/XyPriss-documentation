import { LandingPageClient } from "@/components/landing/landing-page-client";

export const revalidate = 14400; // 4 hours

export default function Home() {
  return <LandingPageClient />;
}

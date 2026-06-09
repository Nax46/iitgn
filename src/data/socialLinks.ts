export type SocialPlatform = "linkedin" | "twitter" | "facebook" | "instagram" | "youtube";

export type SocialLink = {
  platform: SocialPlatform;
  label: string;
  href: string | null;
};

/** Official IIT Gandhinagar channels used by IITGN CDF */
export const iitgnSocialLinks: SocialLink[] = [
  {
    platform: "linkedin",
    label: "IIT Gandhinagar on LinkedIn",
    href: "https://www.linkedin.com/school/indian-institute-of-technology-gandhinagar-iitgn-/",
  },
  {
    platform: "twitter",
    label: "IIT Gandhinagar on X (Twitter)",
    href: "https://x.com/iitgn",
  },
  {
    platform: "facebook",
    label: "IIT Gandhinagar on Facebook",
    href: "https://www.facebook.com/iitgn.official/",
  },
  {
    platform: "instagram",
    label: "IIT Gandhinagar on Instagram",
    href: "https://www.instagram.com/iit_gandhinagar/",
  },
  {
    platform: "youtube",
    label: "IIT Gandhinagar on YouTube",
    href: "https://www.youtube.com/@IITGN1",
  },
];

export const footerSocialLinks = iitgnSocialLinks.filter((link) =>
  ["linkedin", "twitter", "facebook"].includes(link.platform),
);

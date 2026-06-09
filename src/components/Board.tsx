import React, { useEffect, useState } from "react";
import { Linkedin } from "lucide-react";
import styles from "./Board.module.css";

type PhotoFrame = {
  objectPosition: string;
};

type Member = {
  id: string;
  name: string;
  title: string;
  intro?: string;
  bio?: string;
  imgSrc: string;
  linkedin?: string;
  photoFrame?: PhotoFrame;
};

/** Per-director framing tuned to each source photo (Rajat Moona is the reference). */
const members: Member[] = [
  {
    id: "rajat-moona",
    name: "Prof Rajat Moona",
    title: "Chairman, IITGN Competency Development Foundation\nDirector, IIT Gandhinagar",
    bio: "Prof Rajat Moona chairs IITGN CDF while serving as Director of IIT Gandhinagar. His leadership spans computing research, institutional governance, and national technology initiatives that connect academia with industry.",
    imgSrc: "/images/Board_1.jpg",
    linkedin: "https://www.linkedin.com/in/rajatmoona/",
    photoFrame: { objectPosition: "center 18%" },
  },
  {
    id: "vimal-mishra",
    name: "Prof Vimal Mishra",
    title: "Director, IITGN Competency Development Foundation\nDean, Research and Development, IIT Gandhinagar",
    bio: "Prof Vimal Mishra oversees research strategy at IIT Gandhinagar and contributes to CDF's academic direction. His work spans interdisciplinary research and capacity building in higher education.",
    imgSrc: "/images/Board_5.jpg",
    linkedin: "https://www.linkedin.com/in/vimal-mishra-21162265/",
    photoFrame: { objectPosition: "center 25%" },
  },
  {
    id: "amit-prashant",
    name: "Prof Amit Prashant",
    title: "Director, IITGN Competency Development Foundation\nDean, External Relations, IIT Gandhinagar",
    bio: "Prof Amit Prashant leads external relations and partnership initiatives at IIT Gandhinagar, supporting CDF's engagement with industry and academic collaborators.",
    imgSrc: "/images/Board_2.jpg",
    linkedin: "https://www.linkedin.com/in/amit-prashant-3865271a9/",
    photoFrame: { objectPosition: "center 22%" },
  },
  {
    id: "prem-kumar-chopra",
    name: "Shri Prem Kumar Chopra",
    title: "Director, IITGN Competency Development Foundation\nRegistrar, IIT Gandhinagar",
    bio: "Shri Prem Kumar Chopra brings administrative leadership to IITGN CDF and IIT Gandhinagar, overseeing governance, compliance, and operational standards across programmes.",
    imgSrc: "/images/Board_3.jpg",
    linkedin: "https://www.linkedin.com/in/pk-chopra",
    photoFrame: { objectPosition: "center 30%" },
  },
  {
    id: "sam-placid",
    name: "Shri Sam Placid",
    title: "Chief Executive Officer, IITGN Competency Development Foundation\nFormer Chief, Executive Education & Corporate Relations, XLRI",
    bio: "Shri Sam Placid serves as CEO of IITGN CDF. He leads programme delivery, industry partnerships, and day-to-day operations, drawing on extensive experience in executive education.",
    imgSrc: "/images/Board_4.jpg",
    linkedin: "https://www.linkedin.com/in/psam01/",
    photoFrame: { objectPosition: "center 28%" },
  },
  {
    id: "sunil-parekh",
    name: "Dr. Sunil Parekh",
    title: "Director, IITGN Competency Development Foundation\nSenior Advisor, Zydus Life Sciences & Jubilant Bhartia Group",
    bio: "Dr. Sunil Parekh advises IITGN CDF on industry collaboration, bringing senior leadership experience from life sciences and corporate sectors.",
    imgSrc: "/images/Board_7.jpg",
    linkedin: "https://www.linkedin.com/in/sunilrparekh/",
    photoFrame: { objectPosition: "center 24%" },
  },
  {
    id: "narsimha-mannepalli",
    name: "Narsimha Rao Mannepalli",
    title: "Director, IITGN Competency Development Foundation\nFormer EVP, Infosys; Strategic Advisor and Angel Investor",
    bio: "Shri Narsimha Rao Mannepalli contributes strategic advisory experience from senior IT services leadership, helping align CDF programmes with industry requirements.",
    imgSrc: "/images/Board_6.jpg",
    linkedin: "https://www.linkedin.com/in/narry-mannepalli/",
    photoFrame: { objectPosition: "center 30%" },
  },
];

const defaultPhotoFrame: PhotoFrame = {
  objectPosition: "center center",
};

const getPhotoStyle = (frame?: PhotoFrame): React.CSSProperties => ({
  objectPosition: frame?.objectPosition ?? defaultPhotoFrame.objectPosition,
});

const formatTitleLines = (title: string) =>
  title
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

type MemberPortraitProps = {
  member: Member;
};

const MemberPortrait = ({ member }: MemberPortraitProps) => (
  <img
    src={member.imgSrc}
    alt={`Portrait of ${member.name}`}
    loading="lazy"
    className={styles["avatar-image"]}
    style={getPhotoStyle(member.photoFrame)}
  />
);

type BoardMemberCardProps = {
  member: Member;
};

const BoardMemberCard = ({ member }: BoardMemberCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const titleLines = formatTitleLines(member.title);
  const primaryRole = titleLines[0] ?? "";

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const handleFlipToBack = () => setFlipped(true);
  const handleFlipToFront = () => setFlipped(false);

  if (prefersReducedMotion) {
    return (
      <article className={`${styles["flip-container"]} ${styles["is-interacting"]}`}>
        <div className={styles["card-shell"]}>
          <div className={styles["avatar-overlap"]}>
            <MemberPortrait member={member} />
          </div>
          <div className={styles["card-body"]}>
            <div className={styles["name-row"]}>
              <h3 className={styles["member-name"]}>{member.name}</h3>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${member.name} on LinkedIn`}
                  className={styles["linkedin-button"]}
                >
                  <Linkedin className="w-4 h-4" aria-hidden="true" />
                </a>
              )}
            </div>
            <div className={styles["member-title"]}>
              {titleLines.map((line) => (
                <span key={`${member.id}-${line}`}>{line}</span>
              ))}
            </div>
            {flipped && member.bio && (
              <p className={styles["back-bio"]} style={{ marginBottom: "0.75rem" }}>
                {member.bio}
              </p>
            )}
            {member.bio && (
              <div className={styles["card-action-wrap"]}>
                <button
                  type="button"
                  onClick={() => setFlipped((value) => !value)}
                  className={styles["card-action"]}
                  aria-expanded={flipped}
                >
                  {flipped ? "Show less" : "Read more"}
                </button>
              </div>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article
      className={`${styles["flip-container"]} ${flipped ? styles["is-interacting"] : ""}`}
      aria-live="polite"
    >
      <div className={`${styles["flip-inner"]} ${flipped ? styles["is-flipped"] : ""}`}>
        <div className={styles["card-face-front"]} aria-hidden={flipped}>
          <div className={styles["card-shell"]}>
            <div className={styles["avatar-overlap"]}>
              <MemberPortrait member={member} />
            </div>
            <div className={styles["card-body"]}>
              <div className={styles["name-row"]}>
                <h3 className={styles["member-name"]}>{member.name}</h3>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${member.name} on LinkedIn`}
                    className={styles["linkedin-button"]}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <Linkedin className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
              </div>
              <div className={styles["member-title"]}>
                {titleLines.map((line) => (
                  <span key={`${member.id}-${line}`}>{line}</span>
                ))}
              </div>
              {member.bio && (
                <div className={styles["card-action-wrap"]}>
                  <button
                    type="button"
                    onClick={handleFlipToBack}
                    className={styles["card-action"]}
                    aria-expanded={false}
                    aria-controls={`board-bio-${member.id}`}
                  >
                    Read more
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          className={styles["card-face-back"]}
          aria-hidden={!flipped}
          id={`board-bio-${member.id}`}
        >
          <div className={styles["back-shell"]}>
            <div className={styles["back-header"]}>
              <p className={styles["back-name"]}>{member.name}</p>
              <p className={styles["back-role"]}>{primaryRole}</p>
            </div>
            <p className={styles["back-bio-label"]}>Profile</p>
            <p className={styles["back-bio"]}>{member.bio}</p>
            <div className={styles["card-action-wrap"]}>
              <button
                type="button"
                onClick={handleFlipToFront}
                className={styles["card-action"]}
                aria-expanded={true}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export const Board: React.FC<{ membersList?: Member[] }> = ({ membersList }) => {
  const list = membersList ?? members;

  return (
    <section aria-labelledby="board-heading" className={`py-16 lg:py-24 ${styles["board-section"]}`}>
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 lg:mb-16">
          <p className="eyebrow mb-3">Governance</p>
          <h2 id="board-heading" className="text-display-sm mb-4">
            Board of Directors
          </h2>
          <p className="text-lead">
            Senior IIT Gandhinagar leaders and industry advisors who guide the Competency Development
            Foundation and its academic-industry partnerships.
          </p>
        </div>

        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-14 place-items-center ${styles["board-grid"]}`}
        >
          {list.map((member) => (
            <BoardMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Board;

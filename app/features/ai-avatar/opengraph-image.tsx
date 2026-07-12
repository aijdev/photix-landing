import { renderOgCard, OG_SIZE } from "../../lib/ogCard";

export const alt = "Photix — AI Avatar Maker from One Selfie";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return renderOgCard({
    line1: "One selfie, endless",
    line2: "new identities",
    tags: ["Superhero", "Anime", "Renaissance", "iPhone & iPad"],
  });
}

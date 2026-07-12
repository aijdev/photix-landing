import { renderOgCard, OG_SIZE } from "../lib/ogCard";

export const alt = "Photix — AI Avatar Ideas & Inspiration";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return renderOgCard({
    line1: "Avatar ideas for",
    line2: "your next look",
    tags: ["Themes", "Tips", "iPhone & iPad"],
  });
}

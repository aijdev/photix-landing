import { renderOgCard, OG_SIZE } from "../lib/ogCard";

export const alt = "Photix Features — Generate, Edit, Avatars & Styles";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return renderOgCard({
    line1: "Everything Photix",
    line2: "can do",
    tags: ["Generate", "Edit", "Avatars", "Styles", "iPhone & iPad"],
  });
}

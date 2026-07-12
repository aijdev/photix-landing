import { renderOgCard, OG_SIZE } from "../../lib/ogCard";

export const alt = "Photix — AI Photo Editor, Edit by Describing";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return renderOgCard({
    line1: "Edit photos by",
    line2: "talking to them",
    tags: ["Conversational", "Iterative", "iPhone & iPad"],
  });
}

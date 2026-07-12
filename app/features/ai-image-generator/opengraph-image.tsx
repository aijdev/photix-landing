import { renderOgCard, OG_SIZE } from "../../lib/ogCard";

export const alt = "Photix — AI Image Generator, Text to Image on iPhone";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return renderOgCard({
    line1: "Describe it,",
    line2: "and it exists",
    tags: ["Text to image", "10 art styles", "iPhone & iPad"],
  });
}

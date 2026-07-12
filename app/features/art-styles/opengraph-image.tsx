import { renderOgCard, OG_SIZE } from "../../lib/ogCard";

export const alt = "Photix — Ten Curated AI Art Styles";
export const size = OG_SIZE;
export const contentType = "image/png";
export const dynamic = "force-static";

export default function OpengraphImage() {
  return renderOgCard({
    line1: "One idea,",
    line2: "ten works of art",
    tags: ["Realistic", "Anime", "Watercolor", "iPhone & iPad"],
  });
}

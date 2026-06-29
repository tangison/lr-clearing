# Border Post Image Sources — lrclearing.com

This directory contains six border post images used on the Operational Coverage
page (and the home page border posts slider). Four images were supplied
directly by the client (L&R Clearing Agency CC) — these are authentic on-site
photos of the actual border posts. Two images are sourced from Wikimedia
Commons under free licences.

## Optimisation Pipeline

Applied uniformly to every file:

1. 16:9 aspect ratio crop (attention-biased toward salient subject via sharp).
2. Resize to maximum 1920×1080 px (downscale only). Client images that arrived
   smaller than 960×540 are upscaled to 1280×720 using Lanczos3 resampling for
   clean 2× retina coverage on a 640px card slot.
3. JPEG quality 82 with mozjpeg (trellis quantisation, chroma subsampling 4:2:0,
   progressive scan).
4. EXIF / ICC / thumbnail metadata stripped.
5. If a file exceeds 300 KB at q82, automatically re-encode at progressively
   lower quality (80, 78, 75, 72, 70) until under budget, then fall back to
   smaller dimensions if still over.

All six files are under 300 KB (range: 54–296 KB, average 154 KB).

## Source Attribution

| File | Source | Licence | Notes |
|---|---|---|---|
| trans-kalahari-border.jpeg | Client-supplied photo | © L&R Clearing Agency CC | "TRANS-KALAHARI BORDER POST — COMMERCIAL TERMINAL" sign visible. The Namibia-side facility at Buitepos on the Walvis Bay–Windhoek–Gaborone–Johannesburg corridor. |
| ariamsvlei-border.jpeg | Client-supplied photo | © L&R Clearing Agency CC | "NamRA — ARIAMSVLEI BORDER POST" sign visible. The Namibia–South Africa crossing on the Keetmanshoop–Upington–Gauteng lane. |
| noordoewer-border.jpeg | [Wikimedia Commons: File:Noordoewer border post.jpg](https://commons.wikimedia.org/wiki/File:Noordoewer_border_post.jpg) | CC BY 2.0 (Paul Keller) | "Noordoewer border post at the Namibia - South Africa Border" — original photo by Paul Keller, kept as the client did not supply a Noordoewer image. |
| wenela-border.jpeg | [Wikimedia Commons: File:Katima Mulilo Bridge.jpg](https://commons.wikimedia.org/wiki/File:Katima_Mulilo_Bridge.jpg) | CC BY (Eugen Zibiso) | The Katima Mulilo Bridge IS the Wenela border crossing structure connecting Namibia and Zambia over the Zambezi River. The "Wenela" name comes from the Witwatersrand Native Labour Association (WENELA) which historically operated at this crossing. Photo by Eugen Zibiso. |
| ngoma-border.jpeg | Client-supplied photo | © L&R Clearing Agency CC | Namibia–Botswana border checkpoint with the Botswana flag visible. The Ngoma crossing on the Katima Mulilo–Chobe–Livingstone lane. |
| oshikango-border.jpeg | Client-supplied photo | © L&R Clearing Agency CC | "WELCOME TO THE REPUBLIC OF NAMIBIA — Ohangwena Region" sign visible (with Portuguese translation). The Oshikango / Santa Clara crossing into Angola. |

## File Sizes After Optimisation

| File | Dimensions | Quality | Size (KB) | Under 300 KB target |
|---|---|---|---|---|
| trans-kalahari-border.jpeg | 1280×720 | q82 | 54.1 KB | Yes |
| ariamsvlei-border.jpeg | 1280×720 | q82 | 83.0 KB | Yes |
| noordoewer-border.jpeg | 1920×1080 | q78 | 295.6 KB | Yes |
| wenela-border.jpeg | 1920×1080 | q72 | 286.4 KB | Yes |
| ngoma-border.jpeg | 1280×720 | q82 | 113.3 KB | Yes |
| oshikango-border.jpeg | 1280×720 | q82 | 93.7 KB | Yes |

**Total: 926.2 KB across 6 images (average 154.4 KB/image)**

## Licence Notes

- **Client-supplied photos** (4 of 6): © L&R Clearing Agency CC. The client
  owns these photos and has authorised their use on this site only.
- **Wikimedia Commons photos** (2 of 6): Used under the Creative Commons
  licences indicated above. Attribution is required for CC BY and CC BY-SA;
  the original author is linked in the Source column.
- All images are appropriate for commercial use under these terms.

## Stand-in Disclosure

- **wenela-border.jpeg**: The Katima Mulilo Bridge IS the Wenela border
  crossing structure over the Zambezi. The "Wenela" name comes from the
  Witwatersrand Native Labour Association (WENELA) which historically operated
  at this crossing.

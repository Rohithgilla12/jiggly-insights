import { NextRequest, NextResponse } from "next/server";

import { HelloWorld } from "@/app/page";
import satori from "satori";

export async function GET(request: NextRequest) {
  const font = await fetchFont("Roboto");

  const svg = await satori(<HelloWorld />, {
    width: 500,
    height: 500,
    fonts: [{ data: font!, name: "Roboto" }],
  });

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
    },
  });
}

async function fetchFont(
  // text: string,
  font: string
): Promise<ArrayBuffer | null> {
  const API = `https://fonts.googleapis.com/css2?family=${font}`;

  const css = await (
    await fetch(API, {
      headers: {
        // Make sure it returns TTF.
        "User-Agent":
          "Mozilla/5.0 (BB10; Touch) AppleWebKit/537.1+ (KHTML, like Gecko) Version/10.0.0.1337 Mobile Safari/537.1+",
      },
    })
  ).text();

  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );

  console.log("css", css);
  if (!resource) return null;

  const res = await fetch(resource[1]);

  return res.arrayBuffer();
}

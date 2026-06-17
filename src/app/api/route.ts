import { NextResponse } from "next/server";
import { company } from "@/lib/content";

/**
 * Root API endpoint. Returns basic service metadata.
 * Useful for uptime checks and API discovery.
 */
export async function GET() {
  return NextResponse.json({
    service: company.legalName,
    status: "operational",
    tagline: company.tagline,
    contact: {
      phone: company.phone,
      email: company.email,
      whatsapp: company.social.whatsapp,
    },
    registration: company.registration,
    vat: company.vat,
  });
}

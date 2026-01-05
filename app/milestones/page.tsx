import { generatePageMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import MilestonesClient from "./MilestonesClient";

export const metadata: Metadata = generatePageMetadata("milestones");

export default function MilestonesPage() {
    return <MilestonesClient />;
}

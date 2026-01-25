import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Essence Mascara Lash Princess",
    description: "...",
};

export default function SingleProudtctsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section>{children}</section>;
}

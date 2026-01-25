import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products",
    description: "...",
};

export default function ProudtctsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <section>{children}</section>;
}

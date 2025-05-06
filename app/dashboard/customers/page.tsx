import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Customer",
    description: "Customer page",
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon.ico",
        apple: "/favicon.ico",
    },
};

export default function Page() {
    return <p>Customer Page</p>;
}  
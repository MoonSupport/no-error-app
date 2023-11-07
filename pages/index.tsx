import { Inter } from "next/font/google";
import Link from "next/link";

const Layout = ({ children }: any) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>{children}</div>
  );
};

export default function Home() {
  return (
    <Layout>
      <Link href="/server-error">server-error</Link>
      <Link href="/reference-error">reference-error</Link>
      <Link href="/unknkown-network">unknkown-network</Link>
      <Link href="/knkown-network">knkown-network</Link>
      <Link href="/module-syntax">module-syntax</Link>
      <Link href="/inline-syntax">inline-syntax</Link>
      <Link href="/parsed">parsed</Link>
    </Layout>
  );
}

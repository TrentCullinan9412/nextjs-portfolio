import EmailEditor from "@/components/email-editor";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <SignedOut>
        <h1 className="text-3xl">Landing page</h1>
      </SignedOut>
      <SignedIn>
        <EmailEditor />
      </SignedIn>
    </>
  );
}

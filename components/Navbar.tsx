import Link from "next/link";
import Image from "next/image";
import NavItems from "@/components/NavItems";
import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/nextjs";

function Navbar() {
    return (
        <nav className="navbar">
            <Link href="/">
                <div className="felx items-center gap-2.5 cursor-pointer">
                    <Image src="/images/logo.png" alt="logo" width={120} height={120}
                           sizes="(max-width: 768px) 80px" />
                </div>
            </Link>
            <div className="flex items-center gap-8">
                <NavItems />
                <SignedOut>
                    <SignInButton>
                        <button className="btn-signin">Sign in</button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </nav>
    );
}

export default Navbar;
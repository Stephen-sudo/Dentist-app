// import Image from "next/image";

"use client";
import Link from "next/link";
import AnimatedLogo from "@/components/AnimatedLogo";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 py-6 bg-linear-to-r from-sky-400 to-sky-600">
      {/* logo */}
      <AnimatedLogo />
      {/* desktop nav */}
      <nav className="hidden md:flex items-center gap-12 text-white mx-auto">
        <Link
          className="text-base tracking-wide transition-colors z-50 hover:text-sky-200"
          href="#"
        >
          About
        </Link>
        <Link
          className="text-base tracking-wide transition-colors z-50 hover:text-sky-200"
          href="#"
        >
          Services
        </Link>
        <Link
          className="text-base tracking-wide transition-colors z-50 hover:text-sky-200"
          href="#"
        >
          Contact
        </Link>
        <Link
          className="text-base tracking-wide transition-colors z-50 hover:text-sky-200"
          href="#"
        >
          Blog
        </Link>
      </nav>

      <SignedOut>
        <Link href="/sign-in">
          <Button className="hidden md:flex rounded-full bg-accent text-blue-900 transition-all border-none py-4 px-8 z-50 hover:bg-amber-400 cursor-pointer right-4">
            SIGN IN
          </Button>
        </Link>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>

      {/* mobile nav */}

      <Button
        onClick={() => setIsMenuOpen(true)}
        className="md:hidden text-white focus-outline-none"
      >
        <Menu />
      </Button>

      {isMenuOpen && (
        <div className="bg-black/50 z-50 fixed inset-0 backdrop-blur-sm md:hidden">
          <div className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-xl p-6 transform transition-transform duration-300 ease-in-out ">
            <Button
              onClick={() => setIsMenuOpen(false)}
              className=" absolute top-4 right-4  text-white "
            >
              <X size={32} />
            </Button>
            <nav className="flex flex-col md:hidden gap-12 text-lg items-center text-black mt-12">
              <Link
                className="text-base tracking-wide transition-colors z-50 hover:text-sky-200"
                href="#"
              >
                About
              </Link>
              <Link
                className="text-base tracking-wide transition-colors z-50 hover:text-sky-200"
                href="#"
              >
                Services
              </Link>
              <Link
                className="text-base tracking-wide transition-colors z-50 hover:text-sky-200"
                href="#"
              >
                Contact
              </Link>
              <Link
                className="text-base tracking-wide transition-colors z-50 hover:text-sky-200"
                href="#"
              >
                Blog
              </Link>
              <Link
                className="text-base tracking-wide transition-colors z-50 hover:text-sky-200"
                href="#"
              >
                About
              </Link>

              <SignedOut>
                <Link href="/sign-in">
                  <Button className="rounded-full bg-accent text-blue-900 transition-all border-none py-4 px-8 z-50 hover:bg-amber-400 cursor-pointer">
                    SIGN IN
                  </Button>
                </Link>
              </SignedOut>

              <SignedIn>
                <UserButton />
              </SignedIn>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

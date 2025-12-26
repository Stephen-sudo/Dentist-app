"use client";
import Link from "next/link";
import AnimatedLogo from "@/components/AnimatedLogo";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const MotionButton = motion(Button);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Contact",
      href: "/contact",
    },
    {
      name: "Blog",
      href: "/blog",
    },
  ];

  return (
    <motion.header
      className="flex justify-between items-center px-4 py-6 bg-linear-to-r from-sky-400 to-sky-600"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* logo */}
      <Link href="/" className="cursor-pointer">
        <AnimatedLogo />
      </Link>

      {/* desktop nav */}
      <nav className="hidden md:flex items-center gap-12 text-white mx-auto">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <div key={link.href} className="relative">
              <Link
                href={link.href}
                className={`text-base tracking-wide transition-colors z-50 ${
                  isActive ? "text-amber-300 font-semibold" : "text-white"
                }`}
              >
                {link.name}
              </Link>

              {isActive && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-amber-300 rounded-full"
                />
              )}
            </div>
          );
        })}
      </nav>

      <SignedOut>
        <Link href="/sign-in">
          <MotionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex rounded-full bg-accent text-blue-900 transition-all border-none py-4 px-8 z-50 hover:bg-amber-400 cursor-pointer right-4"
          >
            SIGN IN
          </MotionButton>
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
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-xl p-6 transform transition-transform"
          >
            <Button
              onClick={() => setIsMenuOpen(false)}
              className=" absolute top-4 right-4  text-white "
            >
              <X size={32} />
            </Button>
            <nav className="flex flex-col md:hidden gap-12 text-lg items-center text-black mt-12">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-base tracking-wide transition-colors z-50 hover:text-sky-200 ${
                      isActive ? "text-amber-300 font-semibold" : ""
                    }`}
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                );
              })}

              <SignedOut>
                <Link href="/sign-in">
                  <MotionButton
                    whileHover={{
                      scale: 1.05,
                      textShadow: "0px 0px 8px rgb(255, 255, 255)",
                      boxShadow: "0px 0px 8px rgb(255, 255, 255)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="rounded-full bg-accent text-blue-900 transition-all border-none py-4 px-8 z-50 hover:bg-amber-400 cursor-pointer"
                  >
                    SIGN IN
                  </MotionButton>
                </Link>
              </SignedOut>

              <SignedIn>
                <UserButton />
              </SignedIn>
            </nav>
          </motion.div>
        </div>
      )}
    </motion.header>
  );
}

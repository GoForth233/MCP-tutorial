import Link from "next/link";

import { AuthButton } from "@/components/auth-button";

interface NavbarProps {
  variant?: "default" | "hero";
}

export async function Navbar({ variant = "default" }: NavbarProps) {
  const isHero = variant === "hero";
  const textColor = isHero ? "text-white" : "text-foreground";
  const logoColor = isHero ? "text-white" : "text-foreground";
  
  return (
    <header className={`w-full flex justify-center py-6 ${isHero ? "absolute top-0 left-0 right-0 z-20" : ""}`}>
      <div className="flex w-full max-w-7xl items-center justify-between px-6 md:px-12">
        <Link href="/" className={`font-clicker text-3xl md:text-4xl ${logoColor}`}>
          Bean Scene
        </Link>
        <nav className={`hidden md:flex items-center gap-8 text-sm font-playfair font-medium ${textColor}`}>
          <Link href="/" className="hover:opacity-80 transition-opacity">Home</Link>
          <Link href="/beans" className="hover:opacity-80 transition-opacity">Menu</Link>
          <Link href="/" className="hover:opacity-80 transition-opacity">About Us</Link>
          <Link href="/" className="hover:opacity-80 transition-opacity">Contact Us</Link>
        </nav>
        <div className="flex items-center gap-4">
          {isHero ? (
            <>
              <Link href="/auth/login" className={`font-playfair font-medium text-sm underline ${textColor} hover:opacity-80 transition-opacity`}>
                Sign In
              </Link>
              <Link 
                href="/auth/sign-up" 
                className={`bg-[#f9c06a] text-[#1e1e1e] font-playfair font-medium text-sm px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow`}
              >
                SignUp
              </Link>
            </>
          ) : (
            <AuthButton />
          )}
        </div>
      </div>
    </header>
  );
}

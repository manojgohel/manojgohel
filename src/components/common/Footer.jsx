"use client";
import { Facebook, Twitter, Instagram, Mail, School } from "lucide-react";
import Link from "next/link";

export const Footer = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`w-full border-t ${className} mt-5`}>
      <div className="container mx-auto">
        {/* Bottom Bar */}
        <div className="border-t py-6 flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Manoj Gohel. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";
import { Button } from "@/components/ui/button";

import { Moon, Sun, User } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import ProfileMenu from "./ProfileMenu";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full  backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center justify-between">
        <div className="flex items-center">
          {/* Menu Button */}
          <Sidebar />

          {/* Logo */}
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-bold">Manoj Gohel</h1>
          </div>
        </div>

        <div className="flex items-center">
          {/* User Icon */}

          <ProfileMenu />

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;

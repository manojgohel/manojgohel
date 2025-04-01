"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Calendar,
  ChartArea,
  GraduationCap,
  Home,
  HotelIcon,
  List,
  Menu,
  MessageCircle,
  PencilLine,
  PhoneCall,
  Settings,
  Sprout,
  User,
  Users,
} from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Contact", href: "/contact", icon: PhoneCall },
    { label: "Posts", href: "/posts", icon: List },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px]">
        <div className="flex flex-col h-full">
          {/* Simplified Logo Section */}
          <SheetHeader className="py-4 border-b">
            <SheetTitle className="text-md font-semibold">
              Manoj Gohel
            </SheetTitle>
          </SheetHeader>

          {/* Menu Items */}
          <div className="flex-1 flex flex-col gap-1 p-3 overflow-y-auto">
            {menuItems.map((item) => (
              <Button
                onClick={() => {
                  router.push(item.href);
                  setOpen(false);
                }}
                key={item.href}
                variant="ghost"
                className="w-full justify-start px-3 py-2 text-sm font-medium cursor-pointer"
                size="sm"
              >
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;

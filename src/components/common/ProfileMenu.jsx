import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dock,
  GalleryHorizontal,
  HelpCircle,
  LogOut,
  Settings,
  User,
  UserCircle,
} from "lucide-react";
import { useState } from "react";

export default function ProfileMenu() {
  const [user, setUser] = useState("Join Now");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <User /> <span>{user}</span>
        </Button>
      </DropdownMenuTrigger>
      {/* <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => {
              setUser("Devin Gohel");
            }}
            className={"cursor-pointer"}
          >
            <User /> Devin Gohel
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setUser("Harsh Gohel");
            }}
            className={"cursor-pointer"}
          >
            <User /> Harsh Gohel
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className={"cursor-pointer"}>
            <Settings />
            Settings
          </DropdownMenuItem>
          <DropdownMenuItem className={"cursor-pointer"}>
            <UserCircle />
            Profile
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={"cursor-pointer"}>
          <Dock />
          Documents
        </DropdownMenuItem>
        <DropdownMenuItem className={"cursor-pointer"}>
          <HelpCircle />
          Support
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className={"cursor-pointer"}>
          <LogOut /> Log out
        </DropdownMenuItem>
      </DropdownMenuContent> */}
    </DropdownMenu>
  );
}

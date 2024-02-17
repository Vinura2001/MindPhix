import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Logout() {
  return (
    <div className="mt-3">
      <Popover>
        <PopoverTrigger asChild className="cursor-pointer">
          <Avatar className="left-[1600%]">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>User</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="w-70 h-30 mr-5">
          <div className="flex flex-row">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>User</AvatarFallback>
            </Avatar>

            <h2 className="text-normal font-normal mt-2.5 ml-2">
              Stevan Watson
            </h2>
          </div>
          <hr className="mt-2" />
          <Link href="/">
            <Button className="text-sm text-white bg-blue-800 h-4 p-4 rounded-sm hover:bg-blue-900 content-center mt-5 ml-16">
              Logout
            </Button>{" "}
          </Link>
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default Logout;

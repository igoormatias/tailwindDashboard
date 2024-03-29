import { Cog, HelpingHand, LifeBuoy, Search } from "lucide-react";
import { Logo } from "./Logo";
import { MainNavigation } from "./MainNavigation";
import { NavItem } from "./MainNavigation/NavItem";
import { UsedSpaceWidget } from "./UsedSpaceWidget";

 export function Sidebar(){
    return (
        <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8 ">
            
            <Logo />

            <div className="flex mx-1 w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm ">
            <Search />
            <input type="text" placeholder="Search" className="flex-1 border-0 bg-transparent outline-none text-zinc-900 placeholder-zinc-600" />
            </div>
            <MainNavigation />

            <div className="mt-auto flex flex-col gap-6">
                <nav className="space-y-0.5">
                    <NavItem title="Support" icon={LifeBuoy} />    
                    <NavItem title="Settings" icon={Cog} />    
                </nav>
              <UsedSpaceWidget />
                
            </div>
        </aside>
    )
}


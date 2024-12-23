import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import "./App.css";

function App() {
  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 pt-2">
      <div className="flex items-center px-2">
        <h3 className="py-2 font-bold font-display text-2xl text-slate-50">
          Heimdall
        </h3>
        <div className="flex grow justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Features
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Pricing
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button className="border-2 border-solid bg-transparent text-slate-50 hover:bg-slate-50 hover:text-accent-foreground">
          Login
        </Button>
      </div>
      <div className="flex h-1/3 flex-col justify-center">
        <h2 className="text-center font-display text-6xl text-slate-50">
          All-Seeing System
          <br />
          for Healthcare Professionals
        </h2>
      </div>
    </div>
  );
}

export default App;

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
    <div className="container mx-auto">
      <div className="flex items-center border-2 border-solid rounded-xl shadow-md p-2 mt-2 ">
        <h3 className="font-display font-bold py-2">Heimdall</h3>
        <div className="grow flex justify-center">
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
        <Button>Login</Button>
      </div>
      <h2 className="font-display text-4xl text-center mt-8">
        All-Seeing System
        <br />
        for Healthcare Professionals
      </h2>
    </div>
  );
}

export default App;

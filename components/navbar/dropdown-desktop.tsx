import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
  } from "@/components/ui/navigation-menu";
import { INavLink } from ".";

 export const DropdownDesktop: React.FC<{ navLink: INavLink; idx: number }> = ({
    navLink,
    idx,
  }) => (
    <NavigationMenu key={`${navLink} ${idx}`} className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={`${
              navLink.subLinks && navLink?.subLinks[idx]?.path
                ? "hover:text-hoverPrimary"
                : "hover:text-hoverPrimary"
            }  flex items-center text-[#777E90] text-sm p-0`}
          >
            {navLink.label}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="flex w-full min-w-[150px] lg:min-w-[180px] gap-4 p-5">
            {navLink.subLinks &&
              navLink.subLinks.map((subLink, idx) => (
                <NavigationMenuLink
                  key={idx}
                  href={subLink.path}
                  target="_blank"
                  style={{ background: subLink.background }}
                  className={`flex flex-col flex-grow w-fit min-w-[150px] lg:min-w-[200px] xl:min-w-[250px] 2xl:min-w-[300px] rounded-[15px] px-5 pt-6 pb-2 transition duration-200 border border-[rgba(255,255,255,0.10)] hover:border-[rgba(255,255,255,0.50)]`}
                >
                  <h3
                    style={
                      subLink.title === "Coming Soon"
                        ? { marginBottom: 12 }
                        : undefined
                    }
                    className="hidden lg:block text-[15px] mb-[5px] font-medium"
                  >
                    {subLink.title}
                  </h3>
                  {subLink.title !== "Coming Soon" && (
                    <p className="text-xs">
                      Join our community on {subLink.title}
                    </p>
                  )}
                  {subLink.icon}
                </NavigationMenuLink>
              ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
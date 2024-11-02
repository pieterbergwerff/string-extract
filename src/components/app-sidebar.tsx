import { resolve } from "path";
import getPlugins from "../utils/getPlugins.util";
import Link from "next/link";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export async function AppSidebar() {
  const plugins = await getPlugins(
    resolve(process.cwd(), "src", "string-extract", "plugins")
  );

  const pluginCategories = Object.keys(plugins);

  return (
    <Sidebar>
      <SidebarContent>
        {pluginCategories.map((pluginCategory) => {
          const categoryPlugins = plugins[pluginCategory];
          return categoryPlugins.length ? (
            <SidebarGroup key={pluginCategory}>
              <SidebarGroupLabel>{pluginCategory}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {categoryPlugins.map(({ name }) => (
                    <SidebarMenuItem key={pluginCategory + name}>
                      <SidebarMenuButton asChild>
                        <Link href={`/${name}`}>
                          <span>{name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ) : null;
        })}
        {/*
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        */}
      </SidebarContent>
    </Sidebar>
  );
}

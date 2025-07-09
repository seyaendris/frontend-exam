import { Calendar, ViewIcon, Inbox, LayoutDashboard } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { Separator } from "../ui/separator"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard/partner-onboarding",
    icon: LayoutDashboard,
  },
  {
    title: "Onboarding",
    url: "#",
    icon: Inbox,
  },
  {
    title: "View",
    url: "#",
    icon: ViewIcon,
  },

]

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="bg-gray-800">
        <SidebarGroup>
          <SidebarGroupLabel className="py-7 font-extrabold text-white">OP-PARTNER MANAGEMENT</SidebarGroupLabel>
          <Separator className="mb-10 bg-white" />
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="text-white font-medium">
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
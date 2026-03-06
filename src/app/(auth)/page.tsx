"use client";

import {DesktopHomePage} from "@/src/features/admin/auth/components/homepage/DesktopHomePage";
import {MobileHomePage} from "@/src/features/admin/auth/components/homepage/MobileHomePage";

export default function HomePage() {
  return(
  <div>
    <div className="lg:hidden">
      <MobileHomePage />
    </div>
    <div className="hidden lg:block">
      <DesktopHomePage />
    </div>
  </div>)
}

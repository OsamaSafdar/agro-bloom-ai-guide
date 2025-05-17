
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

interface SidebarLinkProps {
  href: string;
  label: string;
  icon: JSX.Element;
}

function SidebarLink({ href, label, icon, ...props }: SidebarLinkProps) {
  const { pathname } = useLocation();
  const isActive = pathname === href;

  return (
    <Link
      to={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all",
        isActive
          ? "bg-agro-primary text-white"
          : "text-agro-dark hover:bg-agro-light/50"
      )}
      {...props}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
}

export default function Sidebar() {
  return (
    <div className="hidden md:flex flex-col w-64 h-screen bg-sidebar border-r border-gray-200 p-4">
      <div className="flex flex-col flex-1">
        <div className="space-y-1 py-4">
          <h2 className="text-sm font-semibold text-muted-foreground px-3">
            Dashboard
          </h2>
          <SidebarLink
            href="/dashboard"
            label="Overview"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="7" height="9" x="3" y="3" rx="1" />
                <rect width="7" height="5" x="14" y="3" rx="1" />
                <rect width="7" height="9" x="14" y="12" rx="1" />
                <rect width="7" height="5" x="3" y="16" rx="1" />
              </svg>
            }
          />
          <h2 className="text-sm font-semibold text-muted-foreground px-3 pt-4">
            Services
          </h2>
          <SidebarLink
            href="/crop-recommendation"
            label="Crop Recommendation"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
              </svg>
            }
          />
          <SidebarLink
            href="/yield-prediction"
            label="Yield Prediction"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m3 22 1.5-1.5M5.45 17.11l2.62-2.61m.7-9 3.1-3.1c.34-.34.77-.51 1.26-.51.97 0 1.63.71 2.06 1.84l.23.58" />
                <path d="m18.89 8.1 3.1-3.1m-4.9 4.9-3.33 3.33m-1.94 1.94L8.31 19" />
                <path d="m2 22 5-5 2-4 4-2 5-5M12.67 13.67l2.83 2.83a2.5 2.5 0 0 0 3.53 0l.71-.71a2.5 2.5 0 0 0 0-3.53l-2.83-2.83" />
                <path d="M21.5 19.5c.5-1 .5-2.5-.5-3.5s-2.5-1-3.5-.5" />
              </svg>
            }
          />
          <SidebarLink
            href="/fertilizer-recommendation"
            label="Fertilizer Advice"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 0 1-2 2Z" />
                <path d="M6 3v10a2 2 0 0 0 2 2h12" />
                <path d="M5 3a2 2 0 1 0 4 0 2 2 0 1 0-4 0Z" />
                <path d="M22 13H10" />
              </svg>
            }
          />
        </div>
        <div className="mt-auto">
          <div className="p-4 bg-agro-light/30 rounded-lg">
            <div className="text-xs font-medium text-agro-dark">Need help?</div>
            <div className="text-sm text-muted-foreground mt-1">Contact our support team for assistance</div>
            <Link
              to="/support"
              className="block text-xs text-agro-primary font-medium mt-2"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

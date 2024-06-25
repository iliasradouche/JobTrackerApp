import { AppWindow, AreaChart, Layers } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

const links: Array<NavLink> = [
  {
    href: "/add-job",
    label: "add job",
    icon: <Layers />,
  },
  {
    href: "/jobs",
    label: "jobs",
    icon: <AppWindow />,
  },
  {
    href: "/stats",
    label: "stats",
    icon: <AreaChart />,
  },
];

export default links;

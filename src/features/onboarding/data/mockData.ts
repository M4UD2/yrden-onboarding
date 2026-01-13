import { TrendingUp, Database, Clock, Bell, HelpCircle, Settings, FileText, Loader, AlertCircle, Calendar, Smartphone, Cloud, LogOut } from "lucide-react";

export const navItems = [
  { icon: TrendingUp, page: 'reports', label: 'Reports' },
  { icon: Database, page: 'data-sources', label: 'Data Sources' },
  { icon: Clock, page: 'schedules', label: 'Schedules' },
];

export const bottomItems = [
  { icon: Bell, label: 'Notifications' },
  { icon: HelpCircle, label: 'Help' },
  { icon: Settings, label: 'Settings' },
];

export const onboardingSteps = [
    { id: 1, title: "Explore sample reports", description: "See Yrden's power with interactive demos", actionable: true, targetPage: 'reports' },
    { id: 2, title: "Connect your first data source", description: "Link Stripe, Zendesk, or Google Analytics", showProgress: true, progressText: "Sincronizando seus dados... (aprox. 60 min)", actionable: true, targetPage: 'data-sources' },
    { id: 3, title: "Access your real data", description: "Unlocks automatically after sync completes", locked: true, waiting: true, waitingText: "⌛ Syncing your workspace...", actionable: false }
];

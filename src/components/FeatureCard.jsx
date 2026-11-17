import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Network, GitBranch, Activity, Settings, Code, Package, FileJson, ShieldCheck, History, Search } from 'lucide-react';

const iconMap = {
  Network,
  GitBranch,
  Activity,
  Settings,
  Code,
  Package,
  FileJson,
  ShieldCheck,
  History,
  Search,
};

export function FeatureCard({ icon, title, description }) {
  const Icon = iconMap[icon];
  
  return (
    <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
      <CardHeader>
        <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
          {Icon && <Icon className="h-6 w-6 text-primary" />}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

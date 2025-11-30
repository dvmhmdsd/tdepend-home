import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
      <CardHeader>
        <div className="mb-4 p-3 rounded-lg bg-primary/10 w-fit">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

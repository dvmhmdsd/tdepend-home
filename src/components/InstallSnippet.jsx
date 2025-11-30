import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';

export function InstallSnippet() {
  const [copied, setCopied] = useState(false);

  const commands = {
    npm: 'npm install -D tdepend',
    yarn: 'yarn add -D tdepend',
    pnpm: 'pnpm add -D tdepend',
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-muted/50">
      <CardContent className="p-0">
        <Tabs defaultValue="npm" className="w-full">
          <div className="flex items-center justify-between border-b px-4">
            <TabsList className="bg-transparent border-0 h-12">
              <TabsTrigger value="npm" className="data-[state=active]:bg-transparent">npm</TabsTrigger>
              <TabsTrigger value="yarn" className="data-[state=active]:bg-transparent">yarn</TabsTrigger>
              <TabsTrigger value="pnpm" className="data-[state=active]:bg-transparent">pnpm</TabsTrigger>
            </TabsList>
          </div>
          {Object.entries(commands).map(([key, command]) => (
            <TabsContent key={key} value={key} className="m-0">
              <div className="flex items-center justify-between p-4">
                <code className="text-sm font-mono flex-1">{command}</code>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(command)}
                  className="h-8 w-8 ml-2"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}


import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ProjectCardProps {
  title: string;
  description: string;
  progress: number;
  dueDate: string;
}

export function ProjectCard({ title, description, progress, dueDate }: ProjectCardProps) {
  return (
    <Card className="glass-card p-6 hover-card space-y-4">
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>
      <div className="text-sm text-muted-foreground">
        Due {dueDate}
      </div>
    </Card>
  );
}


import { LayoutDashboard, Users, Clock, CheckCircle } from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { TaskList } from "@/components/dashboard/TaskList";
import { TeamSection } from "@/components/dashboard/TeamSection";

const mockProjects = [
  {
    id: "1",
    title: "Website Redesign",
    description: "Modernize the company website with new features",
    progress: 75,
    dueDate: "Mar 15",
  },
  {
    id: "2",
    title: "Mobile App Development",
    description: "Create a new mobile app for customers",
    progress: 45,
    dueDate: "Apr 20",
  },
];

const mockTasks = [
  {
    id: "1",
    title: "Update homepage design",
    status: "completed" as const,
    dueDate: "Today",
  },
  {
    id: "2",
    title: "Review project proposal",
    status: "in-progress" as const,
    dueDate: "Tomorrow",
  },
  {
    id: "3",
    title: "Team meeting preparation",
    status: "in-progress" as const,
    dueDate: "Mar 10",
  },
];

const mockTeamMembers = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Project Manager",
  },
  {
    id: "2",
    name: "Mike Chen",
    role: "Developer",
  },
  {
    id: "3",
    name: "Emma Davis",
    role: "Designer",
  },
];

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground mt-2">Welcome back to your workspace</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            title="Total Projects"
            value="2"
            icon={<LayoutDashboard className="h-6 w-6" />}
          />
          <StatsCard
            title="Team Members"
            value="8"
            icon={<Users className="h-6 w-6" />}
          />
          <StatsCard
            title="In Progress"
            value="4"
            icon={<Clock className="h-6 w-6" />}
          />
          <StatsCard
            title="Completed"
            value="7"
            icon={<CheckCircle className="h-6 w-6" />}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <TaskList tasks={mockTasks} />
          </div>
          <div>
            <TeamSection members={mockTeamMembers} />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;

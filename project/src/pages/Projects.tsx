
import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ProjectCard } from "@/components/dashboard/ProjectCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

interface Project {
  id: string;
  title: string;
  description: string;
  progress: number;
  dueDate: string;
}

const Projects = () => {
  const { toast } = useToast();
  const [projects, setProjects] = useState<Project[]>([
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
  ]);

  const [newProject, setNewProject] = useState({
    title: "",
    description: "",
    dueDate: "",
  });

  const handleAddProject = () => {
    if (!newProject.title || !newProject.description || !newProject.dueDate) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const project: Project = {
      id: (projects.length + 1).toString(),
      title: newProject.title,
      description: newProject.description,
      progress: 0,
      dueDate: newProject.dueDate,
    };

    setProjects([...projects, project]);
    setNewProject({ title: "", description: "", dueDate: "" });
    toast({
      title: "Success",
      description: "Project added successfully",
    });
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold">Projects</h1>
            <p className="text-muted-foreground mt-2">Manage your projects</p>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button>
                <Plus className="h-4 w-4" />
                Add Project
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Add New Project</SheetTitle>
                <SheetDescription>
                  Fill in the project details below
                </SheetDescription>
              </SheetHeader>
              <div className="space-y-4 mt-4">
                <div>
                  <Input
                    placeholder="Project Title"
                    value={newProject.title}
                    onChange={(e) =>
                      setNewProject({ ...newProject, title: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Input
                    placeholder="Project Description"
                    value={newProject.description}
                    onChange={(e) =>
                      setNewProject({ ...newProject, description: e.target.value })
                    }
                  />
                </div>
                <div>
                  <Input
                    type="date"
                    value={newProject.dueDate}
                    onChange={(e) =>
                      setNewProject({ ...newProject, dueDate: e.target.value })
                    }
                  />
                </div>
                <Button onClick={handleAddProject} className="w-full">
                  Create Project
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Projects;

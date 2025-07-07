
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  Plus, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  User, 
  Phone, 
  Mail,
  Activity,
  FileText,
  Calendar
} from 'lucide-react';

export default function CareCoordination() {
  const careTeams = [
    {
      id: 1,
      patientName: 'Maria Rodriguez',
      condition: 'Diabetes Type 2',
      primaryProvider: 'Dr. Sarah Johnson',
      careManager: 'Nurse Lisa Chen',
      lastUpdate: '2 hours ago',
      status: 'Active',
      members: 4,
      nextAppointment: '2024-01-20',
    },
    {
      id: 2,
      patientName: 'John Smith',
      condition: 'Hypertension',
      primaryProvider: 'Dr. Michael Brown',
      careManager: 'Nurse David Wilson',
      lastUpdate: '1 day ago',
      status: 'Pending',
      members: 3,
      nextAppointment: '2024-01-18',
    },
  ];

  const tasks = [
    {
      id: 1,
      title: 'Follow-up on medication adherence',
      patient: 'Maria Rodriguez',
      assignedTo: 'Nurse Lisa Chen',
      priority: 'High',
      dueDate: '2024-01-16',
      status: 'Pending',
    },
    {
      id: 2,
      title: 'Schedule specialist consultation',
      patient: 'John Smith',
      assignedTo: 'Care Coordinator',
      priority: 'Medium',
      dueDate: '2024-01-17',
      status: 'In Progress',
    },
    {
      id: 3,
      title: 'Review care plan updates',
      patient: 'Emma Wilson',
      assignedTo: 'Dr. Sarah Johnson',
      priority: 'Low',
      dueDate: '2024-01-19',
      status: 'Completed',
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'destructive';
      case 'Medium': return 'secondary';
      case 'Low': return 'default';
      default: return 'default';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'default';
      case 'In Progress': return 'secondary';
      case 'Pending': return 'destructive';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Care Coordination</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Care Team
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Care Teams</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">3 overdue</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Completed Today</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">85% completion rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">High Priority</CardTitle>
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Require attention</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="teams" className="space-y-6">
        <TabsList>
          <TabsTrigger value="teams">Care Teams</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
        </TabsList>

        <TabsContent value="teams" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {careTeams.map((team) => (
              <Card key={team.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-lg">{team.patientName}</CardTitle>
                      <CardDescription>{team.condition}</CardDescription>
                    </div>
                    <Badge variant={team.status === 'Active' ? 'default' : 'secondary'}>
                      {team.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Primary:</span>
                      <span>{team.primaryProvider}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Activity className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Care Manager:</span>
                      <span>{team.careManager}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <span className="font-medium">Next Appointment:</span>
                      <span>{team.nextAppointment}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Team Members: {team.members}</span>
                      <span className="text-gray-600">Updated: {team.lastUpdate}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <FileText className="h-4 w-4 mr-1" />
                        Care Plan
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4 mr-1" />
                        Contact
                      </Button>
                      <Button size="sm">Manage Team</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tasks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Task Management</CardTitle>
              <CardDescription>Coordinate care team activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tasks.map((task) => (
                  <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium">{task.title}</h4>
                      <p className="text-sm text-gray-600">Patient: {task.patient}</p>
                      <p className="text-sm text-gray-600">Assigned to: {task.assignedTo}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <Badge variant={getPriorityColor(task.priority)}>
                          {task.priority}
                        </Badge>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium">{task.dueDate}</p>
                        <p className="text-xs text-gray-500">Due Date</p>
                      </div>
                      <Badge variant={getStatusColor(task.status)}>
                        {task.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="calendar">
          <Card>
            <CardHeader>
              <CardTitle>Care Coordination Calendar</CardTitle>
              <CardDescription>Schedule and track care activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500 mb-4">Interactive calendar view coming soon</p>
                <Button variant="outline">View Full Calendar</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

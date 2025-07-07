
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Calendar, 
  Clock, 
  Plus, 
  User, 
  Phone, 
  Video, 
  MapPin,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

export default function Appointments() {
  const upcomingAppointments = [
    {
      id: 1,
      patientName: 'Maria Rodriguez',
      provider: 'Dr. Sarah Johnson',
      type: 'Follow-up',
      date: '2024-01-16',
      time: '10:00 AM',
      duration: '30 min',
      location: 'Room 201',
      mode: 'In-Person',
      status: 'Confirmed',
    },
    {
      id: 2,
      patientName: 'John Smith',
      provider: 'Dr. Michael Brown',
      type: 'Consultation',
      date: '2024-01-16',
      time: '2:00 PM',
      duration: '45 min',
      location: 'Telehealth',
      mode: 'Video',
      status: 'Pending',
    },
    {
      id: 3,
      patientName: 'Emma Wilson',
      provider: 'Nurse Lisa Chen',
      type: 'Wellness Check',
      date: '2024-01-17',
      time: '9:30 AM',
      duration: '20 min',
      location: 'Room 105',
      mode: 'In-Person',
      status: 'Confirmed',
    },
  ];

  const appointmentRequests = [
    {
      id: 1,
      patientName: 'Robert Johnson',
      requestedProvider: 'Dr. Sarah Johnson',
      preferredDate: '2024-01-20',
      preferredTime: 'Morning',
      reason: 'Routine check-up',
      status: 'Pending',
      requestDate: '2024-01-15',
    },
    {
      id: 2,
      patientName: 'Lisa Wong',
      requestedProvider: 'Any Available',
      preferredDate: '2024-01-18',
      preferredTime: 'Afternoon',
      reason: 'Follow-up on test results',
      status: 'Approved',
      requestDate: '2024-01-14',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Confirmed': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Pending': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'Cancelled': return <XCircle className="h-4 w-4 text-red-600" />;
      default: return <AlertCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getModeIcon = (mode: string) => {
    switch (mode) {
      case 'Video': return <Video className="h-4 w-4 text-blue-600" />;
      case 'Phone': return <Phone className="h-4 w-4 text-green-600" />;
      case 'In-Person': return <MapPin className="h-4 w-4 text-purple-600" />;
      default: return <Calendar className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Appointment Management</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Schedule Appointment
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Appointments</CardTitle>
            <Calendar className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">2 pending confirmation</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Clock className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
            <p className="text-xs text-muted-foreground">+15% from last week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">No-Show Rate</CardTitle>
            <XCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8%</div>
            <p className="text-xs text-muted-foreground">-2% improvement</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Telehealth</CardTitle>
            <Video className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">34%</div>
            <p className="text-xs text-muted-foreground">Of all appointments</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="upcoming" className="space-y-6">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="requests">Requests</TabsTrigger>
          <TabsTrigger value="calendar">Calendar View</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Appointments</CardTitle>
              <CardDescription>Scheduled patient appointments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>
                          <User className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-medium">{appointment.patientName}</h4>
                        <p className="text-sm text-gray-600">{appointment.provider}</p>
                        <p className="text-sm text-gray-600">{appointment.type}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-sm font-medium">{appointment.date}</p>
                        <p className="text-xs text-gray-500">{appointment.time}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium">{appointment.duration}</p>
                        <p className="text-xs text-gray-500">Duration</p>
                      </div>
                      <div className="flex items-center gap-2">
                        {getModeIcon(appointment.mode)}
                        <span className="text-sm">{appointment.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {getStatusIcon(appointment.status)}
                        <Badge variant={appointment.status === 'Confirmed' ? 'default' : 'secondary'}>
                          {appointment.status}
                        </Badge>
                      </div>
                      <Button size="sm" variant="outline">
                        Manage
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="requests" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Appointment Requests</CardTitle>
              <CardDescription>Patient scheduling requests pending approval</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {appointmentRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium">{request.patientName}</h4>
                      <p className="text-sm text-gray-600">Provider: {request.requestedProvider}</p>
                      <p className="text-sm text-gray-600">Reason: {request.reason}</p>
                      <p className="text-sm text-gray-600">Requested: {request.requestDate}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-sm font-medium">{request.preferredDate}</p>
                        <p className="text-xs text-gray-500">{request.preferredTime}</p>
                      </div>
                      <Badge variant={request.status === 'Approved' ? 'default' : 'secondary'}>
                        {request.status}
                      </Badge>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          Approve
                        </Button>
                        <Button size="sm" variant="outline">
                          Reschedule
                        </Button>
                      </div>
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
              <CardTitle>Calendar View</CardTitle>
              <CardDescription>Visual appointment scheduling interface</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500 mb-4">Interactive calendar view coming soon</p>
                <Button variant="outline">Open Calendar</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

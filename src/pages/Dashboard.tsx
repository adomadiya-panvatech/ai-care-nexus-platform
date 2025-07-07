
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, MessageSquare, Calendar, TrendingUp, Phone, Mail, AlertTriangle } from 'lucide-react';

export default function Dashboard() {
  const stats = [
    {
      title: 'Active Patients',
      value: '2,847',
      change: '+12%',
      icon: Users,
      color: 'text-blue-600',
    },
    {
      title: 'Messages Sent Today',
      value: '1,234',
      change: '+8%',
      icon: MessageSquare,
      color: 'text-green-600',
    },
    {
      title: 'Upcoming Appointments',
      value: '156',
      change: '-3%',
      icon: Calendar,
      color: 'text-orange-600',
    },
    {
      title: 'Engagement Rate',
      value: '87%',
      change: '+5%',
      icon: TrendingUp,
      color: 'text-purple-600',
    },
  ];

  const recentActivities = [
    {
      patient: 'Maria Rodriguez',
      action: 'Completed wellness check-in',
      time: '2 minutes ago',
      type: 'success',
    },
    {
      patient: 'John Smith',
      action: 'Missed appointment reminder',
      time: '15 minutes ago',
      type: 'warning',
    },
    {
      patient: 'Emma Wilson',
      action: 'Responded to medication reminder',
      time: '1 hour ago',
      type: 'success',
    },
    {
      patient: 'Robert Johnson',
      action: 'High-risk patient alert triggered',
      time: '2 hours ago',
      type: 'alert',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <Button>View Full Report</Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className={stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}>
                  {stat.change}
                </span>{' '}
                from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activities */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Latest patient interactions and system events</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                    }`} />
                    <div>
                      <p className="font-medium">{activity.patient}</p>
                      <p className="text-sm text-gray-600">{activity.action}</p>
                    </div>
                  </div>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Communication Channels */}
        <Card>
          <CardHeader>
            <CardTitle>Communication Channels</CardTitle>
            <CardDescription>Today's outreach performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-blue-600" />
                  <span>SMS Messages</span>
                </div>
                <div className="text-right">
                  <p className="font-medium">856 sent</p>
                  <Progress value={85} className="w-20 h-2" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-green-600" />
                  <span>Email</span>
                </div>
                <div className="text-right">
                  <p className="font-medium">234 sent</p>
                  <Progress value={65} className="w-20 h-2" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-orange-600" />
                  <span>Voice Calls</span>
                </div>
                <div className="text-right">
                  <p className="font-medium">67 made</p>
                  <Progress value={45} className="w-20 h-2" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-yellow-600" />
            Priority Alerts
          </CardTitle>
          <CardDescription>Patients requiring immediate attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 border-l-4 border-l-red-500 bg-red-50 rounded">
              <h4 className="font-medium text-red-800">High Risk Patients</h4>
              <p className="text-2xl font-bold text-red-600">12</p>
              <p className="text-sm text-red-600">Require immediate follow-up</p>
            </div>
            <div className="p-4 border-l-4 border-l-yellow-500 bg-yellow-50 rounded">
              <h4 className="font-medium text-yellow-800">Missed Appointments</h4>
              <p className="text-2xl font-bold text-yellow-600">34</p>
              <p className="text-sm text-yellow-600">Need rescheduling</p>
            </div>
            <div className="p-4 border-l-4 border-l-blue-500 bg-blue-50 rounded">
              <h4 className="font-medium text-blue-800">Care Plan Updates</h4>
              <p className="text-2xl font-bold text-blue-600">8</p>
              <p className="text-sm text-blue-600">Pending review</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

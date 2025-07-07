
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageSquare, Phone, Mail, Send, Clock, CheckCircle, AlertCircle, Plus } from 'lucide-react';

export default function Communications() {
  const campaignData = [
    {
      id: 1,
      name: 'Diabetes Wellness Check',
      type: 'SMS',
      status: 'Active',
      sent: 234,
      delivered: 228,
      responded: 156,
      scheduled: '2024-01-15 09:00',
    },
    {
      id: 2,
      name: 'Appointment Reminders',
      type: 'Email',
      status: 'Scheduled',
      sent: 0,
      delivered: 0,
      responded: 0,
      scheduled: '2024-01-16 08:00',
    },
    {
      id: 3,
      name: 'Medication Adherence',
      type: 'Voice',
      status: 'Completed',
      sent: 89,
      delivered: 83,
      responded: 67,
      scheduled: '2024-01-14 10:00',
    },
  ];

  const recentMessages = [
    {
      patient: 'Maria Rodriguez',
      message: 'Thank you for the reminder! I took my medication.',
      time: '2 minutes ago',
      type: 'SMS',
      status: 'Received',
    },
    {
      patient: 'John Smith',
      message: 'Appointment confirmation for tomorrow at 2 PM',
      time: '15 minutes ago',
      type: 'Email',
      status: 'Sent',
    },
    {
      patient: 'Emma Wilson',
      message: 'Wellness check-in completed successfully',
      time: '1 hour ago',
      type: 'App',
      status: 'Completed',
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Active': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'Scheduled': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'Completed': return <CheckCircle className="h-4 w-4 text-blue-600" />;
      default: return <AlertCircle className="h-4 w-4 text-gray-600" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'SMS': return <MessageSquare className="h-4 w-4 text-blue-600" />;
      case 'Email': return <Mail className="h-4 w-4 text-green-600" />;
      case 'Voice': return <Phone className="h-4 w-4 text-orange-600" />;
      default: return <MessageSquare className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Communications Center</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Campaign
        </Button>
      </div>

      <Tabs defaultValue="campaigns" className="space-y-6">
        <TabsList>
          <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
          <TabsTrigger value="messages">Messages</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="campaigns" className="space-y-6">
          {/* Campaign Overview Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Campaigns</CardTitle>
                <Send className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">3 active campaigns</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Messages Sent</CardTitle>
                <MessageSquare className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,847</div>
                <p className="text-xs text-muted-foreground">Today: 234 messages</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
                <CheckCircle className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">73%</div>
                <p className="text-xs text-muted-foreground">+5% from last week</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Delivery Rate</CardTitle>
                <Phone className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">96%</div>
                <p className="text-xs text-muted-foreground">Excellent delivery</p>
              </CardContent>
            </Card>
          </div>

          {/* Campaign List */}
          <Card>
            <CardHeader>
              <CardTitle>Active Campaigns</CardTitle>
              <CardDescription>Manage your communication campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaignData.map((campaign) => (
                  <div key={campaign.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-4">
                      {getTypeIcon(campaign.type)}
                      <div>
                        <h4 className="font-medium">{campaign.name}</h4>
                        <p className="text-sm text-gray-600">Scheduled: {campaign.scheduled}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-sm font-medium">{campaign.sent}</p>
                        <p className="text-xs text-gray-500">Sent</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium">{campaign.delivered}</p>
                        <p className="text-xs text-gray-500">Delivered</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium">{campaign.responded}</p>
                        <p className="text-xs text-gray-500">Responded</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {getStatusIcon(campaign.status)}
                        <Badge variant={campaign.status === 'Active' ? 'default' : 'secondary'}>
                          {campaign.status}
                        </Badge>
                      </div>
                      
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Messages</CardTitle>
              <CardDescription>Latest patient communications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMessages.map((message, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 border rounded-lg">
                    {getTypeIcon(message.type)}
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{message.patient}</h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{message.status}</Badge>
                          <span className="text-xs text-gray-500">{message.time}</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{message.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="templates">
          <Card>
            <CardHeader>
              <CardTitle>Message Templates</CardTitle>
              <CardDescription>Pre-configured templates for common communications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <p className="text-gray-500 mb-4">Template management coming soon</p>
                <Button variant="outline">Create Template</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

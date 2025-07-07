
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  FileText, 
  Download, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  Users,
  CheckCircle,
  Clock,
  BarChart3,
  PieChart
} from 'lucide-react';

export default function Reports() {
  const billingReports = [
    {
      id: 1,
      type: 'CCM (Chronic Care Management)',
      period: 'December 2023',
      patients: 145,
      billableMinutes: 2340,
      revenue: '$8,970',
      status: 'Submitted',
      submissionDate: '2024-01-05',
    },
    {
      id: 2,
      type: 'RPM (Remote Patient Monitoring)',
      period: 'December 2023',
      patients: 89,
      billableMinutes: 1450,
      revenue: '$5,680',
      status: 'Approved',
      submissionDate: '2024-01-03',
    },
    {
      id: 3,
      type: 'PCM (Principal Care Management)',
      period: 'December 2023',
      patients: 67,
      billableMinutes: 890,
      revenue: '$3,340',
      status: 'Processing',
      submissionDate: '2024-01-08',
    },
  ];

  const performanceMetrics = [
    { metric: 'Patient Engagement Rate', value: '87%', trend: '+5%', period: 'This Month' },
    { metric: 'Care Plan Adherence', value: '73%', trend: '+8%', period: 'This Month' },
    { metric: 'Communication Response Rate', value: '94%', trend: '+2%', period: 'This Month' },
    { metric: 'Appointment Attendance', value: '92%', trend: '-1%', period: 'This Month' },
  ];

  const recentReports = [
    {
      id: 1,
      name: 'Monthly Patient Engagement Summary',
      type: 'Performance',
      generatedDate: '2024-01-15',
      size: '2.3 MB',
      format: 'PDF',
    },
    {
      id: 2,
      name: 'CMS Billing Report - December',
      type: 'Billing',
      generatedDate: '2024-01-10',
      size: '1.8 MB',
      format: 'Excel',
    },
    {
      id: 3,
      name: 'Care Coordination Metrics',
      type: 'Clinical',
      generatedDate: '2024-01-08',
      size: '3.1 MB',
      format: 'PDF',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved': return 'default';
      case 'Submitted': return 'secondary';
      case 'Processing': return 'secondary';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Reports & Billing</h1>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$17,990</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Billable Patients</CardTitle>
            <Users className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">301</div>
            <p className="text-xs text-muted-foreground">Across all programs</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Billable Minutes</CardTitle>
            <Clock className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4,680</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approval Rate</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">96%</div>
            <p className="text-xs text-muted-foreground">Claims approved</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="billing" className="space-y-6">
        <TabsList>
          <TabsTrigger value="billing">Billing Reports</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="clinical">Clinical Reports</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>CMS Billing Summary</CardTitle>
              <CardDescription>Reimbursement reports by program type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {billingReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium">{report.type}</h4>
                      <p className="text-sm text-gray-600">Period: {report.period}</p>
                      <p className="text-sm text-gray-600">Submitted: {report.submissionDate}</p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <p className="text-sm font-medium">{report.patients}</p>
                        <p className="text-xs text-gray-500">Patients</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium">{report.billableMinutes}</p>
                        <p className="text-xs text-gray-500">Minutes</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm font-medium text-green-600">{report.revenue}</p>
                        <p className="text-xs text-gray-500">Revenue</p>
                      </div>
                      <Badge variant={getStatusColor(report.status)}>
                        {report.status}
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Key Performance Indicators</CardTitle>
                <CardDescription>Monthly performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {performanceMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{metric.metric}</p>
                        <p className="text-sm text-gray-600">{metric.period}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">{metric.value}</p>
                        <p className={`text-sm ${metric.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                          {metric.trend}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engagement Trends</CardTitle>
                <CardDescription>Patient interaction patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <BarChart3 className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500 mb-4">Interactive charts coming soon</p>
                  <Button variant="outline">View Detailed Analytics</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="clinical" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Clinical Reports</CardTitle>
              <CardDescription>Patient care and outcome reports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <FileText className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500 mb-4">Clinical reporting module coming soon</p>
                <Button variant="outline">Generate Clinical Report</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
                <CardDescription>Recently generated reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div key={report.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-4 w-4 text-gray-500" />
                        <div>
                          <p className="font-medium">{report.name}</p>
                          <p className="text-sm text-gray-600">{report.type} • {report.format}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">{report.generatedDate}</p>
                        <p className="text-sm text-gray-600">{report.size}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Revenue Distribution</CardTitle>
                <CardDescription>Revenue by service type</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <PieChart className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <p className="text-gray-500 mb-4">Revenue analytics coming soon</p>
                  <Button variant="outline">View Revenue Breakdown</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

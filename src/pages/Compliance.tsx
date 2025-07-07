
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Shield, 
  FileText, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Eye,
  Lock,
  Users,
  Activity,
  Download,
  Settings
} from 'lucide-react';

export default function Compliance() {
  const complianceItems = [
    {
      id: 1,
      category: 'HIPAA',
      item: 'Patient Data Encryption',
      status: 'Compliant',
      lastAudit: '2024-01-10',
      nextReview: '2024-04-10',
      risk: 'Low',
    },
    {
      id: 2,
      category: 'TCPA',
      item: 'SMS Consent Management',
      status: 'Compliant',
      lastAudit: '2024-01-08',
      nextReview: '2024-02-08',
      risk: 'Low',
    },
    {
      id: 3,
      category: '21st Century Cures',
      item: 'Patient Data Access',
      status: 'Review Required',
      lastAudit: '2023-12-15',
      nextReview: '2024-01-20',
      risk: 'Medium',
    },
    {
      id: 4,
      category: 'CMS Guidelines',
      item: 'Care Management Documentation',
      status: 'Compliant',
      lastAudit: '2024-01-12',
      nextReview: '2024-03-12',
      risk: 'Low',
    },
  ];

  const auditLogs = [
    {
      id: 1,
      action: 'Patient data accessed',
      user: 'Dr. Sarah Johnson',
      timestamp: '2024-01-15 14:30:22',
      patient: 'Maria Rodriguez',
      result: 'Success',
      ipAddress: '192.168.1.10',
    },
    {
      id: 2,
      action: 'Care plan updated',
      user: 'Nurse Lisa Chen',
      timestamp: '2024-01-15 13:45:18',
      patient: 'John Smith',
      result: 'Success',
      ipAddress: '192.168.1.15',
    },
    {
      id: 3,
      action: 'Failed login attempt',
      user: 'Unknown',
      timestamp: '2024-01-15 09:22:14',
      patient: 'N/A',
      result: 'Failed',
      ipAddress: '203.0.113.42',
    },
  ];

  const privacyMetrics = [
    { metric: 'Data Breaches', value: '0', period: 'This Year', status: 'good' },
    { metric: 'Access Violations', value: '2', period: 'This Month', status: 'warning' },
    { metric: 'Audit Compliance', value: '98%', period: 'Overall', status: 'good' },
    { metric: 'User Training', value: '94%', period: 'Completion Rate', status: 'good' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Compliant': return 'default';
      case 'Review Required': return 'secondary';
      case 'Non-Compliant': return 'destructive';
      default: return 'default';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'default';
      case 'Medium': return 'secondary';
      case 'High': return 'destructive';
      default: return 'default';
    }
  };

  const getResultColor = (result: string) => {
    switch (result) {
      case 'Success': return 'text-green-600';
      case 'Failed': return 'text-red-600';
      case 'Warning': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Compliance & Security</h1>
        <Button>
          <FileText className="h-4 w-4 mr-2" />
          Generate Compliance Report
        </Button>
      </div>

      {/* Compliance Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Compliance Score</CardTitle>
            <Shield className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">98%</div>
            <p className="text-xs text-muted-foreground">Excellent compliance</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Audits</CardTitle>
            <Eye className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Ongoing reviews</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Policy Updates</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Pending review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Last Audit</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Jan 12</div>
            <p className="text-xs text-muted-foreground">Passed successfully</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="audit">Audit Logs</TabsTrigger>
          <TabsTrigger value="privacy">Privacy</TabsTrigger>
          <TabsTrigger value="policies">Policies</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Compliance Status</CardTitle>
              <CardDescription>Current compliance status across all regulations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {complianceItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium">{item.item}</h4>
                      <p className="text-sm text-gray-600">Category: {item.category}</p>
                      <p className="text-sm text-gray-600">Last Audit: {item.lastAudit}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-center">
                        <p className="text-sm font-medium">{item.nextReview}</p>
                        <p className="text-xs text-gray-500">Next Review</p>
                      </div>
                      <Badge variant={getRiskColor(item.risk)}>
                        {item.risk} Risk
                      </Badge>
                      <Badge variant={getStatusColor(item.status)}>
                        {item.status}
                      </Badge>
                      <Button size="sm" variant="outline">
                        Review
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="audit" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Audit Trail</CardTitle>
              <CardDescription>System access and activity logs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {auditLogs.map((log) => (
                  <div key={log.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium">{log.action}</h4>
                      <p className="text-sm text-gray-600">User: {log.user}</p>
                      <p className="text-sm text-gray-600">Patient: {log.patient}</p>
                      <p className="text-sm text-gray-600">IP: {log.ipAddress}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium">{log.timestamp}</p>
                      <p className={`text-sm font-medium ${getResultColor(log.result)}`}>
                        {log.result}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-between items-center">
                <Button variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Export Logs
                </Button>
                <p className="text-sm text-gray-600">Showing last 50 entries</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="privacy" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Metrics</CardTitle>
                <CardDescription>Data protection and privacy indicators</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {privacyMetrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{metric.metric}</p>
                        <p className="text-sm text-gray-600">{metric.period}</p>
                      </div>
                      <div className="text-right">
                        <p className={`text-lg font-bold ${
                          metric.status === 'good' ? 'text-green-600' : 
                          metric.status === 'warning' ? 'text-yellow-600' : 'text-red-600'
                        }`}>
                          {metric.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
                <CardDescription>Encryption and access controls</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-2">
                      <Lock className="h-4 w-4 text-green-600" />
                      <span>Data Encryption</span>
                    </div>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-green-600" />
                      <span>Access Controls</span>
                    </div>
                    <Badge variant="default">Enforced</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-green-600" />
                      <span>Activity Monitoring</span>
                    </div>
                    <Badge variant="default">Enabled</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="policies" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Policy Management</CardTitle>
              <CardDescription>Compliance policies and procedures</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <Settings className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500 mb-4">Policy management interface coming soon</p>
                <Button variant="outline">Manage Policies</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

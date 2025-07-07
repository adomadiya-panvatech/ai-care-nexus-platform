
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Plus, Filter, Phone, Mail, MessageSquare, User } from 'lucide-react';

export default function Patients() {
  const patients = [
    {
      id: 1,
      name: 'Maria Rodriguez',
      age: 45,
      condition: 'Diabetes Type 2',
      lastContact: '2 hours ago',
      riskLevel: 'High',
      phone: '(555) 123-4567',
      email: 'maria.r@email.com',
      engagement: 85,
    },
    {
      id: 2,
      name: 'John Smith',
      age: 62,
      condition: 'Hypertension',
      lastContact: '1 day ago',
      riskLevel: 'Medium',
      phone: '(555) 234-5678',
      email: 'john.smith@email.com',
      engagement: 72,
    },
    {
      id: 3,
      name: 'Emma Wilson',
      age: 34,
      condition: 'Asthma',
      lastContact: '3 hours ago',
      riskLevel: 'Low',
      phone: '(555) 345-6789',
      email: 'emma.w@email.com',
      engagement: 94,
    },
    {
      id: 4,
      name: 'Robert Johnson',
      age: 58,
      condition: 'Heart Disease',
      lastContact: '6 hours ago',
      riskLevel: 'High',
      phone: '(555) 456-7890',
      email: 'robert.j@email.com',
      engagement: 67,
    },
  ];

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case 'High': return 'destructive';
      case 'Medium': return 'secondary';
      case 'Low': return 'default';
      default: return 'default';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900">Patient Management</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add New Patient
        </Button>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search patients by name, condition, or phone..."
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Patient List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {patients.map((patient) => (
          <Card key={patient.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{patient.name}</CardTitle>
                    <p className="text-sm text-gray-600">Age {patient.age} • {patient.condition}</p>
                  </div>
                </div>
                <Badge variant={getRiskBadgeColor(patient.riskLevel)}>
                  {patient.riskLevel} Risk
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Last Contact:</span>
                  <span className="font-medium">{patient.lastContact}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Engagement Score:</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${patient.engagement}%` }}
                      />
                    </div>
                    <span className="font-medium">{patient.engagement}%</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{patient.phone}</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>{patient.email}</span>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline">
                    <MessageSquare className="h-4 w-4 mr-1" />
                    Message
                  </Button>
                  <Button size="sm" variant="outline">
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                  <Button size="sm">View Profile</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

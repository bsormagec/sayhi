import { usePageActions } from '@/contexts/page-context';
import { BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export default function Dashboard() {
    const { t } = useTranslation();
    const { setBreadcrumbs } = usePageActions();

    const breadcrumbs: BreadcrumbItem[] = React.useMemo(
        () => [
            {
                title: 'TA Management Dashboard',
                href: route('dashboard'),
            },
        ],
        [],
    );

    useEffect(() => {
        setBreadcrumbs(breadcrumbs);
    }, [breadcrumbs, setBreadcrumbs]);

    // TA Management System specific metrics
    const hrMetrics = [
        { title: 'Total TA Applications', value: '247', change: '+23%', trend: 'up', icon: '👥' },
        { title: 'Active TAs', value: '89', change: '+8%', trend: 'up', icon: '🎓' },
        { title: 'Pending Reviews', value: '34', change: '-12%', trend: 'down', icon: '📋' },
        { title: 'Departments', value: '12', change: '+2', trend: 'up', icon: '🏢' },
    ];

    const recentApplications = [
        {
            id: 1,
            name: 'Emily Johnson',
            position: 'Computer Science TA',
            department: 'CS',
            status: 'under_review',
            appliedDate: '2024-01-15',
            gpa: '3.8',
        },
        {
            id: 2,
            name: 'Michael Chen',
            position: 'Mathematics TA',
            department: 'MATH',
            status: 'interview_scheduled',
            appliedDate: '2024-01-14',
            gpa: '3.9',
        },
        { id: 3, name: 'Sarah Williams', position: 'Physics TA', department: 'PHYS', status: 'approved', appliedDate: '2024-01-13', gpa: '3.7' },
        { id: 4, name: 'David Rodriguez', position: 'Chemistry TA', department: 'CHEM', status: 'rejected', appliedDate: '2024-01-12', gpa: '3.5' },
        {
            id: 5,
            name: 'Lisa Thompson',
            position: 'Biology TA',
            department: 'BIO',
            status: 'pending_documents',
            appliedDate: '2024-01-11',
            gpa: '3.6',
        },
    ];

    const activeTAs = [
        {
            id: 1,
            name: 'Alex Kumar',
            department: 'Computer Science',
            course: 'CS 101',
            semester: 'Spring 2024',
            performance: 'Excellent',
            hours: '20/week',
        },
        {
            id: 2,
            name: 'Maria Garcia',
            department: 'Mathematics',
            course: 'MATH 201',
            semester: 'Spring 2024',
            performance: 'Good',
            hours: '15/week',
        },
        {
            id: 3,
            name: 'James Wilson',
            department: 'Physics',
            course: 'PHYS 301',
            semester: 'Spring 2024',
            performance: 'Excellent',
            hours: '20/week',
        },
        {
            id: 4,
            name: 'Anna Lee',
            department: 'Chemistry',
            course: 'CHEM 102',
            semester: 'Spring 2024',
            performance: 'Satisfactory',
            hours: '10/week',
        },
    ];

    const departmentStats = [
        { department: 'Computer Science', totalTAs: 25, openPositions: 8, avgGPA: '3.8', budget: '$45,000' },
        { department: 'Mathematics', totalTAs: 18, openPositions: 5, avgGPA: '3.7', budget: '$32,400' },
        { department: 'Physics', totalTAs: 15, openPositions: 3, avgGPA: '3.9', budget: '$27,000' },
        { department: 'Chemistry', totalTAs: 12, openPositions: 4, avgGPA: '3.6', budget: '$21,600' },
        { department: 'Biology', totalTAs: 19, openPositions: 6, avgGPA: '3.7', budget: '$34,200' },
    ];

    const getApplicationStatusBadge = (status: string) => {
        switch (status) {
            case 'approved':
                return <Badge className="bg-green-100 text-green-800 border-green-200">Approved</Badge>;
            case 'rejected':
                return <Badge variant="destructive">Rejected</Badge>;
            case 'under_review':
                return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Under Review</Badge>;
            case 'interview_scheduled':
                return <Badge className="bg-purple-100 text-purple-800 border-purple-200">Interview Scheduled</Badge>;
            case 'pending_documents':
                return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Pending Documents</Badge>;
            default:
                return <Badge variant="outline">{status}</Badge>;
        }
    };

    const getPerformanceBadge = (performance: string) => {
        switch (performance.toLowerCase()) {
            case 'excellent':
                return <Badge className="bg-green-100 text-green-800 border-green-200">Excellent</Badge>;
            case 'good':
                return <Badge className="bg-blue-100 text-blue-800 border-blue-200">Good</Badge>;
            case 'satisfactory':
                return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">Satisfactory</Badge>;
            case 'needs improvement':
                return <Badge className="bg-orange-100 text-orange-800 border-orange-200">Needs Improvement</Badge>;
            default:
                return <Badge variant="outline">{performance}</Badge>;
        }
    };

    return (
        <>
            <Head title="TA Management Dashboard" />

            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">TA Management Dashboard</h1>
                        <p className="text-gray-600 mt-1">Teaching Assistant Recruitment & Management System</p>
                    </div>
                    <div className="flex space-x-3">
                        <Button variant="outline">Export Report</Button>
                        <Button>New TA Position</Button>
                    </div>
                </div>

                {/* HR Metrics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {hrMetrics.map((metric, index) => (
                        <Card key={index} className="hover:shadow-md transition-shadow">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                                    <span className="text-lg">{metric.icon}</span>
                                    {metric.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                                <div className={`text-xs flex items-center gap-1 ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                                    <span>{metric.trend === 'up' ? '↗️' : '↘️'}</span>
                                    {metric.change} from last semester
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Application Process Overview */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">📊 Application Process Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-64 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-lg flex items-center justify-center">
                            <div className="text-center">
                                <div className="text-lg font-semibold text-gray-700 mb-4">Application Pipeline</div>
                                <div className="flex justify-center space-x-8">
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center mb-2">
                                            <span className="text-sm font-bold text-blue-800">247</span>
                                        </div>
                                        <div className="text-xs text-gray-600">Total Applications</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-purple-200 rounded-full flex items-center justify-center mb-2">
                                            <span className="text-sm font-bold text-purple-800">34</span>
                                        </div>
                                        <div className="text-xs text-gray-600">Under Review</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-20 h-20 bg-green-200 rounded-full flex items-center justify-center mb-2">
                                            <span className="text-sm font-bold text-green-800">89</span>
                                        </div>
                                        <div className="text-xs text-gray-600">Active TAs</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Recent Applications */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">📝 Recent Applications</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Applicant</TableHead>
                                        <TableHead>Position</TableHead>
                                        <TableHead>GPA</TableHead>
                                        <TableHead>Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {recentApplications.map((application) => (
                                        <TableRow key={application.id}>
                                            <TableCell>
                                                <div>
                                                    <div className="font-medium">{application.name}</div>
                                                    <div className="text-sm text-muted-foreground">{application.department}</div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="text-sm">{application.position}</TableCell>
                                            <TableCell>
                                                <Badge variant="outline" className="font-mono">
                                                    {application.gpa}
                                                </Badge>
                                            </TableCell>
                                            <TableCell>{getApplicationStatusBadge(application.status)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    {/* Active TAs Performance */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">🎓 Active TAs Performance</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>TA Name</TableHead>
                                        <TableHead>Course</TableHead>
                                        <TableHead>Hours</TableHead>
                                        <TableHead>Performance</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {activeTAs.map((ta) => (
                                        <TableRow key={ta.id}>
                                            <TableCell>
                                                <div>
                                                    <div className="font-medium">{ta.name}</div>
                                                    <div className="text-sm text-muted-foreground">{ta.department}</div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="font-mono text-sm">{ta.course}</TableCell>
                                            <TableCell className="text-sm">{ta.hours}</TableCell>
                                            <TableCell>{getPerformanceBadge(ta.performance)}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

                {/* Department Statistics */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">🏢 Department Statistics</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Department</TableHead>
                                    <TableHead>Active TAs</TableHead>
                                    <TableHead>Open Positions</TableHead>
                                    <TableHead>Avg GPA</TableHead>
                                    <TableHead>Budget</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {departmentStats.map((dept, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="font-medium">{dept.department}</TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                                {dept.totalTAs} TAs
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                                                {dept.openPositions} Open
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant="outline" className="font-mono bg-green-50 text-green-700 border-green-200">
                                                {dept.avgGPA}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="font-mono text-sm">{dept.budget}</TableCell>
                                        <TableCell>
                                            <Button variant="outline" size="sm">
                                                Manage
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </>
    );
}

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BarChart3, Plus, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

const requestsTimeline = [
  { date: 'الاثنين', requests: 45, fulfilled: 42, pending: 3 },
  { date: 'الثلاثاء', requests: 52, fulfilled: 50, pending: 2 },
  { date: 'الأربعاء', requests: 38, fulfilled: 36, pending: 2 },
  { date: 'الخميس', requests: 61, fulfilled: 58, pending: 3 },
  { date: 'الجمعة', requests: 35, fulfilled: 34, pending: 1 },
  { date: 'السبت', requests: 48, fulfilled: 46, pending: 2 },
  { date: 'الأحد', requests: 55, fulfilled: 52, pending: 3 },
];

const requestsList = [
  { id: 'REQ-001', hospital: 'مستشفى القاهرة الجامعي', bloodType: 'O+', units: 10, status: 'مكتمل', date: '2024-05-23', priority: 'عالي' },
  { id: 'REQ-002', hospital: 'مستشفى 6 أكتوبر', bloodType: 'A+', units: 8, status: 'قيد المعالجة', date: '2024-05-23', priority: 'عالي' },
  { id: 'REQ-003', hospital: 'المستشفى المتخصصة', bloodType: 'B-', units: 5, status: 'قيد الانتظار', date: '2024-05-23', priority: 'متوسط' },
  { id: 'REQ-004', hospital: 'مستشفى أسيوط', bloodType: 'AB+', units: 3, status: 'مكتمل', date: '2024-05-22', priority: 'منخفض' },
  { id: 'REQ-005', hospital: 'مستشفى المنصورة', bloodType: 'O-', units: 6, status: 'مكتمل', date: '2024-05-22', priority: 'عالي' },
  { id: 'REQ-006', hospital: 'مستشفى الإسكندرية', bloodType: 'A-', units: 4, status: 'قيد المعالجة', date: '2024-05-22', priority: 'متوسط' },
];

const statusColors: Record<string, string> = {
  'مكتمل': 'bg-green-100 text-green-800',
  'قيد المعالجة': 'bg-blue-100 text-blue-800',
  'قيد الانتظار': 'bg-yellow-100 text-yellow-800',
  'ملغي': 'bg-red-100 text-red-800',
};

const priorityColors: Record<string, string> = {
  'عالي': 'text-red-600 font-bold',
  'متوسط': 'text-yellow-600 font-semibold',
  'منخفض': 'text-green-600',
};

export default function Requests() {
  return (
    <div className="flex h-screen bg-background" dir="rtl">
      <Sidebar />
      <div className="flex-1 flex flex-col mr-64">
        <Header />
        <main className="flex-1 overflow-y-auto pt-20 pb-6">
          <div className="px-6 max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">الطلبات</h1>
                <p className="text-muted-foreground">إدارة طلبات الدم من المستشفيات</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                <Plus className="w-4 h-4" />
                طلب جديد
              </Button>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">إجمالي الطلبات</p>
                <p className="text-2xl font-bold text-foreground">334</p>
                <p className="text-xs text-muted-foreground mt-2">هذا الأسبوع</p>
              </Card>
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">مكتملة</p>
                <p className="text-2xl font-bold text-green-600">318</p>
                <p className="text-xs text-green-600 mt-2">95.2%</p>
              </Card>
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">قيد المعالجة</p>
                <p className="text-2xl font-bold text-blue-600">12</p>
                <p className="text-xs text-blue-600 mt-2">3.6%</p>
              </Card>
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">قيد الانتظار</p>
                <p className="text-2xl font-bold text-yellow-600">4</p>
                <p className="text-xs text-yellow-600 mt-2">1.2%</p>
              </Card>
            </div>

            {/* Requests Chart */}
            <Card className="p-6 bg-white border-border mb-8">
              <h3 className="text-lg font-bold text-foreground mb-4">حركة الطلبات خلال الأسبوع</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={requestsTimeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                  <XAxis dataKey="date" stroke="#666666" />
                  <YAxis stroke="#666666" />
                  <Tooltip contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E0E0E0' }} />
                  <Legend />
                  <Bar dataKey="fulfilled" name="مكتملة" fill="#C41E3A" />
                  <Bar dataKey="pending" name="قيد الانتظار" fill="#FFA500" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            {/* Requests Table */}
            <Card className="p-6 bg-white border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">آخر الطلبات</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-right py-3 px-4 font-semibold text-foreground">رقم الطلب</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">المستشفى</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">فصيلة الدم</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">الوحدات</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">الحالة</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">الأولوية</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">التاريخ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requestsList.map((request) => (
                      <tr key={request.id} className="border-b border-border hover:bg-secondary transition-colors">
                        <td className="py-3 px-4 font-mono text-foreground">{request.id}</td>
                        <td className="py-3 px-4 text-foreground">{request.hospital}</td>
                        <td className="py-3 px-4">
                          <span className="inline-block w-8 h-8 bg-primary text-white rounded flex items-center justify-center font-bold text-xs">
                            {request.bloodType.charAt(0)}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-semibold">{request.units}</td>
                        <td className="py-3 px-4">
                          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${statusColors[request.status]}`}>
                            {request.status}
                          </span>
                        </td>
                        <td className={`py-3 px-4 ${priorityColors[request.priority]}`}>
                          {request.priority}
                        </td>
                        <td className="py-3 px-4 text-muted-foreground text-xs">{request.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

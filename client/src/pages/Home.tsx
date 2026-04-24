import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import StatCard from '@/components/StatCard';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, PieChart, Pie, Cell } from 'recharts';
import { Plus, TrendingUp, AlertTriangle } from 'lucide-react';

const requestsData = [
  { date: 'يوم 17', requests: 120 },
  { date: 'يوم 18', requests: 150 },
  { date: 'يوم 19', requests: 180 },
  { date: 'يوم 20', requests: 160 },
  { date: 'يوم 21', requests: 200 },
  { date: 'يوم 22', requests: 170 },
  { date: 'يوم 23', requests: 190 },
];

const bloodDistribution = [
  { name: 'O+', value: 25568, fill: '#90EE90' },
  { name: 'O-', value: 2154, fill: '#FFB6C1' },
  { name: 'A+', value: 18245, fill: '#87CEEB' },
  { name: 'A-', value: 3256, fill: '#DDA0DD' },
  { name: 'B+', value: 12450, fill: '#FFD700' },
  { name: 'B-', value: 3947, fill: '#FFA500' },
  { name: 'AB+', value: 8963, fill: '#98FB98' },
  { name: 'AB-', value: 1321, fill: '#FF69B4' },
];

export default function Home() {
  return (
    <div className="flex h-screen bg-background" dir="rtl">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col mr-64">
        {/* Header */}
        <Header />

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto pt-20 pb-6">
          <div className="px-6 max-w-7xl">
            {/* Page Title and Action */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">المخزون</h1>
                <p className="text-muted-foreground">آخر تحديث: 29 فبراير 2020 - 4:22 م</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                <Plus className="w-4 h-4" />
                إضافة مخزون
              </Button>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <StatCard
                bloodType="O+"
                units={23454}
                locations={89}
                processing={4}
                updated="23 فبراير 2020 11:23 ص"
                trend={5.2}
                status="positive"
                color="#90EE90"
              />
              <StatCard
                bloodType="O-"
                units={454}
                locations={100}
                processing={0}
                updated="26 فبراير 2020 1:20 م"
                trend={-12}
                status="negative"
                color="#FFB6C1"
              />
              <StatCard
                bloodType="A+"
                units={40}
                locations={10}
                processing={4}
                updated="29 فبراير 2020 10:42 ص"
                trend={8}
                status="warning"
                color="#87CEEB"
              />
              <StatCard
                bloodType="A-"
                units={54}
                locations={8}
                processing={1}
                updated="26 فبراير 2020 2:42 م"
                trend={-3}
                status="negative"
                color="#DDA0DD"
              />
            </div>

            {/* Second Row of Statistics */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <StatCard
                bloodType="B+"
                units={455}
                locations={100}
                processing={6}
                updated="24 فبراير 2020 10:32 ص"
                trend={2}
                status="positive"
                color="#FFD700"
              />
              <StatCard
                bloodType="B-"
                units={3422}
                locations={94}
                processing={12}
                updated="1 فبراير 2020 5:13 م"
                trend={-5}
                status="negative"
                color="#FFA500"
              />
              <StatCard
                bloodType="AB+"
                units={39941}
                locations={100}
                processing={45}
                updated="29 فبراير 2020 4:22 م"
                trend={3}
                status="positive"
                color="#98FB98"
              />
              <StatCard
                bloodType="AB-"
                units={14500}
                locations={81}
                processing={102}
                updated="23 فبراير 2020 6:00 م"
                trend={-8}
                status="negative"
                color="#FF69B4"
              />
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {/* Line Chart - Requests */}
              <Card className="p-6 col-span-2 bg-white border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">حركة الطلبات خلال آخر 7 أيام</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={requestsData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                    <XAxis dataKey="date" stroke="#666666" />
                    <YAxis stroke="#666666" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E0E0E0' }}
                      formatter={(value) => `${value} طلب`}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="requests" 
                      stroke="#C41E3A" 
                      strokeWidth={3}
                      dot={{ fill: '#C41E3A', r: 5 }}
                      activeDot={{ r: 7 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Card>

              {/* Pie Chart - Blood Distribution */}
              <Card className="p-6 bg-white border-border flex flex-col items-center justify-center">
                <h3 className="text-lg font-bold text-foreground mb-4 w-full">توزيع فصائل الدم</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={bloodDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {bloodDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </Card>
            </div>

            {/* Processing Table */}
            <Card className="p-6 bg-white border-border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-foreground">الوحدات قيد المعالجة</h3>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">آخر</Button>
                  <Button variant="outline" size="sm">الوحدات</Button>
                  <Button variant="outline" size="sm">الحالة</Button>
                  <Button variant="outline" size="sm" className="bg-primary text-white">آخر</Button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-right py-3 px-4 font-semibold text-foreground">فصيلة الدم</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">الكمية</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">موقع المعالجة الحالي</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">موقع التخزين</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">تم التحديث</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">الحالة</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">معرف الوحدة</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border hover:bg-secondary transition-colors">
                      <td className="py-3 px-4">
                        <span className="inline-block w-8 h-8 bg-pink-200 text-pink-800 rounded flex items-center justify-center font-bold text-sm">AB+</span>
                      </td>
                      <td className="py-3 px-4">450 مل</td>
                      <td className="py-3 px-4">مستشفى بليكينج <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-2">الرئيسي</span></td>
                      <td className="py-3 px-4">مستشفى بليكينج <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-2">الرئيسي</span></td>
                      <td className="py-3 px-4">2 مارس 2020</td>
                      <td className="py-3 px-4"><span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">مخزن</span></td>
                      <td className="py-3 px-4">0123456789-AB-BLE-KAR</td>
                    </tr>
                    <tr className="border-b border-border hover:bg-secondary transition-colors">
                      <td className="py-3 px-4">
                        <span className="inline-block w-8 h-8 bg-red-200 text-red-800 rounded flex items-center justify-center font-bold text-sm">B+</span>
                      </td>
                      <td className="py-3 px-4">450 مل</td>
                      <td className="py-3 px-4">بليكينجسجوخسيت - كارلشامن</td>
                      <td className="py-3 px-4">بليكينجسجوخسيت - كارلشامن</td>
                      <td className="py-3 px-4">2 مارس 2020</td>
                      <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">قيد النقل</span></td>
                      <td className="py-3 px-4">0123456789-AB-BLE-KAR</td>
                    </tr>
                    <tr className="border-b border-border hover:bg-secondary transition-colors">
                      <td className="py-3 px-4">
                        <span className="inline-block w-8 h-8 bg-blue-200 text-blue-800 rounded flex items-center justify-center font-bold text-sm">A-</span>
                      </td>
                      <td className="py-3 px-4">450 مل</td>
                      <td className="py-3 px-4">مستشفى بليكينج <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-2">الرئيسي</span></td>
                      <td className="py-3 px-4">مستشفى بليكينج <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-2">الرئيسي</span></td>
                      <td className="py-3 px-4">2 مارس 2020</td>
                      <td className="py-3 px-4"><span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">قيد النقل</span></td>
                      <td className="py-3 px-4">0123456789-AB-BLE-KAR</td>
                    </tr>
                    <tr className="hover:bg-secondary transition-colors">
                      <td className="py-3 px-4">
                        <span className="inline-block w-8 h-8 bg-red-300 text-red-800 rounded flex items-center justify-center font-bold text-sm">O+</span>
                      </td>
                      <td className="py-3 px-4">450 مل</td>
                      <td className="py-3 px-4">مستشفى بليكينج <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-2">الرئيسي</span></td>
                      <td className="py-3 px-4">سانت إريكس أوجونسلوخس - ستوكهولم</td>
                      <td className="py-3 px-4">1 مارس 2020</td>
                      <td className="py-3 px-4"><span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">قيد المعالجة</span></td>
                      <td className="py-3 px-4">0123456789-AB-BLE-KAR</td>
                    </tr>
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

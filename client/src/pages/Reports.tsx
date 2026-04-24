import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Download, Calendar } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { month: 'يناير', collected: 1200, distributed: 1100, stored: 100 },
  { month: 'فبراير', collected: 1400, distributed: 1300, stored: 100 },
  { month: 'مارس', collected: 1600, distributed: 1450, stored: 150 },
  { month: 'أبريل', collected: 1800, distributed: 1650, stored: 150 },
  { month: 'مايو', collected: 2000, distributed: 1850, stored: 150 },
];

const bloodTypeDistribution = [
  { name: 'O+', value: 35, fill: '#90EE90' },
  { name: 'A+', value: 25, fill: '#87CEEB' },
  { name: 'B+', value: 20, fill: '#FFD700' },
  { name: 'AB+', value: 12, fill: '#98FB98' },
  { name: 'O-', value: 5, fill: '#FFB6C1' },
  { name: 'A-', value: 2, fill: '#DDA0DD' },
  { name: 'B-', value: 1, fill: '#FFA500' },
];

const hospitalPerformance = [
  { hospital: 'القاهرة الجامعي', requests: 245, fulfilled: 240, avgTime: '2.3 ساعة' },
  { hospital: '6 أكتوبر', requests: 189, fulfilled: 185, avgTime: '2.8 ساعة' },
  { hospital: 'المتخصصة الدولية', requests: 267, fulfilled: 263, avgTime: '2.1 ساعة' },
  { hospital: 'أسيوط الجامعي', requests: 156, fulfilled: 150, avgTime: '3.2 ساعة' },
  { hospital: 'المنصورة الجامعي', requests: 134, fulfilled: 129, avgTime: '3.5 ساعة' },
];

export default function Reports() {
  return (
    <div className="flex h-screen bg-background" dir="rtl">
      <Sidebar />
      <div className="flex-1 flex flex-col mr-64">
        <Header />
        <main className="flex-1 overflow-y-auto pt-20 pb-6">
          <div className="px-6 max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">التقارير</h1>
                <p className="text-muted-foreground">تقارير شاملة عن الأداء والمخزون</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  اختر الفترة
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  تحميل التقرير
                </Button>
              </div>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">إجمالي المجموعات المجمعة</p>
                <p className="text-2xl font-bold text-foreground">8,000</p>
                <p className="text-xs text-green-600 mt-2">↑ 12% عن الشهر الماضي</p>
              </Card>
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">المجموعات الموزعة</p>
                <p className="text-2xl font-bold text-foreground">7,450</p>
                <p className="text-xs text-green-600 mt-2">↑ 8% عن الشهر الماضي</p>
              </Card>
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">معدل الاستخدام</p>
                <p className="text-2xl font-bold text-foreground">93.1%</p>
                <p className="text-xs text-green-600 mt-2">↑ 2% عن الشهر الماضي</p>
              </Card>
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">المستشفيات النشطة</p>
                <p className="text-2xl font-bold text-foreground">47</p>
                <p className="text-xs text-muted-foreground mt-2">في جميع المحافظات</p>
              </Card>
            </div>

            {/* Monthly Trend */}
            <Card className="p-6 bg-white border-border mb-8">
              <h3 className="text-lg font-bold text-foreground mb-4">الاتجاه الشهري</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" />
                  <XAxis dataKey="month" stroke="#666666" />
                  <YAxis stroke="#666666" />
                  <Tooltip contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E0E0E0' }} />
                  <Legend />
                  <Bar dataKey="collected" name="المجموعة" fill="#C41E3A" />
                  <Bar dataKey="distributed" name="الموزعة" fill="#90EE90" />
                  <Bar dataKey="stored" name="المخزنة" fill="#87CEEB" />
                </BarChart>
              </ResponsiveContainer>
            </Card>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {/* Blood Type Distribution */}
              <Card className="p-6 bg-white border-border">
                <h3 className="text-lg font-bold text-foreground mb-4">توزيع فصائل الدم</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={bloodTypeDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {bloodTypeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
                  {bloodTypeDistribution.map((item) => (
                    <div key={item.name} className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.fill }}></div>
                      <span>{item.name}: {item.value}%</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Hospital Performance */}
              <Card className="p-6 bg-white border-border col-span-2">
                <h3 className="text-lg font-bold text-foreground mb-4">أداء المستشفيات</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-right py-2 px-3 font-semibold text-foreground">المستشفى</th>
                        <th className="text-right py-2 px-3 font-semibold text-foreground">الطلبات</th>
                        <th className="text-right py-2 px-3 font-semibold text-foreground">المكتملة</th>
                        <th className="text-right py-2 px-3 font-semibold text-foreground">معدل الإنجاز</th>
                        <th className="text-right py-2 px-3 font-semibold text-foreground">متوسط الوقت</th>
                      </tr>
                    </thead>
                    <tbody>
                      {hospitalPerformance.map((hospital) => (
                        <tr key={hospital.hospital} className="border-b border-border hover:bg-secondary transition-colors">
                          <td className="py-2 px-3 text-foreground">{hospital.hospital}</td>
                          <td className="py-2 px-3 font-semibold">{hospital.requests}</td>
                          <td className="py-2 px-3 text-green-600 font-semibold">{hospital.fulfilled}</td>
                          <td className="py-2 px-3">
                            <span className="text-green-600 font-semibold">
                              {((hospital.fulfilled / hospital.requests) * 100).toFixed(1)}%
                            </span>
                          </td>
                          <td className="py-2 px-3 text-muted-foreground">{hospital.avgTime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            {/* Summary Statistics */}
            <Card className="p-6 bg-white border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">ملخص الإحصائيات</h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">أعلى فصيلة طلباً</p>
                  <p className="text-2xl font-bold text-foreground">O+</p>
                  <p className="text-xs text-muted-foreground mt-1">35% من إجمالي الطلبات</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">أفضل أداء</p>
                  <p className="text-2xl font-bold text-foreground">المتخصصة الدولية</p>
                  <p className="text-xs text-muted-foreground mt-1">98.5% معدل الإنجاز</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">متوسط وقت التسليم</p>
                  <p className="text-2xl font-bold text-foreground">2.8 ساعة</p>
                  <p className="text-xs text-muted-foreground mt-1">عبر جميع المستشفيات</p>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

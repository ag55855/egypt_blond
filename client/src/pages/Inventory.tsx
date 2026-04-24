import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Droplets, Plus, Download, TrendingUp, TrendingDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const inventoryData = [
  { hospital: 'مستشفى القاهرة الجامعي', oPlus: 450, oMinus: 120, aPlus: 380, aMinus: 95, bPlus: 220, bMinus: 60, abPlus: 150, abMinus: 40 },
  { hospital: 'مستشفى 6 أكتوبر', oPlus: 380, oMinus: 100, aPlus: 320, aMinus: 80, bPlus: 190, bMinus: 50, abPlus: 130, abMinus: 35 },
  { hospital: 'المستشفى المتخصصة الدولية', oPlus: 520, oMinus: 140, aPlus: 450, aMinus: 110, bPlus: 280, bMinus: 70, abPlus: 180, abMinus: 50 },
  { hospital: 'مستشفى أسيوط الجامعي', oPlus: 310, oMinus: 85, aPlus: 280, aMinus: 70, bPlus: 160, bMinus: 45, abPlus: 110, abMinus: 30 },
];

const bloodTypeInventory = [
  { type: 'O+', total: 1660, available: 1450, processing: 150, expired: 60 },
  { type: 'O-', total: 445, available: 380, processing: 45, expired: 20 },
  { type: 'A+', total: 1430, available: 1250, processing: 140, expired: 40 },
  { type: 'A-', total: 355, available: 310, processing: 35, expired: 10 },
  { type: 'B+', total: 850, available: 750, processing: 80, expired: 20 },
  { type: 'B-', total: 225, available: 195, processing: 20, expired: 10 },
  { type: 'AB+', total: 570, available: 500, processing: 50, expired: 20 },
  { type: 'AB-', total: 155, available: 135, processing: 15, expired: 5 },
];

const hospitalInventory = [
  { name: 'مستشفى القاهرة الجامعي', location: 'القاهرة', total: 1815, available: 1580, critical: false, lastUpdate: '2024-05-23' },
  { name: 'مستشفى 6 أكتوبر', location: 'الجيزة', total: 1520, available: 1320, critical: false, lastUpdate: '2024-05-23' },
  { name: 'المستشفى المتخصصة الدولية', location: 'القاهرة', total: 2120, available: 1850, critical: false, lastUpdate: '2024-05-23' },
  { name: 'مستشفى أسيوط الجامعي', location: 'أسيوط', total: 1215, available: 1050, critical: true, lastUpdate: '2024-05-22' },
  { name: 'مستشفى المنصورة الجامعي', location: 'الدقهلية', total: 980, available: 850, critical: true, lastUpdate: '2024-05-22' },
];

export default function Inventory() {
  return (
    <div className="flex h-screen bg-background" dir="rtl">
      <Sidebar />
      <div className="flex-1 flex flex-col mr-64">
        <Header />
        <main className="flex-1 overflow-y-auto pt-20 pb-6">
          <div className="px-6 max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">المخزون</h1>
                <p className="text-muted-foreground">إدارة مخزون الدم في جميع المستشفيات</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  تحميل
                </Button>
                <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  إضافة مخزون
                </Button>
              </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <Card className="p-4 bg-white border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">إجمالي الوحدات</p>
                    <p className="text-2xl font-bold text-foreground">9,370</p>
                  </div>
                  <Droplets className="w-10 h-10 text-primary opacity-20" />
                </div>
              </Card>
              <Card className="p-4 bg-white border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">متاح للاستخدام</p>
                    <p className="text-2xl font-bold text-green-600">8,140</p>
                  </div>
                  <TrendingUp className="w-10 h-10 text-green-600 opacity-20" />
                </div>
              </Card>
              <Card className="p-4 bg-white border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">قيد المعالجة</p>
                    <p className="text-2xl font-bold text-yellow-600">935</p>
                  </div>
                  <TrendingUp className="w-10 h-10 text-yellow-600 opacity-20" />
                </div>
              </Card>
              <Card className="p-4 bg-white border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">منتهي الصلاحية</p>
                    <p className="text-2xl font-bold text-red-600">295</p>
                  </div>
                  <TrendingDown className="w-10 h-10 text-red-600 opacity-20" />
                </div>
              </Card>
            </div>

            {/* Blood Type Inventory Chart */}
            <Card className="p-6 bg-white border-border mb-8">
              <h3 className="text-lg font-bold text-foreground mb-4">المخزون حسب فصيلة الدم</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-right py-3 px-4 font-semibold text-foreground">الفصيلة</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">الإجمالي</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">المتاح</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">قيد المعالجة</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">منتهي الصلاحية</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">النسبة المئوية</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bloodTypeInventory.map((item) => (
                      <tr key={item.type} className="border-b border-border hover:bg-secondary transition-colors">
                        <td className="py-3 px-4">
                          <span className="inline-block w-8 h-8 bg-primary text-white rounded flex items-center justify-center font-bold text-sm">
                            {item.type.charAt(0)}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-semibold">{item.total}</td>
                        <td className="py-3 px-4">
                          <span className="text-green-600 font-medium">{item.available}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-yellow-600 font-medium">{item.processing}</span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-red-600 font-medium">{item.expired}</span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="w-full bg-secondary rounded-full h-2">
                            <div
                              className="bg-primary h-2 rounded-full"
                              style={{ width: `${(item.available / item.total) * 100}%` }}
                            ></div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>

            {/* Hospital Inventory */}
            <Card className="p-6 bg-white border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">المخزون حسب المستشفى</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-right py-3 px-4 font-semibold text-foreground">المستشفى</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">المحافظة</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">الإجمالي</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">المتاح</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">الحالة</th>
                      <th className="text-right py-3 px-4 font-semibold text-foreground">آخر تحديث</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hospitalInventory.map((hospital) => (
                      <tr key={hospital.name} className="border-b border-border hover:bg-secondary transition-colors">
                        <td className="py-3 px-4 font-medium text-foreground">{hospital.name}</td>
                        <td className="py-3 px-4 text-muted-foreground">{hospital.location}</td>
                        <td className="py-3 px-4 font-semibold">{hospital.total}</td>
                        <td className="py-3 px-4">
                          <span className="text-green-600 font-medium">{hospital.available}</span>
                        </td>
                        <td className="py-3 px-4">
                          {hospital.critical ? (
                            <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                              حرج
                            </span>
                          ) : (
                            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                              طبيعي
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-muted-foreground text-xs">{hospital.lastUpdate}</td>
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

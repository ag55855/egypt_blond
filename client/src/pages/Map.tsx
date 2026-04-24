import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Card } from '@/components/ui/card';
import { MapPin, Droplets } from 'lucide-react';

const governorates = [
  { name: 'القاهرة', inventory: 2450, percentage: 85, status: 'عالي', hospitals: 12 },
  { name: 'الجيزة', inventory: 1890, percentage: 72, status: 'متوسط', hospitals: 9 },
  { name: 'الإسكندرية', inventory: 1650, percentage: 68, status: 'متوسط', hospitals: 7 },
  { name: 'الدقهلية', inventory: 1200, percentage: 55, status: 'منخفض', hospitals: 5 },
  { name: 'أسيوط', inventory: 950, percentage: 45, status: 'حرج', hospitals: 4 },
  { name: 'المنيا', inventory: 820, percentage: 40, status: 'حرج', hospitals: 3 },
  { name: 'سوهاج', inventory: 680, percentage: 35, status: 'حرج', hospitals: 3 },
  { name: 'قنا', inventory: 750, percentage: 38, status: 'حرج', hospitals: 3 },
  { name: 'الأقصر', inventory: 420, percentage: 25, status: 'حرج', hospitals: 2 },
  { name: 'أسوان', inventory: 380, percentage: 20, status: 'حرج', hospitals: 2 },
];

const statusColors: Record<string, { bg: string; text: string; border: string }> = {
  'عالي': { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-300' },
  'متوسط': { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-300' },
  'منخفض': { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-300' },
  'حرج': { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-300' },
};

export default function MapPage() {
  return (
    <div className="flex h-screen bg-background" dir="rtl">
      <Sidebar />
      <div className="flex-1 flex flex-col mr-64">
        <Header />
        <main className="flex-1 overflow-y-auto pt-20 pb-6">
          <div className="px-6 max-w-7xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">خريطة توزيع الدم</h1>
              <p className="text-muted-foreground">توزيع مخزون الدم حسب المحافظات</p>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">إجمالي المحافظات</p>
                <p className="text-2xl font-bold text-foreground">27</p>
                <p className="text-xs text-muted-foreground mt-2">مغطاة بالكامل</p>
              </Card>
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">محافظات عالية</p>
                <p className="text-2xl font-bold text-green-600">3</p>
                <p className="text-xs text-green-600 mt-2">مخزون كافي</p>
              </Card>
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">محافظات حرجة</p>
                <p className="text-2xl font-bold text-red-600">8</p>
                <p className="text-xs text-red-600 mt-2">تحتاج تعزيز</p>
              </Card>
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">متوسط التوزيع</p>
                <p className="text-2xl font-bold text-foreground">52%</p>
                <p className="text-xs text-muted-foreground mt-2">من السعة الكلية</p>
              </Card>
            </div>

            {/* Governorates Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {governorates.map((gov) => {
                const colors = statusColors[gov.status];
                return (
                  <Card key={gov.name} className={`p-4 border-2 ${colors.border} ${colors.bg}`}>
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className={`font-bold text-lg ${colors.text}`}>{gov.name}</h3>
                        <p className="text-xs text-muted-foreground mt-1">
                          <MapPin className="w-3 h-3 inline mr-1" />
                          {gov.hospitals} مستشفيات
                        </p>
                      </div>
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colors.bg}`}>
                        <Droplets className={`w-6 h-6 ${colors.text}`} />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">الوحدات المتاحة</span>
                        <span className={`text-lg font-bold ${colors.text}`}>{gov.inventory}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            gov.status === 'عالي' ? 'bg-green-500' :
                            gov.status === 'متوسط' ? 'bg-yellow-500' :
                            gov.status === 'منخفض' ? 'bg-orange-500' :
                            'bg-red-500'
                          }`}
                          style={{ width: `${gov.percentage}%` }}
                        ></div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">نسبة الاستخدام</span>
                        <span className={`text-sm font-semibold ${colors.text}`}>{gov.percentage}%</span>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-current border-opacity-10">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${colors.bg} ${colors.text}`}>
                        {gov.status}
                      </span>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Legend */}
            <Card className="p-6 bg-white border-border">
              <h3 className="text-lg font-bold text-foreground mb-4">مفتاح الألوان</h3>
              <div className="grid grid-cols-4 gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-green-500 rounded"></div>
                  <span className="text-sm">عالي (75% فما فوق)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                  <span className="text-sm">متوسط (50-75%)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-orange-500 rounded"></div>
                  <span className="text-sm">منخفض (25-50%)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-4 h-4 bg-red-500 rounded"></div>
                  <span className="text-sm">حرج (أقل من 25%)</span>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

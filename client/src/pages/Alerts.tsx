import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, AlertTriangle, Info, CheckCircle, X } from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'critical',
    title: 'مخزون حرج من فصيلة O-',
    message: 'المخزون من فصيلة O- انخفض إلى أقل من 100 وحدة في مستشفى أسيوط',
    hospital: 'مستشفى أسيوط الجامعي',
    time: 'منذ 15 دقيقة',
    icon: AlertCircle,
  },
  {
    id: 2,
    type: 'warning',
    title: 'وحدات قريبة من انتهاء الصلاحية',
    message: '45 وحدة من فصيلة A+ ستنتهي صلاحيتها خلال 48 ساعة',
    hospital: 'مستشفى القاهرة الجامعي',
    time: 'منذ ساعة',
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: 'info',
    title: 'تحديث النظام المجدول',
    message: 'سيتم إجراء صيانة دورية للنظام يوم الجمعة من الساعة 10 مساءً إلى 12 صباحاً',
    hospital: 'النظام',
    time: 'منذ 2 ساعة',
    icon: Info,
  },
  {
    id: 4,
    type: 'success',
    title: 'تم استلام طلب جديد',
    message: 'تم استلام طلب جديد من مستشفى 6 أكتوبر لـ 20 وحدة من فصيلة O+',
    hospital: 'مستشفى 6 أكتوبر',
    time: 'منذ 3 ساعات',
    icon: CheckCircle,
  },
  {
    id: 5,
    type: 'warning',
    title: 'تأخر في معالجة الطلب',
    message: 'الطلب REQ-045 تأخر عن الموعد المحدد بـ 2 ساعة',
    hospital: 'مستشفى المنصورة',
    time: 'منذ 4 ساعات',
    icon: AlertTriangle,
  },
  {
    id: 6,
    type: 'critical',
    title: 'فشل في الاتصال بالمستشفى',
    message: 'فقدان الاتصال بنظام مستشفى الإسكندرية لمدة 30 دقيقة',
    hospital: 'مستشفى الإسكندرية',
    time: 'منذ 5 ساعات',
    icon: AlertCircle,
  },
];

const alertColors: Record<string, { bg: string; border: string; icon: string; text: string }> = {
  critical: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-600', text: 'text-red-900' },
  warning: { bg: 'bg-yellow-50', border: 'border-yellow-200', icon: 'text-yellow-600', text: 'text-yellow-900' },
  info: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-600', text: 'text-blue-900' },
  success: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-600', text: 'text-green-900' },
};

export default function Alerts() {
  return (
    <div className="flex h-screen bg-background" dir="rtl">
      <Sidebar />
      <div className="flex-1 flex flex-col mr-64">
        <Header />
        <main className="flex-1 overflow-y-auto pt-20 pb-6">
          <div className="px-6 max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">التنبيهات</h1>
                <p className="text-muted-foreground">تنبيهات النظام والتحذيرات المهمة</p>
              </div>
              <Button variant="outline">
                مسح الكل
              </Button>
            </div>

            {/* Alert Summary */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">حرجة</p>
                <p className="text-2xl font-bold text-red-600">2</p>
              </Card>
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">تحذيرات</p>
                <p className="text-2xl font-bold text-yellow-600">2</p>
              </Card>
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">معلومات</p>
                <p className="text-2xl font-bold text-blue-600">1</p>
              </Card>
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">نجاح</p>
                <p className="text-2xl font-bold text-green-600">1</p>
              </Card>
            </div>

            {/* Alerts List */}
            <div className="space-y-4">
              {alerts.map((alert) => {
                const colors = alertColors[alert.type];
                const IconComponent = alert.icon;
                
                return (
                  <Card key={alert.id} className={`p-4 border-l-4 ${colors.bg} ${colors.border} border-border`}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className={`flex-shrink-0 ${colors.icon}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className={`font-bold ${colors.text}`}>{alert.title}</h3>
                          <p className="text-sm text-foreground mt-1">{alert.message}</p>
                          <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                            <span>المستشفى: {alert.hospital}</span>
                            <span>{alert.time}</span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="flex-shrink-0 hover:bg-background"
                      >
                        <X className="w-5 h-5 text-muted-foreground" />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <Button variant="outline">
                تحميل المزيد من التنبيهات
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

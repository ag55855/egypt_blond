import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Settings as SettingsIcon, Save, Lock, Bell, Shield, Database } from 'lucide-react';

export default function Settings() {
  return (
    <div className="flex h-screen bg-background" dir="rtl">
      <Sidebar />
      <div className="flex-1 flex flex-col mr-64">
        <Header />
        <main className="flex-1 overflow-y-auto pt-20 pb-6">
          <div className="px-6 max-w-4xl">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">الإعدادات</h1>
              <p className="text-muted-foreground">إدارة إعدادات النظام والحساب</p>
            </div>

            {/* Profile Settings */}
            <Card className="p-6 bg-white border-border mb-6">
              <div className="flex items-center gap-3 mb-6">
                <SettingsIcon className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">بيانات الحساب</h2>
              </div>
              
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">الاسم الأول</label>
                    <Input
                      type="text"
                      defaultValue="أحمد"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">الاسم الأخير</label>
                    <Input
                      type="text"
                      defaultValue="محمد"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">البريد الإلكتروني</label>
                  <Input
                    type="email"
                    defaultValue="admin@blood.gov.eg"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">الهاتف</label>
                  <Input
                    type="tel"
                    defaultValue="+20 2 3761 2000"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">الوظيفة</label>
                  <Input
                    type="text"
                    defaultValue="مدير النظام"
                    className="w-full"
                  />
                </div>
              </div>
            </Card>

            {/* Security Settings */}
            <Card className="p-6 bg-white border-border mb-6">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">الأمان</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">كلمة المرور الحالية</label>
                  <Input
                    type="password"
                    placeholder="أدخل كلمة المرور الحالية"
                    className="w-full"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">كلمة المرور الجديدة</label>
                    <Input
                      type="password"
                      placeholder="أدخل كلمة المرور الجديدة"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">تأكيد كلمة المرور</label>
                    <Input
                      type="password"
                      placeholder="أعد إدخال كلمة المرور"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-900">
                    <strong>نصيحة أمان:</strong> استخدم كلمة مرور قوية تحتوي على أحرف كبيرة وصغيرة وأرقام ورموز
                  </p>
                </div>

                <div>
                  <label className="flex items-center gap-2 text-sm">
                    <input type="checkbox" defaultChecked className="w-4 h-4" />
                    <span className="text-foreground">تفعيل المصادقة الثنائية</span>
                  </label>
                </div>
              </div>
            </Card>

            {/* Notification Settings */}
            <Card className="p-6 bg-white border-border mb-6">
              <div className="flex items-center gap-3 mb-6">
                <Bell className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">الإشعارات</h2>
              </div>

              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <span className="text-sm font-medium text-foreground">إشعارات البريد الإلكتروني</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                </label>

                <label className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <span className="text-sm font-medium text-foreground">إشعارات النظام</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                </label>

                <label className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <span className="text-sm font-medium text-foreground">تنبيهات المخزون الحرج</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                </label>

                <label className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <span className="text-sm font-medium text-foreground">تنبيهات الطلبات الجديدة</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                </label>

                <label className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <span className="text-sm font-medium text-foreground">تقارير أسبوعية</span>
                  <input type="checkbox" className="w-4 h-4" />
                </label>
              </div>
            </Card>

            {/* System Settings */}
            <Card className="p-6 bg-white border-border mb-6">
              <div className="flex items-center gap-3 mb-6">
                <Database className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">إعدادات النظام</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">اللغة</label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg bg-white text-foreground">
                    <option>العربية</option>
                    <option>الإنجليزية</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">المنطقة الزمنية</label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg bg-white text-foreground">
                    <option>التوقيت الشرقي (EET)</option>
                    <option>التوقيت العالمي (GMT)</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">صيغة التاريخ</label>
                  <select className="w-full px-3 py-2 border border-border rounded-lg bg-white text-foreground">
                    <option>يوم/شهر/سنة</option>
                    <option>شهر/يوم/سنة</option>
                    <option>سنة/شهر/يوم</option>
                  </select>
                </div>
              </div>
            </Card>

            {/* Privacy Settings */}
            <Card className="p-6 bg-white border-border mb-6">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold text-foreground">الخصوصية</h2>
              </div>

              <div className="space-y-3">
                <label className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <span className="text-sm font-medium text-foreground">السماح بمشاركة البيانات مع الوزارة</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                </label>

                <label className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <span className="text-sm font-medium text-foreground">السماح بجمع بيانات الاستخدام</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                </label>

                <label className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                  <span className="text-sm font-medium text-foreground">السماح بالتحديثات التلقائية</span>
                  <input type="checkbox" defaultChecked className="w-4 h-4" />
                </label>
              </div>
            </Card>

            {/* Action Buttons */}
            <div className="flex gap-3 justify-end mb-8">
              <Button variant="outline">
                إلغاء
              </Button>
              <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                <Save className="w-4 h-4" />
                حفظ التغييرات
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Building2, Plus, MapPin, Phone, Mail, Users } from 'lucide-react';

const hospitals = [
  {
    id: 1,
    name: 'مستشفى القاهرة الجامعي',
    location: 'القاهرة - الدقي',
    phone: '+20 2 3761 2000',
    email: 'info@cairo-university-hospital.eg',
    director: 'د. محمد أحمد',
    beds: 850,
    bloodBank: 'نعم',
    status: 'نشط',
  },
  {
    id: 2,
    name: 'مستشفى 6 أكتوبر',
    location: 'الجيزة - الشيخ زايد',
    phone: '+20 2 3837 0000',
    email: 'info@6october-hospital.eg',
    director: 'د. فاطمة علي',
    beds: 650,
    bloodBank: 'نعم',
    status: 'نشط',
  },
  {
    id: 3,
    name: 'المستشفى المتخصصة الدولية',
    location: 'القاهرة - النيل',
    phone: '+20 2 2728 3333',
    email: 'info@international-hospital.eg',
    director: 'د. سامي محمود',
    beds: 400,
    bloodBank: 'نعم',
    status: 'نشط',
  },
  {
    id: 4,
    name: 'مستشفى أسيوط الجامعي',
    location: 'أسيوط - الوادي',
    phone: '+20 88 2413 000',
    email: 'info@assiut-university-hospital.eg',
    director: 'د. حسن محمد',
    beds: 720,
    bloodBank: 'نعم',
    status: 'نشط',
  },
  {
    id: 5,
    name: 'مستشفى المنصورة الجامعي',
    location: 'الدقهلية - المنصورة',
    phone: '+20 50 2246 000',
    email: 'info@mansoura-university-hospital.eg',
    director: 'د. عمر إبراهيم',
    beds: 680,
    bloodBank: 'نعم',
    status: 'نشط',
  },
  {
    id: 6,
    name: 'مستشفى الإسكندرية الجامعي',
    location: 'الإسكندرية - الشاطبي',
    phone: '+20 3 4865 000',
    email: 'info@alexandria-university-hospital.eg',
    director: 'د. ليلى محمود',
    beds: 750,
    bloodBank: 'نعم',
    status: 'نشط',
  },
];

export default function Hospitals() {
  return (
    <div className="flex h-screen bg-background" dir="rtl">
      <Sidebar />
      <div className="flex-1 flex flex-col mr-64">
        <Header />
        <main className="flex-1 overflow-y-auto pt-20 pb-6">
          <div className="px-6 max-w-7xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground mb-2">المستشفيات</h1>
                <p className="text-muted-foreground">إدارة المستشفيات والمراكز الطبية</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 text-white flex items-center gap-2">
                <Plus className="w-4 h-4" />
                إضافة مستشفى
              </Button>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">إجمالي المستشفيات</p>
                <p className="text-2xl font-bold text-foreground">47</p>
                <p className="text-xs text-green-600 mt-2">جميعها نشطة</p>
              </Card>
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">إجمالي الأسرة</p>
                <p className="text-2xl font-bold text-foreground">28,450</p>
                <p className="text-xs text-muted-foreground mt-2">في جميع المستشفيات</p>
              </Card>
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">بنوك الدم</p>
                <p className="text-2xl font-bold text-foreground">47</p>
                <p className="text-xs text-green-600 mt-2">100% مجهزة</p>
              </Card>
              <Card className="p-4 bg-white border-border">
                <p className="text-sm text-muted-foreground mb-1">المحافظات</p>
                <p className="text-2xl font-bold text-foreground">27</p>
                <p className="text-xs text-muted-foreground mt-2">تغطية كاملة</p>
              </Card>
            </div>

            {/* Hospitals Grid */}
            <div className="grid grid-cols-2 gap-6">
              {hospitals.map((hospital) => (
                <Card key={hospital.id} className="p-6 bg-white border-border hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{hospital.name}</h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4" />
                          {hospital.location}
                        </p>
                      </div>
                    </div>
                    <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                      {hospital.status}
                    </span>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">المدير</span>
                      <span className="text-sm font-medium text-foreground">{hospital.director}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">عدد الأسرة</span>
                      <span className="text-sm font-medium text-foreground">{hospital.beds}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">بنك الدم</span>
                      <span className="text-sm font-medium text-green-600">{hospital.bloodBank}</span>
                    </div>
                  </div>

                  <div className="border-t border-border pt-4 space-y-2">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span>{hospital.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Mail className="w-4 h-4" />
                      <span>{hospital.email}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      تعديل
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      عرض التفاصيل
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

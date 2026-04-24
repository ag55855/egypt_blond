import { Card } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface StatCardProps {
  bloodType: string;
  units: number;
  locations: number;
  processing: number;
  updated: string;
  trend?: number;
  status: 'positive' | 'negative' | 'warning';
  color: string;
}

const statusColors = {
  positive: 'bg-green-100 text-green-800',
  negative: 'bg-red-100 text-red-800',
  warning: 'bg-yellow-100 text-yellow-800',
};

const bloodTypeColors: Record<string, { bg: string; text: string; badge: string }> = {
  'O+': { bg: '#90EE90', text: '#2D5016', badge: 'bg-green-100 text-green-800' },
  'O-': { bg: '#FFB6C1', text: '#8B0000', badge: 'bg-red-100 text-red-800' },
  'A+': { bg: '#87CEEB', text: '#003366', badge: 'bg-blue-100 text-blue-800' },
  'A-': { bg: '#DDA0DD', text: '#4B0082', badge: 'bg-purple-100 text-purple-800' },
  'B+': { bg: '#FFD700', text: '#8B6914', badge: 'bg-yellow-100 text-yellow-800' },
  'B-': { bg: '#FFA500', text: '#8B4513', badge: 'bg-orange-100 text-orange-800' },
  'AB+': { bg: '#98FB98', text: '#006400', badge: 'bg-lime-100 text-lime-800' },
  'AB-': { bg: '#FF69B4', text: '#8B1A3D', badge: 'bg-pink-100 text-pink-800' },
};

export default function StatCard({
  bloodType,
  units,
  locations,
  processing,
  updated,
  trend,
  status,
  color,
}: StatCardProps) {
  const typeColors = bloodTypeColors[bloodType] || { bg: '#CCCCCC', text: '#333333', badge: 'bg-gray-100 text-gray-800' };

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow duration-200 border-border bg-white">
      {/* Header with Blood Type Badge */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center font-bold text-lg"
          style={{ backgroundColor: typeColors.bg, color: typeColors.text }}
        >
          {bloodType}
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${typeColors.badge}`}>
          {status === 'positive' ? 'متاح' : status === 'negative' ? 'منخفض' : 'تحذير'}
        </div>
      </div>

      {/* Statistics */}
      <div className="space-y-3 mb-4">
        <div>
          <p className="text-xs text-muted-foreground mb-1">الوحدات المتاحة</p>
          <p className="text-2xl font-bold text-foreground">{units.toLocaleString('ar-EG')}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-xs text-muted-foreground mb-1">المواقع</p>
            <p className="text-lg font-semibold text-foreground">{locations}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground mb-1">تحت المعالجة</p>
            <p className="text-lg font-semibold text-foreground">{processing}</p>
          </div>
        </div>
      </div>

      {/* Trend */}
      {trend !== undefined && (
        <div className="flex items-center gap-2 mb-3">
          {trend > 0 ? (
            <>
              <ArrowUpRight className="w-4 h-4 text-green-600" />
              <span className="text-sm text-green-600 font-medium">+{trend}%</span>
            </>
          ) : (
            <>
              <ArrowDownRight className="w-4 h-4 text-red-600" />
              <span className="text-sm text-red-600 font-medium">{trend}%</span>
            </>
          )}
        </div>
      )}

      {/* Footer */}
      <div className="pt-3 border-t border-border">
        <p className="text-xs text-muted-foreground">تم التحديث: {updated}</p>
      </div>
    </Card>
  );
}

'use client';

import { Button } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';

const ReviewPage = () => {
  const searchParams = useSearchParams();

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Review Your Information</h1>
      
      <div className="space-y-4">
        <div className="border-b pb-4">
          <h2 className="text-lg font-semibold mb-2">Bank Details</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Bank Name</p>
              <p className="font-medium">{searchParams.get('bankName')}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Branch</p>
              <p className="font-medium">{searchParams.get('branch')}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Account Number</p>
              <p className="font-medium">{searchParams.get('accountNumber')}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Account Name</p>
              <p className="font-medium">{searchParams.get('accountName')}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <Button className="px-4 py-2 border rounded-md text-sm font-medium bg-green-600 hover:bg-green-500/80">
            Back
          </Button>
          <Button className="px-4 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-500/80">
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPage;
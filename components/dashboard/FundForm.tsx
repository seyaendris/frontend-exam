'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bankAccountSchema, BankAccountSchema } from '@/lib/validator';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Sample bank data - replace with your actual data source
const BANKS = [
  { id: '1', name: 'Equity Bank', branches: ['Nairobi', 'Mombasa', 'Kisumu'] },
  { id: '2', name: 'KCB Bank', branches: ['Head Office', 'Westlands', 'Thika'] },
  { id: '3', name: 'Cooperative Bank', branches: ['CBD', 'Karen', 'Nakuru'] },
];

const FundForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedBank, setSelectedBank] = useState<string>('');
  const router = useRouter();

  const form = useForm<BankAccountSchema>({
    resolver: zodResolver(bankAccountSchema),
    defaultValues: {
      bankName: '',
      branch: '',
      accountName: '',
      accountNumber: '',
      bankProof: undefined,
    },
  });

   const onSubmit = async (data: BankAccountSchema) => {
    setIsSubmitting(true);
    try {
      console.log('data:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Bank details submitted successfully!');
      
      // Redirect to review page with form data as query params
      router.push(`/dashboard/review?${new URLSearchParams({
        bankName: data.bankName,
        branch: data.branch,
        accountName: data.accountName,
        accountNumber: data.accountNumber,
        // For file, you might want to store it temporarily or handle differently
      }).toString()}`);
      
    } catch (error) {
      toast.error('Submission failed');
      console.error('error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      form.setValue('bankProof', event.target.files[0]);
    }
  };

  // Get branches for the selected bank
  const getBranches = () => {
    const bank = BANKS.find(bank => bank.name === selectedBank);
    return bank ? bank.branches : [];
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 pt-3'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {/* Bank Name - Select Dropdown */}
            <FormField
              control={form.control}
              name='bankName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bank Name</FormLabel>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value);
                      setSelectedBank(value);
                      form.setValue('branch', ''); // Reset branch when bank changes
                    }}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a bank" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {BANKS.map((bank) => (
                        <SelectItem key={bank.id} value={bank.name}>
                          {bank.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Branch - Select Dropdown (dependent on bank selection) */}
            <FormField
              control={form.control}
              name='branch'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bank Branch</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={!selectedBank}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={selectedBank ? "Select a branch" : "Select bank first"} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {getBranches().map((branch, index) => (
                        <SelectItem key={index} value={branch}>
                          {branch}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Account Number */}
            <FormField
              control={form.control}
              name='accountNumber'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Number</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter account number' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Account Name */}
            <FormField
              control={form.control}
              name='accountName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Holder Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Enter account holder name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Bank Proof - File Upload */}
            <FormField
              control={form.control}
              name='bankProof'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bank Proof Document</FormLabel>
                  <FormControl>
                    <Input
                      type='file'
                      accept='.pdf,.jpg,.jpeg,.png'
                      onChange={handleFileChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Submit Button */}
          <Button
            type='submit'
            disabled={isSubmitting}
            className='w-full md:w-auto bg-green-600 hover:bg-green-600/90 rounded-sm shadow-md transition-colors cursor-pointer font-semibold'
          >
            {isSubmitting ? (
              <>
                <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                Submitting...
              </>
            ) : (
              'Submit'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FundForm;
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
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const FundForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    } catch (error) {
      
      console.error('error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 pt-3'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-3'>
            <FormField
              control={form.control}
              name='bankName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bank</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='branch'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bank Branch</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='branch'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bank Branch</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='accountNumber'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Number</FormLabel>
                  <FormControl>
                    <Input  {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='accountName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Number</FormLabel>
                  <FormControl>
                    <Input  {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='accountName'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Bank Proof</FormLabel>
                  <FormControl>
                    <Input {...field} />
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
            className=' bg-green-600 hover:bg-green-600/90 rounded-sm shadow-md transition-colors cursor-pointer font-semibold'
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

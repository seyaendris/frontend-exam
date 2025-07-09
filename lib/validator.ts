import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, 'Password must be 8+ characters')
    .regex(/[A-Z]/, 'Must include uppercase letter')
    .regex(/[a-z]/, 'Must include lowercase letter')
    .regex(/[0-9]/, 'Must include number')
    .regex(/[!@#$%^&*]/, 'Must include special character (!@#$%^&*)'),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const bankAccountSchema = z.object({
  bankName: z
    .string()
    .min(2, 'Bank name must be at least 2 characters')
    .max(50, 'Bank name cannot exceed 50 characters'),
  
  branch: z.string()
    .min(2, 'Branch name must be at least 2 characters')
    .max(50, 'Branch name cannot exceed 50 characters'),

  accountNumber: z
    .string()
    .min(5, 'Account number must be at least 5 digits')
    .max(20, 'Account number cannot exceed 20 digits'),

  accountName: z
    .string()
    .min(2, 'Account name must be at least 2 characters')
    .max(100, 'Account name cannot exceed 100 characters'),

  bankProof: z.instanceof(File, { message: 'Bank proof file is required' })
    .refine(file => file.size <= 5 * 1024 * 1024, 'File size must be less than 5MB')
    .refine(file => 
      ['application/pdf', 'image/jpeg', 'image/png'].includes(file.type), 
      'Only PDF, JPEG, and PNG files are allowed'
    )
});

export type BankAccountSchema = z.infer<typeof bankAccountSchema>;

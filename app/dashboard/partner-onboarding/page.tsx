'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import FundForm from '@/components/dashboard/FundForm';

export default function PartnerOnboarding() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isBankSelected, setIsBankSelected] = useState(false);

  const totalSteps = 7;

  const steps = [
    { id: 1, title: 'Check Merchant' },
    { id: 2, title: 'Distribution Detail' },
    { id: 3, title: 'Business Type' },
    { id: 4, title: 'Business Detail' },
    { id: 5, title: 'Business Owner' },
    { id: 6, title: 'Fund Withdraw' },
    { id: 7, title: 'Review' },
  ];

  const progressValue = (currentStep / totalSteps) * 100;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 6: // Fund Withdraw step
        return (
          <div className='space-y-6'>
            <h2 className='text-xl font-semibold'>Fund Withdraw Option</h2>
            <div className='flex gap-2 bg-white w-32 rounded-md px-5 py-2 shadow-md'>
              <Checkbox
                id='fund'
                checked={isBankSelected}
                onCheckedChange={(checked) => setIsBankSelected(!!checked)}
              />
              <Label className='text-black' htmlFor='fund'>
                Bank
              </Label>
            </div>
            {isBankSelected && (
              <div>
                <FundForm />
              </div>
            )}
          </div>
        );
      // Add cases for other steps here
      default:
        return (
          <Card className='p-5'>
            <h2 className='text-xl font-semibold mb-4'>
              {steps[currentStep - 1].title}
            </h2>
            <p className='text-gray-600'>
              Content for {steps[currentStep - 1].title} step
            </p>
          </Card>
        );
    }
  };

  return (
    <div className='py-8 max-w-5xl px-5'>
      <div className='mb-8'>
        <h1 className='text-2xl font-bold mb-6'>Partner Onboarding</h1>

        <div className='mb-6'>
          <Progress value={progressValue} className='h-2' />
        </div>

        {/* Step indicators */}
        <div className='flex justify-between mb-8'>
          {steps.map((step) => (
            <div key={step.id} className='flex flex-col items-center'>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center 
                  ${
                    currentStep >= step.id
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
              >
                {step.id}
              </div>
              <span
                className={`text-sm mt-2 ${
                  currentStep === step.id
                    ? 'font-medium text-green-600'
                    : 'text-gray-500'
                }`}
              >
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Step content */}
      {renderStepContent()}

      {/* Navigation buttons */}
      <div className='flex justify-between mt-8'>
        <Button
          variant='outline'
          onClick={handleBack}
          disabled={currentStep === 1}
          className='gap-2 bg-green-500 hover:bg-green-500/80 font-semibold cursor-pointer text-white'
        >
          <ChevronLeft className='h-4 w-4' />
          Back
        </Button>

        {currentStep < totalSteps ? (
          <Button
            onClick={handleNext}
            className='gap-2 font-semibold bg-green-500 hover:bg-green-500/80 cursor-pointer'
          >
            Next
            <ChevronRight className='h-4 w-4' />
          </Button>
        ) : (
          <Button className='bg-green-600 hover:bg-green-700 cursor-pointer'>
            Submit Application
          </Button>
        )}
      </div>
    </div>
  );
}

function BanknoteIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='20' height='12' x='2' y='6' rx='2' />
      <circle cx='12' cy='12' r='2' />
      <path d='M6 12h.01M18 12h.01' />
    </svg>
  );
}

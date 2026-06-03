'use client';

import { useState } from 'react';
import { PROGRAMS_DATA } from '@/src/features/programs/constants/program.constants';
import { CODING_EXPERIENCE_LEVELS, DEFAULT_FORM_VALUES } from '../constants/application.constants';
import { ApplicationFormData, ApplicationStatus } from '../types/application.types';
import { Button } from '@/components/ui/button';
import { EmailService } from '../services/email.service';
import { toast } from 'sonner';

export function ApplicationForm() {
  const [formData, setFormData] = useState<ApplicationFormData>(DEFAULT_FORM_VALUES);
  const [errors, setErrors] = useState<Partial<ApplicationFormData>>({});
  const [status, setStatus] = useState<ApplicationStatus>('idle');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof ApplicationFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setStatus("loading");

      const response = await fetch(
        "https://sheetdb.io/api/v1/ms5yn4qm30tpx",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: [
              {
                Timestamp: new Date().toLocaleString(),
                "Full Name": formData.fullName,
                Email: formData.email,
                Phone: formData.phone,
                Program: formData.program,
                Experience: formData.codingExperience,
                Motivation: formData.motivation,
              },
            ],
          }),
        }
      );

      const data = await response.json();
      console.log(data, "hello how are you baby");

      if (response.ok) {
        setStatus("success");
        setSuccessMessage("Application submitted successfully!");
        toast.success("Application submitted successfully!", {
          description: "We will review your profile and get back to you soon.",
          duration: 5000,
        });

        // --- THE CODESPACE FOR TRIGGERING THE MODULAR EMAIL SERVICE ---
        // Fire and forget, or await if you want to handle errors inside this block
        await EmailService.sendRegistrationEmail({
          studentName: formData.fullName,
          studentEmail: formData.email,
          studentPhone: formData.phone,
          experienceLevel: formData.codingExperience,
          selectedProgram: formData.program,
        });

        setFormData(DEFAULT_FORM_VALUES);

        setTimeout(() => {
          setStatus("idle");
          setSuccessMessage("");
        }, 5000);
      } else {
        setStatus("error");
        console.error(data);
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="w-full lg:w-2/3 bg-white rounded-2xl p-8 md:p-12">
      <h2 className="text-3xl font-bold text-primary mb-8">Application Form</h2>

      {status === 'success' && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-semibold">{successMessage}</p>
          <p className="text-green-700 text-sm mt-1">We will review your application and get back to you soon!</p>
        </div>
      )}

      {status === 'error' && errors.motivation && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-800 font-semibold">Error submitting application</p>
          <p className="text-red-700 text-sm mt-1">{errors.motivation}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-semibold text-foreground mb-2">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="e.g. Rohit Kumar"
              className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b6ef8] focus:border-transparent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="rohit@example.com"
              className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b6ef8] focus:border-transparent transition-colors"
            />
          </div>
        </div>

        {/* Phone and Program */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+916299349073"
              className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b6ef8] focus:border-transparent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="program" className="block text-sm font-semibold text-foreground mb-2">
              Select Program <span className="text-red-500">*</span>
            </label>
            <select
              id="program"
              name="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b6ef8] focus:border-transparent transition-colors"
            >
              <option value="">Select your program</option>
              {PROGRAMS_DATA.map((program) => (
                <option key={program.slug} value={program.slug}>
                  {program.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="codingExperience" className="block text-sm font-semibold text-foreground mb-2">
            Coding Experience <span className="text-red-500">*</span>
          </label>
          <select
            id="codingExperience"
            name="codingExperience"
            value={formData.codingExperience}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b6ef8] focus:border-transparent transition-colors"
          >
            <option value="">Select your experience level...</option>
            {CODING_EXPERIENCE_LEVELS.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label} - {level.description}
              </option>
            ))}
          </select>
        </div>

        {/* Motivation */}
        <div>
          <label htmlFor="motivation" className="block text-sm font-semibold text-foreground mb-2">
            Why do you want to join piecodingschools? <span className="text-red-500">*</span>
          </label>
          <textarea
            id="motivation"
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            placeholder="Tell us about your goals and what you hope to achieve..."
            rows={6}
            className="w-full px-4 py-3 border border-[#e0e0e0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b6ef8] focus:border-transparent transition-colors resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <Button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-[#0d0f1a] hover:bg-[#1a1c2e] text-white font-semibold py-3 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Submitting...' : 'Submit Application'}
          </Button>
        </div>

        {/* Legal Text */}
        <p className="text-center text-xs text-muted pt-2">
          By submitting, you agree to our Terms of Service and Privacy Policy.
        </p>
      </form>
    </div>
  );
}

import { useState } from "react";
import { useForm } from "react-hook-form";
import { insertContactSchema } from "@shared/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

type ContactFormValues = z.infer<typeof insertContactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon!",
        variant: "default",
      });
      reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    contactMutation.mutate(data);
  };

  return (
    <form 
      className="bg-[#F5F5DC] p-8 rounded-lg shadow-lg"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
        <input 
          id="name"
          type="text" 
          className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#800020]`}
          placeholder="John Doe"
          {...register("name")}
        />
        {errors.name && <p className="mt-1 text-red-500 text-xs">{errors.name.message}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
        <input 
          id="email"
          type="email" 
          className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#800020]`}
          placeholder="john@example.com"
          {...register("email")}
        />
        {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>}
      </div>
      
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
        <input 
          id="phone"
          type="tel" 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#800020]"
          placeholder="(123) 456-7890"
          {...register("phone")}
        />
        {errors.phone && <p className="mt-1 text-red-500 text-xs">{errors.phone.message}</p>}
      </div>
      
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea 
          id="message"
          rows={4} 
          className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#800020]`}
          placeholder="How can we help you?"
          {...register("message")}
        />
        {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>}
      </div>
      
      <button 
        type="submit" 
        className="w-full px-6 py-3 bg-[#800020] hover:bg-[#5D001A] text-white font-medium rounded-md transition-colors shadow-md hover:shadow-lg disabled:opacity-70"
        disabled={isSubmitting}
      >
        {isSubmitting ? <span>Sending...</span> : <span>Send Message</span>}
      </button>
    </form>
  );
};

export default ContactForm;

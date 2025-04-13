import { useState } from "react";
import { useForm } from "react-hook-form";
import { insertReservationSchema } from "@shared/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

type ReservationFormValues = z.infer<typeof insertReservationSchema>;

const ReservationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<ReservationFormValues>({
    resolver: zodResolver(insertReservationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
      time: "",
      guests: "",
      requests: "",
    }
  });

  const reservationMutation = useMutation({
    mutationFn: async (data: ReservationFormValues) => {
      return apiRequest("POST", "/api/reservations", data);
    },
    onSuccess: () => {
      toast({
        title: "Reservation Confirmed",
        description: "Your table has been reserved successfully! We look forward to seeing you.",
        variant: "default",
      });
      reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "There was a problem with your reservation. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  });

  const onSubmit = async (data: ReservationFormValues) => {
    setIsSubmitting(true);
    reservationMutation.mutate(data);
  };

  return (
    <form 
      className="bg-[#5D001A] p-8 rounded-lg shadow-xl"
      onSubmit={handleSubmit(onSubmit)}
      id="reservation"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
          <input 
            type="text" 
            id="name"
            className={`w-full px-4 py-2 bg-[#800020] border ${errors.name ? 'border-red-400' : 'border-[#A3162D]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]`}
            placeholder="John Doe"
            {...register("name")}
          />
          {errors.name && <p className="mt-1 text-red-300 text-xs">{errors.name.message}</p>}
        </div>
        
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
          <input 
            type="email" 
            id="email"
            className={`w-full px-4 py-2 bg-[#800020] border ${errors.email ? 'border-red-400' : 'border-[#A3162D]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]`}
            placeholder="john@example.com"
            {...register("email")}
          />
          {errors.email && <p className="mt-1 text-red-300 text-xs">{errors.email.message}</p>}
        </div>
        
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
          <input 
            type="tel" 
            id="phone"
            className={`w-full px-4 py-2 bg-[#800020] border ${errors.phone ? 'border-red-400' : 'border-[#A3162D]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]`}
            placeholder="(123) 456-7890"
            {...register("phone")}
          />
          {errors.phone && <p className="mt-1 text-red-300 text-xs">{errors.phone.message}</p>}
        </div>
        
        {/* Date */}
        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-2">Date</label>
          <input 
            type="date" 
            id="date"
            className={`w-full px-4 py-2 bg-[#800020] border ${errors.date ? 'border-red-400' : 'border-[#A3162D]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]`}
            {...register("date")}
          />
          {errors.date && <p className="mt-1 text-red-300 text-xs">{errors.date.message}</p>}
        </div>
        
        {/* Time */}
        <div>
          <label htmlFor="time" className="block text-sm font-medium mb-2">Time</label>
          <select 
            id="time"
            className={`w-full px-4 py-2 bg-[#800020] border ${errors.time ? 'border-red-400' : 'border-[#A3162D]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]`}
            {...register("time")}
          >
            <option value="">Select a time</option>
            <option value="17:00">5:00 PM</option>
            <option value="17:30">5:30 PM</option>
            <option value="18:00">6:00 PM</option>
            <option value="18:30">6:30 PM</option>
            <option value="19:00">7:00 PM</option>
            <option value="19:30">7:30 PM</option>
            <option value="20:00">8:00 PM</option>
            <option value="20:30">8:30 PM</option>
            <option value="21:00">9:00 PM</option>
          </select>
          {errors.time && <p className="mt-1 text-red-300 text-xs">{errors.time.message}</p>}
        </div>
        
        {/* Guests */}
        <div>
          <label htmlFor="guests" className="block text-sm font-medium mb-2">Number of Guests</label>
          <select 
            id="guests"
            className={`w-full px-4 py-2 bg-[#800020] border ${errors.guests ? 'border-red-400' : 'border-[#A3162D]'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]`}
            {...register("guests")}
          >
            <option value="">Select number</option>
            <option value="1">1 Person</option>
            <option value="2">2 People</option>
            <option value="3">3 People</option>
            <option value="4">4 People</option>
            <option value="5">5 People</option>
            <option value="6">6 People</option>
            <option value="7+">7+ People</option>
          </select>
          {errors.guests && <p className="mt-1 text-red-300 text-xs">{errors.guests.message}</p>}
        </div>
        
        {/* Special Requests */}
        <div className="md:col-span-2">
          <label htmlFor="requests" className="block text-sm font-medium mb-2">Special Requests</label>
          <textarea 
            id="requests"
            rows={3} 
            className="w-full px-4 py-2 bg-[#800020] border border-[#A3162D] rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            placeholder="Any dietary restrictions or special occasions?"
            {...register("requests")}
          ></textarea>
        </div>
      </div>
      
      {/* Submit Button */}
      <div className="mt-8 text-center">
        <button 
          type="submit" 
          className="px-8 py-3 bg-[#D4AF37] hover:bg-[#F2D675] text-[#800020] font-bold rounded-md transition-colors shadow-lg hover:shadow-xl disabled:opacity-70"
          disabled={isSubmitting}
        >
          {isSubmitting ? <span>Processing...</span> : <span>Confirm Reservation</span>}
        </button>
      </div>
    </form>
  );
};

export default ReservationForm;

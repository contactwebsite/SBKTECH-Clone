
"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
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
import { CheckCircle2, Truck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  firstName: z.string().min(2, { message: "Le prénom est requis" }),
  phone: z.string().min(10, { message: "Numéro de téléphone invalide" }),
  city: z.string().min(2, { message: "La ville est requise" }),
});

interface CODFormProps {
  productName: string;
  price: number;
}

export default function CODForm({ productName, price }: CODFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      phone: "",
      city: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      console.log(values);
      setIsSubmitting(false);
      setIsSuccess(true);
      toast({
        title: "Commande reçue !",
        description: "Nous vous contacterons dans quelques minutes pour confirmer.",
      });
    }, 1500);
  }

  if (isSuccess) {
    return (
      <div className="p-8 border-2 border-primary/50 bg-primary/5 rounded-xl text-center space-y-4 animate-in fade-in zoom-in">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-white mb-2">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="text-2xl font-bold">Merci pour votre commande !</h3>
        <p className="text-muted-foreground">
          Votre demande pour <strong>{productName}</strong> a été enregistrée. Notre service client vous appellera très bientôt.
        </p>
        <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-4">
          Passer une autre commande
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 lg:p-8 shadow-2xl">
      <div className="flex items-center gap-2 mb-6 p-3 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-700 font-medium">
        <Truck className="w-5 h-5 text-green-600" /> 
        Livraison Gratuite partout au Maroc
      </div>

      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
          <Truck className="w-5 h-5" />
        </div>
        <div>
          <h3 className="font-bold text-lg">Commande Rapide (Paiement Cash)</h3>
          <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Paiement à la livraison</p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom Complet</FormLabel>
                <FormControl>
                  <Input placeholder="Votre nom complet" {...field} className="h-12" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Numéro de Téléphone</FormLabel>
                <FormControl>
                  <Input placeholder="06XX XX XX XX" {...field} className="h-12" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ville</FormLabel>
                <FormControl>
                  <Input placeholder="Votre ville" {...field} className="h-12" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button 
            type="submit" 
            className="relative overflow-hidden w-full bg-black text-white py-8 rounded-md font-semibold tracking-widest uppercase text-sm transition-all hover:bg-gray-900 group flex justify-center items-center gap-3 mt-4"
            disabled={isSubmitting}
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer"></div>
            <span>{isSubmitting ? "Traitement..." : "COMPLÉTER LA COMMANDE"}</span>
            <span className="font-light opacity-80">| {price.toLocaleString()} MAD</span>
          </Button>
          <p className="text-[10px] text-center text-muted-foreground">
            En cliquant sur le bouton, vous acceptez nos conditions générales de vente.
          </p>
        </form>
      </Form>
    </div>
  );
}

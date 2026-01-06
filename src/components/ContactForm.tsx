import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";

const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  message: z.string().min(10),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const buildMessage = (data: ContactFormValues) => `
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}
  `.trim();

  const sendWhatsApp = (data: ContactFormValues) => {
    setIsSubmitting(true);

    const url = `https://wa.me/918248711836?text=${encodeURIComponent(
      buildMessage(data)
    )}`;

    window.open(url, "_blank");
    setTimeout(() => {
      setIsSubmitting(false);
      form.reset();
    }, 500);
  };

  const sendEmail = (data: ContactFormValues) => {
    const subject = "New Contact From Portfolio";
    const body = buildMessage(data);

    const emailUrl = `mailto:kmharimng@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = emailUrl;
  };

  return (
    <section className="min-h-screen bg-white text-black flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-4xl">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-6xl md:text-8xl uppercase mb-6 tracking-tight">
            LET’S TALK
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Reach me directly via WhatsApp or Email — whichever you prefer.
          </p>
        </motion.div>

        {/* FORM */}
        <Form {...form}>
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm uppercase tracking-wide">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-white border border-gray-300 h-12 focus:border-black"
                        placeholder="Your Full Name"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm uppercase tracking-wide">
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        className="bg-white border border-gray-300 h-12 focus:border-black"
                        placeholder="Your@email.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm uppercase tracking-wide">
                    Phone
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-white border border-gray-300 h-12 focus:border-black"
                      placeholder="+91 "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm uppercase tracking-wide">
                    Contact Me
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className="bg-white border border-gray-300 min-h-[160px] resize-none focus:border-black"
                      placeholder="Contact Me"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* BUTTONS */}
           {/* BUTTONS */}
<div className="flex flex-col md:flex-row justify-center gap-6 pt-6">
  
  {/* WHATSAPP BUTTON */}
  <Button
    type="button"
    disabled={isSubmitting}
    onClick={form.handleSubmit(sendWhatsApp)}
    className="group bg-black text-white px-14 py-6 uppercase tracking-wide h-[56px] w-[240px] flex items-center justify-center"
  >
    Send via WhatsApp
  </Button>

  {/* EMAIL BUTTON */}
  <Button
   type="button"
    disabled={isSubmitting}
    onClick={form.handleSubmit(sendEmail)}
    className="group bg-black text-white px-14 py-6 uppercase tracking-wide h-[56px] w-[240px] flex items-center justify-center"
  >
    
      Send Email
    
  </Button>

</div>

          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;

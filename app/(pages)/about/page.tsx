"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="bg-white">
        {/* Hero */}

        <motion.section
          className="bg-sky-50 py-20 text-center px-6"
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-sky-700">
            About Our Dental Clinic
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
            Providing compassionate, modern dental care for individuals and
            families.
          </p>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="py-20 px-6"
        >
          <div className="relative w-full h-[400px] md:h-[500px] rounded-xl shadow-lg overflow-hidden">
            <Image
              src="/dental.jpg"
              alt="Our dental team"
              fill
              className=" object-cover object-center"
            />
          </div>
        </motion.section>

        {/* Who We Are */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12"
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, x: -20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed">
              Our clinic combines advanced dental technology with a gentle,
              patient-first approach to ensure comfort and confidence at every
              visit.
            </p>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, x: 20 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <Image
              src="/dental.jpg"
              alt="Dental clinic interior"
              width={500}
              height={400}
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </motion.section>

        {/* Values */}
        <section className="bg-gray-50 py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
            {[
              "Patient-first care",
              "Modern technology",
              "Transparent pricing",
            ].map((value) => (
              <div
                key={value}
                className="bg-white p-6 rounded-xl shadow-sm text-center"
              >
                <p className="font-semibold text-gray-800">{value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Ready to Book Your Appointment?
          </h2>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="rounded-full px-8 py-4">
              Book an Appointment
            </Button>
          </motion.div>
        </section>
      </main>
    </PageTransition>
  );
}

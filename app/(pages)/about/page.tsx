import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "About Us | Bright Smile Dental",
  description:
    "Learn about our experienced dental team, patient-first care, and modern dental technology.",
};

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="bg-sky-50 py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-sky-700">
          About Our Dental Clinic
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          Providing compassionate, modern dental care for individuals and
          families.
        </p>
      </section>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto flex justify-center">
          <Image
            src="/dental.jpg"
            alt="Our dental team"
            width={900}
            height={400}
            className="lg:w-3/4 h-auto object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-600 leading-relaxed">
            Our clinic combines advanced dental technology with a gentle,
            patient-first approach to ensure comfort and confidence at every
            visit.
          </p>
        </div>

        <Image
          src="/dental.jpg"
          alt="Dental clinic interior"
          width={500}
          height={400}
          className="rounded-xl shadow-md"
        />
      </section>

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
        <Button className="rounded-full px-8 py-4">Book an Appointment</Button>
      </section>
    </main>
  );
}

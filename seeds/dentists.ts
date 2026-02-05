import { config } from "dotenv";
import { db } from "@/app/db";
import { dentistSlides } from "@/app/db/schema";

// Load environment variables
config({ path: ".env.local" });

async function main() {
    
 const dentists:(typeof dentistSlides.$inferInsert)[] =[{
    name: "Dr. Jane Li",
    role: "Orthodontist",
    quote: "Braces are not just for kids; a beautiful smile has no age limit.",
    imageUrl: "/dentists/1.jpg",
    displayOrder: 1,    
 } ,  {
    name: "Dr. Amina Noor",
    role: "Dental Hygienist",
    imageUrl: "/dentists/2.jpg",
    quote: "Healthy gums are just as important as healthy teeth.",
    displayOrder: 2,
  },
  {
    name: "Dr. Michael Grant",
    role: "Implant Specialist",
    imageUrl: "/dentists/3.jpg",
    quote: "Dental implants restore more than smiles — they restore confidence.",
    displayOrder: 3,
  },
  {
    name: "Dr. Mustapha Hassan",
    role: "Cosmetic Dentist",
    imageUrl: "/dentists/4.jpg",
    quote: "A beautiful smile can change the way you feel about yourself.",
    displayOrder: 4,
  },
  {
    name: "Dr. Emily Chen",
    role: "Paediatric Dentist",
    imageUrl: "/dentists/5.jpg",
    quote: "A positive dental experience early in life builds healthy habits forever.",
    displayOrder: 5,
  },]



 await db.insert(dentistSlides).values(dentists);
 console.log("Dentist slides inserted successfully.");
}
 
main()
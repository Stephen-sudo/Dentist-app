import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "./ui/button";
const BookAppointment = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-full px-8 py-4">Book Appointment</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book Appointment</DialogTitle>
            <DialogDescription>
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    {/* calender */}
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-lg border"
                    />
                  </div>
                  <div>{/* timeslot */}</div>{" "}
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookAppointment;

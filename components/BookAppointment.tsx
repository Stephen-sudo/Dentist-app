import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "./ui/button";
import { CalendarDays, Clock } from "lucide-react";

type TimeSlot = {
  time: string;
};
const BookAppointment = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const getTimeSlot = () => {
    const morningSlots: TimeSlot[] = [];
    const afternoonSlots: TimeSlot[] = [];

    // Morning slots (9 AM to 12 PM)
    for (let i = 9; i <= 11; i++) {
      morningSlots.push({ time: `${i}:00 AM` });
      morningSlots.push({ time: `${i}:30 AM` });
    }
    morningSlots.push({ time: "12:00 PM" });

    // Afternoon slots (1 PM to 6 PM)
    for (let i = 1; i <= 5; i++) {
      afternoonSlots.push({ time: `${i}:00 PM` });
      afternoonSlots.push({ time: `${i}:30 PM` });
    }

    return { morning: morningSlots, afternoon: afternoonSlots };
  };

  useEffect(() => {
    // Reset selected time when date changes
    setSelectedTime(null);
  }, []);

  const isPastDate = (day: Date) => {
    return day < new Date();
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all">
            Book Appointment
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
          <DialogHeader className="px-6 pt-6 pb-4 border-b">
            <DialogTitle className="text-2xl font-bold text-center">
              Book Your Appointment
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground">
              Choose your preferred date and time slot
            </DialogDescription>
          </DialogHeader>

          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Calendar Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-semibold text-lg">
                  <CalendarDays className="text-blue-500 h-5 w-5" />
                  Select a Date
                </div>
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDate}
                    className="rounded-lg border shadow-sm"
                  />
                </div>
              </div>

              {/* Time Slot Section */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 font-semibold text-lg">
                  <Clock className="text-blue-500 h-5 w-5" />
                  Select a Time
                </div>
                <div className="rounded-lg border shadow-sm bg-white p-3 space-y-4">
                  {/* Morning Section */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-1">
                      Morning
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {getTimeSlot().morning.map((item, index) => {
                        const isSelected = selectedTime === item.time;

                        return (
                          <button
                            key={index}
                            onClick={() => setSelectedTime(item.time)}
                            className={`
                              rounded-md px-3 py-2 text-sm font-semibold transition-all duration-200
                              ${
                                isSelected
                                  ? "bg-blue-500 text-white shadow-lg border-2 border-blue-600"
                                  : "bg-gray-50 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md text-gray-700"
                              }
                            `}
                          >
                            {item.time}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-200"></div>

                  {/* Afternoon Section */}
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2 px-1">
                      Afternoon
                    </h3>
                    <div className="grid grid-cols-2 gap-2">
                      {getTimeSlot().afternoon.map((item, index) => {
                        const isSelected = selectedTime === item.time;

                        return (
                          <button
                            key={index}
                            onClick={() => setSelectedTime(item.time)}
                            className={`
                              rounded-md px-3 py-2 text-sm font-semibold transition-all duration-200
                              ${
                                isSelected
                                  ? "bg-blue-500 text-white shadow-lg border-2 border-blue-600"
                                  : "bg-gray-50 border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md text-gray-700"
                              }
                            `}
                          >
                            {item.time}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Confirm Button */}
            {selectedTime && date && (
              <div className="mt-4 pt-4 border-t">
                <Button className="w-full py-3 text-base font-semibold bg-blue-500 hover:bg-blue-600">
                  Confirm Appointment for {date.toLocaleDateString()} at{" "}
                  {selectedTime}
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BookAppointment;

import type { AppUser } from "@/services/authService";

export type TrainerReservation = {
  id: number;
  customerName: string;
  customerEmail: string;
  trainerName: string;
  trainerSpecialty: string;
  hourlyRate: number;
  weeks: number;
  daysPerWeek: number;
  hoursPerDay: number;
  totalHours: number;
  totalCost: number;
  reservationDate: string;
  status: "Reserved";
};

const TRAINER_RESERVATIONS_KEY = "trainerReservations";

export const getTrainerReservations = (): TrainerReservation[] => {
  const savedReservations = localStorage.getItem(TRAINER_RESERVATIONS_KEY);

  if (!savedReservations) {
    return [];
  }

  return JSON.parse(savedReservations) as TrainerReservation[];
};

export const reserveTrainer = (
  user: AppUser,
  trainerName: string,
  trainerSpecialty: string,
  hourlyRate: number,
  weeks: number,
  daysPerWeek: number,
  hoursPerDay: number
) => {
  const reservations = getTrainerReservations();

  if (weeks <= 0 || daysPerWeek <= 0 || hoursPerDay <= 0) {
    return {
      success: false,
      message: "Please enter valid reservation numbers",
    };
  }

  const totalHours = weeks * daysPerWeek * hoursPerDay;
  const totalCost = totalHours * hourlyRate;

  const newReservation: TrainerReservation = {
    id: Date.now(),
    customerName: user.fullName,
    customerEmail: user.email,
    trainerName,
    trainerSpecialty,
    hourlyRate,
    weeks,
    daysPerWeek,
    hoursPerDay,
    totalHours,
    totalCost,
    reservationDate: new Date().toISOString().split("T")[0],
    status: "Reserved",
  };

  const updatedReservations = [...reservations, newReservation];

  localStorage.setItem(
    TRAINER_RESERVATIONS_KEY,
    JSON.stringify(updatedReservations)
  );

  return {
    success: true,
    message: `${trainerName} reserved successfully. Total cost: $${totalCost}`,
  };
};
import type { AppUser } from "@/services/authService";

export type TrainerReservationStatus = "Pending" | "Approved" | "Rejected";

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
  status: TrainerReservationStatus;
};

const TRAINER_RESERVATIONS_KEY = "trainerReservations";

export const getTrainerReservations = (): TrainerReservation[] => {
  const savedReservations = localStorage.getItem(TRAINER_RESERVATIONS_KEY);

  if (!savedReservations) {
    return [];
  }

  return JSON.parse(savedReservations) as TrainerReservation[];
};

export const saveTrainerReservations = (
  reservations: TrainerReservation[]
) => {
  localStorage.setItem(
    TRAINER_RESERVATIONS_KEY,
    JSON.stringify(reservations)
  );
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
    status: "Pending",
  };

  const updatedReservations = [...reservations, newReservation];

  saveTrainerReservations(updatedReservations);

  return {
    success: true,
    message: `${trainerName} reservation sent. Waiting for admin approval.`,
  };
};

export const updateTrainerReservationStatus = (
  reservationId: number,
  status: TrainerReservationStatus
) => {
  const reservations = getTrainerReservations();

  const updatedReservations = reservations.map((reservation) =>
    reservation.id === reservationId
      ? {
          ...reservation,
          status,
        }
      : reservation
  );

  saveTrainerReservations(updatedReservations);

  return updatedReservations;
};
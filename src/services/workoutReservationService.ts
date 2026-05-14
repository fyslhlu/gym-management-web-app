import type { AppUser } from "@/services/authService";

export type WorkoutReservationStatus = "Pending" | "Approved" | "Rejected";

export type WorkoutReservation = {
  id: number;
  customerName: string;
  customerEmail: string;
  workoutName: string;
  trainerName: string;
  goal: string;
  weeklyPrice: number;
  weeks: number;
  daysPerWeek: number;
  totalSessions: number;
  totalCost: number;
  reservationDate: string;
  status: WorkoutReservationStatus;
};

const WORKOUT_RESERVATIONS_KEY = "workoutReservations";

export const getWorkoutReservations = (): WorkoutReservation[] => {
  const savedReservations = localStorage.getItem(WORKOUT_RESERVATIONS_KEY);

  if (!savedReservations) {
    return [];
  }

  return JSON.parse(savedReservations) as WorkoutReservation[];
};

export const saveWorkoutReservations = (
  reservations: WorkoutReservation[]
) => {
  localStorage.setItem(
    WORKOUT_RESERVATIONS_KEY,
    JSON.stringify(reservations)
  );
};

export const reserveWorkoutProgram = (
  user: AppUser,
  workoutName: string,
  trainerName: string,
  goal: string,
  weeklyPrice: number,
  weeks: number,
  daysPerWeek: number
) => {
  const reservations = getWorkoutReservations();

  if (weeks <= 0 || daysPerWeek <= 0) {
    return {
      success: false,
      message: "Please enter valid workout reservation numbers",
    };
  }

  const totalSessions = weeks * daysPerWeek;
  const totalCost = weeks * weeklyPrice;

  const newReservation: WorkoutReservation = {
    id: Date.now(),
    customerName: user.fullName,
    customerEmail: user.email,
    workoutName,
    trainerName,
    goal,
    weeklyPrice,
    weeks,
    daysPerWeek,
    totalSessions,
    totalCost,
    reservationDate: new Date().toISOString().split("T")[0],
    status: "Pending",
  };

  const updatedReservations = [...reservations, newReservation];

  saveWorkoutReservations(updatedReservations);

  return {
    success: true,
    message: `${workoutName} request sent. Waiting for admin approval.`,
  };
};

export const updateWorkoutReservationStatus = (
  reservationId: number,
  status: WorkoutReservationStatus
) => {
  const reservations = getWorkoutReservations();

  const updatedReservations = reservations.map((reservation) =>
    reservation.id === reservationId
      ? {
          ...reservation,
          status,
        }
      : reservation
  );

  saveWorkoutReservations(updatedReservations);

  return updatedReservations;
};
import { useEffect, useState } from "react";

import { getCurrentUser } from "@/services/authService";
import { showError, showSuccess } from "@/services/notificationService";
import {
  getWorkoutReservations,
  reserveWorkoutProgram,
  updateWorkoutReservationStatus,
  type WorkoutReservation,
  type WorkoutReservationStatus,
} from "@/services/workoutReservationService";
import {
  darkCard,
  darkTableHead,
  darkTableRow,
  darkTableWrapper,
  pageSubtitle,
  pageTitle,
} from "@/theme/pageStyles";

type WorkoutProgram = {
  id: number;
  icon: string;
  workoutName: string;
  trainerName: string;
  goal: string;
  description: string;
  weeklyPrice: number;
};

const Workouts = () => {
  const currentUser = getCurrentUser();

  const [selectedWorkoutId, setSelectedWorkoutId] = useState<number | null>(
    null
  );

  const [weeks, setWeeks] = useState(1);
  const [daysPerWeek, setDaysPerWeek] = useState(3);

  const [reservations, setReservations] = useState<WorkoutReservation[]>([]);

  const workoutPrograms: WorkoutProgram[] = [
    {
      id: 1,
      icon: "💪",
      workoutName: "Muscle Gain Program",
      trainerName: "Karim Haddad",
      goal: "Muscle Gain",
      description: "Push/pull/legs workout plan for building muscle.",
      weeklyPrice: 25,
    },
    {
      id: 2,
      icon: "🔥",
      workoutName: "Weight Loss Program",
      trainerName: "Lara Nassar",
      goal: "Weight Loss",
      description: "Cardio and full-body training for fat loss.",
      weeklyPrice: 20,
    },
    {
      id: 3,
      icon: "⚡",
      workoutName: "General Fitness Program",
      trainerName: "Hussein Mansour",
      goal: "General Fitness",
      description: "Balanced strength and conditioning plan.",
      weeklyPrice: 18,
    },
  ];

  useEffect(() => {
    setReservations(getWorkoutReservations());
  }, []);

  const selectedWorkout = workoutPrograms.find(
    (workout) => workout.id === selectedWorkoutId
  );

  const totalSessions = weeks * daysPerWeek;
  const estimatedCost = selectedWorkout ? weeks * selectedWorkout.weeklyPrice : 0;

  const handleSelectWorkout = (workoutId: number) => {
    if (!currentUser) {
      showError("Please login before activating a workout program");
      return;
    }

    if (currentUser.role !== "customer") {
      showError("Only customers can activate workout programs");
      return;
    }

    setSelectedWorkoutId(workoutId);
  };

  const handleReserveWorkout = () => {
    if (!currentUser) {
      showError("Please login before activating a workout program");
      return;
    }

    if (currentUser.role !== "customer") {
      showError("Only customers can activate workout programs");
      return;
    }

    if (!selectedWorkout) {
      showError("Please select a workout program first");
      return;
    }

    const result = reserveWorkoutProgram(
      currentUser,
      selectedWorkout.workoutName,
      selectedWorkout.trainerName,
      selectedWorkout.goal,
      selectedWorkout.weeklyPrice,
      weeks,
      daysPerWeek
    );

    if (!result.success) {
      showError(result.message);
      return;
    }

    showSuccess(result.message);
    setReservations(getWorkoutReservations());
    setSelectedWorkoutId(null);
    setWeeks(1);
    setDaysPerWeek(3);
  };

  const handleReservationStatusChange = (
    reservationId: number,
    status: WorkoutReservationStatus
  ) => {
    const updatedReservations = updateWorkoutReservationStatus(
      reservationId,
      status
    );

    setReservations(updatedReservations);
    showSuccess(`Workout reservation ${status.toLowerCase()} successfully`);
  };

  const getStatusClass = (status: WorkoutReservationStatus) => {
    if (status === "Approved") {
      return "bg-emerald-500/15 text-emerald-400";
    }

    if (status === "Rejected") {
      return "bg-red-500/15 text-red-400";
    }

    return "bg-yellow-500/15 text-yellow-400";
  };

  return (
    <div>
      <h1 className={pageTitle}>Workout Programs</h1>

      <p className={pageSubtitle}>
        Customers can activate workout programs for a selected number of weeks
        and training days. Administrators can approve or reject all workout
        reservations.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {workoutPrograms.map((program) => (
          <div
            key={program.id}
            className={`${darkCard} ${
              selectedWorkoutId === program.id ? "border-[#E50914]" : ""
            }`}
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E50914]/15 text-3xl">
              {program.icon}
            </div>

            <p className="text-sm font-bold uppercase tracking-wider text-[#FF4D00]">
              {program.goal}
            </p>

            <h2 className="mt-2 text-xl font-black text-white">
              {program.workoutName}
            </h2>

            <p className="mt-2 text-sm text-[#A3A3A3]">
              Trainer: {program.trainerName}
            </p>

            <p className="mt-4 text-sm leading-6 text-[#D4D4D4]">
              {program.description}
            </p>

            <p className="mt-4 text-2xl font-black text-[#E50914]">
              ${program.weeklyPrice}/week
            </p>

            <button
              type="button"
              onClick={() => handleSelectWorkout(program.id)}
              className="mt-5 w-full rounded-full bg-[#E50914] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/40 transition hover:bg-[#ff1420]"
            >
              Select Workout
            </button>
          </div>
        ))}
      </div>

      {selectedWorkout && (
        <div className={`mt-8 ${darkCard}`}>
          <h2 className="text-xl font-black text-white">
            Activate {selectedWorkout.workoutName}
          </h2>

          <p className="mt-2 text-[#A3A3A3]">
            Choose how long you want to follow this workout program.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <label className="text-sm font-bold text-white">
              Number of Weeks
              <input
                type="number"
                min="1"
                value={weeks}
                onChange={(event) => setWeeks(Number(event.target.value))}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-white outline-none focus:border-[#E50914]"
              />
            </label>

            <label className="text-sm font-bold text-white">
              Days Per Week
              <input
                type="number"
                min="1"
                max="7"
                value={daysPerWeek}
                onChange={(event) => setDaysPerWeek(Number(event.target.value))}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-white outline-none focus:border-[#E50914]"
              />
            </label>
          </div>

          <div className="mt-6 rounded-3xl border border-[#E50914]/30 bg-[#E50914]/10 p-5">
            <p className="text-sm text-[#A3A3A3]">Estimated Cost</p>

            <p className="mt-2 text-3xl font-black text-[#FF4D00]">
              {weeks} week(s) × ${selectedWorkout.weeklyPrice} = $
              {estimatedCost}
            </p>

            <p className="mt-2 text-sm text-[#A3A3A3]">
              Total sessions: {totalSessions}
            </p>
          </div>

          <button
            type="button"
            onClick={handleReserveWorkout}
            className="mt-6 rounded-full bg-[#E50914] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/40 transition hover:bg-[#ff1420]"
          >
            Activate Workout Program
          </button>
        </div>
      )}

      {currentUser?.role === "admin" && (
        <div className={darkTableWrapper}>
          <table className="w-full text-left text-sm">
            <thead className={darkTableHead}>
              <tr>
                <th className="p-4">Customer</th>
                <th className="p-4">Email</th>
                <th className="p-4">Workout</th>
                <th className="p-4">Trainer</th>
                <th className="p-4">Schedule</th>
                <th className="p-4">Total Cost</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {reservations.length === 0 ? (
                <tr className={darkTableRow}>
                  <td className="p-4 text-[#A3A3A3]" colSpan={8}>
                    No workout reservations yet.
                  </td>
                </tr>
              ) : (
                reservations.map((reservation) => (
                  <tr key={reservation.id} className={darkTableRow}>
                    <td className="p-4">{reservation.customerName}</td>
                    <td className="p-4">{reservation.customerEmail}</td>
                    <td className="p-4">{reservation.workoutName}</td>
                    <td className="p-4">{reservation.trainerName}</td>
                    <td className="p-4">
                      {reservation.weeks}w × {reservation.daysPerWeek}d
                    </td>
                    <td className="p-4">${reservation.totalCost}</td>
                    <td className="p-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold ${getStatusClass(
                          reservation.status
                        )}`}
                      >
                        {reservation.status}
                      </span>
                    </td>
                    <td className="p-4">
                      {reservation.status === "Pending" ? (
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              handleReservationStatusChange(
                                reservation.id,
                                "Approved"
                              )
                            }
                            className="rounded-full border border-emerald-500/40 px-3 py-1 text-xs font-bold text-emerald-400 transition hover:bg-emerald-500/10"
                          >
                            Approve
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              handleReservationStatusChange(
                                reservation.id,
                                "Rejected"
                              )
                            }
                            className="rounded-full border border-red-500/40 px-3 py-1 text-xs font-bold text-red-400 transition hover:bg-red-500/10"
                          >
                            Reject
                          </button>
                        </div>
                      ) : (
                        <span className="text-xs text-[#A3A3A3]">
                          No action
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Workouts;
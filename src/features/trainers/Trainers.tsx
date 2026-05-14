import { useEffect, useState } from "react";

import { getCurrentUser } from "@/services/authService";
import { showError, showSuccess } from "@/services/notificationService";
import {
  getTrainerReservations,
  reserveTrainer,
  updateTrainerReservationStatus,
  type TrainerReservation,
  type TrainerReservationStatus,
} from "@/services/trainerReservationService";
import {
  darkCard,
  darkTableHead,
  darkTableRow,
  darkTableWrapper,
  pageSubtitle,
  pageTitle,
} from "@/theme/pageStyles";

type Trainer = {
  id: number;
  icon: string;
  name: string;
  specialty: string;
  phone: string;
  hourlyRate: number;
};

const Trainers = () => {
  const currentUser = getCurrentUser();

  const [selectedTrainerId, setSelectedTrainerId] = useState<number | null>(
    null
  );
  const [weeks, setWeeks] = useState(1);
  const [daysPerWeek, setDaysPerWeek] = useState(3);
  const [hoursPerDay, setHoursPerDay] = useState(1);

  const [reservations, setReservations] = useState<TrainerReservation[]>([]);

  const trainers: Trainer[] = [
    {
      id: 1,
      icon: "🏋️",
      name: "Karim Haddad",
      specialty: "Strength Training",
      phone: "71 222 333",
      hourlyRate: 15,
    },
    {
      id: 2,
      icon: "🔥",
      name: "Lara Nassar",
      specialty: "Weight Loss",
      phone: "70 444 555",
      hourlyRate: 12,
    },
    {
      id: 3,
      icon: "💪",
      name: "Hussein Mansour",
      specialty: "Bodybuilding",
      phone: "76 666 777",
      hourlyRate: 18,
    },
  ];

  useEffect(() => {
    setReservations(getTrainerReservations());
  }, []);

  const selectedTrainer = trainers.find(
    (trainer) => trainer.id === selectedTrainerId
  );

  const totalHours = weeks * daysPerWeek * hoursPerDay;
  const estimatedCost = selectedTrainer
    ? totalHours * selectedTrainer.hourlyRate
    : 0;

  const handleSelectTrainer = (trainerId: number) => {
    if (!currentUser) {
      showError("Please login before reserving a trainer");
      return;
    }

    if (currentUser.role !== "customer") {
      showError("Only customers can reserve trainers");
      return;
    }

    setSelectedTrainerId(trainerId);
  };

  const handleReserveTrainer = () => {
    if (!currentUser) {
      showError("Please login before reserving a trainer");
      return;
    }

    if (currentUser.role !== "customer") {
      showError("Only customers can reserve trainers");
      return;
    }

    if (!selectedTrainer) {
      showError("Please select a trainer first");
      return;
    }

    const result = reserveTrainer(
      currentUser,
      selectedTrainer.name,
      selectedTrainer.specialty,
      selectedTrainer.hourlyRate,
      weeks,
      daysPerWeek,
      hoursPerDay
    );

    if (!result.success) {
      showError(result.message);
      return;
    }

    showSuccess(result.message);
    setReservations(getTrainerReservations());
    setSelectedTrainerId(null);
    setWeeks(1);
    setDaysPerWeek(3);
    setHoursPerDay(1);
  };

  const handleReservationStatusChange = (
    reservationId: number,
    status: TrainerReservationStatus
  ) => {
    const updatedReservations = updateTrainerReservationStatus(
      reservationId,
      status
    );

    setReservations(updatedReservations);
    showSuccess(`Trainer reservation ${status.toLowerCase()} successfully`);
  };

  const getStatusClass = (status: TrainerReservationStatus) => {
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
      <h1 className={pageTitle}>Trainers</h1>

      <p className={pageSubtitle}>
        Customers can reserve trainers for a selected number of weeks, days, and
        hours. Administrators can approve or reject all trainer reservations.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {trainers.map((trainer) => (
          <div
            key={trainer.id}
            className={`${darkCard} ${
              selectedTrainerId === trainer.id ? "border-[#E50914]" : ""
            }`}
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E50914]/15 text-3xl">
              {trainer.icon}
            </div>

            <h2 className="text-xl font-black text-white">{trainer.name}</h2>

            <p className="mt-2 text-sm text-[#A3A3A3]">
              Specialty: {trainer.specialty}
            </p>

            <p className="mt-1 text-sm text-[#A3A3A3]">
              Phone: {trainer.phone}
            </p>

            <p className="mt-4 text-2xl font-black text-[#E50914]">
              ${trainer.hourlyRate}/hour
            </p>

            <button
              type="button"
              onClick={() => handleSelectTrainer(trainer.id)}
              className="mt-5 w-full rounded-full bg-[#E50914] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/40 transition hover:bg-[#ff1420]"
            >
              Select Trainer
            </button>
          </div>
        ))}
      </div>

      {selectedTrainer && (
        <div className={`mt-8 ${darkCard}`}>
          <h2 className="text-xl font-black text-white">
            Reserve {selectedTrainer.name}
          </h2>

          <p className="mt-2 text-[#A3A3A3]">
            Choose how long you want to reserve this trainer.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
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

            <label className="text-sm font-bold text-white">
              Hours Per Day
              <input
                type="number"
                min="1"
                value={hoursPerDay}
                onChange={(event) => setHoursPerDay(Number(event.target.value))}
                className="mt-2 w-full rounded-2xl border border-white/10 bg-[#111111] px-4 py-3 text-white outline-none focus:border-[#E50914]"
              />
            </label>
          </div>

          <div className="mt-6 rounded-3xl border border-[#E50914]/30 bg-[#E50914]/10 p-5">
            <p className="text-sm text-[#A3A3A3]">Estimated Cost</p>

            <p className="mt-2 text-3xl font-black text-[#FF4D00]">
              {weeks} week(s) × {daysPerWeek} day(s) × {hoursPerDay} hour(s) × $
              {selectedTrainer.hourlyRate} = ${estimatedCost}
            </p>

            <p className="mt-2 text-sm text-[#A3A3A3]">
              Total hours: {totalHours}
            </p>
          </div>

          <button
            type="button"
            onClick={handleReserveTrainer}
            className="mt-6 rounded-full bg-[#E50914] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/40 transition hover:bg-[#ff1420]"
          >
            Reserve Trainer
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
                <th className="p-4">Trainer</th>
                <th className="p-4">Specialty</th>
                <th className="p-4">Time</th>
                <th className="p-4">Total Cost</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {reservations.length === 0 ? (
                <tr className={darkTableRow}>
                  <td className="p-4 text-[#A3A3A3]" colSpan={8}>
                    No trainer reservations yet.
                  </td>
                </tr>
              ) : (
                reservations.map((reservation) => (
                  <tr key={reservation.id} className={darkTableRow}>
                    <td className="p-4">{reservation.customerName}</td>
                    <td className="p-4">{reservation.customerEmail}</td>
                    <td className="p-4">{reservation.trainerName}</td>
                    <td className="p-4">{reservation.trainerSpecialty}</td>
                    <td className="p-4">
                      {reservation.weeks}w × {reservation.daysPerWeek}d ×{" "}
                      {reservation.hoursPerDay}h
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

export default Trainers;
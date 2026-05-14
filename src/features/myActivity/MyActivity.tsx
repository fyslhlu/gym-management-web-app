import { getCurrentUser } from "@/services/authService";
import { getCustomerSubscriptions } from "@/services/subscriptionService";
import { getTrainerReservations } from "@/services/trainerReservationService";
import { getWorkoutReservations } from "@/services/workoutReservationService";
import {
  darkCard,
  darkTableHead,
  darkTableRow,
  darkTableWrapper,
  pageSubtitle,
  pageTitle,
} from "@/theme/pageStyles";

const MyActivity = () => {
  const currentUser = getCurrentUser();

  const mySubscriptions = getCustomerSubscriptions().filter(
    (subscription) => subscription.customerEmail === currentUser?.email
  );

  const myTrainerReservations = getTrainerReservations().filter(
    (reservation) => reservation.customerEmail === currentUser?.email
  );

  const myWorkoutReservations = getWorkoutReservations().filter(
    (reservation) => reservation.customerEmail === currentUser?.email
  );

  const totalPlanCost = mySubscriptions.reduce((total, subscription) => {
    const price = Number(subscription.price.replace("$", ""));
    return total + price;
  }, 0);

  const totalTrainerCost = myTrainerReservations.reduce(
    (total, reservation) => total + reservation.totalCost,
    0
  );

  const totalWorkoutCost = myWorkoutReservations.reduce(
    (total, reservation) => total + reservation.totalCost,
    0
  );

  const totalCost = totalPlanCost + totalTrainerCost + totalWorkoutCost;

  if (!currentUser) {
    return (
      <div>
        <h1 className={pageTitle}>My Activity</h1>

        <div className={`mt-8 ${darkCard}`}>
          <p className="text-[#A3A3A3]">Please login to view your activity.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className={pageTitle}>My Activity</h1>

      <p className={pageSubtitle}>
        View your active plans, trainer reservations, workout programs, and
        total costs.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-4">
        <div className={darkCard}>
          <p className="text-sm text-[#A3A3A3]">Active Plans</p>
          <h2 className="mt-2 text-3xl font-black text-[#E50914]">
            {mySubscriptions.length}
          </h2>
        </div>

        <div className={darkCard}>
          <p className="text-sm text-[#A3A3A3]">Trainer Reservations</p>
          <h2 className="mt-2 text-3xl font-black text-[#E50914]">
            {myTrainerReservations.length}
          </h2>
        </div>

        <div className={darkCard}>
          <p className="text-sm text-[#A3A3A3]">Workout Programs</p>
          <h2 className="mt-2 text-3xl font-black text-[#E50914]">
            {myWorkoutReservations.length}
          </h2>
        </div>

        <div className={darkCard}>
          <p className="text-sm text-[#A3A3A3]">Total Cost</p>
          <h2 className="mt-2 text-3xl font-black text-[#FF4D00]">
            ${totalCost}
          </h2>
        </div>
      </div>

      <div className={darkTableWrapper}>
        <table className="w-full text-left text-sm">
          <thead className={darkTableHead}>
            <tr>
              <th className="p-4">Type</th>
              <th className="p-4">Name</th>
              <th className="p-4">Details</th>
              <th className="p-4">Cost</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {mySubscriptions.map((subscription) => (
              <tr key={`plan-${subscription.id}`} className={darkTableRow}>
                <td className="p-4">Membership Plan</td>
                <td className="p-4">{subscription.planName}</td>
                <td className="p-4">
                  {subscription.startDate} → {subscription.endDate}
                </td>
                <td className="p-4">{subscription.price}</td>
                <td className="p-4">
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-bold text-emerald-400">
                    {subscription.status}
                  </span>
                </td>
              </tr>
            ))}

            {myTrainerReservations.map((reservation) => (
              <tr key={`trainer-${reservation.id}`} className={darkTableRow}>
                <td className="p-4">Trainer</td>
                <td className="p-4">{reservation.trainerName}</td>
                <td className="p-4">
                  {reservation.weeks}w × {reservation.daysPerWeek}d ×{" "}
                  {reservation.hoursPerDay}h
                </td>
                <td className="p-4">${reservation.totalCost}</td>
                <td className="p-4">
                  <span className="rounded-full bg-[#E50914]/15 px-3 py-1 text-xs font-bold text-[#FF4D00]">
                    {reservation.status}
                  </span>
                </td>
              </tr>
            ))}

            {myWorkoutReservations.map((reservation) => (
              <tr key={`workout-${reservation.id}`} className={darkTableRow}>
                <td className="p-4">Workout</td>
                <td className="p-4">{reservation.workoutName}</td>
                <td className="p-4">
                  {reservation.weeks}w × {reservation.daysPerWeek}d
                </td>
                <td className="p-4">${reservation.totalCost}</td>
                <td className="p-4">
                  <span className="rounded-full bg-[#E50914]/15 px-3 py-1 text-xs font-bold text-[#FF4D00]">
                    {reservation.status}
                  </span>
                </td>
              </tr>
            ))}

            {mySubscriptions.length === 0 &&
              myTrainerReservations.length === 0 &&
              myWorkoutReservations.length === 0 && (
                <tr className={darkTableRow}>
                  <td className="p-4 text-[#A3A3A3]" colSpan={5}>
                    No activity found yet. Activate a plan, reserve a trainer,
                    or activate a workout program.
                  </td>
                </tr>
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyActivity;
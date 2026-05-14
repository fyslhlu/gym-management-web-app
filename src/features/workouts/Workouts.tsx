import { darkCard, pageSubtitle, pageTitle } from "@/theme/pageStyles";

const Workouts = () => {
  const workoutPlans = [
    {
      id: 1,
      icon: "💪",
      member: "Ali Ahmad",
      trainer: "Karim Haddad",
      goal: "Muscle Gain",
      description: "Push/pull/legs workout plan, 5 days per week.",
    },
    {
      id: 2,
      icon: "🔥",
      member: "Sara Khaled",
      trainer: "Lara Nassar",
      goal: "Weight Loss",
      description: "Cardio and full-body training, 4 days per week.",
    },
    {
      id: 3,
      icon: "⚡",
      member: "Maya Saad",
      trainer: "Hussein Mansour",
      goal: "General Fitness",
      description: "Balanced strength and conditioning plan.",
    },
  ];

  return (
    <div>
      <h1 className={pageTitle}>Workout Plans</h1>

      <p className={pageSubtitle}>
        Manage workout plans assigned by trainers to gym members.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {workoutPlans.map((plan) => (
          <div key={plan.id} className={darkCard}>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E50914]/15 text-3xl">
              {plan.icon}
            </div>

            <p className="text-sm font-bold uppercase tracking-wider text-[#FF4D00]">
              {plan.goal}
            </p>

            <h2 className="mt-2 text-xl font-black text-white">
              {plan.member}
            </h2>

            <p className="mt-2 text-sm text-[#A3A3A3]">
              Trainer: {plan.trainer}
            </p>

            <p className="mt-4 text-sm leading-6 text-[#D4D4D4]">
              {plan.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
const Workouts = () => {
  const workoutPlans = [
    {
      id: 1,
      member: "Ali Ahmad",
      trainer: "Karim Haddad",
      goal: "Muscle Gain",
      description: "Push/pull/legs workout plan, 5 days per week.",
    },
    {
      id: 2,
      member: "Sara Khaled",
      trainer: "Lara Nassar",
      goal: "Weight Loss",
      description: "Cardio and full-body training, 4 days per week.",
    },
    {
      id: 3,
      member: "Maya Saad",
      trainer: "Hussein Mansour",
      goal: "General Fitness",
      description: "Balanced strength and conditioning plan.",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">Workout Plans</h1>

      <p className="mt-2 text-slate-500">
        Manage workout plans assigned by trainers to gym members.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {workoutPlans.map((plan) => (
          <div key={plan.id} className="rounded-2xl bg-white p-6 shadow">
            <p className="text-sm font-medium text-emerald-600">
              {plan.goal}
            </p>

            <h2 className="mt-2 text-xl font-semibold text-slate-900">
              {plan.member}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Trainer: {plan.trainer}
            </p>

            <p className="mt-4 text-sm text-slate-600">
              {plan.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workouts;
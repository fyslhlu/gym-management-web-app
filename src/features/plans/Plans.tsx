const Plans = () => {
  const plans = [
    {
      id: 1,
      name: "Monthly Plan",
      duration: "30 days",
      price: "$30",
      description: "Best for short-term members.",
    },
    {
      id: 2,
      name: "3 Months Plan",
      duration: "90 days",
      price: "$80",
      description: "Good value for regular members.",
    },
    {
      id: 3,
      name: "Yearly Plan",
      duration: "365 days",
      price: "$300",
      description: "Best value for committed members.",
    },
    {
      id: 4,
      name: "Student Plan",
      duration: "30 days",
      price: "$20",
      description: "Discounted plan for students.",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">Membership Plans</h1>

      <p className="mt-2 text-slate-500">
        Manage gym membership plans, prices, and durations.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <div key={plan.id} className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-xl font-semibold text-slate-900">
              {plan.name}
            </h2>

            <p className="mt-2 text-sm text-slate-500">{plan.description}</p>

            <div className="mt-6">
              <p className="text-3xl font-bold text-emerald-500">
                {plan.price}
              </p>

              <p className="mt-1 text-sm text-slate-500">{plan.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
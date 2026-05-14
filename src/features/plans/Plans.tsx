import { darkCard, pageSubtitle, pageTitle } from "@/theme/pageStyles";

const Plans = () => {
  const plans = [
    {
      id: 1,
      icon: "🎯",
      name: "Monthly Plan",
      duration: "30 days",
      price: "$30",
      description: "Best for short-term members.",
    },
    {
      id: 2,
      icon: "🔥",
      name: "3 Months Plan",
      duration: "90 days",
      price: "$80",
      description: "Good value for regular members.",
    },
    {
      id: 3,
      icon: "🏆",
      name: "Yearly Plan",
      duration: "365 days",
      price: "$300",
      description: "Best value for committed members.",
    },
    {
      id: 4,
      icon: "🎓",
      name: "Student Plan",
      duration: "30 days",
      price: "$20",
      description: "Discounted plan for students.",
    },
  ];

  return (
    <div>
      <h1 className={pageTitle}>Membership Plans</h1>

      <p className={pageSubtitle}>
        Manage gym membership plans, prices, and durations.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => (
          <div key={plan.id} className={darkCard}>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E50914]/15 text-3xl">
              {plan.icon}
            </div>

            <h2 className="text-xl font-black text-white">{plan.name}</h2>

            <p className="mt-2 text-sm text-[#A3A3A3]">
              {plan.description}
            </p>

            <div className="mt-6">
              <p className="text-4xl font-black text-[#E50914]">
                {plan.price}
              </p>

              <p className="mt-1 text-sm text-[#A3A3A3]">
                {plan.duration}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
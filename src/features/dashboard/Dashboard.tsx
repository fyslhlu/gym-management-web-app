import ToastButtons from "@/components/toast/ToastButtons";

const Dashboard = () => {
  const stats = [
    {
      label: "Client Satisfaction",
      value: "96%",
      description: "Our members love the experience",
    },
    {
      label: "Years of Experience",
      value: "+5",
      description: "Trusted fitness management system",
    },
    {
      label: "Active Members",
      value: "+800",
      description: "Members training every month",
    },
    {
      label: "Support Available",
      value: "24/7",
      description: "Admin support and monitoring",
    },
  ];

  const services = [
    {
      title: "Losing Weight",
      text: "Track members, subscriptions, and attendance for weight loss programs.",
    },
    {
      title: "Building Muscle",
      text: "Manage trainers, workouts, and progress-focused training plans.",
    },
    {
      title: "Training at Home",
      text: "Organize remote workout plans and online fitness subscriptions.",
    },
    {
      title: "Gym Plan",
      text: "Manage membership plans, payments, and active subscriptions.",
    },
  ];

  return (
    <div>
      <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#1C1C1C] p-8 shadow-2xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#FF4D00]">
              Fitness Dashboard
            </p>

            <h1 className="max-w-2xl text-5xl font-black leading-tight text-white">
              Achieve Your{" "}
              <span className="text-[#E50914]">Fitness Goals</span> With
              FitMaker
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#A3A3A3]">
              A modern gym management web application for members, trainers,
              plans, subscriptions, payments, workout plans, attendance, and
              reports.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#E50914] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/40">
                Start Your Journey
              </button>

              <button className="rounded-full border border-[#E50914] px-6 py-3 text-sm font-bold text-[#FF4D00]">
                Explore Programs
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#E50914]/30 blur-3xl" />

            <div className="relative mx-auto flex h-80 w-80 items-center justify-center rounded-full border border-[#E50914]/30 bg-gradient-to-br from-[#2A0F0F] to-[#111111] shadow-2xl">
              <div className="text-center">
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-3xl bg-[#E50914] text-5xl shadow-xl shadow-red-950/50">
                  🏋️
                </div>

                <h2 className="mt-5 text-2xl font-black text-white">
                  FitMaker
                </h2>

                <p className="mt-2 text-sm text-[#A3A3A3]">
                  Gym Control Center
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border-l border-[#E50914]/40 px-4"
            >
              <h2 className="text-2xl font-black text-[#E50914]">
                {stat.value}
              </h2>
              <p className="mt-1 text-sm font-semibold text-white">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-[#A3A3A3]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-black text-white">Our Services</h2>

        <div className="mt-5 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-[#1C1C1C] p-6 shadow-xl transition hover:border-[#E50914]/50"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E50914]/15 text-2xl">
                🔥
              </div>

              <h3 className="text-lg font-black uppercase text-[#E50914]">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[#A3A3A3]">
                {service.text}
              </p>

              <button className="mt-5 text-sm font-bold text-[#FF4D00]">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="mt-8">
        <ToastButtons />
      </div>
    </div>
  );
};

export default Dashboard;
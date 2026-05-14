import { darkCard, pageSubtitle, pageTitle } from "@/theme/pageStyles";

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      icon: "🏋️",
      name: "Karim Haddad",
      specialty: "Strength Training",
      phone: "71 222 333",
    },
    {
      id: 2,
      icon: "🔥",
      name: "Lara Nassar",
      specialty: "Weight Loss",
      phone: "70 444 555",
    },
    {
      id: 3,
      icon: "💪",
      name: "Hussein Mansour",
      specialty: "Bodybuilding",
      phone: "76 666 777",
    },
  ];

  return (
    <div>
      <h1 className={pageTitle}>Trainers</h1>

      <p className={pageSubtitle}>
        Manage gym trainers and their specialties.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {trainers.map((trainer) => (
          <div key={trainer.id} className={darkCard}>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
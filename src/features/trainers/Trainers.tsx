const Trainers = () => {
  const trainers = [
    {
      id: 1,
      name: "Karim Haddad",
      specialty: "Strength Training",
      phone: "71 222 333",
    },
    {
      id: 2,
      name: "Lara Nassar",
      specialty: "Weight Loss",
      phone: "70 444 555",
    },
    {
      id: 3,
      name: "Hussein Mansour",
      specialty: "Bodybuilding",
      phone: "76 666 777",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">Trainers</h1>

      <p className="mt-2 text-slate-500">
        Manage gym trainers and their specialties.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {trainers.map((trainer) => (
          <div key={trainer.id} className="rounded-2xl bg-white p-6 shadow">
            <h2 className="text-xl font-semibold text-slate-900">
              {trainer.name}
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Specialty: {trainer.specialty}
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Phone: {trainer.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trainers;
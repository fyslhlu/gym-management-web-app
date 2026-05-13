const Attendance = () => {
  const attendanceRecords = [
    {
      id: 1,
      member: "Ali Ahmad",
      date: "2026-05-14",
      checkIn: "08:30 AM",
      checkOut: "10:00 AM",
      status: "Completed",
    },
    {
      id: 2,
      member: "Sara Khaled",
      date: "2026-05-14",
      checkIn: "11:15 AM",
      checkOut: "12:30 PM",
      status: "Completed",
    },
    {
      id: 3,
      member: "Omar Hassan",
      date: "2026-05-14",
      checkIn: "06:00 PM",
      checkOut: "-",
      status: "In Gym",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">Attendance</h1>

      <p className="mt-2 text-slate-500">
        Track member check-ins and check-outs.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow">
          <p className="text-sm text-slate-500">Today Check-ins</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">3</h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <p className="text-sm text-slate-500">Currently In Gym</p>
          <h2 className="mt-2 text-3xl font-bold text-emerald-500">1</h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow">
          <p className="text-sm text-slate-500">Completed Sessions</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900">2</h2>
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-2xl bg-white shadow">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-900 text-white">
            <tr>
              <th className="p-4">Member</th>
              <th className="p-4">Date</th>
              <th className="p-4">Check In</th>
              <th className="p-4">Check Out</th>
              <th className="p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {attendanceRecords.map((record) => (
              <tr key={record.id} className="border-b">
                <td className="p-4">{record.member}</td>
                <td className="p-4">{record.date}</td>
                <td className="p-4">{record.checkIn}</td>
                <td className="p-4">{record.checkOut}</td>
                <td className="p-4">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      record.status === "Completed"
                        ? "bg-slate-100 text-slate-700"
                        : "bg-emerald-100 text-emerald-700"
                    }`}
                  >
                    {record.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;

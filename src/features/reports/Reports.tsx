const Reports = () => {
  const reports = [
    {
      title: "Active Members",
      value: "87",
      description: "Members with active subscriptions",
    },
    {
      title: "Expired Subscriptions",
      value: "15",
      description: "Members who need renewal",
    },
    {
      title: "Monthly Revenue",
      value: "$4,500",
      description: "Total payments collected this month",
    },
    {
      title: "Total Trainers",
      value: "8",
      description: "Registered trainers in the gym",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">Reports</h1>

      <p className="mt-2 text-slate-500">
        View important gym statistics and system reports.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {reports.map((report) => (
          <div key={report.title} className="rounded-2xl bg-white p-6 shadow">
            <p className="text-sm text-slate-500">{report.title}</p>

            <h2 className="mt-2 text-3xl font-bold text-slate-900">
              {report.value}
            </h2>

            <p className="mt-3 text-sm text-slate-500">
              {report.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow">
        <h2 className="text-xl font-semibold text-slate-900">
          Report Summary
        </h2>

        <p className="mt-3 text-slate-600">
          The gym currently has more active members than expired subscriptions.
          Monthly revenue is stable, and trainer availability is enough for the
          current number of members.
        </p>
      </div>
    </div>
  );
};

export default Reports;
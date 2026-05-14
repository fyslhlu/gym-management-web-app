import { darkCard, pageSubtitle, pageTitle } from "@/theme/pageStyles";

const Reports = () => {
  const reports = [
    {
      icon: "👥",
      title: "Active Members",
      value: "87",
      description: "Members with active subscriptions",
    },
    {
      icon: "⚠️",
      title: "Expired Subscriptions",
      value: "15",
      description: "Members who need renewal",
    },
    {
      icon: "💳",
      title: "Monthly Revenue",
      value: "$4,500",
      description: "Total payments collected this month",
    },
    {
      icon: "🏋️",
      title: "Total Trainers",
      value: "8",
      description: "Registered trainers in the gym",
    },
  ];

  return (
    <div>
      <h1 className={pageTitle}>Reports</h1>

      <p className={pageSubtitle}>
        View important gym statistics and system reports.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {reports.map((report) => (
          <div key={report.title} className={darkCard}>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E50914]/15 text-3xl">
              {report.icon}
            </div>

            <p className="text-sm text-[#A3A3A3]">{report.title}</p>

            <h2 className="mt-2 text-4xl font-black text-[#E50914]">
              {report.value}
            </h2>

            <p className="mt-3 text-sm text-[#A3A3A3]">
              {report.description}
            </p>
          </div>
        ))}
      </div>

      <div className={`mt-8 ${darkCard}`}>
        <h2 className="text-xl font-black text-white">Report Summary</h2>

        <p className="mt-3 leading-7 text-[#D4D4D4]">
          The gym currently has more active members than expired subscriptions.
          Monthly revenue is stable, and trainer availability is enough for the
          current number of members.
        </p>
      </div>
    </div>
  );
};

export default Reports;
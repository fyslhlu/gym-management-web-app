import type { AppUser } from "@/services/authService";

export type CustomerSubscription = {
  id: number;
  customerName: string;
  customerEmail: string;
  planName: string;
  price: string;
  duration: string;
  startDate: string;
  endDate: string;
  status: "Active";
};

const SUBSCRIPTIONS_KEY = "customerSubscriptions";

export const getCustomerSubscriptions = (): CustomerSubscription[] => {
  const savedSubscriptions = localStorage.getItem(SUBSCRIPTIONS_KEY);

  if (!savedSubscriptions) {
    return [];
  }

  return JSON.parse(savedSubscriptions) as CustomerSubscription[];
};

export const activateCustomerPlan = (
  user: AppUser,
  planName: string,
  price: string,
  duration: string
) => {
  const subscriptions = getCustomerSubscriptions();

  const alreadyHasActivePlan = subscriptions.some(
    (subscription) =>
      subscription.customerEmail.toLowerCase() === user.email.toLowerCase() &&
      subscription.status === "Active"
  );

  if (alreadyHasActivePlan) {
    return {
      success: false,
      message: "You already have an active plan",
    };
  }

  const startDate = new Date();

  const durationNumber = Number(duration.replace(/\D/g, "")) || 30;

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + durationNumber);

  const newSubscription: CustomerSubscription = {
    id: Date.now(),
    customerName: user.fullName,
    customerEmail: user.email,
    planName,
    price,
    duration,
    startDate: startDate.toISOString().split("T")[0],
    endDate: endDate.toISOString().split("T")[0],
    status: "Active",
  };

  const updatedSubscriptions = [...subscriptions, newSubscription];

  localStorage.setItem(
    SUBSCRIPTIONS_KEY,
    JSON.stringify(updatedSubscriptions)
  );

  return {
    success: true,
    message: `${planName} activated successfully`,
  };
};
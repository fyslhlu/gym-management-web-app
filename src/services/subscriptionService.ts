import type { AppUser } from "@/services/authService";

export type SubscriptionStatus = "Pending" | "Approved" | "Rejected";

export type CustomerSubscription = {
  id: number;
  customerName: string;
  customerEmail: string;
  planName: string;
  price: string;
  duration: string;
  startDate: string;
  endDate: string;
  status: SubscriptionStatus;
};

const SUBSCRIPTIONS_KEY = "customerSubscriptions";

export const getCustomerSubscriptions = (): CustomerSubscription[] => {
  const savedSubscriptions = localStorage.getItem(SUBSCRIPTIONS_KEY);

  if (!savedSubscriptions) {
    return [];
  }

  return JSON.parse(savedSubscriptions) as CustomerSubscription[];
};

export const saveCustomerSubscriptions = (
  subscriptions: CustomerSubscription[]
) => {
  localStorage.setItem(SUBSCRIPTIONS_KEY, JSON.stringify(subscriptions));
};

export const activateCustomerPlan = (
  user: AppUser,
  planName: string,
  price: string,
  duration: string
) => {
  const subscriptions = getCustomerSubscriptions();

  const alreadyHasActiveOrPendingPlan = subscriptions.some(
    (subscription) =>
      subscription.customerEmail.toLowerCase() === user.email.toLowerCase() &&
      subscription.status !== "Rejected"
  );

  if (alreadyHasActiveOrPendingPlan) {
    return {
      success: false,
      message: "You already have a pending or approved plan",
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
    status: "Pending",
  };

  const updatedSubscriptions = [...subscriptions, newSubscription];

  saveCustomerSubscriptions(updatedSubscriptions);

  return {
    success: true,
    message: `${planName} request sent. Waiting for admin approval.`,
  };
};

export const updateSubscriptionStatus = (
  subscriptionId: number,
  status: SubscriptionStatus
) => {
  const subscriptions = getCustomerSubscriptions();

  const updatedSubscriptions = subscriptions.map((subscription) =>
    subscription.id === subscriptionId
      ? {
          ...subscription,
          status,
        }
      : subscription
  );

  saveCustomerSubscriptions(updatedSubscriptions);

  return updatedSubscriptions;
};
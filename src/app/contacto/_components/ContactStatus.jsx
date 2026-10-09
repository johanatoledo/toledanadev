import { CircleCheck, TriangleAlert, } from "lucide-react";

export default function ContactStatus({ status, }) {
  
  if ( status.type === "idle" || status.type === "loading" ) {
    return null;
  }

  const isSuccess = status.type === "success";
  const Icon = isSuccess ? CircleCheck : TriangleAlert;

  return (
    <div
      role={ isSuccess ? "status" : "alert" }
      aria-live="polite"
      className={`flex gap-3 rounded-xl border p-4 text-sm ${
        isSuccess
          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300"
          : "border-accent/30 bg-accent/5 text-accent"
      }`}
    >
      <Icon
        aria-hidden="true"
        className="mt-0.5 h-5 w-5 shrink-0"
      />

      <span>
        {status.message}
      </span>
    </div>
  );
}
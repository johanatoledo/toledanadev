export default function ContactField({ id, label, error, children,}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-sm font-semibold"
      >
        {label}
      </label>

      {children}

      {error && (
        <p
          id={`${id}-error`}
          role="alert"
          className="mt-2 text-sm text-accent"
        >
          {error}
        </p>
      )}
    </div>
  );
}
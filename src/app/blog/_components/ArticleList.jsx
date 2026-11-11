import { Check } from "lucide-react";

export default function ArticleList({ items }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="flex gap-3"
        >
          <Check
            aria-hidden="true"
            className="mt-1 h-5 w-5 shrink-0 text-primary"
          />

          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
const BASE_INPUT_CLASSES = `
  w-full
  rounded-xl
  border
  bg-transparent
  py-3.5
  pl-12
  pr-4
  outline-none
  transition-colors
  placeholder:text-black/35
  dark:placeholder:text-white/35
`;

const DEFAULT_INPUT_CLASSES = `
  border-black/10
  focus:border-primary
  focus:ring-2
  focus:ring-primary/10
  dark:border-white/10
`;

const ERROR_INPUT_CLASSES = `
  border-accent
  focus:border-accent
  focus:ring-2
  focus:ring-accent/10
`;

export function getInputClassName(
  hasError,
  additionalClasses = ""
) {
  return `
    ${BASE_INPUT_CLASSES}
    ${
      hasError
        ? ERROR_INPUT_CLASSES
        : DEFAULT_INPUT_CLASSES
    }
    ${additionalClasses}
  `;
}
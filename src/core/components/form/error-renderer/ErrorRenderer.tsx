interface ErrorRendererProps {
  errors?: string[] | null;
}

const ErrorRenderer = ({ errors }: ErrorRendererProps) => {
  if (!errors) {
    return null;
  }
  return (
    <ul>
      {errors?.map((err, key) => (
        <li key={`err-${key}`}>{err}</li>
      ))}
    </ul>
  );
};

export default ErrorRenderer;

import { useBoundStore } from "../../stores/useBoundStore";

function ErrorMessage() {
  const { error } = useBoundStore();
  return (
    <p className="error">
      <span>⛔</span> {error}
    </p>
  );
}

export default ErrorMessage;

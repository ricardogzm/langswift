export default function LoadingDots() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <circle cx="10" cy="25" r="5" fill="currentcolor">
        <animate
          calcMode="spline"
          keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
          attributeName="r"
          values="3;5;3;3"
          keyTimes="0;0.22;0.44;1"
          dur="1.5s"
          repeatCount="indefinite"
          begin="0s"
        />
      </circle>
      <circle cx="25" cy="25" r="5" fill="currentcolor">
        <animate
          calcMode="spline"
          keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
          attributeName="r"
          values="3;5;3;3"
          keyTimes="0;0.22;0.44;1"
          dur="1.5s"
          repeatCount="indefinite"
          begin="0.2s"
        />
      </circle>
      <circle cx="40" cy="25" r="5" fill="currentcolor">
        <animate
          calcMode="spline"
          keySplines="0 0.5 0.5 1;0.5 0 1 0.5;0.5 0.5 0.5 0.5"
          attributeName="r"
          values="3;5;3;3"
          keyTimes="0;0.22;0.44;1"
          dur="1.5s"
          repeatCount="indefinite"
          begin="0.4s"
        />
      </circle>
    </svg>
  );
}

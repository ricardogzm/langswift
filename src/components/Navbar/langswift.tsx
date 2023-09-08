type SvgProps = React.SVGProps<SVGSVGElement>;

export default function Langswift(props: SvgProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 246 246"
      fill="currentcolor"
      aria-label="Langswift logo"
      {...props}
    >
      <g id="Logo">
        <g id="L">
          <path d="m0,246V0h42v204h204v42H0Z" />
        </g>
        <rect id="Square" x="76" width="170" height="170" />
      </g>
    </svg>
  );
}

import * as React from "react";

function Italy(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={23}
      height={23}
      viewBox="0 0 23 23"
      {...props}
    >
      <path
        d="M15.334.657l-1.342 3.721a27.763 27.763 0 010 14.244l1.342 3.721a11.5 11.5 0 000-21.685z"
        fill="#e63026"
      />
      <g fill="#e4e4e4">
        <path d="M15.334 4.378V.657A11.477 11.477 0 0011.5-.002c1.773 0-.685 6.012 3.834 4.38zM11.499 23a11.476 11.476 0 003.834-.657v-3.721C10.859 18.176 11.499 23 11.499 23z" />
      </g>
      <path
        d="M0 11.499a11.5 11.5 0 007.711 10.859V.642A11.5 11.5 0 000 11.499z"
        fill="#359846"
      />
      <path
        d="M15.332 4.378v14.244a27.759 27.759 0 000-14.244z"
        fill="#ef4c4c"
      />
      <path
        d="M15.334 18.622V4.378c-.783-2.58-2.061-4.38-3.829-4.38A11.476 11.476 0 007.716.64v21.718a11.476 11.476 0 003.789.64c1.768 0 3.046-1.792 3.829-4.376z"
        fill="#f3f4f5"
      />
    </svg>
  );
}

export default Italy;

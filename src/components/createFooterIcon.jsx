import React from "react";

function CreateIcon(params) {
  return (
    <div>
      <a
        href="https://m.facebook.com/edcbitmesra?_rdr"
        class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <svg
          class="w-10 h-10"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path fill-rule="evenodd" d={params.d} clip-rule="evenodd" />
        </svg>
        <span class="sr-only">{params.name}</span>
      </a>
      <a
        href="https://www.instagram.com/edcbitmesra/"
        class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
      >
        <svg
          class="w-10 h-10"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path fill-rule="evenodd" d={params.d1} clip-rule="evenodd" />
        </svg>
        <span class="sr-only">{params.name1}</span>
      </a>
    </div>
  );
}
export default CreateIcon;

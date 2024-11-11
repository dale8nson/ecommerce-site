export const Anouncement = () => {
  return (
    <div className="flex space-x-4 items-center justify-center gap-4 bg-black px-4 py-3 text-white">
  <div className="flex space-x-4 flex-auto justify-center">
    <p className="text-sm font-medium">
      Sign up and get 20% off your first order!
    </p>
    <a href="#" className="inline-block underline text-sm font-bold">Sign Up Now</a>
  </div>

  <div className="flex mr-0 ml-auto flex-grow-0 justify-self-end">
    <button
      aria-label="Dismiss"
      className="shrink-0 rounded-lg bg-black/10 p-1 transition hover:bg-black/20"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
</div>
  )
}


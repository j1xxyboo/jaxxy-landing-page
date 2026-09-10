export default function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-tile ring-1 ring-black/[0.06]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2.5c1.1 3.2 2.8 4.9 6 6-3.2 1.1-4.9 2.8-6 6-1.1-3.2-2.8-4.9-6-6 3.2-1.1 4.9-2.8 6-6Z"
            fill="#2f6bff"
          />
          <path d="M18.2 15.4c.5 1.5 1.3 2.3 2.8 2.8-1.5.5-2.3 1.3-2.8 2.8-.5-1.5-1.3-2.3-2.8-2.8 1.5-.5 2.3-1.3 2.8-2.8Z" fill="#111114" opacity="0.85" />
        </svg>
      </span>
      <span className="text-[19px] font-bold tracking-tight text-inkline">Jaxxy</span>
    </a>
  );
}

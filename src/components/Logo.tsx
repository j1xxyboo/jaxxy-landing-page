export default function Logo() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-slate-900">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 2.5c1.1 3.2 2.8 4.9 6 6-3.2 1.1-4.9 2.8-6 6-1.1-3.2-2.8-4.9-6-6 3.2-1.1 4.9-2.8 6-6Z"
            fill="white"
          />
          <path d="M18.2 15.4c.5 1.5 1.3 2.3 2.8 2.8-1.5.5-2.3 1.3-2.8 2.8-.5-1.5-1.3-2.3-2.8-2.8 1.5-.5 2.3-1.3 2.8-2.8Z" fill="white" opacity="0.7" />
        </svg>
      </span>
      <span className="text-[19px] font-semibold tracking-tight text-slate-900">Jaxxy</span>
    </a>
  );
}

"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarPlus, Download, ExternalLink, ChevronDown, Check } from "lucide-react";
import {
  type WeddingEvent,
  createGoogleCalendarUrl,
  downloadIcsFile,
} from "@/lib/events";

export default function AddToCalendar({ item }: { item: WeddingEvent }) {
  const [open, setOpen] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const handleIcsDownload = () => {
    downloadIcsFile(item);
    setDownloaded(true);
    setTimeout(() => {
      setDownloaded(false);
      setOpen(false);
    }, 1200);
  };

  const googleCalUrl = createGoogleCalendarUrl(item);

  return (
    <div className="relative inline-block text-left" ref={menuRef}>
      <motion.button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        aria-expanded={open}
        aria-haspopup="true"
        className="inline-flex items-center gap-2 rounded-full border border-gold/45 bg-paper/90 px-4 py-2 text-xs font-medium tracking-wide text-ink-soft shadow-sm transition-all hover:border-gold hover:bg-paper hover:text-rose"
      >
        <CalendarPlus className="h-3.5 w-3.5 text-gold-deep" />
        <span>Add to Calendar</span>
        <ChevronDown
          className={`h-3 w-3 text-gold-deep transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 sm:left-auto sm:right-0 mt-2 z-30 w-56 origin-top-right rounded-xl border border-gold/30 bg-paper/98 p-1.5 shadow-[0_12px_30px_-10px_rgba(115,22,39,0.22)] backdrop-blur-md"
          >
            <div className="px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-wider text-gold-deep border-b border-gold/15">
              Select Calendar
            </div>

            <div className="mt-1 space-y-0.5">
              {/* Google Calendar Link */}
              <a
                href={googleCalUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2 text-xs text-ink transition-colors hover:bg-rose/10 hover:text-rose font-medium group"
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gold group-hover:bg-rose transition-colors" />
                  Google Calendar
                </span>
                <ExternalLink className="h-3.5 w-3.5 text-gold-deep group-hover:text-rose transition-colors" />
              </a>

              {/* Apple / Outlook (.ics) Download */}
              <button
                type="button"
                onClick={handleIcsDownload}
                className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-xs text-ink transition-colors hover:bg-rose/10 hover:text-rose font-medium group text-left"
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gold group-hover:bg-rose transition-colors" />
                  Apple / Outlook (.ics)
                </span>
                {downloaded ? (
                  <Check className="h-3.5 w-3.5 text-sage" />
                ) : (
                  <Download className="h-3.5 w-3.5 text-gold-deep group-hover:text-rose transition-colors" />
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

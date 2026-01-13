import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  const { pathname, hash } = location;

  useEffect(() => {
    const targetIdFromState = (location as any).state?.scrollTo;
    const effectiveHash = hash || window.location.hash || "";
    const targetId = targetIdFromState || (effectiveHash ? effectiveHash.replace("#", "") : null);

    const scrollToElement = (id: string) => {
      const el = document.getElementById(id);
      if (!el) return false;
      el.scrollIntoView({ block: "start", behavior: "smooth" });

      // Compensate for fixed header: scroll up by header height after initial scroll
      setTimeout(() => {
        const headerEl = document.querySelector('.header') as HTMLElement | null;
        const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 80;
        // extra offset a few pixels to avoid overlap
        window.scrollBy({ top: -headerHeight - 8, left: 0, behavior: 'smooth' });
      }, 60);

      // clear history state to avoid repeated scrolling when navigating back
      try {
        window.history.replaceState(null, "", location.pathname + (location.hash || ""));
      } catch (e) {
        /* ignore */
      }

      return true;
    };

    if (targetId) {
      // Try immediate scroll
      if (scrollToElement(targetId)) return;

      // If not found, observe DOM mutations until element appears or timeout
      const observer = new MutationObserver(() => {
        if (scrollToElement(targetId)) {
          observer.disconnect();
        }
      });

      observer.observe(document.body, { childList: true, subtree: true });

      // Safety timeout: stop observing after 8 seconds
      const timeout = setTimeout(() => {
        observer.disconnect();
        // fallback: scroll to top
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }, 8000);

      // cleanup on effect teardown
      return () => {
        observer.disconnect();
        clearTimeout(timeout);
      };
    }

    // No explicit target: delay scrolling to top briefly to allow a
    // follow-up navigation (e.g. '/' then '/#section') to apply.
    const scrollTopTimeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, 300);

    return () => clearTimeout(scrollTopTimeout);
  }, [pathname, hash, location]);

  return null;
}


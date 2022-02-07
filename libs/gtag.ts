export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

type GTagEvent = {
  action: string;
  category: string;
  label: string;
  value: number;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const gtagPageview = (url: URL) => {
  window.gtag('config', GA_MEASUREMENT_ID as string, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const gtagEvent = ({ action, category, label, value }: GTagEvent) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};

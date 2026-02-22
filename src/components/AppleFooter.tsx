const footerSections = [
  {
    title: "Shop and Learn",
    links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "Accessories"],
  },
  {
    title: "Services",
    links: ["Apple Music", "Apple TV+", "Apple Arcade", "iCloud", "Apple Books", "Apple Podcasts"],
  },
  {
    title: "Apple Store",
    links: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Financing", "Order Status"],
  },
  {
    title: "For Business",
    links: ["Apple and Business", "Shop for Business"],
  },
  {
    title: "Apple Values",
    links: ["Accessibility", "Education", "Environment", "Privacy", "Supply Chain"],
  },
];

const AppleFooter = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-[1024px] mx-auto px-4 py-6">
        <p className="text-xs text-muted-foreground mb-4 pb-4 border-b border-border leading-5">
          1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pb-6 border-b border-border">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-semibold text-foreground mb-2">{section.title}</h4>
              <ul className="space-y-1.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            Copyright © 2026 Apple Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors">Sales and Refunds</a>
            <span>|</span>
            <a href="#" className="hover:text-foreground transition-colors">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppleFooter;

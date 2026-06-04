import { company_logos } from "@/assets/assets";
import "react";
const TrustedBy = () => {
  return (
    <section className="flex flex-col items-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-700 dark:text-white/80">
      <h3 className="font-semibold">Trusted by Leading Companies</h3>
      <div className="flex items-center gap-6 mt-6 flex-wrap justify-center">
        {company_logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt="company logo"
            className="max-h-5 sm:max-h-6 dark:drop-shadow-xl"
          />
        ))}
      </div>
    </section>
  );
};

export default TrustedBy;

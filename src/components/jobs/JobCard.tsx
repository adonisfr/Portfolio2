import { calculateDateDifference } from "./utils";

type Props = {
  title: string;
  employmentType: string;
  companyName: string;
  location: string;
  locationType: string;
  startDate: string;
  endDate: string;
  currentWork: boolean;
  technologies: string[];
};

const JobCard = ({
  title,
  employmentType,
  companyName,
  location,
  locationType,
  startDate,
  endDate,
  currentWork,
  technologies,
}: Props) => {
  const workTime = calculateDateDifference(startDate, endDate);

  return (
    <div className="p-6 bg-white dark:bg-slate-900 shadow-sm dark:shadow-slate-800 rounded-lg max-w-4xl ">
      <div className="md:flex md:items-start">
        <div className="md:w-1/4 md:text-right md:pr-6 mb-2 md:mb-0">
          <p className="text-sm text-gray-500 md:block">
            <span>{`${startDate} - ${currentWork ? "Present" : endDate}`}</span>
            <span className="hidden md:block"> &middot; {workTime}</span>
          </p>
          <p className="text-sm text-gray-500 md:hidden">{workTime}</p>{" "}
        </div>

        <div className="md:w-3/4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-gray-300 ">
            {title}
          </h2>

          <p className="text-sm text-gray-500">
            {companyName} &middot; {employmentType}
          </p>

          <p className="text-sm text-gray-500 mt-2">
            {location} &middot; {locationType}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className={`bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-semibold`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;

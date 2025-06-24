import PropTypes from "prop-types";
import FilteredProductList from "./FilteredProductList";

type ShowCaseProps = {
  name: string;
  filter_type: string;
  border?: boolean;
  view_all?: boolean;
};

const ShowCase = ({
  name,
  filter_type,
  border = false,
  view_all = true,
}: ShowCaseProps) => {
  return (
    <section
      id={filter_type}
      className={`w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center mb-8 ${
        border ? "border-b border-gray-300" : ""
      }`}
    >
      <h2 className="integral heavy text-4xl mb-12 mt-12">{name}</h2>

      {/* Scrollable container on small screens */}
      <div className="w-full overflow-x-scroll sm:overflow-visible">
        <div className="flex items-start gap-5 mb-8 max-w-220 min-w-fit">
          <FilteredProductList filter_type={filter_type} />
        </div>
      </div>

      {view_all && (
        <div className="text-center">
          <button
            className="reversed-button mb-8"
            onClick={() => (window.location.href = `/shop/${filter_type}`)}
          >
            View All
          </button>
        </div>
      )}
    </section>
  );
};

ShowCase.propTypes = {
  name: PropTypes.string.isRequired,
  filter_type: PropTypes.string.isRequired,
  border: PropTypes.bool,
};

export default ShowCase;

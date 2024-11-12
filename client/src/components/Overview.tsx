import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { TbCalendarStats } from "react-icons/tb";
import { MdMiscellaneousServices } from "react-icons/md";

function Overview() {
    const user = useSelector((state:any) => state.user);
    const { data: customers }: { data: any } = useFetch(
      `${import.meta.env.VITE_API_URL}/customers/${user.userId}`
    );
    const { data: appointments }: { data: any } = useFetch(
      `${import.meta.env.VITE_API_URL}/appointments/${user.userId}`
    );
    const { data: services }: { data: any } = useFetch(
      `${import.meta.env.VITE_API_URL}/services/${user.userId}`
    );
    const { data: treatments }: { data: any } = useFetch(
      `${import.meta.env.VITE_API_URL}/treatments/${user.userId}`
    );
  return (
    <div>
      <div className="flex justify-between">
        <h1 className="font-poppins font-semibold text-md">Overview</h1>
        <button className="flex items-center gap-1 text-xs text-gray-600 font-poppins">
          <p>This month</p>
          <IoIosArrowDown />
        </button>
      </div>
      <div className="grid font-poppins grid-cols-4 gap-3 mt-2">
        <div className="w-full bg-gradient-to-l from-orange-600 to-orange-500 rounded-xl text-white p-4">
          <FaUserGroup className="text-[#ffa783] mb-1" />
          <p className="text-lg font-semibold">{customers.length}</p>
          <p className="text-xs">Total Clients</p>
        </div>
        <div className="w-full bg-gradient-to-l from-[#06BF9D] to-[#74ddc3]  rounded-xl text-white p-4">
          <TbCalendarStats className="text-[#35ffeb] mb-1" />
          <p className="text-lg font-semibold">{appointments.length}</p>
          <p className="text-xs">Total Appointments</p>
        </div>
        <div className="w-full bg-gradient-to-l from-blue-700 to-blue-500 rounded-xl text-white p-4">
          <MdMiscellaneousServices className="text-[#a0beff] mb-1" />
          <p className="text-lg font-semibold">{services.length}</p>
          <p className="text-xs">Total Services</p>
        </div>
        <div className="w-full bg-gradient-to-l from-yellow-500 to-yellow-400 rounded-xl text-white p-4">
          <svg
            className="h-5 w-5 text-[#fad951]"
            fill="currentColor"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="800px"
            height="800px"
            viewBox="0 0 30.309 30.309"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <path
                  d="M3.246,16.398c0,0,0.007,0.004,0.015,0.01c-0.005,0-0.009,0-0.014,0c-1.551,0.062-2.768,1.242-2.711,2.628
			s1.366,2.461,2.917,2.396c1.083-0.045,2.001-0.635,2.439-1.457c0.048-0.07,1.788-2.564,4.635-3.204
			c0.07-0.006,0.391-0.069,0.881-0.174l-0.747-0.758L3.246,16.398z M3.418,20.62c-1.103,0.045-2.032-0.682-2.07-1.617
			c-0.039-0.938,0.828-1.734,1.93-1.78c1.103-0.046,2.031,0.68,2.069,1.616C5.386,19.774,4.521,20.574,3.418,20.62z"
                />
                <path
                  d="M10.205,14.55c-2.822-0.394-4.714-2.597-4.853-2.762c-0.493-0.813-1.473-1.349-2.58-1.303
			c-1.552,0.063-2.768,1.242-2.711,2.628c0.057,1.386,1.366,2.46,2.917,2.396c0.05-0.001,0.099-0.008,0.148-0.013l7.646-0.032
			l1.035,1.048l10.357,0.072l-0.447-0.278C21.716,16.307,10.651,14.55,10.205,14.55z M2.943,14.696
			c-1.102,0.045-2.03-0.68-2.069-1.616s0.827-1.736,1.929-1.781c1.103-0.045,2.031,0.681,2.07,1.617S4.046,14.65,2.943,14.696z
			 M12.176,16.05c-0.237,0.01-0.438-0.175-0.447-0.412c-0.009-0.236,0.175-0.437,0.412-0.445c0.237-0.011,0.437,0.175,0.447,0.41
			C12.597,15.84,12.413,16.04,12.176,16.05z"
                />
                <path
                  d="M30.25,29.596c-1.953-1.582-2.305-8.551-2.305-8.551s0.156,0.508,0.684,0.8c-0.684-2.909-1.016-5.23-1.016-5.23
			s0.547,0.819,1.133,0.625c-0.547-0.527-0.996-1.875-0.996-1.875s0.717,0.658,1.054,0.586c-0.438-0.646-1.093-3.24-1.093-3.24
			s1.137,1.059,1.664,1c-0.483-0.322-1.332-2.309-1.332-2.309s0.951,0.786,1.316,0.508c-0.6-0.22-1.023-0.957-1.023-0.957
			s1.303,0.211,1.697-0.098c-0.996-0.102-1.17-0.78-1.17-0.78s0.98-0.068,1.209-0.488c-2.146,0.522-1.781-3.065-2.205-4.31
			c-0.425-1.245-2.44-6.818-6.149-4.865c-2.179-1.047-4.382,1.098-5.095,3.377c-0.884,2.826-0.222,6.17-3.183,7.574
			c0.576,0.156,1.474-0.469,1.474-0.469s0.159,0.361-0.104,0.498c0.469,0.225,1.52-0.791,1.52-0.791s-0.526,1.016-0.877,1.191
			c0.04,0.303,0.645-0.137,0.645-0.137s-0.479,1.211-0.996,1.582c0.01,0.37,0.8-0.225,1.288-0.527
			c-0.192,0.202-0.85,1.244-1.812,1.844l-1.336,0.102c0.725,0.11,1.535,0.235,2.36,0.362c-0.011,0.023-0.019,0.047-0.032,0.072
			c0.036-0.016,0.065-0.043,0.1-0.063c0.56,0.088,1.124,0.176,1.675,0.263c2.401-0.538,4.511-1.016,4.511-1.016l0.459-0.31
			l-3.923,0.299c-0.108-0.519-0.217-1.048-0.324-1.612c-0.272-0.695,1.581-8.668,2.226-8.766c1.426,2.069,3.572,4.998,4.588,5.837
			c2.693,2.304-0.61,4.23-1.289,4.725c-0.703,0.818,1.093,6.148,2.107,6.578c0.156,0.326-0.451,3.472,0.058,4.389
			c0.508,0.917,1.728,2.071,1.036,4.649c1.367,1.776,0.352-6.638,0.352-6.638S28.513,29.77,30.25,29.596z M15.939,13.978
			c0,0-0.031,0.198-0.12,0.48l-0.732,0.056C15.55,14.348,15.939,13.978,15.939,13.978z M16.355,14.417
			c0.032-0.041,0.053-0.069,0.053-0.069s0,0.027,0.002,0.065L16.355,14.417z"
                />
              </g>
            </g>
          </svg>
          <p className="text-lg font-semibold">{treatments.length}</p>
          <p className="text-xs">Total Treatments</p>
        </div>
      </div>
    </div>
  );
}

export default Overview
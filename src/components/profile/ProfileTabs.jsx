import { PROFILE_TABS } from "../../constants"

export const ProfileTabs = () => (
  <ul id="myTab" className="nav nav-tabs nav-tabs-bordered">
    {PROFILE_TABS.map(({ id, label }) => (
      <li className="nav-item">
        <button
          className="nav-link"
          data-bs-toggle="tab"
          data-bs-target={id}
        >
          {label}
        </button>
      </li>
    ))}
  </ul>
)
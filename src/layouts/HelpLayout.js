import { NavLink, Outlet } from "react-router-dom"

export default function RootLayout() {
  return (
    <div className="help-layout">
        <h2>Website Help</h2>
        <p>
          Lorem ipsum.
        </p>

        <nav>
          <NavLink to="faq">View the FAQ</NavLink>
          <NavLink to="contact">Contact Us</NavLink>
        </nav>

        <Outlet />
    </div>
  )
}

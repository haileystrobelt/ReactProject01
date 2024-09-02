import { Link, useLocation } from "react-router-dom"

export default function Breadcrumbs() {
  const location = useLocation()


  let currentLink = ''

  const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '') //remove any empty strings from our array
    .map(crumb => { 
      currentLink += `/${crumb}` // update current link to new page we are currently on

      // We want to create links to each crumb for the user to go to
      // Make it so the crumb name is viewable to the user
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      )
    })

  // These crumbs will all be outputted to the screen.
  return (
    <div className="breadcrumbs">
        {crumbs}
    </div>
  )
}

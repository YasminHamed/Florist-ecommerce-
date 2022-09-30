import React from 'react'
import { NavItem } from 'reactstrap'
import "./Navbar.css"

const Navbar = ({totalItems}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src="data:image/webp;base64,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" alt="" />
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto mb-2 mb-lg-0 fs-5">
          <li className="nav-item active font-weight-bold">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item font-weight-bold">
            <a className="nav-link" href="/About">About</a>
          </li>
          <li className="nav-item font-weight-bold">
            <a className="nav-link" href="/Shop">Shop</a>
          </li>
          <li className="nav-item font-weight-bold">
            <a className="nav-link" href="/Contact">Contact</a>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <NavItem>
            <a className="cartLink" href="/Cart">
              <span >
                {totalItems}
              </span>
              <img width="50%" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAABmJLR0QA/wD/AP+gvaeTAAAD0UlEQVR4nO2cy0sVURzHPz6u3qxFDy3DQsjaBaIlbbJNbe1BmhKEUH9AhYRBQfYgqkVti6Bli1q2aBNRkBG1EDO0aBH0hkAtMy3z2uL3G+7F7tx53DkzjswHDgfnzjm/7/l2zsycOWeCBADKDNdfCfQA64G3wKzH8mmgHWgDnvsov2C4BMxp+gocAUpclCsBuoEvOeUvGNIYCrkNsdJToEp/bwd6Ne3XY1VAf55yH0JTHTB1/N8YK6WAJUhXt47NIkOhskC5NabElpqqGGgo8FsGuT7lxi/VlClQbmMAukKjHDgKTGD/L1sGLMtzvArpLXblJoE+oCK01vikBRhCRM9QeGik550zgwyLdIFyfzQfBLaE1CbPHASmEKEDQCNyy5zfmIdkL5Z7yF4s2/TYUuBRnnKvtc4B/fsXcMBwmzxRApxDxvYs0nVT+tt5sg15jzfhXcidwirfp8dTwFmNlQHO4O6WbJxriNAp5HaYSxo4Duwla44XKoB9wDFk2OTSQbYHXvFRd6CcVCGjQGsE8VuBMdXQE0F8QJ78MsA00ZhgsUM1ZJDrVKg0ILfHDHAo7OB56ES0/AQ2hRW0HHiGdMeLYQV1gTWv6cf8ZBKA0xpwiIX1YFMJvEK09ZoOVg38QB5+WkwH80ET8tA1Aaw2Gegq4vgNk0GK5Cai8bKpAHXIffs3UG8qSABsQHrFJFBrIkAf4vR1E5UHzC1E6ykTlb/RyjebqDxgmhGtI0FXvE0rHg66YoMMI5qb3Zzs9sVMh+a3/SiKiLuaBzpDtd4hNgVZqWFaEM2Pg6owhcz9p/A3g4yKCmQOMok8DRfNVrJvn+PGC0R7o9OJbq4R1gvTl8UoiohBzR0nYm6MqNb8m2850WFpXuV0ohsjVmo+5ltOdFiaAzFiuebjvuVEx6jmK5xOdGOEdcX961tOdFiaHe92Jle6YkVihJIYoXh54qpB5vpxoiaISqqQxZvv2K9FxiWNI2+s0l5NSJF/s0bc0wM8Xg4OLwDRplJXvgbbubPLjVsxZWe+g3ZGxHb3mgvmLyYD9kbEccrtFk9tq0RefEY9noNOI9j0iELUAveRxdWoG1BsymhbbHfludlpUo+sfsf1KTQDvNOU4IRTj9gO3CG7gzaOlCDDvBN4YneSm7nGWk2LmriO+8BJjFASI5TECCUxQkmMUBIjlMQIJTFCSYxQEiOUxAglMUJxMiKOeyLsGHU+xZ4y4DPRv2orNn0igN6/GBZ7uos1weIEslUv6gZ5TdO4/NbLy2eC64DdyH+BsCA+LyzAHPJ55T3gY8Ra4sU/IB1v6J9X1Y0AAAAASUVORK5CYII="/>
            </a>
          </NavItem>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
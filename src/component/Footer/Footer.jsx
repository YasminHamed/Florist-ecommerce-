import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
<footer className="footer-distributed">

<div className="footer-left">

  <img src="data:image/webp;base64,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" alt="" />

  <p className="footer-links">
    <a className="mr-2 ml-2 link-1" href="/Home">Home</a>
      
    <a className="mr-2 ml-2" href="/Service">Services</a>
  
    <a className="mr-2 ml-2" href="/About">About</a>
    
    <a className="mr-2 ml-2" href="/Contact">Contact</a>
  </p>

  <p className="footer-company-name">Florist Company © 2015</p>
</div>

<div className="footer-center">

  <div>
    <i className="fa fa-map-marker"></i>
    <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
  </div>

  <div>
    <i className="fa fa-phone"></i>
    <p>+966 579 933 292</p>
  </div>

  <div>
    <i className="fa fa-envelope"></i>
    <p><a href="mailto:support@company.com">support@Florist.com</a></p>
  </div>

</div>

<div className="footer-right">

  <p className="footer-company-about">
    <span>About the company</span>
    Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
  </p>

  <div className="footer-icons">

    <a href="#">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAApUlEQVRIie3SsQkCQRCF4U8zwUCswszIHixBi7ABa7AGmzmt4RIFsQETozM4I1GPW3TPDUTvwcCyy5v/7TD8mwZYYYcLChwwTtF8iBxlTS1Cpm4EYIlR4O0U0SeovefUa8wwFRc0qKIC6L1j6kQAyibeJF/7BLB1H0lVt/szJk0D1K1kXc1DDVKN6NjUmHmdPkc/1OD3t6gFtIC0gM3DOUsd5Ht1BfnVM9MF+929AAAAAElFTkSuQmCC"/>
    </a>
    <a href="#">
      <img width="25px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAADl0lEQVRoge2aO09UQRSAPw0ohOWxlouUCMZCFOwEQyKJxIRHY0tIDP9AkRq0NRJKib2FGq1kfXdorTy0UCBaCYZnBVicM866wN6Ze2eBgi+5uZt7z5w5Z+fMzJmZC0ccURSOeco3AD1AB1AL1AEVgWxZA+aBBSALPANmA+n+RwvwGtje5+sV0BzCgVJgDNhSxb+Bh0AX0jqhWgPV1QB0A+Na17bWPQqUxFWcBt6osjVgGKhKaKwPVcAIsI5tnRpfJaXYUFpAQuugOA98V1veAyd8Co9pwTkgE9w0fzLIQLANPHAt1ILE5RpwoTh2xeIiEmab+jsSE1LDRTQqLncR27JRgg3Y0Wk/O7bhOtIn54HOXd5XA4uIjfWFFA2q0HhgA10x/cD0z914pO9v5T48nid0Ve/PQ1oXGGNbRyGhGcTbMwkqSgP9SIoxDazqNQ081XfpPcp2Iq0yB1zbQ8aE/3QhI5ZVqNLPdgDKgSHgD9GpxxJwByiLUU+l6lguJGQq8iUDfMop/xK4iU1jKoBGfTaRI/eRePNUpJ1xHMkgoWCa+7JDmVZsGMeZdIM7Uo5tibf45UJp4J2WncQvzII7MqTyU8RI6BBnTMsMepQL6kga27FdwmkvrmAHgL1Gs3yCOtKP7dhJyaquPkf5HXbmT4g+dOn9cQIdBqOjq6CUBz4tYmK7IUC9jThMcjkEDa0VlU05yhcipbpWHOWDhlZIjB1bSRXE4afeaxPoMJgJ8VdcBUkc+aL31gQ6DG16/xxXQRJHTDp9I4EOg9ERbPngOyEuqXxbhGwh2rETomt2ULQUZQb3WTmXNLItumPFF0FwR8qQVHwbSQB9nDkFfOCQJI3wfxo/i+ROUbQDXzlEabwhg/yrpnwWGADOIpNdSn8PIFufRm6SIi2skix1y5BU3AwAUUvd28DJGPU4LXVDbD7UIFnsE2SdsqLXlD7rI97axeC0+WDS6e4EFRWbXnZZPuRPiGYrMlg6XQTMnzxRSOigt0yjcN4yBTuqjBTZqDjcw2NV2oyk0+s4bt/vEy3ABnKs0ORaaBTxfJ4waXpSarEb3Pd9CpZgQ2wBuBTcNHeagB/Yidb7ULQG68w6cshSHdDAKKqRPrGhNkyQYP4pQc7sNlXZInI+0YNsGIRYrxtSqrNX6zCj0yYSTrGPp3M5B7wgOvUIfWVxHHB8P+Gox37CUQecJlyrrCIdeh77Cce3QLqPOCIufwFq0mD8AdK0IAAAAABJRU5ErkJggg=="/>
    </a>
    <a href="#">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABjElEQVRIie3Wv0vVURjH8ZdKEojYD9ocHTTE1RYTIxAy3ARRaBcM+hfEWaJoaysaxEGJWhpadBSHEBx0KYWWCkJIM38N537hcvvec7/n3tuSfuDZzvm8z/OcH8/hUv+7WprkcxUPMYAzfMJ7HFaMa8dRnsFtXEuEjmC3BCyPzxjGDUzjAzqrmbzCamxAhe7gIAeaxRGOcYopkQpvliaso7sAeCMCzeIUy1jA42pG22UTvmEyAu0rAC2PJbRVM1vJmbCKB/4u03gC9CVaI0lEzb7gGSZK2Y4lgCdiULiC1wmGRWO4ElSZ/oZwGL7XWmGivtYa8E7zs90XHo6oRv8B+G0taKb5JoNnioLhEfaaAP2hyiuYd7daMYQt/E5ZbY6eC3tcWE80nu0erqeutAUvGoCe4F4qtFz3hVOZ1/ZiMdcINFMv1hKgTzXwwegQ7vQi/hQEHoq0vZiGhO/KjtDAU0r7Ef31QDN1YVb4CNSC/cQb3K0HFNuLWxhED24KneuXcE02hYZyXA/0UhdD5+q+K5z2ztKIAAAAAElFTkSuQmCC"/>
    </a>
    <a href="#">
      <img width="30px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACP0lEQVRoge3ZzW8NURjH8Y9yExKhJUWQqKRNy0bY+AcqYuOPsJHY2EosbKwl/hgWXtI/QEgjCCmCtA0qbQnqrWVx7iTT09GZ25n7QuabPMnMycx5nt+ZM895o6ampqampsamgs81MIwRHMA+7Mdu7EA/djavG813tmJbqo7P+Nm8XsKnlM3jPd5hGrN4ijcb0LSGIVzFQ/zA7y7YR0zgfLNhWuac0ILdCP5v9ghHWxFxFss9EHiWvcJgVtCbM+5vCX2+F+kXGvlu3oPHdL/V8+xlVuB90f1wntIe4LCQIVcRCznUmVhKMxoX/KtCjsQFsZChkg5OCWmy3YzFBbGQzNTWAndwXBjA5krWtR65PWdSuYySZheuC9OSqjPX7TwhUxUKSRjFjYqFTOYJmWmDkIRx4f+pQshMnpDFNgohzIwvYqGkn+9yZu5lZ7lFSf6fXyV8rRoU46zVKYqugzZcR9lPnkfStcp24WU5H2G6jULG8bhk/YnN5/jyrA1CxlSffjNnwGkeVCiknQPi/TjwLdH9lzylBWjgAq5goIL6sliMC2Ihb0s6OINrMiZ1FTMbF8RCnpd0cLPk+0V5ERfEKayskE6x5mf/b4U8wUpnYtkwK8IwsYpYyJyws9fLTCi4aDuBr6rP/VXYN5xsRfVpYUO524Gn7YOwC9oyg7iEe8LueTeCX2r6v4w96wVbdDrdJyz4R4TjhIPY27QB4TghseQooYHtqTrWO1ZYEHpA+lhhCq/1fvKpqampqanpHf4AGXx2NSiaKfwAAAAASUVORK5CYII="/>
    </a>
    <a href="#">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAB50lEQVRIid3UzYvNYRQH8M/ceZGXplhQkrLzkgYpVhKpiQiT8C9MGWJSsrAYZcFWKSt0Y2mj7EZJSVZMxjBKYlZMRqO8TPdaPOc2vxnPfWHHqad+z/l+n+85nXN+h//dOnEEZYxiOs4r3MYxdP2t+EG8RrXJeYO+PxEu4VJBYASnsAFLsBjrcALPCrzLaG8lQE38e4g0elRCf3BrQRraAVTwA3taySZsVyFI3XJ1YixIA+FbhavY2UKQ/ng7rk7jDwXhhdmyDIfvaQsB2vE8+EdzhBsBDsZ9gVSuWhO3tBDkZHDLOXAkwJ64t2EyfB+lcjWz9cEfy4GfAlxW8F0J350WxEljXMWXHDgV4IqCr1tqWkX6a5tZd2hM5cDaBG2f5+/BV2kMB6TSdeFW3BcVuBtDYzQXoBzguQy2A58Df4J7Zps/gYXBGwzfzVyAvgDfyv+9a/GgIFw744F3ROZVHM4F6AhyFcdzhLDNuID7uI414T8db1+GVtYeB6m3QYCc9UrrpYJ99UhLMYNv0sZcjd3SQqtnnTiDn5HYxUZZ1HowjXfm7vvz2Ibl0n+yCWfNTl4FQ02Scc3c5k3ivd+bOv+MYm890bbC9zA+4BEeSkuvhP3SVGzFSqmME9ICvCuN7EyjzP9t+wVfjZrOJ6Av0QAAAABJRU5ErkJggg=="/>
    </a>

  </div>
  <div className="credit">Made with ❤ by Jasmine</div>


</div>

</footer>
  )
}

export default Footer
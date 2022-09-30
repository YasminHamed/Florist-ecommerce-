import React from 'react'
import "./shop.css"

const Product = ({product, onAddToCart}) => {
  return (
    <div>

        <img width='100%' src={product.image.url} alt="" className='rounded-top img1item'/>
        <div className="productitemicon d-flex align-items-center justify-content-between">
        <div>
          <p>
            {product.name}
          </p>
          <a onClick={() => onAddToCart(product.id, 1)} className="iconn1">
            <img width="15%" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAABmJLR0QA/wD/AP+gvaeTAAAD0UlEQVR4nO2cy0sVURzHPz6u3qxFDy3DQsjaBaIlbbJNbe1BmhKEUH9AhYRBQfYgqkVti6Bli1q2aBNRkBG1EDO0aBH0hkAtMy3z2uL3G+7F7tx53DkzjswHDgfnzjm/7/l2zsycOWeCBADKDNdfCfQA64G3wKzH8mmgHWgDnvsov2C4BMxp+gocAUpclCsBuoEvOeUvGNIYCrkNsdJToEp/bwd6Ne3XY1VAf55yH0JTHTB1/N8YK6WAJUhXt47NIkOhskC5NabElpqqGGgo8FsGuT7lxi/VlClQbmMAukKjHDgKTGD/L1sGLMtzvArpLXblJoE+oCK01vikBRhCRM9QeGik550zgwyLdIFyfzQfBLaE1CbPHASmEKEDQCNyy5zfmIdkL5Z7yF4s2/TYUuBRnnKvtc4B/fsXcMBwmzxRApxDxvYs0nVT+tt5sg15jzfhXcidwirfp8dTwFmNlQHO4O6WbJxriNAp5HaYSxo4Duwla44XKoB9wDFk2OTSQbYHXvFRd6CcVCGjQGsE8VuBMdXQE0F8QJ78MsA00ZhgsUM1ZJDrVKg0ILfHDHAo7OB56ES0/AQ2hRW0HHiGdMeLYQV1gTWv6cf8ZBKA0xpwiIX1YFMJvEK09ZoOVg38QB5+WkwH80ET8tA1Aaw2Gegq4vgNk0GK5Cai8bKpAHXIffs3UG8qSABsQHrFJFBrIkAf4vR1E5UHzC1E6ykTlb/RyjebqDxgmhGtI0FXvE0rHg66YoMMI5qb3Zzs9sVMh+a3/SiKiLuaBzpDtd4hNgVZqWFaEM2Pg6owhcz9p/A3g4yKCmQOMok8DRfNVrJvn+PGC0R7o9OJbq4R1gvTl8UoiohBzR0nYm6MqNb8m2850WFpXuV0ohsjVmo+5ltOdFiaAzFiuebjvuVEx6jmK5xOdGOEdcX961tOdFiaHe92Jle6YkVihJIYoXh54qpB5vpxoiaISqqQxZvv2K9FxiWNI2+s0l5NSJF/s0bc0wM8Xg4OLwDRplJXvgbbubPLjVsxZWe+g3ZGxHb3mgvmLyYD9kbEccrtFk9tq0RefEY9noNOI9j0iELUAveRxdWoG1BsymhbbHfludlpUo+sfsf1KTQDvNOU4IRTj9gO3CG7gzaOlCDDvBN4YneSm7nGWk2LmriO+8BJjFASI5TECCUxQkmMUBIjlMQIJTFCSYxQEiOUxAglMUJxMiKOeyLsGHU+xZ4y4DPRv2orNn0igN6/GBZ7uos1weIEslUv6gZ5TdO4/NbLy2eC64DdyH+BsCA+LyzAHPJ55T3gY8Ra4sU/IB1v6J9X1Y0AAAAASUVORK5CYII="/>
          </a>
          <h3>EGP{product.price.formatted}</h3>
        </div>
        </div>


    </div>
  )
}

export default Product
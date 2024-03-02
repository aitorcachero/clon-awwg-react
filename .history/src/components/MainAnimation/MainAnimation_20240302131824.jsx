import './MainAnimation.css';

export default function MainAnimation() {
  return (
    <div className="l-section-h i-cf">
      <div className="g-cols vc_row type_default valign_middle">
        <div className="vc_col-sm-12 wpb_column vc_column_container">
          <div className="vc_column-inner us_custom_eb849559">
            <div className="wpb_wrapper">
              <div className="container-animation d-none d-md-block">
                <div id="bg">
                  <img
                    data-src="https://awwg.com/wp-content/themes/imprezaawwg/assets/img/animacion/bg.jpg"
                    className="lazyloaded"
                    src="https://awwg.com/wp-content/themes/imprezaawwg/assets/img/animacion/bg.jpg"
                    alt=""
                  />
                  <noscript>
                    <img
                      src="https://awwg.com/wp-content/themes/imprezaawwg/assets/img/animacion/bg.jpg"
                      alt=""
                    />
                  </noscript>
                </div>
                {/* Aquí continúa el resto del código, con cada imagen dentro de un div similar */}
              </div>
              {/* Este es solo el contenedor principal, debes agregar el resto del contenido dentro */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

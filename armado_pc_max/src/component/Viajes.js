import React, { Component } from 'react'
import villa from '../component/imagenes/villa31.jpeg'
import ardigo from '../component/imagenes/Ardigo.jpg'
import solano from '../component/imagenes/Solano.jpg'
import villa2 from '../component/imagenes/Villamiseria.jpg'
import villa3 from '../component/imagenes/VillaAzul.jpg'
import apache from '../component/imagenes/fuerteApache.jpg'

export default class Viajes extends Component {

    renderImagen(imagen,nombre, descripcion){
        return(<div>
              <div class="col-lg-4 col-md-6 portfolio-item filter-app">
             <img src={imagen} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>{nombre}</h4>
              <p>{descripcion}</p>
              <a  data-gall="portfolioGallery" class="venobox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
              <a  class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
            </div>
        </div>)
    }

    
    renderImagenWeb(imagen,nombre, descripcion){
        return(<div>
              <div class="col-lg-4 col-md-6 portfolio-item filter-web">
             <img src={imagen} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>{nombre}</h4>
              <p>{descripcion}</p>
              <a  data-gall="portfolioGallery" class="venobox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
              <a  class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
            </div>
        </div>)
    }




    render() {
        return (
            <div>
                 <section id="portfolio" class="portfolio">
      <div class="container">

        <div class="section-title" data-aos="fade-up">
          <h2>Viajes</h2>
        </div>

    

        <div class="row portfolio-container" data-aos="fade-up">

        <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src={villa} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>Villa 31</h4>
              <p>La villa del Hurto</p>
              <a  data-gall="portfolioGallery" class="venobox preview-link" title="App 1"><i class="bx bx-plus"></i></a>
              <a href="portfolio-details.html" class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src={ardigo} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>Dante Ardigo</h4>
              <p>Hay ida, pero no vuelta</p>
              <a data-gall="portfolioGallery" class="venobox preview-link" title="Web 3"><i class="bx bx-plus"></i></a>
              <a  class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src={solano} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>San Francisco Solano</h4>
              <p>Rio de Solano</p>
              <a  data-gall="portfolioGallery" class="venobox preview-link" title="App 2"><i class="bx bx-plus"></i></a>
              <a class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-card">
            <img src={villa2} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>Villa Miseria</h4>
              <p>Una parte de Brasil en argentina</p>
              <a  data-gall="portfolioGallery" class="venobox preview-link" title="Card 2"><i class="bx bx-plus"></i></a>
              <a  class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-web">
            <img src={villa3} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>Villa Azul</h4>
              <p>Corre</p>
              <a data-gall="portfolioGallery" class="venobox preview-link" title="Web 2"><i class="bx bx-plus"></i></a>
              <a class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 portfolio-item filter-app">
            <img src={apache} class="img-fluid" alt=""/>
            <div class="portfolio-info">
              <h4>Fuerte Apache</h4>
              <p>El lugar de la leyenda</p>
              <a data-gall="portfolioGallery" class="venobox preview-link" title="App 3"><i class="bx bx-plus"></i></a>
              <a class="details-link" title="More Details"><i class="bx bx-link"></i></a>
            </div>
          </div>

        

        </div>
            
 
        </div>
    </section>
            </div>
        )
    }
}

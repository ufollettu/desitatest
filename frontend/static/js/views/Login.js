import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Pagamento Multa Accedi");
  }

  async getHtml() {
    return /*html*/ `                          
  <main>
    <div class="container" id="main-container">
      <div class="row">
        <div class="col-12 col-lg-10 offset-lg-1">
          <div class="cmp-breadcrumbs" role="navigation">
            <nav class="breadcrumb-container">
              <ol class="breadcrumb p-0" data-element="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item active" aria-current="page"><span class="separator">/</span>Accesso</li>
              </ol>
            </nav>
          </div>
          <div class="cmp-heading pb-3 pb-lg-4">
            <h1 class="title-xxxlarge">Accedi</h1>
          
          
            <p class="subtitle-small">Per accedere al sito e ai suoi servizi, utilizza una delle seguenti modalità.</p>
          
          
          
          
          
          </div>
        </div>
      </div>
     <hr class="d-none d-lg-block mt-0 mb-4">
      <div class="row">
        <div class="col-12 col-lg-8 offset-lg-2">
  <div class="cmp-text-button mt-3">
     <h2 class="title-xxlarge mb-0">SPID</h2>
     <div class="text-wrapper">
       <p class="subtitle-small mb-3">Accedi con SPID, il sistema Pubblico di Identità Digitale.</p>
     </div>
     <div class="button-wrapper mb-2">
                  <button type="button" class="btn btn-icon btn-re square">
                  
                  
                      <img src="/assets/images/spid.svg" alt="Entra con SPID" class="me-2">
                  
                   <span class="">Entra con SPID</span>
                  </button>
     </div>
  
      <a class="simple-link" href="#">Come attivare SPID <span class="visually-hidden">Come attivare SPID</span></a>
   </div>
  
  <div class="cmp-text-button">
     <h2 class="title-xxlarge mb-0">CIE</h2>
     <div class="text-wrapper">
       <p class="subtitle-small mb-3">Accedi con la tua Carta d’Identità Elettronica.</p>
     </div>
     <div class="button-wrapper mb-2">
                  <button type="button" class="btn btn-icon btn-re square">
                  
                  
                      <img src="/assets/images/cie.svg" alt="Entra con CIE" class="me-2">
                  
                   <span class="">Entra con CIE</span>
                  </button>
     </div>
  
      <a class="simple-link" href="#">Come richiedere CIE <span class="visually-hidden">Come richiedere CIE</span></a>
   </div>
  
  <div class="cmp-text-button">
     <h2 class="title-xxlarge mb-0">Altre utenze</h2>
     <div class="text-wrapper">
       <p class="subtitle-small mb-3">In alternativa puoi utilizzare le seguenti modalità.</p>
     </div>
     <div class="button-wrapper d-md-flex">
                  <button type="button" class="btn btn-outline-primary btn-re pr-md-4 bg-white">
                  
                  
                  
                   <span class="">Accedi con ID azienda</span>
                  </button>
                  <button type="button" class="btn btn-outline-primary btn-re bg-white">
                  
                  
                  
                   <span class="">Accedi come dipendente</span>
                  </button>
     </div>
  
   </div>
        </div>
      </div>
    </div>
    <div class="bg-grey-card shadow-contacts">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6 offset-lg-3 p-contacts">
            <div class="cmp-contacts">
              <div class="card w-100">
                <div class="card-body">
                  <h2 class="title-medium-2-semi-bold">Contatta il comune</h2>
                  <ul class="contact-list p-0">
                    <li><a class="list-item" href="#">
                        <svg class="icon icon-primary icon-sm" aria-hidden="true">
                          <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-help-circle"></use>
                        </svg><span>Leggi le domande frequenti</span></a></li>
            
                    <li><a class="list-item" href="#" data-element="contacts">
                        <svg class="icon icon-primary icon-sm" aria-hidden="true">
                          <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-mail"></use>
                        </svg><span>Richiedi assistenza</span></a></li>
            
                    <li><a class="list-item" href="#">
                        <svg class="icon icon-primary icon-sm" aria-hidden="true">
                          <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-hearing"></use>
                        </svg><span>Chiama il numero verde 05 0505</span></a></li>
            
                    <li><a class="list-item" href="#" data-element="appointment-booking">
                        <svg class="icon icon-primary icon-sm" aria-hidden="true">
                          <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-calendar"></use>
                        </svg><span>Prenota appuntamento</span></a></li>
                  </ul>
            
            
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>`;
  }
}

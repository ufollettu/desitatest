import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Pagamento Multa Info");
  }

  async getHtml() {
    return /*html*/ `                       <main>
    <div class="container" id="main-container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-10">
          <div class="cmp-breadcrumbs" role="navigation">
            <nav class="breadcrumb-container">
              <ol class="breadcrumb p-0" data-element="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a><span class="separator">/</span></li>
                <li class="breadcrumb-item"><a href="#">Servizi</a></li>
                <li class="breadcrumb-item active" aria-current="page"><span class="separator">/</span>Pagamenti</li>
              </ol>
            </nav>
          </div>
          <div class="cmp-heading pb-3 pb-lg-4">
            <div class="categoryicon-top d-flex">
              <svg class="icon icon-success mr-10 big-lg-icon mb-1" aria-hidden="true">
                <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-check-circle"></use>
              </svg>
              <h1 class="title-xxxlarge">Pagamento effettuato</h1>
            </div>
          
          
            <p class="subtitle-small">Grazie abbiamo ricevuto il <strong>pagamento PA3028</strong> per la <strong>richiesta AN4059281
                    pagamento multa.</strong></p>
                  <p class="mt-4 mb-0">Importo: <strong>38,92 €</strong></p>
                  <p class="m-0">Inviato il: <strong>21/07/2022</strong></p>
                  <p class="pt-4 pt-lg-40 mb-0">Abbiamo inviato il riepilogo all’email:<br>
                    <strong>giulia.rossi@gmail.com</strong></p>
          
          
          
          
              <button type="button" class="btn btn-outline-primary fw-bold">
              
                <span class="rounded-icon">
                  <svg class="icon icon-primary icon-sm" aria-hidden="true">
                    <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-download"></use>
                  </svg>
                </span>
              
              
               <span class="">Scarica la ricevuta (PDF 100KB)</span>
              </button>
          
          </div>
          <p class="mt-4 mt-lg-3 mb-40 mb-lg-80">Puoi consultare il resoconto del pagamento e scaricare la ricevuta in
            qualunque momento dalla tua <a class="t-primary" href="#">area personale.</a> </p>
        </div>
      </div>
    </div>
  
    <div class="bg-primary">
      <div class="container">
        <div class="row d-flex justify-content-center bg-primary">
          <div class="col-12 col-lg-6 p-lg-0 px-4">
            <div class="cmp-rating pt-lg-80 pb-lg-80" id="">
              <div class="card shadow card-wrapper" data-element="feedback">
                <div class="cmp-rating__card-first">
                  <div class="card-header border-0">
                    <h2 class="title-medium-2-semi-bold mb-0">Quanto sono utili le informazioni in questa pagina?</h2>
                  </div>
                  <div class="card-body">
                    <fieldset class="rating">
                      <legend class="visually-hidden">Valuta da 1 a 5 stelle la pagina</legend>
                      <input type="radio" id="star5a" name="ratingA" value="5">
                      <label class="full rating-star" for="star5a">
            
                          <svg class="icon icon-sm" role="img" aria-labelledby="first-star">
                            <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-star-full"></use>
                          </svg>
                          <span class="visually-hidden" id="first-star">Valuta 5 stelle su 5</span>
            
                      </label>
                      <input type="radio" id="star4a" name="ratingA" value="4">
                      <label class="full rating-star" for="star4a">
            
                          <svg class="icon icon-sm" role="img" aria-labelledby="second-star">
                            <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-star-full"></use>
                          </svg>
                          <span class="visually-hidden" id="second-star">Valuta 4 stelle su 5</span>
            
                      </label>
                      <input type="radio" id="star3a" name="ratingA" value="3">
                      <label class="full rating-star" for="star3a">
            
                          <svg class="icon icon-sm" role="img" aria-labelledby="third-star">
                            <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-star-full"></use>
                          </svg>
                          <span class="visually-hidden" id="third-star">Valuta 3 stelle su 5</span>
            
            
                      </label>
                      <input type="radio" id="star2a" name="ratingA" value="2">
                      <label class="full rating-star" for="star2a">
            
                          <svg class="icon icon-sm" role="img" aria-labelledby="fourth-star">
                            <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-star-full"></use>
                          </svg>
                          <span class="visually-hidden" id="fourth-star">Valuta 2 stelle su 5</span>
            
                      </label>
                      <input type="radio" id="star1a" name="ratingA" value="1">
                      <label class="full rating-star" for="star1a">
            
                          <svg class="icon icon-sm" role="img" aria-labelledby="fifth-star">
                            <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-star-full"></use>
                          </svg>
                          <span class="visually-hidden" id="fifth-star">Valuta 1 stelle su 5</span>
            
                      </label>
                    </fieldset>
                  </div>
                </div>
                <div class="cmp-rating__card-second d-none" data-step="3">
                  <div class="card-header border-0 mb-0">
                    <h2 class="title-medium-2-bold mb-0" id="rating-feedback">Grazie, il tuo parere ci aiuterà a migliorare il servizio!</h2>
                  </div>
                </div>
            
                <div class="form-rating d-none">
                  <div class="d-none" data-step="1">
            <div class="cmp-steps-rating">
              <fieldset>
                <div class="iscrizioni-header w-100">
                  <h3 class="step-title d-flex align-items-center justify-content-between drop-shadow">
                    <legend class="d-block d-lg-inline">
                      Cosa ha funzionato meglio?
                    </legend>
                    <span class="step">1/2</span>
                  </h3>
                </div>
                <div class="cmp-steps-rating__body">
                          <div class="cmp-radio-list">
                            <div class="card-teaser shadow-rating">
                              <div class="card-body">
                                <div class="form-check m-0">
                                  <div class="radio-body border-bottom border-light cmp-radio-list__item">
                                  <input name="rating" type="radio" id="radio-1">
                                  <label for="radio-1">Alcune indicazioni non erano chiare</label>
                                  </div>
                                  <div class="radio-body border-bottom border-light cmp-radio-list__item">
                                  <input name="rating" type="radio" id="radio-2">
                                  <label for="radio-2">Alcune indicazioni non erano corrette</label>
                                  </div>
                                  <div class="radio-body border-bottom border-light cmp-radio-list__item">
                                  <input name="rating" type="radio" id="radio-3">
                                  <label for="radio-3">Non capivo se quello che facevo era corretto</label>
                                  </div>
                                  <div class="radio-body border-bottom border-light cmp-radio-list__item">
                                  <input name="rating" type="radio" id="radio-4">
                                  <label for="radio-4">Ho avuto problemi tecnici</label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                </div>
              </fieldset>
            </div>
            
                  </div>
            
                  <div class="d-none" data-step="2">
            <div class="cmp-steps-rating">
              <fieldset>
                <div class="iscrizioni-header w-100">
                  <h3 class="step-title d-flex align-items-center justify-content-between drop-shadow mb-5">
                    <legend class="d-block d-lg-inline">
                      Vuoi aggiungere altri dettagli?
                    </legend>
                    <span class="step">2/2</span>
                  </h3>
                </div>
                <div class="cmp-steps-rating__body">
                          <div class="form-group">
                            <label for="formGroupExampleInputWithHelp">Dettaglio</label>
                            <input type="text" class="form-control" id="formGroupExampleInputWithHelp" aria-describedby="formGroupExampleInputWithHelpDescription" maxlength="200">
                            <small id="formGroupExampleInputWithHelpDescription" class="form-text">Inserire massimo 200
                              caratteri</small>
                          </div>
                </div>
              </fieldset>
            </div>
            
                  </div>
            
                  <div class="d-flex flex-nowrap pt-4 w-100 justify-content-center button-shadow">
                    <button class="btn btn-outline-primary fw-bold me-4 btn-back" type="button">Indietro</button>
                    <button class="btn btn-primary fw-bold btn-next" type="submit" form="rating">Avanti</button>
                  </div>
                </div>
              </div>
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

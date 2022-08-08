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
            <h1 class="title-xxxlarge">Pagamento multa</h1>
          
          
          
          
          
            <p class="subtitle-small">Hai bisogno di assistenza?
                  <a href="" class="title-small-semi-bold t-primary">Contattaci</a></p>
          
          
          </div>
        </div>
  
        <div class="col-12">
          <div class="cmp-info-progress d-flex" data-progress="">
          
            <!-- Desktop -->
            <div class="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end completed">
              <div class="info-progress-body d-flex justify-content-between align-self-end align-items-end w-100 py-3">
                <span class="d-block h-100 title-medium text-uppercase">Informativa sulla privacy</span>
          
                <svg class="d-block icon icon-primary icon-sm" aria-hidden="true">
                  <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-check"></use>
                </svg>
          
              </div>
            </div>
            <!-- Desktop -->
            <div class="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end completed">
              <div class="info-progress-body d-flex justify-content-between align-self-end align-items-end w-100 py-3">
                <span class="d-block h-100 title-medium text-uppercase">Dati generali</span>
          
                <svg class="d-block icon icon-primary icon-sm" aria-hidden="true">
                  <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-check"></use>
                </svg>
          
              </div>
            </div>
            <!-- Desktop -->
            <div class="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end completed">
              <div class="info-progress-body d-flex justify-content-between align-self-end align-items-end w-100 py-3">
                <span class="d-block h-100 title-medium text-uppercase">Dati specifici del servizio</span>
          
                <svg class="d-block icon icon-primary icon-sm" aria-hidden="true">
                  <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-check"></use>
                </svg>
          
              </div>
            </div>
            <!-- Desktop -->
            <div class="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end step-active">
              <div class="info-progress-body d-flex justify-content-between align-self-end align-items-end w-100 py-3">
                <span class="d-block h-100 title-medium text-uppercase">Pagamento</span>
          
          
              </div>
            </div>
          
            <!-- Mobile -->
            <div class="iscrizioni-header d-lg-none w-100">
              <h4 class="step-title d-flex align-items-center justify-content-between drop-shadow">
                <span class="d-block d-lg-inline">
                  Riepilogo
                </span>
                <span class="step">4/4</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
  
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8">
  
          <div class="callout callout-highlight ps-3 warning">
            <div class="callout-title mb-20 d-flex align-items-center">
              <svg class="icon icon-sm" aria-hidden="true">
                <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-horn"></use>
              </svg>
               <span>Attenzione</span>
            </div>
            <p class="titillium text-paragraph">Le informazioni che hai fornito hanno valore di dichiarazione.<span class="d-lg-block"> Verifica che siano corrette.</span></p>
          </div>
          <h2 class="title-xxlarge mb-4 mt-40">Dati Generali</h2>
  
  <div class="cmp-card mb-4">
    <div class="card has-bkg-grey shadow-sm mb-0">
      <div class="card-header border-0 p-0 mb-lg-30">
        <div class="d-flex">
              <h3 class="subtitle-large mb-0" id="">Effettuato da</h3>
        </div>
  
  
  
  
      </div>
      <div class="card-body p-0">
        
                <div class="cmp-info-summary bg-white mb-4 mb-lg-30 p-3 p-lg-4">
                  <div class="card">
                
                    <div class="card-header border-bottom border-light p-0 mb-0 d-flex justify-content-between d-flex justify-content-end">
                      <h3 class="title-large-semi-bold mb-3">Giulia Bianchi</h3>
                    </div>
                
                    <div class="card-body p-0">
                      <div class="single-line-info border-light">
                        <div class="text-paragraph-small">Codice Fiscale</div>
                        <div class="border-light border-0">
                          <p class="data-text">
                            GLABNC72H25H501Y
                          </p>
                
                
                
                        </div>
                      </div>
                    </div>
                    <div class="card-footer p-0 d-none">
                    </div>
                  </div>
                </div>
                <div class="cmp-info-summary bg-white p-3 p-lg-4">
                  <div class="card">
                
                    <div class="card-header border-bottom border-light p-0 mb-0 d-flex justify-content-between d-flex justify-content-end">
                      <h3 class="title-large-semi-bold mb-3">Indirizzo</h3>
                    </div>
                
                    <div class="card-body p-0">
                      <div class="single-line-info border-light">
                        <div class="text-paragraph-small">Residenza</div>
                        <div class="border-light border-0">
                          <p class="data-text">
                            Via Roma 16, 00100 Roma, It
                          </p>
                
                
                
                        </div>
                      </div>
                    </div>
                    <div class="card-footer p-0 d-none">
                    </div>
                  </div>
                </div>    </div>
    </div>
  </div>
  
          <h2 class="title-xxlarge mb-4 pt-3 pt-lg-0">Dati specifici del servizio</h2>
  
          <div>
  <div class="cmp-card mb-4">
    <div class="card has-bkg-grey shadow-sm mb-0">
      <div class="card-header border-0 p-0 mb-lg-30">
        <div class="d-flex">
              <h3 class="subtitle-large mb-0" id="">Estremi della multa</h3>
        </div>
  
  
  
  
      </div>
      <div class="card-body p-0">
                  <div class="cmp-info-summary bg-white p-3 p-lg-4">
                    <div class="card">
                  
                  
                      <div class="card-body p-0">
                        <div class="single-line-info border-light">
                          <div class="text-paragraph-small">Codice avviso</div>
                          <div class="border-light">
                            <p class="data-text">
                              1234 5678 9012 3456 78 
                            </p>
                  
                  
                  
                          </div>
                        </div>
                        <div class="single-line-info border-light">
                          <div class="text-paragraph-small">Ente creditore</div>
                          <div class="border-light">
                            <p class="data-text">
                              Comune di Reggio Emilia
                            </p>
                  
                  
                  
                          </div>
                        </div>
                        <div class="single-line-info border-light">
                          <div class="text-paragraph-small">Codice fiscale ente creditore</div>
                          <div class="border-light">
                            <p class="data-text">
                              00154902351
                            </p>
                  
                  
                  
                          </div>
                        </div>
                        <div class="single-line-info border-light">
                          <div class="text-paragraph-small">Targa veicolo</div>
                          <div class="border-light">
                            <p class="data-text">
                              CK 345 HB
                            </p>
                  
                  
                  
                          </div>
                        </div>
                        <div class="single-line-info border-light">
                          <div class="text-paragraph-small">Data rilevazione</div>
                          <div class="border-light">
                            <p class="data-text">
                              16/08/2022
                            </p>
                  
                  
                  
                          </div>
                        </div>
                        <div class="single-line-info border-light">
                          <div class="text-paragraph-small">Data notifica</div>
                          <div class="border-light">
                            <p class="data-text">
                              15/09/2022
                            </p>
                  
                  
                  
                          </div>
                        </div>
                        <div class="single-line-info border-light">
                          <div class="text-paragraph-small">Data pagamento</div>
                          <div class="border-light">
                            <p class="data-text">
                              17/09/2022
                            </p>
                  
                  
                  
                          </div>
                        </div>
                        <div class="single-line-info border-light">
                          <div class="text-paragraph-small">Pagamento</div>
                          <div class="border-light">
                            <p class="data-text">
                              Pagamento in misura ridotta, perché il pagamento avviene dopo il 5° giorno dalla notifica.
                            </p>
                  
                  
                  
                          </div>
                        </div>
                        <div class="single-line-info border-light">
                          <div class="text-paragraph-small">Importo dovuto</div>
                          <div class="border-light">
                            <p class="data-text">
                              38,42 €
                            </p>
                  
                  
                  
                          </div>
                        </div>
                      </div>
                      <div class="card-footer p-0 d-none">
                      </div>
                    </div>
                  </div>    </div>
    </div>
  </div>
          </div>
          <div class="cmp-nav-steps">
            <nav class="steppers-nav">
              <button type="button" class="btn btn-sm steppers-btn-prev p-0">
                <svg class="icon icon-primary icon-sm" aria-hidden="true">
                  <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-chevron-left"></use>
                </svg>
                <span class="text-button-sm t-primary">Indietro</span>
              </button>
          
          
                <button type="button" class="btn btn-outline-primary bg-white btn-sm steppers-btn-save d-none d-lg-block saveBtn">
                  <span class="text-button-sm t-primary">Salva Richiesta</span>
                </button>
          
                <button type="button" class="btn btn-outline-primary bg-white btn-sm steppers-btn-save d-block d-lg-none saveBtn center">
                  <span class="text-button-sm t-primary">Salva</span>
                </button>
          
          
              <button type="button" class="btn btn-primary btn-sm steppers-btn-confirm send" data-bs-toggle="modal" data-bs-target="#modal-terms">
                <span class="text-button-sm">Invia</span>
                
              </button>
          
            </nav>
              <div id="alert-message" class="alert alert-success cmp-disclaimer rounded d-none" role="alert">
                <span class="d-inline-block text-uppercase cmp-disclaimer__message">Richiesta salvata con successo</span>
            </div>
          
          </div>      </div>
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
  
    <div class="cmp-modal">
      <div class="modal fade" tabindex="-1" role="dialog" id="modal-terms" aria-labelledby="modal-terms-modal-title">
        <div class="modal-dialog modal-dialog-centered small" role="document">
          <div class="modal-content modal-dimensions">
            <div class="cmp-modal__header modal-header pb-0">
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
              </button>
              <h2 class="cmp-modal__header-title title-mini" id="modal-terms-modal-title">Termini e condizioni</h2>
              <p class="cmp-modal__header-info header-font">Cliccando su Conferma e invia confermi di aver preso visione dei termini e delle condizioni di servizio.</p>
              <a href="#" class="cmp-modal__header-link text-success underline mt-1">Leggi termini e condizioni</a>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer pb-70 pt-0">
              <button class="btn btn-primary w-100 mx-0 fw-bold mb-4" type="submit" data-bs-toggle="modal" data-bs-target="#" form="">Conferma e invia</button>
              <button class="btn btn-outline-primary w-100 mx-0" data-bs-dismiss="modal fw-bold" type="button">Annulla</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>`;
  }
}

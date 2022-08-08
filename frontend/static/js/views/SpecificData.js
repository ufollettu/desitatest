import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.variant = params.variant; // 'no-code' | 'pending' | 'calculation' | undefined
    this.setTitle("Pagamento Multa Info");
  }

  renderNoCode() {
    return /*html*/ `
    <main>
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
          
          
            <p class="subtitle-small">Inserisci le informazioni necessarie per il pagamento della multa.<span class="d-flex d-lg-block mb-lg-2">Potrai ricontrollare tutti i dati
                    nel riepilogo, prima di effettuare il pagamento.</span></p>
          
          
          
            <p class="subtitle-small mb-8">Hai bisogno di assistenza? <a href="" class="title-small-semi-bold t-primary">Contattaci</a></p>
          
          
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
            <div class="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end step-active">
              <div class="info-progress-body d-flex justify-content-between align-self-end align-items-end w-100 py-3">
                <span class="d-block h-100 title-medium text-uppercase">Dati specifici del servizio</span>
          
          
              </div>
            </div>
            <!-- Desktop -->
            <div class="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end">
              <div class="info-progress-body d-flex justify-content-between align-self-end align-items-end w-100 py-3">
                <span class="d-block h-100 title-medium text-uppercase">Pagamento</span>
          
          
              </div>
            </div>
          
            <!-- Mobile -->
            <div class="iscrizioni-header d-lg-none w-100">
              <h4 class="step-title d-flex align-items-center justify-content-between drop-shadow">
                <span class="d-block d-lg-inline">
                  Dati specifici del servizio
                </span>
                <span class="step">3/4</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="steppers-content" aria-live="polite">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <div class="cmp-warning-box border-start border-warning border-2 mb-5">
              <div class="warning-box-icon">
                <svg class="icon icon-warning" aria-hidden="true">
                  <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-info-circle" xlink:href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-warning"></use>
                </svg>
                <span class="t-alert title-small-semi-bold">ATTENZIONE</span>
              </div>
              <div class="d-flex">
                <p class="description description-warning mb-1">Ci sono alcune informazioni mancanti o errate</p>
              </div>
            
              <ul>
                <li>
                  <a href="#warning-code" class="t-primary subtitle-small pb-1 pt-1">Codice Avviso</a>
                </li>
              </ul>
            </div>

              <p class="text-paragraph-small mb-40 mb-lg-25">I campi contraddistinti dal simbolo asterisco sono
                obbligatori</p>
              <div>
    <div class="cmp-card mb-0">
    <div class="card has-bkg-grey shadow-sm p-4 pt-lg-30 pb-lg-30 pl-lg-30 pr-lg-30">
      <div class="card-header border-0 p-0 mb-lg-30 m-0">
        <div class="d-flex">
              <h2 class="title-xxlarge mb-1 mb-lg-3 icon-required" id="warning-code">Codice avviso</h2>
        </div>




      </div>
      <div class="card-body p-0">
                      <p class="subtitle-small mb-4 mb-0">Inserisci il codice di 18 cifre presente nell’avviso della multa.
                        <a href="#" class="t-primary d-block d-lg-inline">Dove trovare il codice</a>
                      </p>
        
                        
                          <div class="form-group cmp-input mb-0 mt-0">
                            <label class="cmp-input__label" for="code">Codice avviso*</label>
                            <input type="text" class="form-control is-invalid" id="code" name="code" required>
                          </div>
                        
                        
                        <div class="form-feedback just-validate-error-label" id="code-error-0">Questo campo è richiesto</div>
        
      </div>
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
              
              
                  <button type="button" class="btn btn-primary btn-sm steppers-btn-confirm" data-bs-toggle="modal" data-bs-target="#">
                    <span class="text-button-sm">Avanti</span>
                    <svg class="icon icon-white icon-sm" aria-hidden="true">
                      <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-chevron-right"></use>
                    </svg>
                  </button>
                </nav>
                  <div id="alert-message" class="alert alert-success cmp-disclaimer rounded d-none" role="alert">
                    <span class="d-inline-block text-uppercase cmp-disclaimer__message">Richiesta salvata con successo</span>
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


    <div class="cmp-modal">
      <div class="modal fade" tabindex="-1" role="dialog" id="modal-save-1" aria-labelledby="modal-save-1-modal-title">
        <div class="modal-dialog modal-dialog-centered small" role="document">
          <div class="modal-content modal-dimensions">
            <div class="cmp-modal__header modal-header pb-0">
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
              </button>
              <h2 class="cmp-modal__header-title title-mini" id="modal-save-1-modal-title">Salva i dati in area personale</h2>
              <p class="cmp-modal__header-info header-font">Vuoi salvare
    le informazioni anche nella tua area personale? Potrai usarle anche in altre occasioni.</p>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer pb-70 pt-0">
              <button class="btn btn-primary w-100 mx-0 fw-bold mb-4" type="submit" data-bs-toggle="modal" data-bs-target="#modal-save-2" form="">Salva nella mia
    area personale</button>
              <button class="btn btn-outline-primary w-100 mx-0" data-bs-dismiss="modal fw-bold" type="button">Salva solo per questa pratica</button>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div class="cmp-modal">
      <div class="modal fade" tabindex="-1" role="dialog" id="modal-save-2" aria-labelledby="modal-save-2-modal-title">
        <div class="modal-dialog modal-dialog-centered small" role="document">
          <div class="modal-content modal-dimensions">
            <div class="cmp-modal__header modal-header pb-0">
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
              </button>
              <h2 class="cmp-modal__header-title title-mini" id="modal-save-2-modal-title">Salva i dati in area personale</h2>
              <p class="cmp-modal__header-info header-font">Vuoi salvare le informazioni anche nella tua area personale? Potrai riutilizzarle in futuro per altre pratiche.</p>
            </div>
            <div class="modal-body">
              
              
              <div class="d-flex justify-content-center align-items-center pb-70">
                <svg class="icon icon-success icon-md">
                  <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-check-circle"></use>
                </svg>
                <span class="cmp-modal__success-message">Salvataggio effettuato</span>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </main>
`;
  }

  renderPending() {
    return /*html*/ `
    <main>
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
          
          
            <p class="subtitle-small">Inserisci le informazioni necessarie per il pagamento della multa.<span class="d-lg-block mb-lg-2">Potrai ricontrollare tutti i dati
                    nel riepilogo, prima di effettuare il pagamento.</span></p>
          
          
          
            <p class="subtitle-small mb-8">Hai bisogno di assistenza? <a href="" class="title-small-semi-bold t-primary">Contattaci</a></p>
          
          
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
            <div class="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end step-active">
              <div class="info-progress-body d-flex justify-content-between align-self-end align-items-end w-100 py-3">
                <span class="d-block h-100 title-medium text-uppercase">Dati specifici del servizio</span>
          
          
              </div>
            </div>
            <!-- Desktop -->
            <div class="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end">
              <div class="info-progress-body d-flex justify-content-between align-self-end align-items-end w-100 py-3">
                <span class="d-block h-100 title-medium text-uppercase">Pagamento</span>
          
          
              </div>
            </div>
          
            <!-- Mobile -->
            <div class="iscrizioni-header d-lg-none w-100">
              <h4 class="step-title d-flex align-items-center justify-content-between drop-shadow">
                <span class="d-block d-lg-inline">
                  Dati specifici del servizio
                </span>
                <span class="step">3/4</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8">
          <form class="needs-validation" id="justValidateMulta">
            <p class="text-paragraph-small mt-3 mb-40 mb-lg-25">I campi contraddistinti dal simbolo asterisco sono
              obbligatori</p>
  
  <div class="cmp-card mb-0">
    <div class="card has-bkg-grey shadow-sm p-4 pt-lg-30 pb-lg-30 pl-lg-30 pr-lg-30">
      <div class="card-header border-0 p-0 mb-lg-30 m-0">
        <div class="d-flex">
              <h2 class="title-xxlarge mb-0 icon-required" id="">Codice avviso</h2>
        </div>
  
  
  
  
      </div>
      <div class="card-body p-0">
        
                  <p class="subtitle-small pb-3 mb-4">Inserisci il codice di 18 cifre presente nell’avviso della multa.
                    <a href="#" class="t-primary d-block d-lg-inline mt-1">Dove trovare il codice</a>
                  </p>
        
             
                    
                      <div class="form-group cmp-input mb-4 mb-lg-30 mt-0">
                        <label class="cmp-input__label" for="code">Codice avviso*</label>
                         <input type="text" class="form-control just-validate-success-field" id="code" name="code" required value="1234 5678 9012 3456 78 ">
                      </div>
                    
                    
        
        
        
                  <div class="cmp-info-summary bg-white p-3 p-lg-4 mb-4 mb-lg-30">
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
                          <div class="text-paragraph-small">Importo entro 60 gg</div>
                          <div class="border-light">
                            <p class="data-text">
                              41,00 €
                            </p>
                  
                  
                  
                          </div>
                        </div>
                        <div class="single-line-info border-light">
                          <div class="text-paragraph-small">Spese notfica</div>
                          <div class="border-light">
                            <p class="data-text">
                              13,88 €
                            </p>
                  
                  
                  
                          </div>
                        </div>
                        <div class="single-line-info border-light">
                          <div class="text-paragraph-small">Spese procedura</div>
                          <div class="border-light">
                            <p class="data-text">
                              0,00 €
                            </p>
                  
                  
                  
                          </div>
                        </div>
                        <div class="single-line-info border-light">
                          <div class="text-paragraph-small">Importo totale entro 60 gg</div>
                          <div class="border-light">
                            <p class="data-text">
                              54,88 €
                            </p>
                  
                  
                  
                          </div>
                        </div>
                      </div>
                      <div class="card-footer p-0">
                      </div>
                    </div>
                  </div>
                  <div class="bg-white p-3 p-lg-4">
                    <h2 class="title-xxlarge">Calcolo importo</h2>
                    <p class="text-paragraph mb-4">
                      Per il calcolo del corretto importo da pagare, inserisci la data in cui hai ricevuto l'avviso. Il
                      conteggio dei giorni parte dalla data successiva alla ricezione dell'avviso.</p>
        
        
                    <div class="calendar-partials card px-0">
                      <div class="form-group mb-4">
                        <label class="active" for="date-1">Inserisci la data di ricevuta avviso*</label>
                        <input type="date" class="it-date-datepicker icon-primary form-control" id="date-1" name="dateStandard" required>
                      </div>
                    </div>
                    <p class="title-large-semi-bold mb-0">Importo dovuto <span class="d-block d-lg-inline">--,-- €</span>
                    </p>
                  </div>
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
            
            
                <button type="submit" class="btn btn-primary btn-sm steppers-btn-confirm" data-bs-validate="validate">
                  <span class="text-button-sm">Avanti</span>
                  <svg class="icon icon-white icon-sm" aria-hidden="true">
                    <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-chevron-right"></use>
                  </svg>
                </button>
              </nav>
                <div id="alert-message" class="alert alert-success cmp-disclaimer rounded d-none" role="alert">
                  <span class="d-inline-block text-uppercase cmp-disclaimer__message">Richiesta salvata con successo</span>
              </div>
            
            </div>        </form>
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
    <div class="cmp-modal">
      <div class="modal fade" tabindex="-1" role="dialog" id="modal-save-1" aria-labelledby="modal-save-1-modal-title">
        <div class="modal-dialog modal-dialog-centered small" role="document">
          <div class="modal-content modal-dimensions">
            <div class="cmp-modal__header modal-header pb-0">
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
              </button>
              <h2 class="cmp-modal__header-title title-mini" id="modal-save-1-modal-title">Salva i dati in area personale</h2>
              <p class="cmp-modal__header-info header-font">Vuoi salvare
    le informazioni anche nella tua area personale? Potrai usarle anche in altre occasioni.</p>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer pb-70 pt-0">
              <button class="btn btn-primary w-100 mx-0 fw-bold mb-4" type="submit" data-bs-toggle="modal" data-bs-target="#modal-save-2" form="">Salva nella mia
    area personale</button>
              <button class="btn btn-outline-primary w-100 mx-0" data-bs-dismiss="modal fw-bold" type="button">Salva solo per questa pratica</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    <div class="cmp-modal">
      <div class="modal fade" tabindex="-1" role="dialog" id="modal-save-2" aria-labelledby="modal-save-2-modal-title">
        <div class="modal-dialog modal-dialog-centered small" role="document">
          <div class="modal-content modal-dimensions">
            <div class="cmp-modal__header modal-header pb-0">
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
              </button>
              <h2 class="cmp-modal__header-title title-mini" id="modal-save-2-modal-title">Salva i dati in area personale</h2>
              <p class="cmp-modal__header-info header-font">Vuoi salvare le informazioni anche nella tua area personale? Potrai riutilizzarle in futuro per altre pratiche.</p>
            </div>
            <div class="modal-body">
              
              
              <div class="d-flex justify-content-center align-items-center pb-70">
                <svg class="icon icon-success icon-md">
                  <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-check-circle"></use>
                </svg>
                <span class="cmp-modal__success-message">Salvataggio effettuato</span>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
    `;
  }

  renderCalculation() {
    return /*html*/ `
    <main>
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
          
          
            <p class="subtitle-small">Inserisci le informazioni necessarie per il pagamento della multa.<span class="d-lg-block mb-lg-2">Potrai ricontrollare tutti i dati
                    nel riepilogo, prima di effettuare il pagamento.</span></p>
          
          
          
            <p class="subtitle-small mb-8">Hai bisogno di assistenza? <a href="" class="title-small-semi-bold t-primary">Contattaci</a></p>
          
          
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
            <div class="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end step-active">
              <div class="info-progress-body d-flex justify-content-between align-self-end align-items-end w-100 py-3">
                <span class="d-block h-100 title-medium text-uppercase">Dati specifici del servizio</span>
          
          
              </div>
            </div>
            <!-- Desktop -->
            <div class="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end">
              <div class="info-progress-body d-flex justify-content-between align-self-end align-items-end w-100 py-3">
                <span class="d-block h-100 title-medium text-uppercase">Pagamento</span>
          
          
              </div>
            </div>
          
            <!-- Mobile -->
            <div class="iscrizioni-header d-lg-none w-100">
              <h4 class="step-title d-flex align-items-center justify-content-between drop-shadow">
                <span class="d-block d-lg-inline">
                  Dati specifici del servizio
                </span>
                <span class="step">3/4</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8">
  
            <p class="text-paragraph-small mt-3 mb-40 mb-lg-25">I campi contraddistinti dal simbolo asterisco sono
              obbligatori</p>
  
  <div class="cmp-card mb-0">
    <div class="card has-bkg-grey shadow-sm p-4 pt-lg-30 pb-lg-30 pl-lg-30 pr-lg-30">
      <div class="card-header border-0 p-0 mb-lg-30 m-0">
        <div class="d-flex">
              <h2 class="title-xxlarge mb-0 icon-required" id="">Codice avviso</h2>
        </div>
  
  
  
  
      </div>
      <div class="card-body p-0">
        
                  <p class="subtitle-small pb-3 mb-4">Inserisci il codice di 18 cifre presente nell’avviso della multa.
                    <a href="#" class="t-primary d-block d-lg-inline mt-1">Dove trovare il codice</a>
                  </p>
        
             
                    
                      <div class="form-group cmp-input mb-4 mb-lg-30 mt-0">
                        <label class="cmp-input__label" for="code">Codice avviso*</label>
                         <input type="text" class="form-control just-validate-success-field" id="code" name="code" required value="1234 5678 9012 3456 78 ">
                      </div>
                    
                    
        
        
        
                  <div class="cmp-info-summary bg-white p-3 p-lg-4 mb-4 mb-lg-30">
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
                          <div class="text-paragraph-small">Importo entro 60 gg</div>
                          <div class="border-light">
                            <p class="data-text">
                              41,00 €
                            </p>
                  
                  
                  
                          </div>
                        </div>
                        <div class="single-line-info border-light">
                          <div class="text-paragraph-small">Spese notfica</div>
                          <div class="border-light">
                            <p class="data-text">
                              13,88 €
                            </p>
                  
                  
                  
                          </div>
                        </div>
                        <div class="single-line-info border-light">
                          <div class="text-paragraph-small">Spese procedura</div>
                          <div class="border-light">
                            <p class="data-text">
                              0,00 €
                            </p>
                  
                  
                  
                          </div>
                        </div>
                        <div class="single-line-info border-light">
                          <div class="text-paragraph-small">Importo totale entro 60 gg</div>
                          <div class="border-light">
                            <p class="data-text">
                              54,88 €
                            </p>
                  
                  
                  
                          </div>
                        </div>
                      </div>
                      <div class="card-footer p-0">
                      </div>
                    </div>
                  </div>
                  <div class="bg-white p-3 p-lg-4">
                    <h2 class="title-xxlarge">Calcolo importo</h2>
                    <p class="text-paragraph mb-4">
                      Per il calcolo del corretto importo da pagare, inserisci la data in cui hai ricevuto l'avviso. Il
                      conteggio dei giorni parte dalla data successiva alla ricezione dell'avviso.</p>
        
        
                    <div class="calendar-partials card px-0">
                      <div class="form-group mb-4">
                        <label class="active" for="date-1">Inserisci la data di ricevuta avviso*</label>
                        <input type="date" class="it-date-datepicker icon-primary form-control" id="date-1" name="dateStandard" required>
                      </div>
                    </div>
        
                    <p class="title-large-semi-bold mb-2 mb-lg-4">Importo dovuto <span class="d-block d-lg-inline">38,42 €</span>
                    </p>
        
                    <p class="mb-0">Stai pagando <strong>entro 5 giorni</strong> dalla ricezione dell'avviso. L'importo da pagare è stato <strong>ridotto del 30%</strong>.</p>
                  </div>
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
            
            
                <button type="button" class="btn btn-primary btn-sm steppers-btn-confirm" data-bs-toggle="modal" data-bs-target="#">
                  <span class="text-button-sm">Avanti</span>
                  <svg class="icon icon-white icon-sm" aria-hidden="true">
                    <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-chevron-right"></use>
                  </svg>
                </button>
              </nav>
                <div id="alert-message" class="alert alert-success cmp-disclaimer rounded d-none" role="alert">
                  <span class="d-inline-block text-uppercase cmp-disclaimer__message">Richiesta salvata con successo</span>
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
  
    <div class="cmp-modal">
      <div class="modal fade" tabindex="-1" role="dialog" id="modal-save-1" aria-labelledby="modal-save-1-modal-title">
        <div class="modal-dialog modal-dialog-centered small" role="document">
          <div class="modal-content modal-dimensions">
            <div class="cmp-modal__header modal-header pb-0">
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
              </button>
              <h2 class="cmp-modal__header-title title-mini" id="modal-save-1-modal-title">Salva i dati in area personale</h2>
              <p class="cmp-modal__header-info header-font">Vuoi salvare
    le informazioni anche nella tua area personale? Potrai usarle anche in altre occasioni.</p>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer pb-70 pt-0">
              <button class="btn btn-primary w-100 mx-0 fw-bold mb-4" type="submit" data-bs-toggle="modal" data-bs-target="#modal-save-2" form="">Salva nella mia
    area personale</button>
              <button class="btn btn-outline-primary w-100 mx-0" data-bs-dismiss="modal fw-bold" type="button">Salva solo per questa pratica</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    <div class="cmp-modal">
      <div class="modal fade" tabindex="-1" role="dialog" id="modal-save-2" aria-labelledby="modal-save-2-modal-title">
        <div class="modal-dialog modal-dialog-centered small" role="document">
          <div class="modal-content modal-dimensions">
            <div class="cmp-modal__header modal-header pb-0">
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
              </button>
              <h2 class="cmp-modal__header-title title-mini" id="modal-save-2-modal-title">Salva i dati in area personale</h2>
              <p class="cmp-modal__header-info header-font">Vuoi salvare le informazioni anche nella tua area personale? Potrai riutilizzarle in futuro per altre pratiche.</p>
            </div>
            <div class="modal-body">
              
              
              <div class="d-flex justify-content-center align-items-center pb-70">
                <svg class="icon icon-success icon-md">
                  <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-check-circle"></use>
                </svg>
                <span class="cmp-modal__success-message">Salvataggio effettuato</span>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
    `;
  }

  renderDefault() {
    return /*html*/ `                                 <main>
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
          
          
            <p class="subtitle-small">Inserisci le informazioni necessarie per il pagamento della multa.<span class="d-flex d-lg-block mb-lg-2">Potrai ricontrollare tutti i dati
                    nel riepilogo, prima di effettuare il pagamento.</span></p>
          
          
          
            <p class="subtitle-small mb-8">Hai bisogno di assistenza? <a href="" class="title-small-semi-bold t-primary">Contattaci</a></p>
          
          
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
            <div class="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end step-active">
              <div class="info-progress-body d-flex justify-content-between align-self-end align-items-end w-100 py-3">
                <span class="d-block h-100 title-medium text-uppercase">Dati specifici del servizio</span>
          
          
              </div>
            </div>
            <!-- Desktop -->
            <div class="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end">
              <div class="info-progress-body d-flex justify-content-between align-self-end align-items-end w-100 py-3">
                <span class="d-block h-100 title-medium text-uppercase">Pagamento</span>
          
          
              </div>
            </div>
          
            <!-- Mobile -->
            <div class="iscrizioni-header d-lg-none w-100">
              <h4 class="step-title d-flex align-items-center justify-content-between drop-shadow">
                <span class="d-block d-lg-inline">
                  Dati specifici del servizio
                </span>
                <span class="step">3/4</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      
      <div class="steppers-content" aria-live="polite">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
            <p class="text-paragraph-small mt-3 mb-40 mb-lg-25">I campi contraddistinti dal simbolo asterisco sono
              obbligatori</p>
  
  <div class="cmp-card mb-0">
    <div class="card has-bkg-grey shadow-sm p-4 pt-lg-30 pb-lg-30 pl-lg-30 pr-lg-30">
      <div class="card-header border-0 p-0 mb-lg-30 m-0">
        <div class="d-flex">
              <h2 class="title-xxlarge mb-0 icon-required" id="">Codice avviso</h2>
        </div>
  
  
  
  
      </div>
      <div class="card-body p-0">
                  <p class="subtitle-small pb-4 mb-0">Inserisci il codice di 18 cifre presente nell’avviso della multa.
                    <a href="#" class="t-primary d-block d-lg-inline">Dove trovare il codice</a>
                  </p>
                  <div class="bg-white">
                    
                      <div class="form-group cmp-input mb-0 mt-0">
                        <label class="cmp-input__label" for="code">Codice avviso*</label>
                         <input type="text" class="form-control" id="code" name="code" required>
                      </div>
                    
                    
                  </div>
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
            
            
                <button type="submit" class="btn btn-primary btn-sm steppers-btn-confirm" data-bs-validate="validate">
                  <span class="text-button-sm">Avanti</span>
                  <svg class="icon icon-white icon-sm" aria-hidden="true">
                    <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-chevron-right"></use>
                  </svg>
                </button>
              </nav>
                <div id="alert-message" class="alert alert-success cmp-disclaimer rounded d-none" role="alert">
                  <span class="d-inline-block text-uppercase cmp-disclaimer__message">Richiesta salvata con successo</span>
              </div>
            
            </div>        </div>
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
  
    <div class="cmp-modal">
      <div class="modal fade" tabindex="-1" role="dialog" id="modal-save-1" aria-labelledby="modal-save-1-modal-title">
        <div class="modal-dialog modal-dialog-centered small" role="document">
          <div class="modal-content modal-dimensions">
            <div class="cmp-modal__header modal-header pb-0">
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
              </button>
              <h2 class="cmp-modal__header-title title-mini" id="modal-save-1-modal-title">Salva i dati in area personale</h2>
              <p class="cmp-modal__header-info header-font">Vuoi salvare
    le informazioni anche nella tua area personale? Potrai usarle anche in altre occasioni.</p>
            </div>
            <div class="modal-body">
            </div>
            <div class="modal-footer pb-70 pt-0">
              <button class="btn btn-primary w-100 mx-0 fw-bold mb-4" type="submit" data-bs-toggle="modal" data-bs-target="#modal-save-2" form="">Salva nella mia
    area personale</button>
              <button class="btn btn-outline-primary w-100 mx-0" data-bs-dismiss="modal fw-bold" type="button">Salva solo per questa pratica</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    
    <div class="cmp-modal">
      <div class="modal fade" tabindex="-1" role="dialog" id="modal-save-2" aria-labelledby="modal-save-2-modal-title">
        <div class="modal-dialog modal-dialog-centered small" role="document">
          <div class="modal-content modal-dimensions">
            <div class="cmp-modal__header modal-header pb-0">
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
              </button>
              <h2 class="cmp-modal__header-title title-mini" id="modal-save-2-modal-title">Salva i dati in area personale</h2>
              <p class="cmp-modal__header-info header-font">Vuoi salvare le informazioni anche nella tua area personale? Potrai riutilizzarle in futuro per altre pratiche.</p>
            </div>
            <div class="modal-body">
              
              
              <div class="d-flex justify-content-center align-items-center pb-70">
                <svg class="icon icon-success icon-md">
                  <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-check-circle"></use>
                </svg>
                <span class="cmp-modal__success-message">Salvataggio effettuato</span>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>`;
  }

  async getHtml() {
    switch (this.variant) {
      case "no-code":
        return this.renderNoCode();
      case "pending":
        return this.renderPending();
      case "calculation":
        return this.renderCalculation();
      case undefined:
      default:
        return this.renderDefault();
    }
  }
}

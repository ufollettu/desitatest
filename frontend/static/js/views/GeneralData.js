import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super(params);
    this.setTitle("Pagamento Multa Info");
  }

  async getHtml() {
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
          
          
            <p class="subtitle-small">Inserisci le informazioni necessarie per il pagamento della multa.<br class="d-none d-md-block"> Potrai ricontrollare tutti i dati nel riepilogo, prima di effettuare il pagamento.</p>
          
          
          
            <p class="subtitle-small mt-lg-2">Hai bisogno di assistenza? <a class="title-small-semi-bold t-primary" href="#">Contattaci</a></p>
          
          
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
            <div class="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end step-active">
              <div class="info-progress-body d-flex justify-content-between align-self-end align-items-end w-100 py-3">
                <span class="d-block h-100 title-medium text-uppercase">Dati generali</span>
          
          
              </div>
            </div>
            <!-- Desktop -->
            <div class="info-progress-wrapper d-none d-lg-flex w-100 px-3 flex-column justify-content-end">
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
                  Dati generali
                </span>
                <span class="step">2/4</span>
              </h4>
              <p class="title-xsmall mt-40 mb-3">I campi contraddistinti dal simbolo asterisco sono obbligatori</p>
            </div>
          </div>
        </div>
      </div>
      <div class="steppers-content" aria-live="polite">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-8">
  
  <div class="cmp-card mb-0">
    <div class="card has-bkg-grey shadow-sm p-big">
      <div class="card-header border-0 p-0 mb-lg-30">
        <div class="d-flex">
              <h2 class="title-xxlarge mb-1" id="">Effettuato da</h2>
        </div>
        <p class="subtitle-small mb-0">Informazioni sulla persona che effettua il pagamento, che può essere diversa da chi ha ricevuto la
              multa.</p>
  
  
  
  
      </div>
      <div class="card-body p-0">
                    <div class="cmp-info-button-card">
                      <div class="card p-3 p-lg-4">
                        <div class="card-body p-0">
                          <h3 class="big-title mb-0">Giulia Rossi</h3>
                    
                    
                    
                    
                          <p class="card-info">Codice Fiscale <br> <span>GLABNC72H25H501Y</span></p>
                    
                    
                    
                    
                          <div class="accordion-item">
                            <div class="accordion-header" id="heading-collapse-benef-1">
                              <button class="collapsed accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-benef-1" aria-expanded="false" aria-controls="collapse-benef-1">
                                <span class="d-flex align-items-center">
                                Mostra tutto
                                  <svg class="icon icon-primary icon-sm">
                                    <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-expand"></use>
                                  </svg>
                                </span>
                              </button>
                            </div>
                            <div id="collapse-benef-1" class="accordion-collapse collapse" role="region">
                              <div class="accordion-body p-0">
                                  <div class="cmp-info-summary bg-white has-border">
                                    <div class="card">
                                  
                                      <div class="card-header border-bottom border-light p-0 mb-0 d-flex justify-content-between d-flex justify-content-end">
                                        <h4 class="title-large-semi-bold mb-3">Anagrafica</h4>
                                        <a href="#" class="text-decoration-none"><span class="text-button-sm-semi t-primary">Modifica</span></a>
                                      </div>
                                  
                                      <div class="card-body p-0">
                                        <div class="single-line-info border-light">
                                          <div class="text-paragraph-small">Nome</div>
                                          <div class="border-light">
                                            <p class="data-text">
                                              Giulia
                                            </p>
                                  
                                  
                                  
                                          </div>
                                        </div>
                                        <div class="single-line-info border-light">
                                          <div class="text-paragraph-small">Cognome</div>
                                          <div class="border-light">
                                            <p class="data-text">
                                              Bianchi
                                            </p>
                                  
                                  
                                  
                                          </div>
                                        </div>
                                        <div class="single-line-info border-light">
                                          <div class="text-paragraph-small">Codice fiscale</div>
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
                                  </div>        <div class="cmp-info-summary bg-white has-border">
                                    <div class="card">
                                  
                                      <div class="card-header border-bottom border-light p-0 mb-0 d-flex justify-content-between d-flex justify-content-end">
                                        <h4 class="title-large-semi-bold mb-3">Indirizzo</h4>
                                        <a href="#" class="text-decoration-none"><span class="text-button-sm-semi t-primary">Modifica</span></a>
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
                                  </div>
                              </div>
                            </div>
                          </div>
                    
                    
                    
                    
                    
                        </div>
                      </div>
                    </div>    </div>
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
            
            
                <button type="button" class="btn btn-primary btn-sm steppers-btn-confirm" data-bs-toggle="modal" data-bs-target="#modal-save-1">
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
  
    <div class="cmp-modal">
      <div class="modal it-dialog-scrollable fade" tabindex="-1" role="dialog" id="modal-documents" aria-labelledby="modal-documents-modal-title">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="cmp-modal__header modal-header pb-0">
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
              </button>
              <h2 class="cmp-modal__header-title title-large-semi-bold" id="modal-documents-modal-title">Documenti</h2>
              <p class="cmp-modal__header-info">I campi
    contraddistinti dal
    simbolo asterisco sono obbligatori</p>
            </div>
            <div class="modal-body">
              <div>
                <form method="post" action="" enctype="multipart/form-data" id="documents-form">
                <div class="cmp-upload">
                  <span class="cmp-upload__label mb-3">*</span>
                  <ul class="upload-file-list cmp-upload__list m-0">
                    <li class="upload-file success">
                      <svg class="icon icon-sm" aria-hidden="true">
                        <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-file"></use>
                      </svg>
                
                      <p class="cmp-upload__list-item">
                        <span class="visually-hidden">File caricato:</span>
                        
                      </p>
                      <button>
                        <span class="visually-hidden">Elimina il documento</span>
                        <svg class="icon icon-sm" aria-hidden="true">
                          <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-close"></use>
                        </svg>
                      </button>
                    </li>
                  </ul>
                  <input type="file" name="upload1" id="upload-" class="upload" multiple="multiple">
                  <label for="upload-" class="w-100 d-flex justify-content-center w-100">
                    <svg class="icon icon-sm" aria-hidden="true">
                      <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-upload"></use>
                    </svg>
                    <span>Carica documento</span>
                  </label>
                    <p class="mt-2 cmp-upload__info mb-4">Caricare uno o più file in formato pdf, jpg, png</p>
                </div>
                <div class="cmp-upload">
                  <span class="cmp-upload__label mb-3">*</span>
                  <ul class="upload-file-list cmp-upload__list m-0">
                    <li class="upload-file success">
                      <svg class="icon icon-sm" aria-hidden="true">
                        <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-file"></use>
                      </svg>
                
                      <p class="cmp-upload__list-item">
                        <span class="visually-hidden">File caricato:</span>
                        
                      </p>
                      <button>
                        <span class="visually-hidden">Elimina il documento</span>
                        <svg class="icon icon-sm" aria-hidden="true">
                          <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-close"></use>
                        </svg>
                      </button>
                    </li>
                  </ul>
                  <input type="file" name="upload1" id="upload-" class="upload" multiple="multiple">
                  <label for="upload-" class="w-100 d-flex justify-content-center w-100">
                    <svg class="icon icon-sm" aria-hidden="true">
                      <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-upload"></use>
                    </svg>
                    <span>Carica documento</span>
                  </label>
                    <p class="mt-2 cmp-upload__info mb-4">Caricare uno o più file in formato pdf, jpg, png</p>
                </div>
                </form>
              </div>
            </div>
            <div class="modal-footer shadow flex-nowrap pt-4 w-100">
              <button class="btn btn-outline-primary w-100 fw-bold me-4" type="button" data-bs-dismiss="modal">Annulla</button>
              <button class="btn btn-primary w-100 fw-bold" type="submit" form="">Salva</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div class="cmp-modal-scrollable">
      <div class="modal fade" tabindex="-1" role="dialog" id="modal-isee" aria-labelledby="modal-isee-modal-title">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header flex-column align-items-start">
              <button class="btn-close" type="button" data-bs-dismiss="modal" aria-label="Chiudi finestra modale">
              </button>
                <div class="cmp-modal-scrollable__header">
                  <h2 class="cmp-modal-scrollable__header-title" id="modal-isee-modal-title">ISEE</h2>
                  <p class="cmp-modal-scrollable__header-info">I campi contraddistinti dal simbolo asterisco sono obbligatori</p>
                </div>
            </div>
    
            <div class="modal-body">
                
                  <form action="" id="isee-form">
                    
                      <div class="form-group cmp-input">
                        <label class="cmp-input__label" for="isee">Valore ISEE*</label>
                         <input type="text" class="form-control" id="isee" name="isee" required>
                          <div class="d-flex">
                          <span class="form-text cmp-input__text">
                          Inserisci valore ISEE</span>
                          </div>
                      </div>
                    
                    
                    
                      <div class="form-group cmp-input">
                        <label class="cmp-input__label" for="scadenza">Scadenza ISEE*</label>
                         <input type="text" class="form-control" id="scadenza" name="scadenza" required>
                          <div class="d-flex">
                          <span class="form-text cmp-input__text">
                          Inserisci data scadenza ISEE
                        gg/mm/aaaa</span>
                          </div>
                      </div>
                    
                    
                    
                      <div class="form-group cmp-input">
                        <label class="cmp-input__label" for="anno-protocollo">Anno protocollo*</label>
                         <input type="text" class="form-control" id="anno-protocollo" name="anno-protocollo" required>
                          <div class="d-flex">
                          <span class="form-text cmp-input__text">
                          Inserisci numero anno
                        protocollo</span>
                          </div>
                      </div>
                    
                    
                    
                      <div class="form-group cmp-input">
                        <label class="cmp-input__label" for="numero-protocollo">Numero protocollo*</label>
                         <input type="text" class="form-control" id="numero-protocollo" name="numero-protocollo" required>
                          <div class="d-flex">
                          <span class="form-text cmp-input__text">
                          Inserisci numero
                        protocollo</span>
                          </div>
                      </div>
                    
                    
                    
                      <div class="form-group cmp-input">
                        <label class="cmp-input__label" for="codice-filiale">Codice filiale protocollo*</label>
                         <input type="text" class="form-control" id="codice-filiale" name="codice-filiale" required>
                          <div class="d-flex">
                          <span class="form-text cmp-input__text">
                          Inserisci numero codice
                        filiale protocollo</span>
                          </div>
                      </div>
                    
                    
                    <div class="cmp-upload">
                      <span class="cmp-upload__label">Modulo condizione lavorativa*</span>
                      <ul class="upload-file-list cmp-upload__list m-0">
                        <li class="upload-file error">
                          <svg class="icon icon-sm" aria-hidden="true">
                            <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-file"></use>
                          </svg>
                          <p>
                            <span class="visually-hidden">Errore caricamento file:</span>
                            documento_ISEE-2019.pdf<span class="upload-file-weight"></span>
                          </p>
                          <button>
                            <span class="visually-hidden">Elimina file caricato nome-file-04.jpg</span>
                            <svg class="icon" aria-hidden="true">
                              <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-close"></use>
                            </svg>
                          </button>
                        </li>
                      </ul>
                      <input type="file" name="upload1" id="upload-cond-lav-isee" class="upload" multiple="multiple">
                      <label for="upload-cond-lav-isee" class="w-100 d-flex justify-content-center w-100">
                        <svg class="icon icon-sm" aria-hidden="true">
                          <use href="/assets/bootstrap-italia/dist/svg/sprites.svg#it-upload"></use>
                        </svg>
                        <span>Carica documento</span>
                      </label>
                        <p class="mt-2 cmp-upload__info mb-4">Caricare uno o più file in formato pdf, jpg, png</p>
                    </div>
                  </form>
                
    
            </div>
            <div class="modal-footer shadow flex-nowrap pt-4 w-100">
              <button class="btn btn-outline-primary w-100 fw-bold me-4" data-bs-dismiss="modal" type="button">Annulla</button>
              <button class="btn btn-primary w-100 fw-bold" type="submit" form="">Salva</button>
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
  </div></main>`;
  }
}

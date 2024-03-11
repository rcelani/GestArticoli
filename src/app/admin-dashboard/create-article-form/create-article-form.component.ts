import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { ArticleFormService } from './article-form-service.service';

@Component({
  selector: 'app-create-article-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-article-form.component.html',
  styleUrl: './create-article-form.component.css'
})
export class CreateArticleFormComponent {
  messageTitle: string = '';
  errorTitle: boolean = false;
  messageSubtitle: string = '';
  errorSub: boolean = false;

  msgErrForm: string = '';
  imgMessageErr: string = '';
  formArticles!: FormGroup;

  arrLanguages: Array<string> = [
    "Italiano", "Inglese", "Spagnolo", "Francese"
  ];

  arrCapoluoghi: Array<string> = [
    "Roma", "Potenza", "Catanzaro", "Napoli",
    "Bologna", "Trieste", "L'Aquila", "Genova",
    "Milano", "Ancona", "Campobasso", "Torino",
    "Bari", "Cagliari", "Palermo", "Firenze",
    "Trento", "Perugia", "Aosta", "Venezia"
  ].sort();

  constructor(
    private formBuilder: FormBuilder,
    private articleFormService: ArticleFormService
  ) { }

  ngOnInit() {
    /* qui definisco e inizializzo il form group dell'articolo usando i validators */
    this.formArticles = this.formBuilder.group({
      lingua: [this.arrLanguages[0], Validators.required],
      articleTitle: ['', [Validators.required, Validators.maxLength(15)]],
      articleSubtitle: ['', Validators.maxLength(17)],
      description: ['', Validators.required],
      cittaArticle: ['', Validators.required],
      articleImg: [null, Validators.required], /* manca controllo max misure img */
      paragraphs: this.formBuilder.array([]) /* creo array di paragrafi */
    });
  }

  /* sto specificando la proprietà che voglio accedere del form e associarlo e specifico il tipo di ritorno */
  get paragraphs() {
    return this.formArticles.get('paragraphs') as FormArray;
  }

  /* metodo che crea un paragrafo nuovo e lo aggiunge all'array di paragrafi */
  addParagraph() {
    this.paragraphs.push(this.formBuilder.group({
        paragraphTitle: ['', Validators.required],
        paragraphText: ['', Validators.required],
        cittaParagraph: ['', Validators.required],
        paragraphImg: [null, Validators.required]
      })
    );
  }

  inputMaxWord(event: any, maxWord: number, keyForm: string) {
    let textTitle = event.target.value;
    let wordCount = textTitle.split(/\s+/).length;  /* divido la stringa dagli spazi */ 
    if (wordCount > maxWord && keyForm === 'articleTitle') {
      this.messageTitle = "Il titolo non può contenere più di" + maxWord + " parole.";
      this.errorTitle = true;
    } else if (wordCount > maxWord && keyForm === 'articleSubtitle') {
      this.messageSubtitle = "Il sottotitolo non può contenere più di" + maxWord + " parole.";
      this.errorSub = true;
    } else {
      if (keyForm === 'articleTitle') {
        this.messageTitle = "";
        this.errorTitle = false;
      } else if (keyForm === 'articleSubtitle') {
        this.messageSubtitle = "";
        this.errorSub = false;
      }
    }
  }

  /* resetta il singolo paragrafo passando l'index come parametro e metodo reset */
  resetParagraph(index: number) {
    this.paragraphs.at(index).reset();
  }

  /* submit del form */
  
  articlesImageChange(event: any) {
    // implementare evento cambio img su Articolo 
/*     const file = event.target.files[0];
    this.formArticles.patchValue({ articleImg: file }); */
  }
  
  paragraphImageChange(event: any, index: number) {
    // implementare evento cambio immagine dei Paragrafi
/*     const file = event.target.files[0];
    this.paragraphs.at(index).patchValue({ paragraphImg: file }); */
  }
  
  onSubmit() {
    if (this.formArticles.valid) {
      this.articleFormService.sendForm(this.formArticles.value);
    } else {
      this.msgErrForm = "Errore nell'invio del Form";
      console.log('Form non valido');
    }
  }
}






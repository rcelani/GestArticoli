import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-article-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-article-form.component.html',
  styleUrl: './create-article-form.component.css'
})
export class CreateArticleFormComponent {
  formArticles!: FormGroup;
  arrLanguages: Array<string> = ["Italiano", "Inglese", "Spagnolo", "Francese"];
  arrCapoluoghi: Array<string> = [
    "L'Aquila", "Potenza", "Catanzaro", "Napoli",
    "Bologna", "Trieste", "Roma", "Genova",
    "Milano", "Ancona", "Campobasso", "Torino",
    "Bari", "Cagliari", "Palermo", "Firenze",
    "Trento", "Perugia", "Aosta", "Venezia"
  ];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    /* qui definisco e inizializzo il form group dell'articolo usando i validators */
    this.formArticles = this.formBuilder.group({
      lingua: [this.arrLanguages[0], Validators.required],
      title: ['', [Validators.required, Validators.maxLength(15)]],
      subtitle: ['', Validators.maxLength(17)],
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

  /* resetta il singolo paragrafo passando l'index come parametro e metodo reset */
  resetParagraph(index: number) {
    this.paragraphs.at(index).reset();
  }

  /* submit del form */
  onSubmit() {
    if (this.formArticles.valid) {
      console.log(this.formArticles.value);
      // implementare invio alle api che salverà il dato nel db
    } else {
      console.error('Form is invalid');
      /* implementare messaggio di errore */
    }
  }

  articlesImageChange(event: any) {
    // implementare evento cambio immagine dell'Articolo 
  }

  paragraphImageChange(event: any, index: number) {
    // implementare evento cambio immagine dei Paragrafi
  }
}






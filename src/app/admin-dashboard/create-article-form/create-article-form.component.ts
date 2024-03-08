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
  languages: Array<string> = [
    "Italiano",
    "Inglese",
    "Spagnolo",
    "Francese"
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    /* qui definisco e inizializzo il form group dell'articolo usando i validators */
    this.formArticles = this.fb.group({
      lingua: [this.languages[0], Validators.required],
      title: ['', [Validators.required, Validators.maxLength(15)]],
      subtitle: ['', Validators.maxLength(17)],
      description: ['', Validators.required],
      destinationID: ['', Validators.required],
      mediaImage: [null, Validators.required], /* manca controllo max misure img */
      paragraphs: this.fb.array([]) /* creo array di paragrafi */
    });
  }

  onSubmit() {
    if (this.formArticles.valid) {
      console.log(this.formArticles.value);
    } else {
      console.error('Form is invalid');
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticleFormService {

  constructor() { }

  sendForm(formArticles: any) {
    const localData = localStorage.getItem('formArticles');
    let formDataArray = localData ? JSON.parse(localData) : [];
    formDataArray.push(formArticles);
    localStorage.setItem('formData', JSON.stringify(formDataArray));
    console.log('Dati salvati nel database locale:', formArticles);
  }
}

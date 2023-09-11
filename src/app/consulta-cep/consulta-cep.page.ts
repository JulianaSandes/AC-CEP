import { Component } from '@angular/core';
import { ViaCepService } from '../viacep.service';

@Component({
  selector: 'app-consulta-cep',
  templateUrl: 'consulta-cep.page.html',
  styleUrls: ['consulta-cep.page.scss']
})
export class ConsultaCepPage {
  cep: string  = '';
  endereco: any;

  constructor(private viaCepService: ViaCepService) {}

  consultarCep() {
    this.viaCepService.getEnderecoByCep(this.cep).subscribe((data) => {
      this.endereco = data;
    });
  }
}

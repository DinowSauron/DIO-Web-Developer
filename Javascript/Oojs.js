// Oriented Object Javascript

class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0;
  } 

  get saldo() {
    return this._saldo;
  }
  set saldo(valor){ 
    this._saldo = valor;
  }

  sacar(valor) {
    if(valor > this._saldo) return "Operação negada";
    
    this._saldo = this._saldo - valor;

    return `Novo saldo: ${this._saldo}`;
  }

  depositar(valor) {
    this._saldo = this._saldo + valor;
    
    return `Novo saldo: ${this._saldo}`;
  }
}

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo = "corrente";
    this._cartaoCredito = cartaoCredito
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }
  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }
}


class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "poupanca";
  }
}


class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo = "Universitaria";
  }

  sacar(valor){
    if(valor > 500 || valor > this._saldo) return "Operação negada";

    this._saldo = this._saldo - valor;
  }
}


// https://prnt.sc/yjvsY77em1vk example of use
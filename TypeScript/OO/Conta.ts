import { Pessoa } from "./Pessoa";

export class Conta {
    protected titular: Pessoa;
    protected saldo: number;

    constructor(titular: Pessoa, saldo: number) {
        this.titular = titular;
        this.saldo = saldo;
    }

    public depositar(valor: number): void {
        if (valor <=0) throw new Error("Valor de depósito deve ser positivo");
        this.saldo += valor;
    }

    public sacar(valor: number): void {
        if (valor <=0) throw new Error("Valor de saque deve ser positivo");
        if (this.saldo < valor) throw new Error("Saldo insuficiente");
        this.saldo -= valor;
    }

    public exibirDados(): string {
        return `Titular: ${this.titular.getNome()}, Saldo: ${this.saldo}`;
    }
}

export class Poupanca extends Conta{
    private taxaRendimento: number;

    constructor(titular: Pessoa, saldo: number, taxaRendimento: number) {
        super(titular, saldo);
        this.taxaRendimento = taxaRendimento;
    }

    public aplicarRendimento(): void {
        this.saldo += this.saldo * this.taxaRendimento / 100;
    }

    public override exibirDados(): string {
        return `${super.exibirDados()}, Tipo: Poupança, Taxa de Rendimento: ${this.taxaRendimento}%`;
    }
}

export class Corrente extends Conta{
    private limiteChequeEspecial: number;

    constructor(titular: Pessoa, saldo: number, limiteChequeEspecial: number) {
        super(titular, saldo);
        this.limiteChequeEspecial = limiteChequeEspecial;
    }

    public sacar(valor: number): void {
        if (valor <=0) throw new Error("Valor de saque deve ser positivo");
        if (this.saldo + this.limiteChequeEspecial < valor) throw new Error("Saldo insuficiente");
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
        else {
            this.limiteChequeEspecial -= (valor - this.saldo);
            this.saldo = 0;
        }
    }

    public override exibirDados(): string {
        return `${super.exibirDados()}, Tipo: Corrente, Limite Cheque Especial: ${this.limiteChequeEspecial}`;
    }
}
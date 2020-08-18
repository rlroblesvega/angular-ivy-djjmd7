export class Fields {

  constructor(
    public originCurrency: string,
    public destinationCurrency: string,
    public amount: number,
    public amountChanged: number
  ) {  }

}
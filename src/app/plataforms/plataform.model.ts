export class Plataform {
  constructor(
    public _id: string,
    public name: string,
    public slug: string,
    public company: string,
    public logo: string,
    public release_date?: Date,
    public createdAt?: Date
  ) { }
}

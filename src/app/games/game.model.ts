
export class Game {
  _id: number;
  name: string;
  artbox: string;
  plataform: { _id: string, name: string };
  slug?: string;

  constructor(id: number, name: string, artbox: string, plataform: { _id: string, name: string },
    slug?: string) {
    this._id = id;
    this.name = name;
    this.artbox = artbox;
    this.plataform = plataform;
    this.slug = slug;
  }
}

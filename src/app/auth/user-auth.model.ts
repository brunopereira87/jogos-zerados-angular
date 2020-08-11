export class UserAuth {
  private role?: string;

  constructor(
    role: string,
    public _id: string,
    public email: string,
    private _token: string,
    private _tokenExpiration
  ) {
    this.role = role;
  }

  get token() {
    if (!this._tokenExpiration || new Date() > this._tokenExpiration)
      return null;

    return this._token;
  }
}

export class User {
    email: string;
    password: string;
    nickname: string;
    fullname: string;
    birthdate: string;
    image: string;
    applicantcode: number;
    
    constructor(email: string, password: string, nickname: string, fullname: string, birthdate: string, image: string, applicantcode: number) {
      this.email = email;
      this.password = password;
      this.nickname = nickname;
      this.fullname = fullname;
      this.birthdate = birthdate;
      this.image = image;
      this.applicantcode = applicantcode;
    }
}
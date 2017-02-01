//dto with relation tracking for schools. This is bloody complicated thanks to the orginal paper process
export class School {

  name: string;
  opposing: School[];
  aligned: School[];
  nuetral: School[];

  constructor(name: string){
    this.name = name;
  }
}

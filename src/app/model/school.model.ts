//dto with relation tracking for schools. This is bloody complicated thanks to the orginal paper process
export class School {

  name: string;
  opposing: School[] = new Array<School>();
  aligned: School[] = new Array<School>();
  nuetral: School[] = new Array<School>();

  constructor(name: string){
    this.name = name;
  }
}

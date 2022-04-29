import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccserveService {

  constructor() { }
  accounts() {
    return [
      {
        account:'BDO Account',
        accnum:'PeaceUnite Organization (0015482937)'
      },
      {
        account:'BPI Account',
        accnum:'PeaceUnite Organization (0741599426)'
      },
      {
        account:'Paymaya Account',
        accnum:'PeaceUnite Organization (09525543625)'
      },
      {
        account:'Gcash Account',
        accnum:'PeaceUnite Organization (09525543625)'
      }
    ]
  }
}

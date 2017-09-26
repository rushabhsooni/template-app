import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trades',
  host: { class: 'grid-element main' },
  templateUrl: './trades.component.html',
  styleUrls: ['./trades.component.css']
})
export class TradesComponent implements OnInit {

  title = 'Trades Component';
  trades: Trade[];

  constructor() { 
  }

  ngOnInit() {


    this.trades = this.getTrades();
  }

  getTrades(): Trade[]{

    const trade1 = new Trade();
    trade1.type = TradeType.LimitBuy;
    trade1.openedDate = new Date();
    trade1.closedDate = new Date();
    trade1.bidAsk = 0.00514799;
    trade1.unitsFilled = 23.55976148;
    trade1.unitsTotal = 23.55976148;
    trade1.acutalRate = 0.00514004;
    trade1.costOverProceeds = -0.12140109;

    const trade2 = new Trade();
    trade2.type = TradeType.LimitBuy;
    trade2.openedDate = new Date();
    trade2.closedDate = new Date();
    trade2.bidAsk = 0.00514799;
    trade2.unitsFilled = 23.55976148;
    trade2.unitsTotal = 23.55976148;
    trade2.acutalRate = 0.00514004;
    trade2.costOverProceeds = -0.12140109;

    return [
      trade1,
      trade2
    ];
  }
}

class Trade {

  id: number;
  type: TradeType;
  openedDate: Date;
  closedDate: Date;
  bidAsk: number;
  unitsFilled: number;
  unitsTotal: number;
  acutalRate: number;
  costOverProceeds: number;

  constructor(){

  }
}

enum TradeType {
  LimitBuy
}
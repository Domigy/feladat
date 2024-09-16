import { Controller, Get, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { quotes } from './quotes';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  getHello() {
    return {
      message: this.appService.getHello()
    };
  }
  @Get('/quotes')
  @Render('idezetek')
  getQuotes(){
    return{
      quotes: quotes.quotes
    };
  }
  @Get('/randomQuote')
  @Render('random')
  randomQuotes(){
    return{
      quoteRandom: quotes.quotes[ Math.floor(Math.random()*(quotes.quotes.length)+1)]
      
    };
  }
  @Get('/topAuthors')
  @Render('top')
  topQuotes(){
    return{
      
      quoteRandom: quotes.quotes[ Math.floor(Math.random()*(quotes.quotes.length)+1)]
    };
  }
}

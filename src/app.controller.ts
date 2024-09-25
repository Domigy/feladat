import { Controller, Get, Param, Query, Render, Res } from '@nestjs/common';
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
    let irok=[];
    quotes.quotes.forEach(element => {
      irok.push(element.author);
    });
    return{
      irok: irok
      
    };
  }
  @Get('quotes/:id')
  @Render('Idezet')
  oneQuote(@Param('id') id: string) {
  return{
    message: quotes.quotes[parseInt(id)+1].quote,
  }
}
  @Get('deleteQuote/:id')
  @Render('Idezet')
  deleteQuote(@Param('id') id: string) {
    if(typeof quotes.quotes[parseInt(id)-1]!='undefined'){
      quotes.quotes.splice(parseInt(id)-1,1);
      return { message: "Sikeres törlés!"
      }
      }
      else return { message: "Sikertelen törlés!"
      }
  }
  @Get('kereses')
  @Render('kereset')
  kereses(@Query('search') search: string){
      return{
        szovegek: quotes.quotes.filter(k=>k.quote.toLowerCase().includes(search.toLowerCase()))
      }
    }
}

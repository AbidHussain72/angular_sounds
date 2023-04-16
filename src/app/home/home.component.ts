import { Component, OnInit } from '@angular/core';
import { CommanService } from '../comman.service';
import { DatePipe } from '@angular/common';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{
  location:any;
  currentDate:any;
  currentDateByName:any;
  
  constructor (private commonService:CommanService,public datepipe: DatePipe){}
  ngOnInit(){
    this.commonService.getLocation().subscribe((response)=>{
      console.log(response)
      this.location = response;
    })
    setInterval(()=>{
     this.currentDate = this.datepipe.transform((new Date), 'h:mm:ss')
    },1000)
     this.currentDateByName =  new Date().toLocaleDateString('en-us', {weekday:'long', month:'long',day:'numeric'})

  }
  
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [interactionPlugin, dayGridPlugin],
    selectable: true,
    events: [
      { title: 'Shabi e-qader', date: '2023-04-15' },
      { title: 'event 2', date: '2019-04-02' }
    ],
    eventClick: this.handleDateClick.bind(this),
    
  }
  
   handleDateClick(arg:any) {
    alert('date click! ' + arg.event.title);
  }
  
}

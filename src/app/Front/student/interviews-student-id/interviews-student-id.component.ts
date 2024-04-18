import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'; // Import timeGridPlugin
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
 
import { InterviewServiceService } from 'src/app/Service/interview-service.service';

@Component({
  selector: 'app-interviews-student-id',
  templateUrl: './interviews-student-id.component.html',
  styleUrls: ['./interviews-student-id.component.css']
})
export class InterviewsStudentIdComponent  implements OnInit{
  interviews!:any; 
  interview!:any;
  isModalOpen = false;
  selectedEvent: any;
  closeModal() {
    this.isModalOpen = false;
    // Clear selected event details if needed
    this.selectedEvent = null;
  }
 
  constructor( private interviewservice: InterviewServiceService) { }

  ngOnInit(): void {

    this.interviewservice.getInterviewsStudentId().subscribe(
      interviews => {
        this.interviews = interviews;
        this.calendarOptions.events = this.getInterviewsStudentId();
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin],
    events: [],
    eventClick: this.handleEventClick.bind(this),
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek' 
    },
 
    
  };
  
 
  private getInterviewsStudentId(): any[] {
    return this.interviews.map((interview: any) => {
      return {
        title: interview.description,
        start: interview.date,
      
      };
    });
  }
  handleEventClick(clickInfo: any) {
   
    const event = clickInfo.event;
    console.log('Clicked event:', event);
  
    const { title, start } = event.extendedProps;
  
    
    this.selectedEvent = {
      title: title,
      start: start,
      
    };
  
  
    this.isModalOpen = true;
  }
  
}


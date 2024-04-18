import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid'; // Import timeGridPlugin
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { FormControl } from '@angular/forms';

import { InterviewServiceService } from 'src/app/Service/interview-service.service';

@Component({
  selector: 'app-afficher-interview',
  templateUrl: './afficher-interview.component.html',
  styleUrls: ['./afficher-interview.component.css']
})
export class AfficherInterviewComponent implements OnInit {
  interviewForm!: FormGroup;
  interviews!: any; 
  interview!: any;
  isModalOpen = false;

  selectedEvent: any;
  constructor(private formBuilder: FormBuilder, private interviewservice: InterviewServiceService) {}
  closeModal() {
    this.isModalOpen = false;
    // Clear selected event details if needed
    this.selectedEvent = null;
  }
  ngOnInit(): void {
    this.interviewForm = this.formBuilder.group({
      description: ['', Validators.required],
      local: ['', Validators.required],
      date: new FormControl('', Validators.required),
      studentId: ['', Validators.required],
      idCompany: ['', Validators.required],
      salleId: ['', Validators.required]
    });

    this.interviewservice.getInterviews().subscribe(
      interviews => {
        this.interviews = interviews;
        this.calendarOptions.events = this.getInterviewEvents();
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
  


  

  onSubmit() {
    if (this.interviewForm.valid) {
      this.interviewservice.addInterview(this.interviewForm.value).subscribe(
        (res: any) => {
          alert("Interview added successfully'");
        }, (error: any) => {
          console.log(error);
        }
      );
    } else {
    }
  }

  private getInterviewEvents(): any[] {
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

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SalleServiceService } from 'src/app/Service/salle-service.service';
@Component({
  selector: 'app-add-salle',
  templateUrl: './add-salle.component.html',
  styleUrls: ['./add-salle.component.css','../../../../assets/assetsB/css/stylecd4e.css']
})
export class AddSalleComponent implements OnInit  {
    form!: FormGroup;
    rooms!:any;
  
    constructor(private formBuilder: FormBuilder , private salleService: SalleServiceService) { }
   
    ngOnInit(): void {
      this.fetchRooms();
      this.form = this.formBuilder.group({
      
        code: ['', Validators.required],
        block: ['', Validators.required]
      });
    }
    fetchRooms() {
      this.salleService.fetchRooms().subscribe(rooms => {
        this.rooms = rooms;
      });
    }
  
    onSubmit() {
      if (this.form.valid) {
      
      
          this.salleService.addSalle(this.form.value).subscribe(
            (res: any) => {
              alert("Salle added successfully'")
              this.form.reset();
              this.fetchRooms();
          
            },
            (error:any) => {
              console.log(error);
             
            }
          );
        } else {
        }
    }
}
  
  


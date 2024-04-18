import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SalleServiceService } from 'src/app/Service/salle-service.service';

@Component({
  selector: 'app-details-salle',
  templateUrl: './details-salle.component.html',
  styleUrls: ['./details-salle.component.css']
})

export class DetailsSalleComponent implements OnInit {
  form!: FormGroup;
  room!:any;
  id!:number; 
  
  constructor(private formBuilder: FormBuilder ,
     private route: ActivatedRoute, 
     private salleService: SalleServiceService,
      private router: Router) { }
      ngOnInit(): void {
        this.form = this.formBuilder.group({
          code: ['', Validators.required],
          block: ['', Validators.required]
        });
      
        this.route.params.subscribe(params => {
          this.id = this.route.snapshot.params['id'];
        }); 
          this.getSalle(this.id);
       
      }
      
  
        getSalle(id: number): void {
          this.salleService.getSalle(id).subscribe(
            (res: any) => {
              this.room = res;
              console.log('Room details:', this.room);
            },
            (error: any) => {
              console.log(error);
            }
          );
        }
        
  onSubmit() {
    if (this.form.valid) {
    
        this.salleService.modifySalle(this.id,this.form.value).subscribe(
          (res: any) => {
            alert("Salle modified successfully'")
            this.form.reset();
            this.router.navigate(['/app-add-salle']);
        
          },
          (error:any) => {
            console.log(error);
           
          }
        );
      } else {
      }
    }
    
  deleteroom(id:any){
    this.salleService.deleteroom(id).subscribe(
      (res: any) => {
        alert("Salle deleted successfully")
        this.router.navigate(['/app-add-salle']);
      },
      (error: any)=> {
        console.log(error);
      }
    
    );
    
  }

}

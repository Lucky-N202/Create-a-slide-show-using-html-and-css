import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  tutorial: Tutorial = 
  {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService, private toastr: ToastrService, private router:Router) { }

  ngOnInit(): void {
  }

  saveTutorial(): void
  {
    const data = 
    {
      title: this.tutorial.title,
      description: this.tutorial.description
    };
   if(data.title=="" || data.description=="")
   {
    this.toastr.error("Cannot be empty");
    this.router.navigate(['/add']);
    
   }else{
    this.tutorialService.create(data)
    .subscribe(
      {
        next: (res) =>
        {
          console.log(res);
          this.submitted = true;
          this.toastr.success("Details successfully created");
          
        },
        error: (e) => console.error(e)
      }
    );
   }
  }

  // newTutorial(): void
  // {
  //   this.submitted = false;
  //   this.tutorial = 
  //   {
  //     title: '',
  //     description: '',
  //     published: false
  //   };
  // }
}

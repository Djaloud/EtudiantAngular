import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.css']
})
export class AddEtudiantComponent implements OnInit {

  public host:string="https://localhost:44346/Etudiant";
   public etudiant:any;
  constructor(private http: HttpClient,private route:Router) { }

  ngOnInit(): void {
  }

   OnSaveEtudiant(value:any){
        this.http.post(this.host,value)
        .subscribe(res=>{
        this.route.navigateByUrl("/etudiant");
          },err=>{
                console.log(err);
           })
      }

    affiche() {
          this.http.get(this.host)
                  .subscribe(res=>{
                       this.etudiant=res;
                     },err=>{
                   console.log(err);
                    })
         }



}

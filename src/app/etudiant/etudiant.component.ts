import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  public etudiant:any;
  public host:string="https://localhost:44346/Etudiant";
  constructor(private http: HttpClient,private route:Router) { }

  ngOnInit(): void {
      this.affiche();
  }


  affiche() {
      this.http.get(this.host)
              .subscribe(res=>{
                   this.etudiant=res;
                 },err=>{
               console.log(err);
                })
     }

  OnDelete(p:any){
    let conf=confirm("Etes vous sure de supprimer "+p.prenom+" ?");
    if(conf){
       this.http.delete(this.host+"/"+p.id_etudiant)
       .subscribe(res=>{
             this.affiche();
               },err=>{
                    console.log(err);
                })
           }

    }


    OnSaveEtudiant(value:any){
      this.http.post(this.host,value)
      .subscribe(res=>{
       this.affiche();
        },err=>{
              console.log(err);
         })
    }

}

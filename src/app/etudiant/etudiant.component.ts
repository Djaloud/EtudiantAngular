import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import { ViewChild } from '@angular/core';
@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {
  public etudiant:any;
  public nom:any;
  public prenom:any;
  public cne:any;
  public id_etudiant:any;
  @ViewChild('closebutton') closebutton:any;

  public host:string="https://localhost:44346/Etudiant";
  constructor(private http: HttpClient,private route:Router) { }

  ngOnInit(): void {
      this.affiche();
  }

  public onSave() {
     this.closebutton.nativeElement.click();
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
        open(p:any) {
            this.cne=p.cne;
            this.nom=p.nom;
            this.prenom=p.prenom;
            this.id_etudiant=p.id_etudiant;
          }

     onUpdate(p:any):void{
      this.http.put(this.host,p)
              .subscribe(res=>{
              this.affiche();
                },err=>{
                      console.log(err);
                 })

          }


}

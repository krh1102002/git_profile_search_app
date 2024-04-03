import { GithubService } from './../../Services/github.service';
import { Component,OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-git-hub-app',
  templateUrl: './git-hub-app.component.html',
  styleUrls: ['./git-hub-app.component.css']
})
export class GitHubAppComponent implements OnInit{
public githubUserQuery:string;
public githubProfile:any;
public errorMessage:string;
constructor(private GithubService:GithubService,private toastr: ToastrService){}

public searchUser(){
 if(this.githubUserQuery===undefined || this.githubUserQuery==''){
  this.toastr.error("Please input userName")
  return;
 }
 this.toastr.success("User Found Successfully");
  //for the github profile

  
  
   
this.GithubService.getProfile(this.githubUserQuery).subscribe({
  next:(data)=>this.githubProfile=data,
error:(error)=>this.errorMessage=error
}

);
this.githubUserQuery='';
}
  ngOnInit(): void {
   
  }

}

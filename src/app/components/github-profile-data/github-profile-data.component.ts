import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-github-profile-data',
  templateUrl: './github-profile-data.component.html',
  styleUrls: ['./github-profile-data.component.css']
})
export class GithubProfileDataComponent implements OnInit{
 
 @Input() githubProfile:any;
 ngOnInit(): void {
  throw new Error('Method not implemented.');
}
}

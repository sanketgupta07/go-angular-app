import { gituser } from './../model/gituser';
import { GitUserService } from './git-user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git-user',
  templateUrl: './git-user.component.html',
  styleUrls: ['./git-user.component.css']
})
export class GitUserComponent implements OnInit {

  gitUser: gituser = null;
  constructor(private service: GitUserService) { }

  ngOnInit(): void {
    const name = 'octocat';
    this.service.getUser(name).subscribe((user: gituser) => {
      this.gitUser = user;
      console.log(this.gitUser.login);
    });
  }

}

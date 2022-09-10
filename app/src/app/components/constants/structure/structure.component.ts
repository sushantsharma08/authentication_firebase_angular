import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.scss']
})
export class StructureComponent implements OnInit {

  constructor(private auth:AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout().subscribe(() => {
      this.router.navigate(['']);
    });
  }

}

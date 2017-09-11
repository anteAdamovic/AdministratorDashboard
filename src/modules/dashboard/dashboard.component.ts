import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserContextService } from '../../app/services/user-context.service';

@Component({
    selector: 'dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardComponent {

    constructor(private userContextService: UserContextService, private router: Router) {
        if (!this.userContextService.getLoginStatus()) {
            this.router.navigate(['login']);
        }
    }

    public isActive(page: string): boolean {
        // console.log('Is active ', page, this.router.url, this.router.url.endsWith(page));
        return this.router.url.endsWith(page);
    }
}
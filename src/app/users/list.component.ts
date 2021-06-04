import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services';
import { AddEditComponent } from './add-edit.component';
@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users: any;

    constructor(
        private userService: UserService,
        private viewContainerRef: ViewContainerRef,
        private cfr: ComponentFactoryResolver) 
    {}

    ngOnInit() {
        this.userService.getAll()
            .subscribe(user => this.users = user);
    }

    deleteUser(id: number) {
        const user = this.users.find(x => x.Id === id);
        user.isDeleting = true;
        this.userService.delete(id)
            .subscribe(() => this.users = this.users.filter(x => x.Id !== id));
    }
}
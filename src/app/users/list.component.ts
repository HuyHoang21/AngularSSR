import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services';
import { AddEditComponent } from './add-edit.component';
import { User } from '../_models/user';
@Component({ templateUrl: 'list.component.html' })
export class ListComponent implements OnInit {
    users: User[] = [];
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
        this.users = this.users.filter(h => h.id !== id);
        this.userService.delete(id).subscribe();
        //const user = this.users.find(x => x.Id === id);
    }
}
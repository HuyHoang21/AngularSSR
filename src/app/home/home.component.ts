import { Component, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent { 
    constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  async getLazy1() {
    this.viewContainerRef.clear();
    const { ListComponent } = await import('../users/list.component');
    this.viewContainerRef.createComponent(
      this.cfr.resolveComponentFactory(ListComponent)
    );
  }
}
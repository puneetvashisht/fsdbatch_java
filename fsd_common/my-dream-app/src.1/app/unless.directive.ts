import { Component, OnInit, Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
    selector: '[appUnless]',  
})
export class UnlessDirective implements OnInit {

    constructor(public templateRef: TemplateRef<any>, public vcRef: ViewContainerRef) { }

    ngOnInit() { 

    }

    
    @Input() set appUnless(condition: boolean) { 
        console.log(condition);
        if(!condition){
            this.vcRef.createEmbeddedView(this.templateRef)
        }
        else{
            this.vcRef.clear();
        }
    }

}
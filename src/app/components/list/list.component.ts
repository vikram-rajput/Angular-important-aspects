import { Component, OnInit } from '@angular/core';
import { ListService } from './../../services/list.service';


@Component({
    selector:'my-list',
    templateUrl:'./list.component.html'
})

export class ListComponent implements OnInit{
    message: any;
    constructor(public testvar : ListService){}
    ngOnInit(){
        this.message = this.testvar.testExample();
    }
}
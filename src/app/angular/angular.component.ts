import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {TodoVO} from '../domain/todo.vo';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
})
export class AngularComponent implements OnInit {
   todoList: TodoVO[];
   newTodo = new TodoVO();

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getTodoList()
      .subscribe(body => {
        this.todoList = body;
        console.log(this.todoList);
      });
  }

  addTodo(){
    console.log('click');

    this.userService.addTodo(this.newTodo)
      .then((data: TodoVO)=>{
        console.log(data);
        this.todoList.unshift(data);
      });

    this.newTodo = new TodoVO();
  }

}

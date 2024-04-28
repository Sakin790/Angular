import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { NgFor } from '@angular/common';



@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  todos: any[] = [];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }
}

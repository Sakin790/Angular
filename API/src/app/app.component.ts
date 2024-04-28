import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { TodoService } from '../services/todo.service';



@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
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

import { CommonModule } from '@angular/common';
import { httpResource } from '@angular/common/http';
import { Component, resource, ResourceStreamItem, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookCard } from './components/book-card/book-card';
import { Book } from './models/book';
import { SearchBox } from './components/search-box/search-box';
import { BooksList } from "./components/books-list/books-list";
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, BookCard, SearchBox, BooksList, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
}

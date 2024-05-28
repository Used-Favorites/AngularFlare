import { Component } from "@angular/core";
import { AppComponent } from "../../app.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [AppComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {}

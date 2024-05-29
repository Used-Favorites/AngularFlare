import { Component } from "@angular/core";
import { AppComponent } from "../../app.component";
import { ButtonDefaultComponent } from "../../components/button-default/button-default.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [AppComponent, ButtonDefaultComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {}

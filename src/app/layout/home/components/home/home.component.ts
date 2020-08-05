import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public carouselOptions: any;
  public about: any;
  public activities: any;
  public gallery: any;

  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit(): void {

    // Change Language with Stream after loading.
    this.translate.stream('MainCarousel').subscribe((res) => {
      this.carouselOptions = res;
    });

    // About
    this.translate.stream('About').subscribe((res) => {
      this.about = res;
    });

    // Activities
    this.translate.stream('Activities').subscribe((res) => {
      this.activities = res;
    });

    // Gallery
    this.translate.stream('Gallery').subscribe((res) => {
      this.gallery = res;
    });

  }

}
